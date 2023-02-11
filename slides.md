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
The goal of this presentation is to instill in you some practices and guidelines that will help you
write clean code. The ability to write and maintain clean code is an invaluable skill on any team,
but it takes time to cultivate this skill, so hopefully this presentation will be a solid step
forward 
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

<v-clicks>

- Experimentation
- Time pressure
- The _Need for Speed_ ™️
- Unfamiliarity with codebase/language
- Neglect

</v-clicks>

<!--

You've probably encountered dirty code before. Before you even try to figure out what the code is
doing, it can sometimes be hard to read the code in the first place. Maybe it has inconsistent
formatting, or it's structured in a way that makes it hard to follow. This makes it hard to
understand what the code is doing, in turn making it harder to change the code, and overall making
the code hard to maintain.

## Causes

Gotta be honest, I've written some dirty code before. I still occasionally do, and I'm sure you all have and still do.
Depending on your situation

TODO
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
First and foremost, writing clean code should be done with the reader in mind. You're writing code
not only for your future self, but for both existing and future team members, some of whom you may
never meet. The overall goal of writing clean code is to improve the readability, understanding and
maintainability of software.

Clean code also isn't just a one time thing. It's a continuous practice that 
-->

---
layout: quote
---

# "Always leave the ~~campground~~ code cleaner than you found it."

— _A scout that grew up to be a software developer, probably_

<!--
TODO
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
TODO
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
size: 4
---

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

# Functions

---

## General Things to Avoid

<v-clicks>

- Overly nested control structures
- Unnecessary switch statements
- Long if-else-if chains

</v-clicks>

<!--
- Prefer early returns over nested control structures
- Switch statements have their place, but they're not what I reach for first
- Switch statement footguns
- TODO: Mention typescript 5.0 exhaustive switch case thing
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

# Control Flow

<v-clicks>

- TODO

</v-clicks>

<!--
TODO
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

```tsx
// matches hh:mm:ss
const timeRegexp = new RegExp('\\d\\d:\\d\\d:\\d\\d');
```

---
layout: center-code
---

# TODO

<!--
- TODOs are a bit contentious, but I think they're fine. They're a signal for future developers that there's a
potential change to be done, but it didn't need to be done immediately
- Maybe there was a deadline and it was a nice-to-have, or it's an idea that needs to be explored further
-->

---
layout: center
---

# Don't Leave Commented Code

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

# Tools

---

# Formatting

<v-clicks>

- Enforce consistent style
- Consistency trumps personal preference

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

# Miscellaneous

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

---

# Conclusion

<!--
TODO
-->
