// before
const myFunction=(input:string)=> {
  let output=intput +"123";
  output+='777';
  if(output.length>20) {console.log('big string')}
  return output;
}

// after
const myFunction = (input: string) => {
  let output = intput + '123';
  output += '777';
  if (output.length > 20) {
    console.log('big string');
  }
  return output;
}
