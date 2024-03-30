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


Please prepare an auto-complete component in React TypeScript.

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

( )  11. Add a README.md file explaining how to run the project.

(✓)  12.Bonus Point: Load data using a real API call to some resource.


When you have finished the assignment, zip your GitHub repo
(make sure to include the .git folder) and send us the .zip or
Google Drive link.

