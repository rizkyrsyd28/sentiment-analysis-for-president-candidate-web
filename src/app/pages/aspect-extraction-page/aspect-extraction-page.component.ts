import { Component } from '@angular/core';
import { asyncScheduler, empty } from 'rxjs';
import * as XLSX from 'xlsx';
import axios from 'axios';
import { ViewAttribute } from 'src/app/interface/attribute';


// Please uncomment later
interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
//

@Component({
  selector: 'app-aspect-extraction-page',
  templateUrl: './aspect-extraction-page.component.html',
  styleUrls: ['./aspect-extraction-page.component.css'],
  
})


export class AspectExtractionPageComponent {
  
  
  
  selectedFile: File | null = null;
  fileName: String = '';
  isValid: boolean = false;
  isInvalid: boolean = false;
  excelLoadData: any[] = [];
  excelExportData: any = null;
  dataDisplay: ViewAttribute[] =[];

 
  
  displayedColumns: string[] = ['position', 'kalimat', 'aspect', 'opinion','true_tupple','sentiment','meta_aspect','meta_opinion'];


  

  constructor() {
    this.selectedFile = null;
    this.fileName = '';
  }


  onFolderSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement.files && inputElement.files.length > 0) {
      const files = inputElement.files;
      this.processFiles(files).then(() => {
        this.finishProcessing();
      });
    }
  }

  processFiles(files: FileList): Promise<void[]> {
    const numberOfFiles = files.length;
    let processedFiles = 0;
    const promises: Promise<void>[] = [];

    for (let i = 0; i < numberOfFiles; i++) {
      const file = files[i];
      console.log(file.name);
      const reader = new FileReader();

      const promise = new Promise<void>((resolve, reject) => {
        reader.onload = (e: any) => {
          const data = e.target.result;
          const workbook = XLSX.read(data, { type: 'array' });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
          console.log(excelData)
          this.excelLoadData.push(...excelData);

          if (excelData[0][0] !== undefined || excelData[0][1] !== 'tweet') {
            this.isInvalid = true;
            reject();
          } else {
            resolve();
          }
        };

        reader.readAsArrayBuffer(file);
      });

      promises.push(promise);
    }

    return Promise.all(promises);
  }
  
  finishProcessing() {
    const url = "http://localhost:8000/api/receive_json/";
  
        try {
          // Kirim data ke backend
          axios.post(url, this.excelLoadData).then(response => {
            console.log(1);
  
            // Mendapatkan respons JSON dari backend
            const responseData = response.data;
  
            // Cetak respons JSON di console log
            console.log({x:"Sukses"});
            this.excelExportData = responseData

            for(var i = 0; i < 5; i++){
             var x ={
                position: null,
                kalimat: '',
                aspect: '',
                opinion: '',
                true_tuple: null,
                sentiment: null,
                meta_aspect: '',
                meta_opinion: ''
            }
              x['position'] = i+1;
              x['kalimat'] = responseData[i]['kalimat'];
              x['aspect'] = responseData[i]['aspect'];
              x['opinion'] = responseData[i]['opinion'];
              x['true_tupple'] = responseData[i]['true_tupple'];
              x['sentiment'] = responseData[i]['sentiment'];
              x['meta_aspect'] = JSON.stringify(responseData[i]['meta_aspect']).replace(",",", ");
              x['meta_opinion'] = JSON.stringify(responseData[i]['meta_opinion']).replace(",",", ");
              this.dataDisplay.push(x);
            }
            this.isValid = true;
            this.isInvalid = false;
            
          });
        } catch {
          console.log(666);
        }
  }

  

 

  

  

//     downloadFile() : void {
  
    
//       const filePath = `./assets/${this.fileName}.xlsx`;

//       const link = document.createElement('a');
//       link.href = filePath;
//       link.download = this.fileName + '.xlsx';
//       link.click();
//  }

    downloadFile() : void{
      var exported = this.excelExportData

      exported.map((obj) => {
        if (obj.hasOwnProperty('meta_aspect')) {
          const value = obj['meta_aspect'];
          obj['meta_aspect'] = JSON.stringify(value);
        }
        return obj;
      });

      exported.map((obj) => {
        if (obj.hasOwnProperty('meta_opinion')) {
          const value = obj['meta_opinion'];
          obj['meta_opinion'] = JSON.stringify(value);
        }
        return obj;
      });

      const worksheet = XLSX.utils.json_to_sheet(exported);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');

      const excelFilePath = `./assets/excel/${this.fileName.replace(".xlsx","_graph")}.xlsx`;

      XLSX.writeFile(workbook, excelFilePath);
  }
}