import { Component } from '@angular/core';
import { TableView, ViewAttribute, toViewAttributes} from 'src/app/interface/table-view';
import * as XLSX from 'xlsx';
import axios from 'axios';

@Component({
  selector: 'app-aspect-classification-page',
  templateUrl: './aspect-classification-page.component.html',
  styleUrls: ['./aspect-classification-page.component.css'],
  
})


export class AspectClassificationPageComponent {

    datas: TableView[];
    fileName: String = '';
    isValid: boolean = false;
    isInvalid: boolean = false;
    excelLoadData: any[] = [];

    

    constructor(){
      this.datas = []
    }
    

  onFileSelected(event: Event) {
    this.isInvalid = false;
    console.log({x:"diteken ges"})

    const inputElement = event.target as HTMLInputElement;
  
    if (inputElement.files && inputElement.files.length > 0) {
      let selectedFile = inputElement.files[0];
      this.fileName = selectedFile.name;
      
  
      const reader = new FileReader();
      reader.onload = (e: any) => {

        const data = e.target.result;
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        this.excelLoadData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        if (this.excelLoadData[0].length != 8  || this.excelLoadData[0][0] !== undefined || this.excelLoadData[0][1] != "kalimat"){
          this.isInvalid = true;
          return;
        };

        let dataSend = toViewAttributes(this.excelLoadData)
        console.log({pesan:"sampai!"})
        

        const url = "http://localhost:8000/api/receive_classify_json/";
  
        try {
          // Kirim data ke backend
          axios.post(url, dataSend).then(response => {
            console.log(1);
  
            // Mendapatkan respons JSON dari backend
            const responseData = response.data; //Array of number
  
            // Cetak respons JSON di console log
            console.log({x:"Sukses"});
            
            this.displayDatas(responseData)
            this.isValid = true;
            
          });
        } catch {
          console.log({pesan:"Ngaco lu"});
        }
  
      };
  
      reader.readAsArrayBuffer(selectedFile);
    }
  }

  displayDatas(resp_data: number[]){
    for(let k = 1; k < this.excelLoadData.length; k++){
      this.excelLoadData[k][4] = resp_data[k]
    }

    for(let w = 1; w < 6; w++){
      let x = {
        no: w,
        kalimat: this.excelLoadData[w][1],
        aspek: this.excelLoadData[w][2],
        opini: this.excelLoadData[w][3],
        trueTuple: this.excelLoadData[w][4],
        sentiment: this.excelLoadData[w][5],
        metaAspect: JSON.stringify(this.excelLoadData[w][6]).replace(",",", "),
        metaOpinion: JSON.stringify(this.excelLoadData[w][7]).replace(",",", ")
      }
      this.datas.push(x)
    }
  }

  downloadFile() : void{

      let exported = this.excelLoadData.slice(1)
      exported = exported.map(row => row.filter((_ : any, index : number) => index !== 7));

      const worksheet = XLSX.utils.json_to_sheet(exported);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');

      const excelFilePath = `./assets/excel/${this.fileName.replace(".xlsx","_graph")}.xlsx`;

      XLSX.writeFile(workbook, excelFilePath);
  }
}