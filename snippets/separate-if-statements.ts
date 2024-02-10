const myFunction = (input: number) => {
  if (input > 0) {
    doThing();
  }
  if (input < 0) {
    doOtherThing();
  }
  if (SOME_GLOBAL_VARIABLE === true) {
    doSomeOtherThing();
  }
};

const myFunction = (input: number) => {
  if (input > 0) {
    doThing();
  }

  if (input < 0) {
    doOtherThing();
  }

  if (SOME_GLOBAL_VARIABLE === true) {
    doSomeOtherThing();
  }
};
