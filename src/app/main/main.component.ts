import { ConverterService } from './../converter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  encodedMsg: string;
  constructor(private converterService: ConverterService) { }
  methodChoice:number=0;
  ngOnInit(): void {}


  changeMethod(){
    
    this.methodChoice=parseInt((document.querySelector("#methodSelect") as HTMLInputElement).value);
    this.converterService.changeMethod(this.methodChoice);
    console.log("Selected method: "+ this.methodChoice); // For debugging.
  }
  sendToCryptographer() {
    this.converterService.clear();
    if(this.methodChoice===3){// Morse Code 
      console.log("Selected method: "+ this.methodChoice + " Morse Code"); // For debugging.
      this.encodedMsg = this.converterService.encrypterE(((document.querySelector('#msgToEncode') as HTMLInputElement).value).toUpperCase());
    }
    else
      this.encodedMsg = this.converterService.encrypterE(((document.querySelector('#msgToEncode') as HTMLInputElement).value));//NOT UPPER CASE ALL FUNCTIONS
  }

  clear() {
    this.encodedMsg = '';
    this.converterService.clear();
    (document.querySelector('#msgToEncode') as HTMLInputElement).value = '';
  }

  copy() {
    const textArea = document.createElement('textarea');
    textArea.setAttribute('readonly', '');
    textArea.style.position = 'absolute';
    textArea.value = this.encodedMsg;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }

}
