"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      emailList: [],
      apiBoolean: "https://flynn.boolean.careers/exercises/api/random/mail",
      numEmail: 10,
    };
  },
  mounted() {
    for (let i = 0; i < this.numEmail; i++) {
      axios.get(this.apiBoolean).then((emailResponse) => {
        console.log("cpu");
        this.emailList.push(emailResponse.data.response);
      });
    }
  },
  methods: {},
}).mount("#app");
