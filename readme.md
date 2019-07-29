# Using es6 imports in Node.js
Node.js doesn't natively support ES6 imports. It uses CommonJS module system. However, Babel enables the use of ES6 modules in node. Babel basically transpiles all source files to ES5 and CommonJS so that it works natively.

# Steps to run es6 in node

## Installing babel

```npm install @babel/core @babel/node --save-dev```

## Adding babel presets (Optional)

```npm install @babel/preset-env --save-dev```

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

# Steps to use VS code debugger 

## Installing babel
```npm install @babel/core @babel/cli --save-dev```

## Add the babel compile script to npm script in package.json
```
  "scripts": {
       "build": "babel  src --out-dir out  --source-maps"
  }
```

## Add debug configuration in launch.json
We can use `preLaunchTask` to transpile es6 before running 
```
    {
      "type": "node",
      "request": "launch",
      "name": "Debug from Source Maps",
      "program": "${workspaceFolder}/out/index.js",
      "preLaunchTask": "npm: build",
    }
```