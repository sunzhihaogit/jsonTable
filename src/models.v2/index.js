'use strict';

const modulesFiles = require.context('./', true, /\.js$/);
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = modulesFiles(modulePath);
  modules = [...modules, value.default];
  return modules;
}, []);

let result = modules.filter(item => item).reduce((r, module) => {
  r[module.name] = module;
  return r;
}, {});
result.getModel = (modelName) => {
  return result[modelName];
}

export default result;
