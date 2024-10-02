const vuetify = Vuetify.createVuetify();
const app = Vue.createApp({
  methods: {
    validate() {
      this.$refs.myForm.validate();
    },
    toggle() {
      this.show = !this.show;
    },
  },
  data() {
    return {
      valid: true,
      show: false,
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      confirmPassword: "",
      email: "",
      streetAddress: "",
      suburb: "",
      postcode: "",
      mobileNumber: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => /[a-zA-Z()]$/.test(v) || "Letters only",
      ],
      userRules: [
        (v) => !!v || "User name is required",
        (v) =>
          (v && v.length >= 3) || "User Name must be at least 3 characters",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) =>
          /[$%^&*!]+/.test(v) ||
          "Password must contain at least one special character",
        (v) => (v && v.length >= 8) || "Password must be at least 8 characters",
      ],
      emailRules: [
        (v) => !!v || "Email is required",
        (v) =>
          /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(v) ||
          "Email must be valid",
      ],
      streetAdressRules: [(v) => v.length <= 40 || "Maximum 40 characters"],
      suburbRules: [(v) => v.length <= 20 || "Maximum 20 characters"],
      postcodeRules: [
        (v) => !!v || "Postcode is required",
        (v) => (v && v.length == 4) || "Postcode must be exactly 4 digits",
        (v) => /[0-9]/.test(v) || "Postcode must be numeric",
      ],
      mobileRules: [
        (v) =>
          /^04[0-9]{8}$/.test(v) ||
          "Mobile number must be exactly 10 digits, and start with 04",
      ],
    };
  },
  computed: {
    repeatPasswordRules() {
      return [
        (v) => !!v || "Confirm Password is required",
        (v) => v === this.password || "Password does not match!",
      ];
    },
  },
});
app.use(vuetify);
app.mount("#app");