# Fastwire

> A lean monorepo starter powered by pnpm. Minimal config, strict version control, fast workflows.

## Features

- ✅ Zero-runtime monorepo setup
- ✅ Strict version control with `catalogMode: strict`
- ✅ Volta-pinned Node and pnpm versions
- ✅ Ready for shared packages in `packages/*`

## Tooling

Fastwire uses [Volta](https://volta.sh) to pin Node and pnpm versions across all contributors.

> ℹ️ **pnpm support in Volta is experimental** — follow [these instructions](https://docs.volta.sh/advanced/pnpm) to enable it properly on your system.

## Getting Started

```bash
# 1. Install Volta (if not already installed)
curl https://get.volta.sh | bash

# 2. Restart your shell and install the pinned toolchain manually
volta install node@22.17.1 pnpm@10.13.1

# 3. Install workspace dependencies
pnpm install
```

## Project Structure
pnpm-workspace.yaml    # Workspace & catalog config
package.json           # Volta + workspace metadata
packages/              # Place your shared packages here

