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
      this.generaEmail();
    }
  },
  methods: {
    generaEmail() {
      axios.get(this.apiBoolean).then((emailResponse) => {
        this.emailList.push(emailResponse.data.response);
      });
    },
    getInitials(email) {
      const array = email.split(".");
      if (array.length > 2) {
        return array[0][0] + array[1][0];
      }
      return array[0][0];
    },
  },
}).mount("#app");
