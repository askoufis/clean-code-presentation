---
theme: default
highlighter: shiki
drawings:
  persist: false
css: unocss
layout: cover
title: Writing Maintainable Software
---

# Writing Maintainable Software

How to be nice to your fellow engineers

---

# Overview

<v-clicks>

- Maintainable software and its value
- Practices that help write maintainable software
- Short exercise to apply some practices
- Comments and file structure
- Tooling
- General guidelines

</v-clicks>

---

# Symptoms of hard to maintain software

<v-clicks>

- Hard to read
- Hard to understand
- Hard to change
- Inconsistent style and implementation

</v-clicks>

<h2 v-click>Causes</h2>

<v-clicks>

- Experimentation
- Time pressure
- Going fast
- Unfamiliarity with the codebase/library/language
- Neglect/code rot

</v-clicks>

---

# What is maintainable software?

<v-clicks>

- Future-reader-focused
- Easy to read
- Easy to understand
- Easy to change
- Consistent style and implementation

</v-clicks>

---

# Considerations

<v-clicks>

- Guidelines, not rules
- Lots of exceptions
- Opinions and personal preference
- Language-dependent
- Context-dependent
- <em>Consistency is key</em>

</v-clicks>

---
layout: section
---

# Naming

---
layout: quote
---

# "There are only two hard things in computer science: cache invalidation and naming things."

— _Phil Karlton_

---

# Naming

<v-clicks>

- A bit of effort goes a long way
- Meaningful
- Pronounceable
- Leverage your IDE's autocomplete for longer names, we don't use punchcards like in the 60s

</v-clicks>

<figure class="w-65% ma mt-4">
    <img v-after src="/punchcard.jpg" alt="Punch card from a typical Fortran program" />
    <figcaption class="text-end">
        <a class="font-size-3" href="https://en.wikipedia.org/w/index.php?title=Punched_card&oldid=1208459995">Wikipedia - Punched card</a>
    </figcaption>
</figure>

---
layout: center-code
size: 3
---

# Avoid Abbreviations

<<< @/snippets/avoid-abbreviations.ts{1-10|12-21|all}

---
layout: center-code
---

# Use Names to Add Meaning

<<< @/snippets/use-names-to-add-meaning.ts{1-3|5-11|all}

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
- Easier to understand how they work
- Easier to change
- Easier to detect a bloated function
- A well-named function can often replace a comment

</v-clicks>

---
layout: center-code
size: 3
---

# Nested Control Structures

<<< @/snippets/nested-control-structures-bad.ts

---
layout: center-code
size: 4
---

# Nested Control Structures

<<< @/snippets/nested-control-structures-good.ts

---

# Nested Control Structures

<v-clicks>

- Avoid overly-nested control structures (i.e. less indentation is better)
- Destructure values that are used more than once
- Use early `return`s to handle branches

</v-clicks>

---
layout: center-code
---

# Switch Statements

<<< @/snippets/switch-statements-normal.ts

---
layout: center-code
size: 4
---

# Switch Statements

<<< @/snippets/switch-statements-alternative.ts{1-11|all}

---

# Switch Statements

<v-clicks>

- Easy to forget `break` or `default` case (TypeScript can help)
- Fall through logic can be risky, harder to understand
- Not bad maintainability for small number of cases
- Maintainability does not scale well as more cases are added

</v-clicks>

<h2 v-click>Data-driven mapping</h2>

<v-clicks>

- Data is not coupled mapping function
- Types are not coupled to mapping function
- Easier to add/remove/change a mapping

</v-clicks>

---
layout: center-code
size: 3
---

# Long if-else-if Chains

<<< @/snippets/long-if-else-chains-bad.ts

---
layout: center-code
size: 3
---

# Long if-else-if Chains

<<< @/snippets/long-if-else-chains-good.ts

---
layout: center-code
---

# Too Many Function Parameters

<<< @/snippets/too-many-function-parameters.ts{1|1-3|1-5}

---

# Too Many Function Parameters

<v-clicks>

- Function is doing more than one thing
- Harder to interpret at a glance
- Readers more likely to ignore long lists
- Types can help, but don't fix the problem

</v-clicks>

---
layout: center-code
---

# Options Object Parameter

<<< @/snippets/options-object-parameter.ts{1|3-8|all}

---
layout: section
---

# Exercise + Break

---
layout: section
---

# Comments

---

# Comments

<v-clicks>

- Ideally none (unrealistic)
- No need to comment every line
- Can provide valuable information, but can quickly become stale
- Writing is hard!

