const transformString = (str) => {
     const length = str.length;
     let transformedString = str;

     const divisibleBy3 = (length % 3 === 0);
     const divisibleBy5 = (length % 5 === 0);

     if(divisibleBy3 && divisibleBy5 ){
          transformedString = transformedString.split('').reverse().join('');
          transformedString = transformedString.split('').map(char => char.charCodeAt(0)).join(' ');
     }else if(divisibleBy3){
          transformedString = transformedString.split('').reverse().join('');
     }else if(divisibleBy5){
          transformedString = transformedString.split('').map(char => char.charCodeAt(0)).join(' ');
     }

     return transformedString;
}

const testTransformString = (input) => {
     console.log("Input: ", input);
     console.log("output: ", transformString(input));
}

testTransformString("Hello World");