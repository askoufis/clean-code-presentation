const soundFromAnimal: Record<string, string> = {
  Dog: "Woof",
  Cat: "Meow",
  Cow: "Moo",
};

const defaultAnimalSound = "Growl";

const getAnimalSound = (animal: string): string =>
  soundFromAnimal[animal] || defaultAnimalSound;

const allAnimals = Object.keys(soundFromAnimal);
const allSounds = [...Object.values(soundFromAnimal), defaultAnimalSound];
