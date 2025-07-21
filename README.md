# Fastwire

![Biome (lint + format)](https://github.com/gambonny/fastwire/actions/workflows/biome_ci.yml/badge.svg)
![Lefthook](https://img.shields.io/badge/hooks-lefthook-%23f04c4c?logo=git)


> A lean monorepo starter powered by pnpm. Minimal config, strict version control, fast workflows.

## Features

- ✅ Zero-runtime monorepo setup
- ✅ Uses pnpm catalogs for centralized dependency control
- ✅ Volta-pinned Node and pnpm versions
- ✅ Biome for linting and formatting
- ✅ TypeScript with strict, modern config
- ✅ Lefthook for fast pre-commit checks
- ✅ Ready for shared packages in `packages/*`

## Tooling

Fastwire uses:

- [Volta](https://volta.sh) to pin Node and pnpm versions across all contributors
- [Biome](https://biomejs.dev) for fast, all-in-one formatting and linting
- [TypeScript](https://www.typescriptlang.org/) with a strict base config and modern features
- [Lefthook](https://github.com/evilmartians/lefthook) to run local Git hooks like format, lint, or test before committing


> ℹ️ **pnpm support in Volta is experimental** — follow [these instructions](https://docs.volta.sh/advanced/pnpm) to enable it properly on your system.

## Getting Started

```bash
# 1. Install Volta (if not already installed)
curl https://get.volta.sh | bash

# 2. Restart your shell and install the pinned toolchain manually
volta install node@22.17.1 pnpm@10.13.1

# 3. Install workspace dependencies
pnpm install

# 4. Run Biome checks
pnpm check
```

## Project Structure

```bash
- pnpm-workspace.yaml    # Workspace & catalog config
- package.json           # Volta + workspace metadata
- packages/              # Place your shared packages here
- tsconfig.base.json     # Shared strict TypeScript configuration
- biome.json             # Biome config (lint + format)
- lefthook.yml           # Lefthook hook configuration
```
