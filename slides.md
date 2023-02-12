---
theme: default
highlighter: shiki
# persist drawings in exports and build
drawings:
  persist: false
css: unocss

layout: cover
---

# Clean Code

How to be nice to your fellow developers

<!--
- Goal is to instill some practices and guidelines that will help you write better code
- Ability to write clean and maintainable code is an invaluable skill on any team
- A skill that takes time to cultivate
- This presentation will present some guidelines and advice that will hopefully help improve this skill, both in the short and long term
-->

---
layout: center
---

![Clean Code by Robert C. Martin](/clean-code-cover.jpg)

<!--
Some of the advice in this presentation was popularized by the book Clean Code by Robert C. Martin.
I'd encourage you to read it if you're interested, or at least find a summary of the book somewhere
as it is full of useful advice and guidelines, not all of which is in this presentation as we don't
have the time to cover everything in the book.

Before talking about clean code, we should ask ourselves "If clean code is a thing, surely that
implies the existence of dirty code". And, at least according to the book, dirty code does exist.
-->

---

# Dirty Code

<v-clicks>

- Hard to read
- Inconsistent style
- Hard to understand
- Hard to maintain

</v-clicks>

<h2 v-click>Causes</h2>

<v-clicks>

- Experimentation
- Time pressure
- The _Need for Speed_ ™️
- Unfamiliarity with codebase/language
- Neglect

</v-clicks>

<!--
- Might've encountered dirty code before
- Hard to read, just visually
- Hard to understand what it's doing
- Leads to difficulty when making changes
- Ultimately the code is hard to maintain

## Causes

- I've written dirty code before, and I probably still do, it's situational
- Not all code has to be perfect
- Test/experimental code that isn't going to be used for anything serious
- Doesn't mean care shouldn't be taken, but no need to be pedantic
- Deadlines
- Wanting to write the code quickly, even without a deadline
- Unfamiliarity
- Neglect, code rot
- A lot of old code will probably look bad to you, even if you wrote it
- If I looked at my own old code, I'd probably think it was dirty
- This just means we've probably gotten better at writing code
- Also, code trends change over time
- Tomorrow might write some code a different way than today
-->

---

# What is Clean Code?

<v-clicks>

- Reader-focused development style
- Improves readability, understanding and maintainability of software
- Continuous
- Evolving
- Context-dependent

</v-clicks>

<!--
- Code should be written with the reader in mind
- You are a future reader, but so are other team members, some of whom you may never meet
- If deleloping OSS, anyone can read that code
- Improve readability, undertanding, maintainability
- Continuous process for all code you write
- Even code you've already written is worth re-evaluating when making changes
- Clean once doesn't mean clean forever
- As mentioned in the last slide, code trends and best practices change over time, your code should adapt to these changes
- What clean code is also depends on where you're writing it
- If you have performance constraints, then that may make you write code differently than you otherwise would
-->

---
layout: quote
---

# "Always leave the ~~campground~~ code cleaner than you found it."

— _A scout that grew up to be a software developer, probably_

<!--
- Modified boy scout rule
- Good general principle to keep in mind
- If you're changing some code, try to leave it in a better state than it was before
-->

---

# Things to Keep in Mind

<v-clicks>

- Guidelines, not rules
- Opinions and personal preference
- Language-dependent
- Consistency is key

</v-clicks>

<!--
- Guidelines, not strict rules, deviation is valid
-->

---
layout: quote
---

# "There are only two hard things in computer science: cache invalidation and naming things."

— _Phil Karlton_

<!--
TODO
-->

---

# Naming

<v-clicks>

- Pronounceable
- Meaningful
- We live in [current year], not the 70s, no need to save space
- Leverage your IDE's autocomplete

</v-clicks>

<a v-click class="w-75% h-80% mx-auto block" href="https://craftofcoding.wordpress.com/2017/01/28/read-your-own-punch-cards/">

![An image of a used punchcard](/punchcard.jpg)

</a>

---
layout: center-code
size: 3
---

# Naming

```ts {1-10|12-21|all}
type Addr = {
  num: number;
  name: string;
};

const addrStr = '123 Test St'; // User input

function prsAddr(a: string): Addr {}

const addr = prsAddr(addrStr);

type Address = {
  streetNumber: number;
  streetName: string;
};

const userAddressInput = '123 Test St'; // User input

function parseAddressFromInput(input: string): Address {}

const parsedAddress = parseAddressFromInput(addressString);
```

<!--
We're not in the 70s and 80s anymore, you can afford to use more descriptive, longer names for
things as we're not constrained by the size of a punchcard or anything
-->

---
layout: center-code
---

# Use Names to Add Meaning

```ts {1-3|5-11}
if (age >= 4 && age <= 18) {
  applyTaxBenefit();
}

function isOfSchoolAge(age: number): boolean {
  return (age >= 4 && age <= 18);
}

if (isOfSchoolAge(age)) {
  applyTaxBenefit();
}
```

<!--
TODO
-->

---

# Functions

<v-clicks>

- Small
- Do one thing
- Named based on what it does

</v-clicks>

<h2 v-click>Benefits</h2>

<v-clicks>

- Easier to test
- Easier to reason about
- Easier to detect a bloated function

</v-clicks>

---
layout: center-code
size: 3
---

# Nested Control Structures

```ts
if (
  datePicker.startDate === null ||
  datePicker.endDate === null
) {
  sendInvalidDateMessage();
} else {
  if (
    datePicker.startDate !== null &&
    datePicker.endDate !== null
  ) {
    if (datePickerStart.SelectedDate === datePickerEnd.SelectedDate) {
      if (index1 === index2) {
        if (StartInt === EndInt) {
          if (radioButton.IsChecked === true) {
            printTime();
          } else {
            printTimeInADifferentWay();
          }
        }
      }
    }
  }
}
```

