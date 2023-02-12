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
- There's plenty more advice out there that I won't cover, this presentation is meant to be aimed at relatively new developers
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
- <em>Consistency is key</em>

</v-clicks>

<!--
- Guidelines, not strict rules, deviation is valid
- Some advice is objectively good, other is opinion or personal preference
- Encourage you to form your own opinions over time
- Some advice is universal
- Other advice is very language-dependent
- Some patterns may be cleaner to write a different way in another language
- This presentation is more JavaScript/TypeScript focused
- Other langauges have other features that allow you to write code in different ways
- Within a team, patterns and ways of writing code will already be well-established
- Following existing code is a good approach, assuming that code is already written in a good way
- Doesn't mean coding style shouldn't change, but having a mix of different styles can be confusing and make code harder to maintain
-->

---
layout: section
---

# Naming

---
layout: quote
---

# "There are only two hard things in computer science: cache invalidation and naming things."

— _Phil Karlton_

<!--
- Classic quote that you'll see quite often
- Not going to cover cache invalidation
- Key thing I want to cover is naming
-->

---

# Naming

<v-clicks>

- A bit of effort goes a long way
- Pronounceable
- Meaningful
- We live in [current year], not the 70s, no need to save space
- Leverage your IDE's autocomplete

</v-clicks>

<a v-click class="w-75% h-80% mx-auto block" href="https://craftofcoding.wordpress.com/2017/01/28/read-your-own-punch-cards/">

![An image of a used punchcard](/punchcard.jpg)

</a>

<!--
- Spending a bit of time thinking about names saves headaches in the future
- I get triggered by badly named github repos and slack channels
- Slack channel isn't too bad to rename, but renaming popular github repos can cause a bit of chaos
- When it comes to variables and functions, names should be pronounceable and meaningful
- Modern era, no need to save space on punchcards
- Long variable or function names a fine, within reason
- IDE autocomplete makes it easier to type longer names
- First piece of naming advice is to >>>
-->

---
layout: center-code
size: 3
---

# Avoid Abbreviations

```ts {1-10|12-21|all}
type Addr = {
  num: number;
  name: string;
};

const addrStr = '123 Test St'; // User input

const prsAddr = (a: string): Addr => {};

const addr = prsAddr(addrStr);

type Address = {
  streetNumber: number;
  streetName: string;
};

const userAddressInput = '123 Test St'; // User input

const parseAddressFromInput = (input: string): Address => {};

const parsedAddress = parseAddressFromInput(addressString);
```

<!--
- Addr type, bit vague
- From addrStr we can tell that we're dealing with street addresses
- Putting the type inside the variable name is usually unnecessary
- Typed languages don't need it, potentially useful to disambiguate between two values that represent the same thing, but are of different tyeps
- Abbreviated names don't really help anyone, they take more time to decipher and read, even though they're shorter
- Different people abbreviate words in different ways, leads to inconsistent naming
- {click}
- Clear that we're talking about a street address
- Imagine that comment isn't there, it's obvious that this is user input, so it's external data that can't be trusted, hence why you have to parse it
- Parsed address makes it clear that this is output from the parsing function, as opposed to an address object that you made yourself
- {click}
- Generally, longer names are easier to read, leave little room for interpretation
- This ties into the next piece of advice, which is >>>
-->

---
layout: center-code
---

# Use Names to Add Meaning

```ts {1-3|5-11|all}
if (age >= 4 && age <= 18) {
  applyTaxBenefit();
}

const isOfSchoolAge = (age: number): boolean => {
  return (age >= 4 && age <= 18);
}

if (isOfSchoolAge(age)) {
  applyTaxBenefit();
}
```

<!--
- Top code has some logic, not exactly clear what "rule" this logic represents
- {click}
- Here we've essentially named our logic rule by putting into a function
- Allows you to re-use this logic
- Allows you to more easily test just this logic, without having to test the function that this whole if statement is inside
- {click}
- Future code reader doesn't necessarily need to know how isOfSchoolAge works
- If it has some tests around it, they should be confident that it just works
- This ties into the next section on >>>
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
- Easier to change
- Easier to detect a bloated function

</v-clicks>

<!--
- Ideally, functions should be small and do one thing
- Named based on what it does
- If it's hard to name a function, might mean it does too many things
- Obviously some functions can be large and do multiple things, but there shouldn't be lots of those types of functions in your code

