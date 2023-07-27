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
  excelLoadData: any = null;
  excelExportData: any = null;
  dataDisplay: ViewAttribute[] =[];

 
  
  displayedColumns: string[] = ['position', 'kalimat', 'aspect', 'opinion','true_tupple','sentiment','meta_aspect','meta_opinion'];


  

  constructor() {
    this.selectedFile = null;
    this.fileName = '';
  }


 

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
  
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0];
      this.fileName = this.selectedFile.name;
      
  
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        this.excelLoadData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        if (this.excelLoadData[0].length != 2 || this.excelLoadData[0][0] !== undefined || this.excelLoadData[0][1] != "tweet"){
          this.isInvalid = true;
          return;
        };
        const url = "http://localhost:8000/api/receive_json/";
  
        try {
          // Kirim data ke backend
          axios.post(url, this.excelLoadData).then(response => {
            console.log(1);
  
            // Mendapatkan respons JSON dari backend
            const responseData = response.data;
  
            // Cetak respons JSON di console log
            console.log({x:"Sukses"});
            this.excelLoadData = responseData

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
            console.log(this.dataDisplay)
            this.isValid = true;
            this.isInvalid = false;
            
          });
        } catch {
          console.log(666);
        }
  
        // ...
      };
  
      reader.readAsArrayBuffer(this.selectedFile);
    }
  }

  

   async downloadFile(event : Event) {
    // get data using axios
    console.log(1111111111)
    let results = await axios({
       url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4gbghQxKQ00p3xIvyMBXBgGmChzLSh1VQId1oyhYrgir1bkn812dc1LwOgnajgWd-Yo&usqp=CAU',
       method: 'GET',
       responseType: 'blob'
    })
    let hidden_a = document.createElement('a');
    hidden_a.href = window.URL.createObjectURL(new Blob([results.data]));
    hidden_a.setAttribute('download', 'download_image.jpg');
    document.body.appendChild(hidden_a);
    hidden_a.click();
    console.log(1111111111)
 }
}