# oxfmt + oxlint + Tailwind CSS

A demo project showcasing how to use [oxlint](https://oxc.rs/docs/guide/usage/linter) with the [eslint-plugin-better-tailwindcss](https://github.com/schoero/eslint-plugin-better-tailwindcss) ESLint plugin for Tailwind CSS class linting, alongside [oxfmt](https://oxc.rs/docs/guide/usage/formatter) for code formatting.

## What is this?

This repository demonstrates a JavaScript/TypeScript tooling setup using Rust-based tools from the [oxc](https://oxc.rs) project:

- **oxlint** - A fast JavaScript/TypeScript linter (50-100x faster than ESLint)
- **oxfmt** - A fast code formatter
- **eslint-plugin-better-tailwindcss** - An ESLint plugin that validates Tailwind CSS classes

The key feature showcased here is oxlint's ability to run ESLint plugins via the `jsPlugins` configuration, allowing you to use existing ESLint ecosystem plugins with oxlint's superior performance.

## Features

- React + TypeScript + Vite setup
- Tailwind CSS v4 integration
- Linting with oxlint including:
  - Core JavaScript/TypeScript rules
  - TypeScript-specific rules
  - Unicorn plugin rules
  - Tailwind CSS class validation via better-tailwindcss plugin
- Code formatting with oxfmt

## Demo Components

The `src/components/` directory contains example components demonstrating both correct and incorrect Tailwind CSS usage:

- `Button.tsx` - Shows proper button styling and examples that trigger various lint errors
- `Card.tsx` - Demonstrates card components with class ordering issues
- `Layout.tsx` - Layout components with responsive design examples

## Scripts

```bash
pnpm dev           # Start development server
pnpm build         # Build for production
pnpm lint          # Run oxlint
pnpm format        # Format code with oxfmt
pnpm format:check  # Check formatting without writing
```

## Configuring oxlint with the Tailwind CSS ESLint Plugin

This section provides step-by-step instructions for setting up oxlint with `eslint-plugin-better-tailwindcss` in your own project.

### Step 1: Install Dependencies

```bash
pnpm add -D oxlint eslint-plugin-better-tailwindcss
```

### Step 2: Create the oxlint Configuration File

Create a `.oxlintrc.json` file in your project root:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["typescript"],
  "jsPlugins": ["eslint-plugin-better-tailwindcss"],
  "rules": {
    "better-tailwindcss/enforce-consistent-class-order": [
      "warn",
      { "entryPoint": "src/style.css" }
    ],
    "better-tailwindcss/no-conflicting-classes": [
      "error",
      { "entryPoint": "src/style.css" }
    ],
    "better-tailwindcss/no-duplicate-classes": [
      "warn",
      { "entryPoint": "src/style.css" }
    ],
    "better-tailwindcss/no-unnecessary-whitespace": [
      "warn",
      { "entryPoint": "src/style.css" }
    ],
    "better-tailwindcss/no-unregistered-classes": [
      "error",
      { "entryPoint": "src/style.css" }
    ]
  }
}
```

### Step 3: Configure the Entry Point

The `entryPoint` option is critical for Tailwind CSS v4. It should point to your main CSS file that imports Tailwind:

```css
/* src/style.css */
@import "tailwindcss";
```

This allows the plugin to understand your Tailwind configuration and validate classes correctly.

### Step 4: Add a Lint Script

Add a lint script to your `package.json`:

```json
{
  "scripts": {
    "lint": "oxlint"
  }
}
```

### Step 5: Run the Linter

```bash
pnpm lint
```

### Available Rules

The `eslint-plugin-better-tailwindcss` plugin provides the following rules:

| Rule | Description |
|------|-------------|
| `enforce-consistent-class-order` | Ensures Tailwind classes are sorted in a consistent order |
| `enforce-consistent-line-wrapping` | Enforces consistent line wrapping for long class lists |
| `no-conflicting-classes` | Detects conflicting Tailwind classes (e.g., `text-red-500 text-blue-500`) |
| `no-duplicate-classes` | Detects duplicate Tailwind classes |
| `no-unnecessary-whitespace` | Removes extra whitespace in class strings |
| `no-unregistered-classes` | Detects classes that aren't valid Tailwind utilities |

### Example Lint Output

When you run `pnpm lint` on this demo project, you'll see errors for the intentionally bad components:

```
  x eslint-plugin-better-tailwindcss(no-duplicate-classes): Duplicate class: 'bg-blue-500'.
    ╭─[src/components/Button.tsx:30:24]
    ...

  x eslint-plugin-better-tailwindcss(no-conflicting-classes): Conflicting classes: 'text-red-500' and 'text-blue-500'.
    ╭─[src/components/Button.tsx:39:24]
    ...
```

### Auto-fixing Issues

Many of the Tailwind CSS lint issues can be automatically fixed using the `--fix` flag:

```bash
oxlint --fix
```

This will automatically fix issues like:
- Duplicate classes (removes duplicates)
- Unnecessary whitespace (normalizes spacing)
- Class ordering (sorts classes consistently)

Note that some issues like conflicting classes (`text-red-500 text-blue-500`) cannot be auto-fixed since oxlint cannot determine which class you intended to use.

### Tips

- **Tailwind v4**: Always specify the `entryPoint` option pointing to your CSS file with `@import "tailwindcss"`
- **Performance**: oxlint with JS plugins is still significantly faster than ESLint
- **Gradual adoption**: You can enable rules one at a time, starting with `no-conflicting-classes` and `no-duplicate-classes` which catch the most common issues
- **CI integration**: Use `oxlint` in CI to catch issues, and `oxlint --fix` locally to auto-fix them before committing
