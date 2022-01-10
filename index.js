// 此插件用于按模块化动态分割按需注册vuex
// this.$options对象即为例如.vue文件中 export default 导出的模块属性对象集合
// this.$options.fitVuexModuleName 取值取的为自定义使用vuex仓库的指定模块的名称。 如果不指定 默认取值 this.$options.name 模块名 name
/**
 * 重要参数说明：
 * isVuex--在组件模块中定义此属性，为boolean类型 接收值 true/false；
 * fitVuexModuleName--在组件模块中定义此属性，为String类型 或者Array<String> 类型，接收值例如："Login"/["Login", "ContractFilmList"]；
 */
 export default {
  install(Vue) {
    Vue.mixin({
      beforeCreate() {
        if (this.$options.isVuex) {
          if (this.$options.fitVuexModuleName instanceof Array) {
            for (let i = 0; i < this.$options.fitVuexModuleName.length; i++) {
              let name = this.$options.fitVuexModuleName[i];
              import("../store/modules/" + name).then((res) => {
                this.$store.registerModule(name, res.default);
              });
            }
          } else {
            var name = this.$options.fitVuexModuleName
              ? this.$options.fitVuexModuleName
              : this.$options.name;
            import("../store/modules/" + name).then((res) => {
              this.$store.registerModule(name, res.default);
            });
          }
        }
      },
    });
  },
};
