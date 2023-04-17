# Code style conventions

## Format

- Indent with **2** spaces
- **Double** quotes
- **Max** line length is **80** characters
- **Unix** line endings
- No semi-colons
- Trailing commas are **required**

## Naming

- Use laconic, descriptive names. Forbidden abbreviations, single letters, non-English words.

  ```ts
  // 👎 Bad
  let c = 1;
  c++;

  const obj = {
    ...
  };

  const btnEl = document.querySelector('.button');

  // 👍 Good
  let counter = 0;
  counter++;

  const parsedWeather = {
    ...
  };

  const buttonElement = document.querySelector('.button');
  ```

- Files should be named in `kebab-case`.

  ```ts
  // 👎 Bad
  import { UserProfile } from "./UserProfile"

  // 👍 Good
  import { ProfileForm } from "./profile-form"
  ```

- In most of cases, use `camelCase` (variables, functions, methods, properties, parameters). Use `PascalCase` for classes, interfaces, types, enums. Use `UPPER_CASE` for constants.

## Comments

- Write self-documenting code. **Do not** use comments to explain what your code does.

## Functions

- We use **arrow functions** as our default function declaration style, depending on the context.

## Code modularity

- Use ESM `import` keyword.

  ```ts
  // 👎 Bad
  const fs = require("fs")

  // 👍 Good
  import fs from "fs"
  ```

- Do not put multiple classes/components and so on in a single file. Each file should contain only one class/component, etc.

- Do not put file extension in `import` statements.

  ```ts
  // 👎 Bad
  import { ProfileForm } from "./profile-form.tsx"

  // 👍 Good
  import { ProfileForm } from "./profile-form"
  ```

- Do not use `default` exports where possible. Prefer using named exports instead.

  ```ts
  // 👎 Bad

  // candidate.ts
  export default class Candidate extends User {
    ...
  }
  // some-file.ts
  import Candidate from './candidate';

  // 👍 Good

  // candidate.ts
  export class Candidate extends User {
    ...
  }
  // some-file.ts
  import { Candidate } from './candidate';
  ```
