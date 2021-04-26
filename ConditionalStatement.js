'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter;
    
    // Write your code here
    letter = s.charAt(0);
    switch(letter){
        case 'a'||'e'||'i'||'o'||'u':return 'A';
                                      break;
        case 'b'||'c'||'d'||'f'||'g':return 'B';
                                     break;
        case 'h'||'j'||'k'||'l'||'m':return 'C';
                                     break;
        case 'n'||'p'|'q'|'r'||'s'||'t'||'v'||'w'||'x'||'y'||'z':return 'D';
                                                                 break;
        default:console('Invalid input');
                return 0;
                break;
    }
    
    
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}
