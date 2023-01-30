---
# global frontmatter
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

<v-click>

## Causes

</v-click>

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
- Consistency is key

</v-clicks>

<!--
TODO
-->

--- 
layout: section
--- 

# Naming

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
layout: two-cols-header
---

# Avoid Abbreviations

::left::

<v-clicks>

- We live in [current year], not the 70s, no need to save space
- Enhances pronounceability and readability
- Leverage your IDE's autocomplete

</v-clicks>

::right::

<div class="grid grid-rows-2">
<v-clicks>

```ts
type Addr {
  num: number;
  name: string;
}

const addrStr = '123 Test St'; // User input

function prsAddr(a: string): Addr {};

let addr = prsAddr(addrStr);
```

```ts
type Address {
  streetNumber: number;
  streetName: string;
}

const addressString = '123 Test St'; // User input

function parseAddress(inputAddress: string): Address {};

let address = parseAddress(addressString);
```

</v-clicks>
</div>

<!--
We're not in the 70s and 80s anymore, you can afford to use more descriptive, longer names for
things as we're not constrained by the size of a punchcard or anything
-->

---

# Use Names to Add Meaning

<v-clicks>

- Descriptive

</v-clicks>

<style>
  .code {
    width: 50%
  }
</style>

<div class="code">
```ts
if (age > 4 && age < 18) {
  applyTaxBenefit();
}
```
</div>

<!--
TODO
-->

---
layout: section
---

# Functions

---

# Functions

<v-clicks>

- TODO

</v-clicks>

<!--
TODO
-->

---

# Function Arguments

<v-clicks>

- TODO

</v-clicks>

<!--
TODO
-->

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
- Explain with code rather than comments (naming)
- Sometimes necessary
- To TODO, or not to TODO

</v-clicks>

<!--
For example, if you had to write some code in order to work around a bug in a library you're consuming,
then leaving a comment that links to the issue for that specific bug is useful. It lets other devs know
why you did this, and also makes it easy to check if the bug is fixed the next time someone touches the code.

TODOs are a bit contentious, but I think they're fine. They're a signal for future developers that there's a
potential change to be done, but for whatever reason it wasn't done
-->

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
- Large files can indicate 

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
