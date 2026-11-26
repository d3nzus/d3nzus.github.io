# Instructions

These rules apply to this repository. They are written as portable defaults, so the same
file can also serve as a global `~/.config/opencode/AGENTS.md`. More specific instruction
files may add rules, but must not contradict these.

## Working style

- Read the relevant code before editing; never guess at a symbol, path, or API.
- State assumptions and open questions early, especially when requirements are ambiguous.
- Keep changes focused on the task. Do not reformat, rename, or delete unrelated code.
- Prefer the smallest change that fully solves the problem; call out broader refactors instead of doing them silently.
- When a task spans multiple steps, outline the plan before executing and report what changed.
- Never report work as complete without running the relevant verification commands.

## Verification

- Node/Vite: `npm ci` for a clean install and `npm run build` for the production build used by CI (`.github/workflows/deploy.yml`).
- There is no test or lint script yet. Do not claim a check ran when no script exists; if you add tooling, add the script and document it here.
- For UI changes, run `npm run dev` and check the affected route, including a narrow viewport.
- If a check cannot run (missing toolchain, network, credentials), say so explicitly and describe the residual risk.
- New behavior should come with a regression test once a test runner is configured.

## Code conventions

- React 19, TypeScript, Vite, and Tailwind CSS 4. Use function components and hooks.
- Keep the existing layout: routes in `src/app`, pages in `src/pages`, page sections in `src/blocks`, reusable pieces in `src/components`, static data in `src/content`, shared types in `src/types.ts`, and global styles in `src/styles/global.css`.
- Use relative imports, matching the existing files. Do not introduce a path alias without updating `vite.config.js` and the TypeScript configuration.
- Style with Tailwind utility classes; keep keyframes and shared base styles in `src/styles/global.css`.
- Type component props and data explicitly; avoid `any` and non-null assertions.
- Add dependencies only when the existing stack cannot do the job; keep scripts runnable with `npm`.
- Preserve `base: ""` in `vite.config.js`; GitHub Pages serves the site from the repository root.
- Keep modules small and single-purpose; mirror the existing file layout and naming instead of inventing new patterns.
- Document public behavior where users will look for it (README) in the same change.

## Safety

- Never commit secrets, tokens, credentials, or machine-specific absolute paths. Use environment variables or config indirection.
- Treat generated scripts, imported configs, and other user-supplied content as untrusted: confirm before executing, and never execute during a dry run.
- Do not run destructive git operations (`push --force`, `reset --hard`, history rewrites, branch deletion) without explicit confirmation.
- Do not overwrite or delete user files that are unrelated to the task; investigate unfamiliar changes before touching them.

## Commits and branches

- Use Conventional Commits: `feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `meta:`.
- Keep commits scoped; do not mix refactors with behavior changes.
- Branch names: `feature/<topic>`, `fix/<topic>`, `docs/<topic>`.
- Never amend or rewrite history that has been pushed to a shared branch unless asked.

## Environment notes

- Shell is Linux (bash). Quote paths containing spaces.
- CI runs Node 20. Use `npm` and keep `package-lock.json` in sync with dependency changes.
- Prefer repo-relative paths in output; avoid leaking the local username or home directory into committed files.

## Communication

- Be concise and concrete. Reference files as `path:line` so the user can navigate directly.
- Summarize findings by severity, then recommend a prioritized next step.
- Ask before making irreversible changes; otherwise proceed and report.
