const doThing = (input: string): string => {
  let output = input;

  if (input.startsWith("foo")) {
    output += "1";
  } else if (input.endsWith("foo")) {
    output += "2";
  } else if (input.startsWith("bar")) {
    output += "3";
  } else if (input.endsWith("bar")) {
    output += "4";
  }

  // Do some other stuff to output

  return output;
}
