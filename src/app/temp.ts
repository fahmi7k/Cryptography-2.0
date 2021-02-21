//   encrypterD(msgToDecode: string): string {
//     let tempLetter: string = '';
//   let i = 0;
//   for (; i < msgToDecode.length; i++) {
//     switch (msgToDecode[i]) {
//       case ' ':
//         this.decodedMsg += ' ';
//         continue;
//       case '.':
//           this.decodedMsg += '.';
//           continue;
//         case ',':
//           this.decodedMsg += ',';
//           continue;
//         case '-':
//           this.decodedMsg += '-';
//           continue;
//         case '\'':
//           this.decodedMsg += '\'';
//           continue;
//         case '+':
//           this.decodedMsg += '+';
//           continue;
//         case '\"':
//           this.decodedMsg += '\"';
//           continue;
//         case '?':
//           this.decodedMsg += '?';
//           continue;
//         case '!':
//           this.decodedMsg += '!';
//           continue;
//         case '@':
//           this.decodedMsg += '@';
//           continue;
//         case '#':
//           this.decodedMsg += '#';
//           continue;
//         case '$':
//           this.decodedMsg += '$';
//           continue;
//         case '%':
//           this.decodedMsg += '%';
//           continue;
//         case '^':
//           this.decodedMsg += '^';
//           continue;
//         case '&':
//           this.decodedMsg += '&';
//           continue;
//         case '*':
//           this.decodedMsg += '*';
//           continue;
//         case '(':
//           this.decodedMsg += '(';
//           continue;
//         case ')':
//           this.decodedMsg += ')';
//           continue;
//         case '=':
//           this.decodedMsg += '=';
//           continue;
//         case '`':
//           this.decodedMsg += '`';
//           continue;
//         case '~':
//           this.decodedMsg += '~';
//           continue;
//         case ':':
//           this.decodedMsg += ':';
//           continue;
//         case ';':
//           this.decodedMsg += ';';
//           continue;
//         case '|':
//           this.decodedMsg += '|';
//           continue;
//         case '{':
//           this.decodedMsg += '{';
//           continue;
//         case '}':
//           this.decodedMsg += '}';
//           continue;
//         case '/':
//           this.decodedMsg += '/';
//           continue;
//         case '/':
//           this.decodedMsg += '/';
//           continue;
//       }
//       while (parseInt(msgToDecode[i]) > 1) {
//         tempLetter += msgToDecode[i];
//         i++;
//       }
//       tempLetter += msgToDecode[i];
//       this.decodedMsg += oldPhoneTechniqueReverse[tempLetter];
//       tempLetter = '';
//     }
//     return this.decodedMsg;
//   }



//   encrypterE(msgToEncode: string): string {
//     for (let current of msgToEncode) {
//       switch (current) {
//         case ' ':
//           this.encodedMsg += ' ';
//           continue;
//         case '.':
//           this.encodedMsg += '.';
//           continue;
//         case '-':
//           this.encodedMsg += '-';
//           continue;
//         case ',':
//           this.encodedMsg += ',';
//           continue;
//         case '\'':
//           this.encodedMsg += '\'';
//           continue;
//         case '+':
//           this.encodedMsg += '+';
//           continue;
//         case '\"':
//           this.encodedMsg += '\"';
//           continue;
//         case '?':
//           this.encodedMsg += '?';
//           continue;
//         case '!':
//           this.encodedMsg += '!';
//           continue;
//         case '@':
//           this.encodedMsg += '@';
//           continue;
//         case '#':
//           this.encodedMsg += '#';
//           continue;
//         case '$':
//           this.encodedMsg += '$';
//           continue;
//         case '%':
//           this.encodedMsg += '%';
//           continue;
//         case '^':
//           this.encodedMsg += '^';
//           continue;
//         case '&':
//           this.encodedMsg += '&';
//           continue;
//         case '*':
//           this.encodedMsg += '*';
//           continue;
//         case '(':
//           this.encodedMsg += '(';
//           continue;
//         case ')':
//           this.encodedMsg += ')';
//           continue;
//         case '=':
//           this.encodedMsg += '=';
//           continue;
//         case '`':
//           this.encodedMsg += '`';
//           continue;
//         case '~':
//           this.encodedMsg += '~';
//           continue;
//         case ':':
//           this.encodedMsg += ':';
//           continue;
//         case ';':
//           this.encodedMsg += ';';
//           continue;
//         case '|':
//           this.encodedMsg += '|';
//           continue;
//         case '{':
//           this.encodedMsg += '{';
//           continue;
//         case '}':
//           this.encodedMsg += '}';
//           continue;
//         case '/':
//           this.encodedMsg += '/';
//           continue;
//         case '/':
//           this.encodedMsg += '/';
//           continue;
//       }
//       this.encodedMsg += oldPhoneTechnique[current];
//     }
//     return this.encodedMsg;
//   }




// if(current===' '){
//     this.encodedMsg+='//';
//     continue;
//  }