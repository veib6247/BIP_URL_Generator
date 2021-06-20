import Vue from "../node_modules/vue/dist/vue.esm.browser";

/**
 * main vue instance
 */
new Vue({
  el: "#app",
  data: {
    message: "You loaded this page on " + new Date().toLocaleString(),
  },
});
