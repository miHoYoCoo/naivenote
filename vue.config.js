const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports={
  configureWebpack:{

  },
  devServer:{
    port: 8080,
    host: 'localhost',
  },
}

