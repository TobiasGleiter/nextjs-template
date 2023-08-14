# Next.js 13 Template Overview

This is a [Next.js](https://nextjs.org/) template with following addons:

- [TypeScript](https://www.typescriptlang.org/), [ESLint](https://eslint.org/) and [Husky](https://typicode.github.io/husky/)
- [Tailwindcss](https://tailwindcss.com/)
- [Storybook](https://storybook.js.org/)

Furthermore this Project Template is optimized for VisualStudio code with the Prettier extension.

## Getting Started

Ensure you have [Node.js](http://nodejs.org/) >= 19.8.1 installed, then clone the repository, `cd nextjs13-ts-tailwind-husky-eslint-template` and run:

```bash
    $ [sudo] npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

If you want to use `yarn dev` you have to change in the `package.json` the engines to your yarn version:

```JSON
"engines": {
    "node": ">=16.17.0",
    "npm": "Please use yarn.",
    "yarn": "YOUR-YARN-VERSION"
},
```

# nextjs13-ts-tailwind-husky-eslint-template

## Storybook

Storybook is a tool to design components independent from your website.

### Run Storybook

First, run the Storybook:

```bash
npm run storybook
```

### Storybook workflow

To create a new component follow these steps:

- Locate the `components/template` folder
- copy the e.g `base` folder
- create new (superior) folder in components e.g. `modals`
- paste the `base` folder into the new folder
- change the names of the four files from `BaseTemplate` e.g. into `BaseModal`
- replace all `BaseTemplate` words in the four files via search in folder and replace all (17 occurencies)
- locate the file e.g. `BaseModal.stories.tsx` and change the at `title: 'templates/BaseTemplate'` the `templates` keyword in to the category name you like e.g. `title: 'modals/BaseModals'`

## Github and Husky

There are three main rules created with husky:

- commit-msg
- pre-comit
- pre-push
  To handle errors before commit or push.
  The typical workflow with git is:
- `git add .` to add the current folders or `git add [filename | dir]` to add filename or dir directly.
- `git commit -m "[commit type]:[custom commit text]"` to commit. Commit types an be found under `commitlint.config.js`, e.g. `git commit -m "feat: created new base modal"`. Git commit will automaticly pre-check the code and check if the commit type is valid.
- `git push` to push to the remote repository. git push will automaticly pre-build, only if success push.
  The commit types can be found in the `commitlint.config.js`

## ESLint and CommitLint

ESLint and CommitLint settings can be found in `.eslintrc.json` and `commitlint.config.json`.
If there is an "no-unused-vars" warning in commit/eslint you can underscore the variable until it is used.

## Folder structure

```none
nextjs13-ts-tailwind-husky-eslint-template
└── app
│    ├── favicon.ico
│    ├── globals.css
|    ├── layout.css
|    └── page.tsx
└── components
|    └── template
|    |    ├── base
|    |    │    ├── BaseTemplate.mocks.ts
|    |    │    ├── BaseTemplate.module.css
|    |    │    ├── BaseTemplate.stories.tsx
|    |    |    └── BaseTemplate.tsx
|    |    └── button (...)
└── lib
└── public
|    ├── next.svg
|    └── vercel.svg
└── stories (...)
└── (...)
```
