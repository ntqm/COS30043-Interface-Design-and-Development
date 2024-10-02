const app = Vue.createApp({});

app.component("app-mypost", {
  data() {
    return {
      statPosts: [],
      strStatus: "",
    };
  },
  template: `
    <div>
        <p>
            <b>Status:</b>
            <input v-model="strStatus" />
            <button v-on:click="add(strStatus)">Post</button>
        </p>
        <p v-for="(status, index) in statPosts" :key="index">
            {{ status }}
            <button v-on:click="remove(index)">Del</button>
        </p>
    </div>
  `,
  methods: {
    add() {
      this.statPosts.push(this.strStatus);
    },
    remove(index) {
      this.statPosts.splice(index, 1);
    },
  },
});

app.mount("#app");
