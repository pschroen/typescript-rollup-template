# typescript-rollup-template

This is a TypeScript template with Rollup for bundling ES2022 modules.

*Based on https://github.com/rollup/rollup-starter-app*

## Getting started

Clone this repository and install its dependencies:

```bash
git clone https://github.com/pschroen/typescript-rollup-template
cd typescript-rollup-template
npm i

# or
npx degit pschroen/typescript-rollup-template my-app
cd my-app
npm i
```

The `public/index.html` file contains a `<script type="module" src="index.js"></script>` tag, which means we need to create `public/index.js`. The `rollup.config.js` file tells Rollup how to create this bundle, starting with `src/index.ts` and including all its dependencies, including [date-fns](https://date-fns.org/).

`npm run build` builds the application to `public/index.js`.

`npm start` launches a server, using [servez](https://github.com/greggman/servez-cli). Navigate to [localhost:8080](http://localhost:8080).

`npm run dev` will continually rebuild the application as your source files change, along with an inline sourcemap for debugging.

## License

[MIT](LICENSE)
