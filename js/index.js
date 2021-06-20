import Vue from "../node_modules/vue/dist/vue.esm.browser";

/**
 * main vue instance
 */
new Vue({
  el: "#app",
  data: {
    modes: ["TEST", "LIVE"],
    selectedMode: "TEST",
    domain: {
      input: "",
      isEmpty: false, // the field is technically empty but will be validated once the button is clicked
    },
    entityTypes: ["DIVISION", "MERCHANT", "CHANNEL"],
    selectedEntityType: "DIVISION",
    entityName: {
      input: "",
      isEmpty: false, // the field is technically empty but will be validated once the button is clicked
    },
  },

  methods: {
    validateInputs: function () {
      // validate domain
      this.domain.isEmpty = this.domain.input == "" ? true : false;
      // validate entity name
      this.entityName.isEmpty = this.entityName.input == "" ? true : false;
    },
  },
});