## Benefits to these guidelines
- Small functions are easier to test in isolation
- Eaiser to understand what they do
- Changing a small function that's used for a specific purpose is easier than a large function that does lots of thigns
- Changing a large function usually means changing more tests relative to a smaller function
- Sticking to these guidelines makes it easier to detect a bloated function that does too many things
- Now going to cover a few coding patterns to avoid, firstly >>>
-->

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
- Just some example code
- Not reflective of a proper date picker implementation, just illustrative
- Pretend we're inside some kind of function here, omitted the function declaration as the code is already quite long
- Who can identify some things about this code that aren't great?
- Firstly, it's quite clustered and cramped, making it a bit hard to read
- Stacking logic at each layer, requires effort to think about all the layered conditions to satisfy the innermost condition
- Adding another function call in one of the inner conditions would make it look even uglier
- By grouping and trimming down some of the logic, and using early returns, we can change this code into this >>>
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
- Destructuring assignments means we don't have to do datePicker.startDate or endDate
- Previous example had doubled up logic, now that's a single if statement
- We also use this early return pattern, where we just return from the function when we don't want to continue, rather than using else statements and nested if statements
- Negate and group some logic to isolate the case where we do nothing
- Each group of logic is clearly visible, makes it easy to add more things into the if statements, or things between, without making the code look cramped
- Could potentially even move some of those logic statements into functions as well, give them a name to make it obvious what we're trying to test with the if statement
- Next pattern isn't inherently bad, but in TypeScript at least, it's usually not the first pattern I reach for >>>
-->

---

# Switch Statements

<v-clicks>

- Easy to forget `break` or `default` case (TypeScript can help)
- Fall through logic can be risky, harder to understand
- Not bad maintainability for small number of cases
- Maintainability does not scale well as more cases are added

</v-clicks>

<!--
- Switch statements have some footguns, forgetting a break or default can lead to incorrect code
- Upcoming version of typescript, version 5.0, can help with this
- It will automatically fill in all switch cases based on the type
- Fall through logic can be used well, but it's hard to get right and I find it harder to understand relative to plain if statements
- For a small number of cases, it can be alright to maintain, but cases can grow, and each new case is an opportunity to forget a `break` statement
- Here's an example of another reason you may NOT want to use switch cases >>>
-->

---
layout: center-code
--- 

# Switch Statements

```ts
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
```

<!--
- Here we're switch on different animals, and returning the sound they make
- We have a default case at the bottom
- Nothing inherently wrong with this
- Compare it to a different implementation >>>
-->

---
layout: center-code
size: 4
--- 

# Switch Statements

```ts {1-11|all}
const soundFromAnimal = {
  Dog: "Woof",
  Cat: "Meow",
  Cow: "Moo",
};

const defaultAnimalSound = "Growl";

const getAnimalSound = (animal: string): string =>
  soundFromAnimal[animal] || defaultAnimalSound;


const allAnimals = Object.keys(soundFromAnimal);
const allSounds = [...Object.values(soundFromAnimal), defaultAnimalSound];
```

<!--
- Here we have an object where the key is the animal name, and the value is the animal's sound
- We've created a mapping between an animal and its sound
- We have an explicit default value
- Our function just tries to get the sound for an animal
- If the sound isn't there, the value will be undefined, so then the OR will pick the RHS and we get the default
- Realistically would utilize stricter types, but kept it simple for this example
- Data is not tied to this function, it can be used elsewhere
- For example you could get a list of all the keys of the function, or all the values
- Another pattern to look out for is >>>
-->

---
layout: center-code
size: 4
---

# Long if-else-if Chains

```ts
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
```

<!--
- Here, we're adding to our input based on some conditions
- Each condition is distinct, so only one of them, or none of them, will ever occur
- One reason you might want to do this is because you want to transform the input a bit, then do some other stuff to it later
- So you declare the variable with let and mutate it based on some conditions
- Code looks a bit dense
- Depending on what else is happening in the function, this could be refactored into two separate functions >>>
-->

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
- By using early returns, we can make each case distinct, and clearly separate them with white space
- I find this much more readable, even though it is more lines of code, much of that is white space
- Other code had extra stuff occurring after the if-else chain
- Likely worth refactoring that into another function, as it's separate to the logic, which is what I've done
- Allows you to compose these functions, or potentially use them individually
- New code is now more flexible than the old code
- Probably easier to test too
- Isolated if statements, combined with early return statements creates nice separations between each if statement
- Also easier to copy and paste to add new statements, compard to if else if chain
- This next pattern can be a good indicator that it's time to refactor your code a bit >>>
-->

---
layout: center-code
---

# Too Many Function Parameters

```ts {1|3|5}
foo();

bar(ok, nice);

baz(maybe, its, time, to, refactor);
```

