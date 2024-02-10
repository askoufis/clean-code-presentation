const myFunction = (input: string) => {
  const uppercaseInput = input.toUpperCase();
  const words = uppercaseInput.split(" ");
  const filteredWords = words.filter(myWordFilter);
  if (filteredWords.length === 0) {
    console.log("No words remaining :(")
    return;
  }
  console.log(`${filteredWords.length} words remaining :)`);
};

const myFunction = (input: string) => {
  const uppercaseInput = input.toUpperCase();
  const words = uppercaseInput.split(" ");
  const filteredWords = words.filter(myWordFilter);

  if (filteredWords.length === 0) {
    console.log("No words remaining :(")
    return;
  }

  console.log(`${filteredWords.length} words remaining :)`);
};
