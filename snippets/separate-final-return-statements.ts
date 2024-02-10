const myFunction = (input: number) => {
  if (input > 0) {
    doThing();
  }

  if (SOME_GLOBAL_VARIABLE === true) {
    doSomeOtherThing();
  }
  const output = input + 1;
  return output;
};

const myFunction = (input: number) => {
  if (input > 0) {
    doThing();
  }

  if (SOME_GLOBAL_VARIABLE === true) {
    doSomeOtherThing();
  }

  const output = input + 1;

  return output;
};
