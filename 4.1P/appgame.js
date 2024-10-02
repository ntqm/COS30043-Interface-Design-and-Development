Vue.createApp({
  data() {
    return {
      input: 0,
      random: this.randomNum(),
      msg: "Start guessing!",
    };
  },
  methods: {
    randomNum: function () {
      return Math.floor(Math.random() * 100) + 1;
    },
    checkGuess: function () {
      if (this.input == this.random) {
        this.msg = "You got it!";
      } else if (this.input > this.random) {
        this.msg = this.input + " Guess lower!";
      } else {
        this.msg = this.input + " Guess higher!";
      }
    },
    giveUp: function () {
      this.msg = "The number you are looking for is " + this.random + ".";
    },
    startOver() {
      window.location.reload();
    },
  },
}).mount("#app");