<!--
- Parameters are the named variables in the function definition
- The actual values you pass into them are called arguments
- So here we have a function with no parameters, which is fine
- Next this function has two parameters, also fine, not necessarily a cause for concern
- Lastly, this function could probably use a refactor >>>
-->

---

# Too Many Function Parameters

<v-clicks>

- Function is doing more than one thing
- Harder to interpret at a glance
- Readers more likely to to ignore long lists
- Types can help, but don't fix the problem

</v-clicks>

<!--
- A good indicator that your function is doing lots of things
- Harder to interpret at a glance
- Having types associated with each parameter makes it easier to figure out what goes where, but not that easy
- However, you could have two of the same type in a row, leading to confusion
- There are some cases where you need to pass in lots of stuff into a function
- Generally a top-level function in some library, key entrypoint into the code >>>
-->

---
layout: center-code
---

# Options Object Parameter

```ts {1|all}
transform("the quick brown fox", "en", false, 3, " ");

transform("the quick brown fox", {
  locale: "en",
  delimiter: " ",
  maxLines: 3,
  truncate: false,
});
```

<!--
- We've got some kind of string transformation function
- The top is the before, so we've got two strings in a row
- The second one looks like a language
- A random boolean, who knows what that means
- A number, could be anything
- A string containing a space, maybe a delimiter
- In this refactored form, we've got the input as the first parameter, and all the options in an object passed as the second parameter
- Super obvious what everything is for, super easy to read and change
-->

---
layout: section
---

# Comments

---

# Comments

<v-clicks>

- Ideally none
- Explain with code rather than comments
- Can be used to provide context to the reader

</v-clicks>

<!--
- If anyone here has just gotten out of university, you might be used to putting comments everywhere in your code
- While this was likely useful at the time, it's primary purpose would've been to show whoever is assessing your code that you know what the code does
- Hopefully the stuff we've covered so far will make your code easier to understand without comments
- To the point where, in an ideal world, you wouldn't need to write comments
- Ideally, all code would be easy to understand, and you'd never need to explain it
- In practice though, code is rarely that simple
- The problem you're solving has some inherent complexity that may need to be explained to some degree
- The problem with using too many comments is that, when that code inevitably changes, those comments may need to move, be updated, or be deleted
- Adding comments creates more work for future developers
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

<!--
- In this example, we have a comment that explains what you're checking for
- Instead, as we've done before in a previous example, replace the logic with a function call
- Use the name to add meaning to your code
- You've also now encapsulated your logic, so it can be used elsewhere, it's a win win situation
-->

---
layout: center-code
---

# Comments

```tsx
// matches hh:mm:ss
const timeRegexp = new RegExp('\\d\\d:\\d\\d:\\d\\d');
```

<!--
- Comment used to explain what the regex is trying to parse
- Regexes can be hard to parse just by looking at them
- In this case the comment is very useful to readers, so it's worth keeping
-->

---
layout: center-code
---

# TODOs

```ts {1|all}
// TODO: Fix me

// TODO: Might be better if we use a Set instead of an Array
```

<!--
- TODOs are a bit contentious
- If you're just writing a TODO as a marker that you need to come back and finish something, or fix a bug, then that's fine
- As long as you delete these TODOs before you push your code that's fine
- They can also a signal for future developers that there's a opportunity here to change something for the better, but for whatever reason that change didn't need to be done just yet
- Maybe there was a deadline and there was better implementation that would've been nice-to-have
- Or someone had an idea for a potential improvement that needs to be explored further
- You could argue that this kind of comment could be replaced with a card in your Jira or Trello backlog, but in my opinion that increases the chance it'll never get done
- A developer might see this comment and try and address it
- A card in the backlog will probably get forgotten, unlikely to be brought up during backlog grooming if it's relatively small effort
-->

---

# Contextual Comments

<v-clicks>

- Information that explains implementation/structure
- Reasoning for one approach over another
- Link to a formal specification
- Link to github issue

</v-clicks>

<!--
- Another type of valid are what I call contextual comments
- Provide context to a developer about non-obvious code choices
- Ties back to the idea that problems have inherent complexity that is just unavoidable, some problems are complicated, and that's that
- You might want to explain why you chose a specific data structure
- Maybe link to a formal specification that details how something works in lots of detail, and which you based your code off
- If there's a bug in some library that you use, and you found a workaround in a github issue, I think it's good practice to leave a comment linking to that github issue
- This makes it super easy for the next developer who touches this code to check if the bug has been resolved
-->

---

# Commented Code

- Fine temporarily, just don't commit it
- Bloats files
- If it's committed, just delete it

