import { Component } from '@angular/core';
import { ViewAttribute, toViewAttributes} from 'src/app/interface/attribute';
import * as XLSX from 'xlsx';
import axios from 'axios';

@Component({
  selector: 'app-aspect-classification-page',
  templateUrl: './aspect-classification-page.component.html',
  styleUrls: ['./aspect-classification-page.component.css'],
  
})


export class AspectClassificationPageComponent {

    selectedFile: File | null = null;
    fileName: String = '';
    isValid: boolean = false;
    isInvalid: boolean = false;
    excelLoadData: any[] = [];
    excelExportData: any = null;
    dataDisplay: ViewAttribute[] = null;

  onFileSelected(event: Event) {
    console.log({x:"diteken ges"})

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
        if (this.excelLoadData[0].length != 8  || this.excelLoadData[0][0] !== undefined || this.excelLoadData[0][1] != "kalimat"){
          this.isInvalid = true;
          return;
        };

        this.dataDisplay = toViewAttributes(this.excelLoadData)
        console.log({pesan:"sampai!"})
        

        const url = "http://localhost:8000/api/receive_classify_json/";
  
        try {
          // Kirim data ke backend
          axios.post(url, this.dataDisplay).then(response => {
            console.log(1);
  
            // Mendapatkan respons JSON dari backend
            const responseData = response.data;
  
            // Cetak respons JSON di console log
            console.log({x:"Sukses"});
            console.log(responseData);
            this.excelExportData = responseData
            
          });
        } catch {
          console.log({pesan:"Ngaco lu"});
        }
  
      };
  
      reader.readAsArrayBuffer(this.selectedFile);
    }
  }
}