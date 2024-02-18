function doThing(input: string): string {
  if (input.startsWith("foo")) {
    return `${input}1`;
  }

  if (input.endsWith("foo")) {
    return `${input}2`;
  }

  if (input.startsWith("bar")) {
    return `${input}3`;
  }

  if (input.endsWith("bar")) {
    return `${input}4`;
  }

  return input;
}

let output = doThing("foobar");
output = doMoreStuff(output);
