const getAnimalSound = (animal: string): string => {
  switch (animal) {
    case "Dog":
      return "Woof";
    case "Cat":
      return "Meow";
    case "Cow":
      return "Moo";

    default:
      return "Growl";
  }
}
