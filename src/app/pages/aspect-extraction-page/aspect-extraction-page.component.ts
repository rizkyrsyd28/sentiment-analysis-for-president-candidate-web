import { Component } from '@angular/core';
import { TableView } from 'src/app/interface/table-view';
import * as XLSX from 'xlsx';
import axios from 'axios';

@Component({
  selector: 'app-aspect-extraction-page',
  templateUrl: './aspect-extraction-page.component.html',
  styleUrls: ['./aspect-extraction-page.component.css'],
})


export class AspectExtractionPageComponent {
  datas: TableView[];
  isValid: boolean = false;
  isInvalid: boolean = false;
  excelLoadData: any[] = [];
  excelExportData: any = null;
  fileName: string = '';

  constructor() {
    this.datas = [];
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
    this.isInvalid = false;
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
          const excelData : any[][] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
          
          if (excelData[0][0] !== undefined || excelData[0][1] != 'tweet') {
            this.isInvalid = true;
            reject();
          } else {
            this.excelLoadData.push(...(excelData.slice(1)));
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
            console.log(this.excelExportData)

            let max = (this.excelExportData < 5 ? this.excelExportData : 5)
            for(let k = 0; k < max; k++){
              let x = {
                  no: k+1,
                  kalimat: this.excelExportData[k]['kalimat'],
                  aspek: this.excelExportData[k]['aspect'],
                  opini: this.excelExportData[k]['opinion'],
                  trueTuple: this.excelExportData[k]['true_tupple'],
                  sentiment: this.excelExportData[k]['sentiment'],
                  metaAspect: JSON.stringify(this.excelExportData[k]['meta_aspect']).replace(",",", "),
                  metaOpinion: JSON.stringify(this.excelExportData[k]['meta_opinion']).replace(",",", ")
                }

              this.datas.push(x);
            }

            
            this.isValid = true;
            this.isInvalid = false;
            
          });
        } catch {
          console.log({x:"ngaco"});
    }
  }

  downloadFile() : void{
      var exported: Array<any> = this.excelExportData

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
