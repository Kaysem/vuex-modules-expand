<div>
  <h1>vuex-modules-expand</h1>  
</div>
<img src="https://img.shields.io/badge/Author-@kaysem-brightgreen"></img>

<img alt="npm" src="https://img.shields.io/npm/v/vuex-modules-expand?color=blue">

## Install

```javascript
npm install vuex-modules-expand
```



## Import

```javascript
// main.js
import { createApp } from "vue"; // 依赖vue (rely on Vue)
import store from "./store";
import vuexModuleExpand from "vuex-modules-expand"; // vuex按模块需求动态载入(Dynamic loading as required by the module)
```

## Use

```javascript
// main.js
app.use(vuexModuleExpand);// 注册插件(To register the plugin)
```

## Vue

```vue
<template>
  <div>
  </div>
</template>

<script>
// @ is an alias to /src
import { onBeforeMount, toRefs, reactive, getCurrentInstance } from "vue";
// 从 vuex 中导入 useStore 方法
import { useStore } from "vuex";
/**
 * 重要参数说明：
 * isVuex--在组件模块中定义此属性，为boolean类型 接收值 true/false；
 * fitVuexModuleName--在组件模块中定义此属性，为String类型 或者Array<String> 类型，接收值例如："Login"/["Login", "ContractFilmList"]；
 */
export default {
  isVuex: true, // 是否使用动态加载的vux模块
  fitVuexModuleName: "Contract", // 如果不指定 默认取值name
  name: "contant", // 如果不指定 默认取此值
  components: {},
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>

```



## Description

此插件用于按模块化动态分割按需注册vuex

```txt
// this.$options对象即为例如.vue文件中 export default 导出的模块属性对象集合
// this.$options.fitVuexModuleName 取值取的为自定义使用vuex仓库的指定模块的名称。 如果不指定 默认取值 this.$options.name 模块名 name

```

## Author List

@kaysem
