import Vue from "../node_modules/vue/dist/vue.common.prod.js";

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
    generatedURL: "",
  },

  methods: {
    validateInputs: function () {
      // validate domain
      this.domain.isEmpty = this.domain.input == "" ? true : false;
      // validate entity name
      this.entityName.isEmpty = this.entityName.input == "" ? true : false;

      /**
       * only execute method to generate URL if both important fields are complete
       */
      if (!this.domain.isEmpty && !this.entityName.isEmpty) {
        this.generateURL();
      } else {
        this.generatedURL = "";
      }
    },

    generateURL: function () {
      let bipURL = "https://";

      // check for mode, if "TEST", append subdomain
      if (this.selectedMode == "TEST") {
        bipURL += "test.";
      }

      // get domain and append path
      bipURL += `${this.domain.input}/bip/login?`;

      switch (this.selectedEntityType) {
        case "DIVISION":
          bipURL += `division_name=${this.entityName.input}`;
          break;
        case "MERCHANT":
          bipURL += `merchant_name=${this.entityName.input}`;
          break;
        case "CHANNEL":
          bipURL += `channel_name=${this.entityName.input}`;
          break;
        default:
          console.error("Unable to validate entity type.");
          break;
      }

      // replace all blank spaces into "+" sign
      this.generatedURL = bipURL.replaceAll(" ", "+");
    },
  },
});