<!--
- Commented code should never exist in a repo
- If you're commenting out code to debug stuff, or you're in the middle of writing something but it's broken, that's fine
- Just don't commit commeneted out code, it just bloats files, making them take longer to read
- If you're commenting out code that has already been commited, you might as well delete it, you can always go back to the commit that had the code
-->

---
layout: section
---

# Structure

<!--
- This section is more about the structure and organization of your code, rather than what your code actually is or does
- First we'll talk more broadly about files, then zoom in to the contents of files
-->

---

# File and Line Length

<v-clicks>

- Line length limits are a thing of the past
- Code formatting tools help ensure lines don't get too long
- The contents of a file should be related to the name of the file
- Generic names like `utils.ts`, `helpers.ts`, become dumping grounds for shared functions
- Group shared code by their function, e.g. `formatters.ts`, `validators.ts`
- Large files can signal an opportunity to split things up

</v-clicks>

<!--
- As discussed before, physical line length limits don't exist anymore
- They're just arbitrary nowadays
- Code formatting tools help with line length
- Seems obvious, but file contents should be related to the file name
- Genericly named files can easily become dumping grounds for shared code
- Group shared code by their common function
- Regardless of whether all the contents of a file belongs there, a large file can often signal that it's time to split things up
- Large files in and of themselves are harder to read and understand than small files
- 

-->

---
layout: center-code
---

# Proximity Implies Association

```ts {1-5|7-8|all}
const thing = getThingFromSomewhere();

// ... 20 lines later ...

doSomethingWith(thing);

const thing = getThingFromSomewhere();
doSomethingWith(thing);
```

<!--
- This is less of a guideline and more of an implicit rule that I think a lot of programmers use
- That is, generally, things that are close together are related
- Top example is what not to do >>>
- Bottom example is better, since we've declared `thing` as a const, we're not doing anything to it, might as well get it right before we use it
-->

---

# Whitespace

<v-clicks>

- Very much a personal preference
- Code formatting tools get you 90% of the way there
- A little goes a long way
- IMO very underrated in its effect on readability

</v-clicks>

<!--
TODO
-->

---
layout: center-code
size: 3
---

# Separate Groups of Related Code

```ts
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
```

---
layout: center-code
size: 3
---

# Separate Top-Level Stuff

```ts {1-8|10-19|all}
import { foo } from 'foo';
import { bar } from 'bar';
const myFunction = () => {
  return 1;
};
const myOtherFunction = () => {
  return 2;
};

import { foo } from 'foo';
import { bar } from 'bar';

const myFunction = () => {
  return 1;
};

const myOtherFunction = () => {
  return 2;
};
```

---
layout: center-code
size: 3
---

# Separate If Statements

```ts {1-11|13-25|all}
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
```

---
layout: center-code
size: 3
---

# Separate Final Return Statements

```ts {1-10|12-22|all}
const myFunction = (input: number) => {
  if (input > 0) {
    doThing();
  }

  if (SOME_GLOBAL_VARIABLE === true) {
    doSomeOtherThing();
  }
  return input + 1;
};

const myFunction = (input: number) => {
  if (input > 0) {
    doThing();
  }

  if (SOME_GLOBAL_VARIABLE === true) {
    doSomeOtherThing();
  }

  return input + 1;
};
```

---
layout: center-code
size: 4
---

# Separate Test Cases

```ts
describe("myFunction", () => {
  it("should return 1 when given an input of 0", () => {
    // test stuff
  });
  it("should return 2 when given an input of 1", () => {
    // test stuff
  });
});
describe("myOtherFunction", () => {
  it("should return -1 when given an input of 0", () => {
    // test stuff
  });
  it("should return 0 when given an input of 1", () => {
    // test stuff
  });
});
```

---
layout: center-code
size: 4
---

# Separate Test Cases

```ts
describe("myFunction", () => {
  it("should return 1 when given an input of 0", () => {
    // test stuff
  });

  it("should return 2 when given an input of 1", () => {
    // test stuff
  });
});

describe("myOtherFunction", () => {
  it("should return -1 when given an input of 0", () => {
    // test stuff
  });

  it("should return 0 when given an input of 1", () => {
    // test stuff
  });
});
```

---
layout: section
---

# Tooling

---

# Formatting Tools

<v-clicks>

- Formats your code according to specific rules
- In the JavaScript/TypeScript ecosystem Prettier is very common
- Enforce consistent style
- Consistency trumps personal preference (no more arguing over code formatting)

</v-clicks>

TODO: Comparison between unformatted and code formatted with prettier

<!--
TODO
-->

---

# Linting

<v-clicks>

- Warns/errors on specific code patterns
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