<!--
- Just some example code, not really reflective of how you would actually implement a date picker, really just used to illustrate bad structure
-->

---
layout: center-code
size: 4
---

# Nested Control Structures

```ts
const { startDate, endDate } = datePicker;

if (startDate === null || endDate === null) {
  sendInvalidDateMessage();
  return;
}

if (startDate !== endDate || index1 !== index2 || startInt !== endInt) {
  return;
}

if (radioButton.isChecked) {
  printTimeInADifferentWay();
  return;
}

printTime();
```

<!--
- Early returns are a great pattern that help
- Negate and group some logic to isolate each case
-->

---

# Switch Statements

<v-clicks>

- Easy to forget `break` or `default` case (TypeScript can help)
- Fall through logic can be risky
- Not bad maintainability for small number of cases
- Maintainability does not scale well as more cases are added

</v-clicks>

---
layout: center-code
--- 

# Switch Statements

```ts
function getAnimalSound(animal: string): string {
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
```

---
layout: center-code
--- 

# Switch Statements

```ts
const soundFromAnimal = {
  Dog: "Woof",
  Cat: "Meow",
  Cow: "Moo",
};

const defaultAnimalSound = "Growl";

function getAnimalSound(animal: string): string {
  return soundFromAnimal[animal] || defaultAnimalSound;
}
```

<!--
- Realistically would utilize stricter types
- soundFromAnimal data is now accessible outside the function
-->

---
layout: center-code
size: 4
---

# Long if-else-if Chains

```ts
function doThing(input: string): string {
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
```

---
layout: center-code
size: 3
---

# Long if-else-if Chains

```ts
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

function doMoreStuff(input: string): string {}
```

<!--
- Other code had extra stuff occurring after the if-else chain
- Likely worth refactoring that into another function, as it's separate to the logic
- if-else change is often densely formatted
- If + early return creates nice separations between each if statement
-->

---
layout: center-code
---

# Too Many Function Parameters

```ts {1|3|5}
foo();

foo(ok, nice);

foo(maybe, its, time, to, refactor);
```

---

# Too Many Function Parameters

<v-clicks>

- Function is doing more than one thing
- Harder to interpret at a glance
- Readers more likely to to ignore long lists

</v-clicks>

---
layout: center-code
---

# Options Object Parameter

```ts {1|3-8}
transform("the quick brown fox", "utf-8", false, 3, " ");

transform("the quick brown fox", {
  language: "en",
  delimiter: " ",
  maxLines: 3,
  truncate: false,
});
```

---
layout: section
---

# Comments

---

# Comments

<v-clicks>

- Ideally none
- Explain with code rather than comments
- Sometimes necessary

</v-clicks>

<!--
For example, if you had to write some code in order to work around a bug in a library you're consuming,
then leaving a comment that links to the issue for that specific bug is useful. It lets other devs know
why you did this, and also makes it easy to check if the bug is fixed the next time someone touches the code.
-->

---
layout: center-code
---

# Comments

```ts {1-3|6-8}
// Check if eligible for long service leave
if (employee.type === 'Permanent' && employee.tenure >= 7) {
  // ...
}

if (isEligibleForLongServiceLeave(employee)) {
  //...
}
```

---
layout: center-code
---

# Comments

```tsx
// matches hh:mm:ss
const timeRegexp = new RegExp('\\d\\d:\\d\\d:\\d\\d');
```

---
layout: center-code
---

# TODOs

<!--
- TODOs are a bit contentious, but I think they're fine. They're a signal for future developers that there's a
potential change to be done, but it didn't need to be done immediately
- Maybe there was a deadline and it was a nice-to-have, or it's an idea that needs to be explored further
-->

---

# Contextual Comments

<v-clicks>

- Information that explains implementation/structure
- Link to a formal specification
- Link to github issue
- Reasoning for one approach over another

</v-clicks>

---

# Commented Code

- Fine temporarily
- Bloats files
- If it's committed, just delete it

---
layout: section
---

# Structure

---

# File and Line Length

<v-clicks>

- Line length limits are a thing of the past
- Code formatters help ensure lines don't get too long
- The contents of a file should be related to the name of the file
- Large files can signal an opportunity to split things up

</v-clicks>

<!--
TODO
-->

---

# Whitespace

<v-clicks>
</v-clicks>

<!--
TODO
-->

---
layout: center-code
---

# Proximity Implies Association

---
layout: center-code
---

# Stepdown Rule

---
layout: section
---

# Tooling

---

# Formatting

<v-clicks>

- Enforce consistent style
- Consistency (usually) trumps personal preference

</v-clicks>

TODO: Comparison between unformatted and code formatted with prettier

<!--
TODO
-->

---

# Linting

<v-clicks>

- Enforce certain patterns
- Find code smells
- Prevent footguns
- Can automatically fix some issues

</v-clicks>

TODO: Image of an eslint warning and error

<!--
TODO
-->

---
layout: section
---

# Acronyms

---

# Acronyms

<v-clicks>

- KISS (Keep It Simple, Silly)
- DRY (Don't Repeat Yourself)
- WET (Write Everything Twice)
- AHA (Avoid Hasty Abstractions)

</v-clicks>

<!--
When writing code, there are a few acronyms that be useful to keep in mind.

KISS is a common one you might've heard of. It stands for "Keep it simple, silly", or some variation of that.
It's intended to be a reminder to value simple code over, for example, overly concise code,
or code that uses an obscure language feature. While it can be tempting to try and make your code as concise or as clever
as possible, in reality this tends to make it harder for any person who has to read the code in the future, including you.

DRY is another common one you might've heard of. It stands for "Don't repeat yourself". 

WET

optimize for change

AHA
-->
