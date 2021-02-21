import { ConverterService } from './../converter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main2',
  templateUrl: './main2.component.html',
  styleUrls: ['./main2.component.css']
})
export class Main2Component implements OnInit {
  decodedMsg:string;
  methodChoice:number=0;
  constructor(private converterService: ConverterService) { }

  ngOnInit(): void {
  }

  changeMethod(){
    
    this.methodChoice=parseInt((document.querySelector("#methodSelect") as HTMLInputElement).value);
    this.converterService.changeMethod(this.methodChoice);
    console.log("Selected method: "+ this.methodChoice); // For debugging.
  }


  sendToCryptographer() {
    this.converterService.clear();
    this.decodedMsg = this.converterService.encrypterD((document.querySelector('#msgToDecode') as HTMLInputElement).value);
  }

  clear() {
    this.decodedMsg = '';
    this.converterService.clear();
    (document.querySelector('#msgToDecode') as HTMLInputElement).value = '';
  }

  copy() {
    const textArea = document.createElement('textarea');
    textArea.setAttribute('readonly', '');
    textArea.style.position = 'absolute';
    textArea.value = this.decodedMsg;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }

}
