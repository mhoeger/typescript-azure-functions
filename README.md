# Azure Functions ❤️'s TypeScript 
This is an example of a simple function app written in TypeScript. Most of the contents come from default templates that are available through both the [VS Code extension for Azure Functions](https://code.visualstudio.com/tutorials/functions-extension/getting-started) and [Azure Functions Core Tools](https://www.npmjs.com/package/azure-functions-core-tools). The `HelloWorldNpm` function is modified from a default template to import and use an npm module.

## Prerequisites
  - Install latest Active LTS version of [Node.js](https://nodejs.org)
  - Install latest [azure-functions-core-tools](https://www.npmjs.com/package/azure-functions-core-tools) if you do not already have it.
    - `npm install -g azure-functions-core-tools` 
  - Run `npm install` from project root to install dev dependencies. 
  - Run `func azure functionapp fetch-app-settings <functionAppName>` where `<functionAppName>` is a function app you created in the Azure Portal. 

## The basics
### Build
To build this Function app run `npm run build`. (Note that `npm start` and `F5` already include a build step.) If you are using binding extensions, the necessary binaries are also installed.

On build, all TypeScript code in the root directory is transpiled into JavaScript and placed in an output directory called `dist`, as configured in `tsconfig.json` by `outDir`. We don't advise changing this configuration. The default [`scriptFile`](#using-scriptfile) property of each function assumes that the transpiled JavaScript output will be located in `dist` (example: `../dist/FunctionName/index.js`).

### Run
To run your code, use `npm start`. If you are using VS Code, you can press `F5` to build and run instead.

This command builds your Function app and starts the Azure Functions host to run your code. If you only want to run your built code, you can run `func start` or `npm run start:host`.

### Develop
`npm run test` can be implemented to test your code. To ignore specific files and folders when deploying, add them to `.funcignore`.

### Deploy
To prepare your function app for deployment, use `npm run build:production`. If you are using VS Code, deploy by clicking [`Deploy to Function App`](https://code.visualstudio.com/tutorials/functions-extension/deploy-app).  If you already have a deployed Function app in Azure and want to update its contents, you can also use `func azure functionapp publish <FunctionAppName>`.

## Learn More
If you are getting started with Azure Functions, you can follow this tutorial to [create and deploy your first JavaScript function](https://docs.microsoft.com/azure/azure-functions/functions-create-first-function-vs-code). We recommend that you use Visual Studio Code and the [Azure Functions extension](https://code.visualstudio.com/tutorials/functions-extension/getting-started).

The [Azure Functions developer guide](https://docs.microsoft.com/azure/azure-functions/functions-reference) and the [JavaScript-specific developer guide](https://docs.microsoft.com/azure/azure-functions/functions-reference-node) are good resources to gain an understanding of more Azure Functions concepts.
