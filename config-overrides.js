 const { override, fixBabelImports , addLessLoader,addDecoratorsLegacy,addWebpackAlias} = require ('customize-cra');

 module.exports = override(
     // 按需加载组件代码和样式
       fixBabelImports('import', {
             libraryName: 'antd',
         libraryDirectory: 'es',
         // style: 'css',
           style: true,
       }),
      //自定义主题色
      addLessLoader({
            javascriptEnabled: true,
        modifyVars: { '@primary-color': '#666888' },

  }),
     //添加babel插件支持 装饰器 语法：简化高阶组件使用
     addDecoratorsLegacy(),
     //自定义路径
     addWebpackAlias()
 );