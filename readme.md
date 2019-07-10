# Using es6 imports in Node.js
Node.js doesn't natively support ES6 imports. It uses CommonJS module system. However, Babel enables the use of ES6 modules in node. Babel basically transpiles all source files to ES5 and CommonJS so that it works natively.

# Steps to get es6 in node

## Installing babel

npm install @babel/core @babel/node --save-dev

## Adding babel presets (Optional)

npm install @babel/preset-env --save-dev

### Create a .babelrc file

```
  {
    "presets": [
      "@babel/preset-env"
    ]
  }
```

## Add the babel-node start script to npm script in package.json
```
  "scripts": {
    "anyTaskName": "nodemon --exec babel-node src/mainModule.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

## Running npm script
Using the terminal, type the commmand to run the npm task added ('anyTaskName') to the 'scripts' in last step.

```npm run anyTaskName```

