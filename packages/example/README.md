# `@fastwire/example`

This is a starter package inside the Fastwire monorepo.

## Setup

Make sure the package includes:

- A `tsconfig.json` that extends from the root `tsconfig.base.json`
- A `biome.json` to allow future local overrides
- (Optional) A `vitest.config.ts` using `defineProject()` for per-package testing configuration

Example:

```json
// File: biome.json
{
  "extends": "//"
}
```

```ts
// File: vitest.config.ts
import { defineProject } from 'vitest/config'

export default defineProject({
  test: {
    name: 'Package: Example',
    globals: true,
    environment: 'node',
  },
})
```

## Testing

```bash
pnpm test
```
> 📌 This package does not support local coverage commands.

Each package should define a coverage script that throws explicitly, like:

```json
"scripts": {
  "coverage": "echo \"Run coverage from root only (pnpm coverage)\" && exit 1"
}
```


