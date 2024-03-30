# React + Vite + TypeScript Project

This is a simple starter template for a React project configured with Vite and TypeScript.

## Prerequisites

Before you start, make sure you have Node.js and npm (or yarn) installed on your machine.

## Getting Started

1. Clone or Download this repository to your local machine:

```
git clone https://github.com/murilloves/deel-frontend-test.git
```

2. Navigate to the project directory:

```
cd project-directory
```

3. Install dependencies using npm or yarn:

`npm install`  or  `yarn`


## Development
To start the development server, run the following command:

`npm run dev`

   or

`yarn dev`

This will start the development server at http://localhost:3000 by default.

## Linting
To lint the project files, run:

`npm run lint`

   or

`yarn lint`

This will lint TypeScript and JSX files using ESLint with TypeScript support.



## Build
To build the project for production, run the following command:

`npm run build`

  or

`yarn build`

This will create an optimized production build of your project in the dist directory.

## Serve Production Build

To serve the production build locally, run the following command:

`npm run preview`

  or

`yarn preview`

This will serve the production build using Vite's preview server.

## Dependencies
- react: ^18.2.0
- react-dom: ^18.2.0

## Development Dependencies
- @types/react: ^18.2.66
- @types/react-dom: ^18.2.22
- @typescript-eslint/eslint-plugin: ^7.2.0
- @typescript-eslint/parser: ^7.2.0
- @vitejs/plugin-react: ^4.2.1
- eslint: ^8.57.0
- eslint-plugin-react-hooks: ^4.6.0
- eslint-plugin-react-refresh: ^0.4.6
- typescript: ^5.2.2
- vite: ^5.2.0

## License

This project is licensed under the MIT License - see the LICENSE file for details.

```Feel free to customize the README.md according to your project's specific details and requirements. Let me know if you need any further assistance!```


# Deel Frontend test

## Please prepare an auto-complete component in React TypeScript.

(✓)  1. Performance matters as we are expecting a production ready
component.

(✓)  2. You cannot use any 3rd party libraries - only pure React and internal
DOM functions.

(✓)  3. You should use TypeScript and write proper interfaces and types.

(✓)  4. The function to filter the data should be asynchronous. You can use
mock data (such as a JSON array), but the function which uses it
should be asynchronous (similar to a real REST call).

(✓)  5. It should have basic working CSS. No need for anything fancy (such
as drop shadows etc).

(✓)  6. You need to handle all non-standard/edge use-cases - it should have
a perfect user-experience.

(✓)  7. Highlight the matching part of the text, in addition to showing it.

(✓)  8. No external state management libraries (refer to #1 as well), only
native React method.

(✓)  9. Use only functional components with hooks.

(✓)  10.Shortcuts and hacks are ok - but you have to add comments on what
you are doing and why.

(✓)  11. Add a README.md file explaining how to run the project.

(✓)  12.Bonus Point: Load data using a real API call to some resource.


When you have finished the assignment, zip your GitHub repo
(make sure to include the .git folder) and send us the .zip or
Google Drive link.



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