</v-clicks>

---
layout: center-code
---

# Comments - Explain With Code

<<< @/snippets/comments-explain-with-code.ts{1-3|6-8|all}

---
layout: center-code
---

# Comments - Non-obvious Information

<<< @/snippets/comments-non-obvious-information.ts

---
layout: center-code
---

# Comments - TODOs and Context

<<< @/snippets/comments-todos-and-context.ts{1|3-7|8-9|all}

---

# Reason to Leave a Comment

<v-clicks>

- Unexpected/non-standard implementation/decision
- Reasoning for one approach over another
- Something is hard to understand and can't be simplified (regex)
- Link to a formal specification that you're adhering to
- Link to github issue for a bug/workaround

</v-clicks>

---

# Commented Code

<v-clicks>

- Fine temporarily, just don't commit it
- Bloats files
- If it's committed, just delete it, it can be recovered (that's the point of version control)

</v-clicks>

---
layout: section
---

# Structure

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

---
layout: center-code
---

# Proximity Implies Association

<<< @/snippets/proximity-implies-association.ts{1-5|7-8|all}

---

# Whitespace

<v-clicks>

- Very much a personal preference
- Code formatting tools get you 90% of the way there
- IMO newlines are very underrated in their effect on readability

</v-clicks>

---
layout: center-code
size: 3
---

# Separate Groups of Related Code

<<< @/snippets/separate-groups-of-related-code.ts{1-10|12-23|all}

---
layout: center-code
size: 3
---

# Separate Top-Level Stuff

<<< @/snippets/separate-top-level-stuff.ts{1-8|10-19|all}

---
layout: center-code
size: 2.5
---

# Separate If Statements

<<< @/snippets/separate-if-statements.ts{1-11|13-25|all}

---
layout: center-code
size: 2.5
---

# Separate Final Return Statements

<<< @/snippets/separate-final-return-statements.ts{1-10|12-24|all}

---
layout: center-code
size: 3
---

# Separate Test Cases

<<< @/snippets/separate-test-cases-bad.ts

---
layout: center-code
size: 3
---

# Separate Test Cases

<<< @/snippets/separate-test-cases-good.ts

---
layout: section
---

# Tooling

---

# Code Formatters

<v-clicks>

- Formats your code according to specific rules
- Enforce consistent style
- Consistency trumps personal preference
- In the JavaScript/TypeScript ecosystem [Prettier](https://prettier.io/) is the commonly use code formatter

</v-clicks>

---
layout: center-code
size: 3
---

# Code Formatters

<<< @/snippets/code-formatters.ts

---

# Linters

<v-clicks>

- Warns/errors on specific code patterns
- Enforce certain syntax patterns
- [ESLint](https://eslint.org/) common in the JavaScript/TypeScript ecosystem
- Identify code smells
- Prevent footguns
- Can automatically fix some issues

</v-clicks>

---
layout: center-code
---

# Linters

<<< @/snippets/linters.ts

---

# Git and GitHub

<v-clicks>

- Commit early, commit often
- Past PRs contain tons of context and learnings
- Keep PRs focused and small if possible
  - No rule that says you can only do 1 PR per Jira card/item of work
- Review your own PR (even before you open it!)
  - Helps catch silly mistakes/oversights
  - Helps gauge whether or not your PR should be split up
- Add comments to your own PRs (try and pre-empt your reviewer's questions)
- GitHub search is super useful for finding examples/inspiration (both in SEEK repos and external
  repos)

</v-clicks>

---
layout: section
---

# Acronyms

---

# Acronyms

<v-clicks>

- KISS (**K**eep **I**t **S**imple, **S**illy)
- DRY (**D**on't **R**epeat **Y**ourself)
- WET (**W**rite **E**verything **T**wice)
- [AHA (**A**void **H**asty **A**bstractions)](https://kentcdodds.com/blog/aha-programming)
- ["Prefer duplication over the wrong abstraction"](https://sandimetz.com/blog/2016/1/20/the-wrong-abstraction)
- ["Optimize for change"](https://overreacted.io/optimized-for-change/)

</v-clicks>

---
layout: section
---

# Final Thoughts

---
layout: quote
---

# "Always leave the ~~campground~~ code cleaner than you found it."

— _A scout that grew up to be a software developer, probably_

---
layout: center
---

# [Writing Maintainable Code is a Communication Skill]

[Writing Maintainable Code is a Communication Skill]: https://max.engineer/maintainable-code
