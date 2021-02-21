import { Injectable } from '@angular/core';
import { oldPhoneTechnique, oldPhoneTechniqueReverse, emojiCode, morseCodeReverse, morseCode } from './dataBase';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {
  methodNum: number = 0;
  encodedMsg: string = '';
  decodedMsg: string = '';


  constructor() { }

  changeMethod(methodChoice: number): void {
    this.methodNum = methodChoice;
  }

  encrypterE(msgToEncode: string): string {
    // This if is for Old School Cellphone
    if (this.methodNum === 1) {
      for (let current of msgToEncode) {
        switch (current) {
          case ' ':
            this.encodedMsg += ' ';
            continue;
          case '.':
            this.encodedMsg += '.';
            continue;
          case '-':
            this.encodedMsg += '-';
            continue;
          case ',':
            this.encodedMsg += ',';
            continue;
          case '\'':
            this.encodedMsg += '\'';
            continue;
          case '+':
            this.encodedMsg += '+';
            continue;
          case '\"':
            this.encodedMsg += '\"';
            continue;
          case '?':
            this.encodedMsg += '?';
            continue;
          case '!':
            this.encodedMsg += '!';
            continue;
          case '@':
            this.encodedMsg += '@';
            continue;
          case '#':
            this.encodedMsg += '#';
            continue;
          case '$':
            this.encodedMsg += '$';
            continue;
          case '%':
            this.encodedMsg += '%';
            continue;
          case '^':
            this.encodedMsg += '^';
            continue;
          case '&':
            this.encodedMsg += '&';
            continue;
          case '*':
            this.encodedMsg += '*';
            continue;
          case '(':
            this.encodedMsg += '(';
            continue;
          case ')':
            this.encodedMsg += ')';
            continue;
          case '=':
            this.encodedMsg += '=';
            continue;
          case '`':
            this.encodedMsg += '`';
            continue;
          case '~':
            this.encodedMsg += '~';
            continue;
          case ':':
            this.encodedMsg += ':';
            continue;
          case ';':
            this.encodedMsg += ';';
            continue;
          case '|':
            this.encodedMsg += '|';
            continue;
          case '{':
            this.encodedMsg += '{';
            continue;
          case '}':
            this.encodedMsg += '}';
            continue;
          case '/':
            this.encodedMsg += '/';
            continue;
          case '/':
            this.encodedMsg += '/';
            continue;
        }
        this.encodedMsg += oldPhoneTechnique[current];
      }
    }
    // This if is for Morse Code
    if (this.methodNum === 3) {
      for (let current of msgToEncode) {
        switch (current) {
          case ' ':
            this.encodedMsg += '// ';
            continue;
          case '.':
            this.encodedMsg += 'o-o-o- ';
            continue;

          case ',':
            this.encodedMsg += '--oo-- ';
            continue;
          case '?':
            this.encodedMsg += 'oo--oo ';
            continue;

          case '@':
            this.encodedMsg += 'o--o-o ';
            continue;
          case '/':
            this.encodedMsg += '-oo-o ';
            continue;
          case '1':
            this.encodedMsg += 'o---- ';
            continue;
          case '2':
            this.encodedMsg += 'oo--- ';
            continue;
          case '3':
            this.encodedMsg += 'ooo-- ';
            continue;
          case '4':
            this.encodedMsg += 'oooo- ';
            continue;
          case '5':
            this.encodedMsg += 'ooooo ';
            continue;
          case '6':
            this.encodedMsg += '-oooo ';
            continue;
          case '7':
            this.encodedMsg += '--ooo ';
            continue;
          case '8':
            this.encodedMsg += '---oo ';
            continue;
          case '9':
            this.encodedMsg += '----o ';
            continue;
          case '0':
            this.encodedMsg += '----- ';
            continue;
        }
        this.encodedMsg += morseCode[current];
        this.encodedMsg += " ";

      }
    }
    // This if is for emoji 
    if (this.methodNum === 5) {
      for (let current of msgToEncode) {
        switch (current) {
          case ' ':
            this.encodedMsg += ' ';
            continue;
          case '.':
            this.encodedMsg += '.';
            continue;
          case '-':
            this.encodedMsg += '-';
            continue;
          case ',':
            this.encodedMsg += ',';
            continue;
          case '\'':
            this.encodedMsg += '\'';
            continue;
          case '+':
            this.encodedMsg += '+';
            continue;
          case '\"':
            this.encodedMsg += '\"';
            continue;
          case '?':
            this.encodedMsg += '?';
            continue;
          case '!':
            this.encodedMsg += '!';
            continue;
          case '@':
            this.encodedMsg += '@';
            continue;
          case '#':
            this.encodedMsg += '#';
            continue;
          case '$':
            this.encodedMsg += '$';
            continue;
          case '%':
            this.encodedMsg += '%';
            continue;
          case '^':
            this.encodedMsg += '^';
            continue;
          case '&':
            this.encodedMsg += '&';
            continue;
          case '*':
            this.encodedMsg += '*';
            continue;
          case '(':
            this.encodedMsg += '(';
            continue;
          case ')':
            this.encodedMsg += ')';
            continue;
          case '=':
            this.encodedMsg += '=';
            continue;
          case '`':
            this.encodedMsg += '`';
            continue;
          case '~':
            this.encodedMsg += '~';
            continue;
          case ':':
            this.encodedMsg += ':';
            continue;
          case ';':
            this.encodedMsg += ';';
            continue;
          case '|':
            this.encodedMsg += '|';
            continue;
          case '{':
            this.encodedMsg += '{';
            continue;
          case '}':
            this.encodedMsg += '}';
            continue;
          case '/':
            this.encodedMsg += '/';
            continue;
          case '/':
            this.encodedMsg += '/';
            continue;
        }
        this.encodedMsg += emojiCode[current];
      }
    }
    return this.encodedMsg;
  }

  encrypterD(msgToDecode: string): string {
    // This if is for Old School Cellphone
    if (this.methodNum === 1) {
      let tempLetter: string = '';
      let i = 0;
      for (; i < msgToDecode.length; i++) {
        switch (msgToDecode[i]) {
          case ' ':
            this.decodedMsg += ' ';
            continue;
          case '.':
            this.decodedMsg += '.';
            continue;
          case ',':
            this.decodedMsg += ',';
            continue;
          case '-':
            this.decodedMsg += '-';
            continue;
          case '\'':
            this.decodedMsg += '\'';
            continue;
          case '+':
            this.decodedMsg += '+';
            continue;
          case '\"':
            this.decodedMsg += '\"';
            continue;
          case '?':
            this.decodedMsg += '?';
            continue;
          case '!':
            this.decodedMsg += '!';
            continue;
          case '@':
            this.decodedMsg += '@';
            continue;
          case '#':
            this.decodedMsg += '#';
            continue;
          case '$':
            this.decodedMsg += '$';
            continue;
          case '%':
            this.decodedMsg += '%';
            continue;
          case '^':
            this.decodedMsg += '^';
            continue;
          case '&':
            this.decodedMsg += '&';
            continue;
          case '*':
            this.decodedMsg += '*';
            continue;
          case '(':
            this.decodedMsg += '(';
            continue;
          case ')':
            this.decodedMsg += ')';
            continue;
          case '=':
            this.decodedMsg += '=';
            continue;
          case '`':
            this.decodedMsg += '`';
            continue;
          case '~':
            this.decodedMsg += '~';
            continue;
          case ':':
            this.decodedMsg += ':';
            continue;
          case ';':
            this.decodedMsg += ';';
            continue;
          case '|':
            this.decodedMsg += '|';
            continue;
          case '{':
            this.decodedMsg += '{';
            continue;
          case '}':
            this.decodedMsg += '}';
            continue;
          case '/':
            this.decodedMsg += '/';
            continue;
          case '/':
            this.decodedMsg += '/';
            continue;
        }
        while (parseInt(msgToDecode[i]) > 1) {
          tempLetter += msgToDecode[i];
          i++;
        }
        tempLetter += msgToDecode[i];
        this.decodedMsg += oldPhoneTechniqueReverse[tempLetter];
        tempLetter = '';
      }
    }
    // This if is for Morse code
    if (this.methodNum === 3) {
      let tempLetter: string = '';
      let i = 0;
      for (; i < msgToDecode.length; i++) {
        if (msgToDecode[i] === ' ') {
          continue;
        }

        if (msgToDecode[i] === '/') {
          this.decodedMsg += ' ';
          tempLetter = '';
          continue;
        }
        while ((msgToDecode[i] === 'o' || msgToDecode[i] === '-') && i <= msgToDecode.length) {
          tempLetter += msgToDecode[i];
          i++;
        }
        console.log(tempLetter);
        switch (tempLetter) {
          case 'o-o-o-': {
            this.decodedMsg += '.';
            tempLetter = '';
            continue;
          }

          case '--oo--': {
            this.decodedMsg += ',';
            tempLetter = '';
            continue;
          }
          case 'oo--oo': {
            this.decodedMsg += '?';
            tempLetter = '';
            continue;
          }

          case '-oo-o': {
            this.decodedMsg += '/';
            tempLetter = '';
            continue;
          }

          case 'o--o-o': {
            this.decodedMsg += '@';
            tempLetter = '';
            continue;
          }

          case 'o----': {
            this.decodedMsg += '1';
            tempLetter = '';
            continue;
          }

          case 'oo---': {
            this.decodedMsg += '2';
            tempLetter = '';
            continue;
          }

          case 'ooo--': {
            this.decodedMsg += '3';
            tempLetter = '';
            continue;
          }

          case 'oooo-': {
            this.decodedMsg += '4';
            tempLetter = '';
            continue;
          }

          case 'ooooo': {
            this.decodedMsg += '5';
            tempLetter = '';
            continue;
          }

          case '-oooo': {
            this.decodedMsg += '6';
            tempLetter = '';
            continue;
          }


          case '--ooo': {
            this.decodedMsg += '7';
            tempLetter = '';
            continue;
          }

          case '---oo': {
            this.decodedMsg += '8';
            tempLetter = '';
            continue;
          }

          case '----o': {
            this.decodedMsg += '9';
            tempLetter = '';
            continue;
          }

          case '-----': {
            this.decodedMsg += '0';
            tempLetter = '';
            continue;
          }

        }
        this.decodedMsg += morseCodeReverse[tempLetter];
        tempLetter = '';
      }
    }
    return this.decodedMsg;
  }




  clear() {
    this.encodedMsg = '';
    this.decodedMsg = '';
  }

}
