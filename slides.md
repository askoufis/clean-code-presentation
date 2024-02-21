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

- Bad names can slow you down
- Good names (in combination with accurate types) can almost take away the need to actually read the code
- A bit of effort goes a long way
  - You can _always_ do better than single-letter variables like `x` or `i`
- Meaningful
- Pronounceable
- Long-ish names are OK
  - Leverage your IDE's autocomplete for longer names, we don't use punchcards like in the 60s

</v-clicks>

---

<figure class="ma">
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

<v-click>

<<< @/snippets/avoid-abbreviations.ts{1-10|12-21|all}

</v-click>

---
layout: center-code
---

# Use Names to Add Meaning

<v-click>

<<< @/snippets/use-names-to-add-meaning.ts{1-3|5-11|all}

</v-click>

---

# Functions

<v-clicks>

- Ideally small
- Minimal responsibility
  - Ideally does one thing, and does it well
- Named based on what it does

</v-clicks>

<h2 v-click>Benefits</h2>

<v-clicks>

- Easier to test
- Easier to understand how they work
- Easier to compose together
- Easier to change
- Easier to detect a bloated function
- A well-named function can often replace a comment

</v-clicks>

---
layout: center-code
size: 3
---

# Nested Control Structures

<v-click>

<<< @/snippets/nested-control-structures-bad.ts{1-5|6-10|11-21|all}

</v-click>

---
layout: center-code
size: 2.5
---

# Nested Control Structures

<v-click>

<<< @/snippets/nested-control-structures-good.ts{1|3-8|10-15|17-20|22|all}

</v-click>

---

# Nested Control Structures

<v-clicks>

- Avoid overly-nested control structures (i.e. less indentation is better)
- Destructure values that are used more than once
- Split out and name conditional logic
- Use early `return`s to handle branches

</v-clicks>

---
layout: center-code
---

# Switch Statements

<v-click>

<<< @/snippets/switch-statements-normal.ts

</v-click>

---
layout: center-code
size: 4
---

# Switch Statements

<v-click>

<<< @/snippets/switch-statements-alternative.ts{1-11|all}

</v-click>

---

# Switch Statements

<v-clicks>

- Easy to forget `break` or `default` case (TypeScript can help)
- Fall through logic can be risky, harder to understand
- Not bad maintainability for small number of cases
- Maintainability does not scale well as more cases are added

</v-clicks>

<h2 v-click>Data-driven Mapping</h2>

<v-clicks>

- Data is not coupled to mapping function
- Types are not coupled to mapping function
- Easier to add/remove/change a mapping

</v-clicks>

---
layout: center-code
size: 3
---

# Long if-else-if Chains

<v-click>

<<< @/snippets/long-if-else-chains-bad.ts

</v-click>

---
layout: center-code
size: 3
---

# Long if-else-if Chains

<v-click>

<<< @/snippets/long-if-else-chains-good.ts

</v-click>

---
layout: center-code
---

# Too Many Function Parameters

<v-click>

<<< @/snippets/too-many-function-parameters.ts{1|1-3|1-5}

</v-click>

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

<v-click>

<<< @/snippets/options-object-parameter.ts{1|3-8|all}

</v-click>

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

<v-click>

<<< @/snippets/comments-explain-with-code.ts{1-3|6-8|all}

</v-click>

---
layout: center-code
---

# Comments - Non-obvious Information

<v-click>

<<< @/snippets/comments-non-obvious-information.ts

</v-click>

---
layout: center-code
---

# Comments - TODOs and Context

<v-click>

<<< @/snippets/comments-todos-and-context.ts{1|3-7|8-9|all}

</v-click>

---

# Reasons to Leave a Comment

<v-clicks>

- Unexpected/non-standard implementation/decision
- Reasoning for one approach over another
- Something is hard to understand at a glance and can't be simplified (regex)
- Link to a formal specification that you're adhering to
- Link to github issue for a bug/workaround

</v-clicks>

---
layout: center-code
---

# Commented Code

<v-click>

<<< @/snippets/commented-code.ts

</v-click>

---

# Commented Code

<v-clicks>

- Fine temporarily, just don't commit it
- Bloats files
- If it's committed, just delete it, it can be recovered (that's the point of version control)
- If it's _not_ committed and you're worried about losing it, commit it and then delete it

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

<v-click>

<<< @/snippets/proximity-implies-association.ts{1-5|7-8|all}

</v-click>

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

<v-click>

<<< @/snippets/separate-groups-of-related-code.ts{1-10|12-23|all}

</v-click>

---
layout: center-code
size: 3
---

# Separate Top-Level Stuff

<v-click>

<<< @/snippets/separate-top-level-stuff.ts{1-8|10-19|all}

</v-click>

---
layout: center-code
size: 2.5
---

# Separate If Statements

<v-click>

<<< @/snippets/separate-if-statements.ts{1-11|13-25|all}

</v-click>

---
layout: center-code
size: 2.5
---

# Separate Final Return Statements

<v-click>

<<< @/snippets/separate-final-return-statements.ts{1-10|12-24|all}

</v-click>

---
layout: center-code
size: 3
---

# Separate Test Cases

<v-click>

<<< @/snippets/separate-test-cases-bad.ts

</v-click>

---
layout: center-code
size: 3
---

# Separate Test Cases

<v-click>

<<< @/snippets/separate-test-cases-good.ts

</v-click>

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
- In the JavaScript/TypeScript ecosystem [Prettier](https://prettier.io/) is the commonly used code formatter

</v-clicks>

---
layout: center-code
size: 3
---

# Code Formatters

<v-click>

<<< @/snippets/code-formatters.ts

</v-click>

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

<v-click>

<<< @/snippets/linters.ts

</v-click>

---

# Git and GitHub

<v-clicks>

- Commit early, commit often
- Past PRs contain tons of context and learnings
- Keep PRs focused and small if possible
  - Split up large changes into smaller PRs
  - No rule that says you can only do 1 PR per Jira card/item of work
- Review your own PR (even before you open it!)
  - Helps catch silly mistakes/oversights
  - Helps gauge whether or not your changes should be split up into multiple PRs
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
