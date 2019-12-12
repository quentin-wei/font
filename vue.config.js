const path = require("path");

const isPro = process.env.NODE_ENV === "production" ? true : false;

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // 代码保存时进行eslint检测
  lintOnSave: false,

  chainWebpack: config => {
    config.resolve.alias
      // .set("iview$", resolve("node_modules/iview/src"))
      .set("assets", resolve("src/assets"))
      .set("mixin", resolve("src/mixin"));
    // .set("homeapp", resolve("src/pages/home_app"));

    // config.plugin("provide").use(webpack.ProvidePlugin, [
    //   {
    //     _: "lodash"
    //   }
    // ]);

    // 开发生产环境区分
    if (isPro) {
      config.optimization.minimizer([
        new TerserPlugin({
          terserOptions: {
            compress: {
              warnings: false,
              drop_console: false,
              drop_debugger: false,
              pure_funcs: ["console.log"]
            }
          }
        })
      ]);
    } else {
      //  开发环境下
    }
  },
  devServer: {
    port: 5000 // 此处修改你想要的端口号，
  }
};
