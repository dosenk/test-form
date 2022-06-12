// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createProxyMiddleware } = require("http-proxy-middleware");

console.log("createProxyMiddleware");
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://152.228.215.94:81/api",
      changeOrigin: true,
    })
  );
};
