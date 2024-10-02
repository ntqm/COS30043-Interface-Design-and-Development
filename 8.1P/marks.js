const app = Vue.createApp({
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      students: [
        { name: "Amy", mark: 90 },
        { name: "Bill", mark: 80 },
        { name: "Casey", mark: 78 },
        { name: "David", mark: 84 },
        { name: "Evan", mark: 92 },
        { name: "Felix", mark: 58 },
        { name: "Gaia", mark: 94 },
        { name: "John", mark: 70 },
        { name: "Kylie", mark: 86 },
        { name: "Ace", mark: 88 },
        { name: "Bob", mark: 72 },
        { name: "Charlie", mark: 95 },
        { name: "Diana", mark: 63 },
        { name: "Edward", mark: 91 },
        { name: "Fiona", mark: 84 },
        { name: "George", mark: 77 },
        { name: "Hannah", mark: 55 },
        { name: "Ivan", mark: 69 },
        { name: "Julia", mark: 80 },
        { name: "Kevin", mark: 73 },
        { name: "Linda", mark: 68 },
        { name: "Mike", mark: 82 },
        { name: "Nora", mark: 75 },
        { name: "Oscar", mark: 79 },
        { name: "Paul", mark: 62 },
        { name: "Quinn", mark: 86 },
      ],
    };
  },
  computed: {
    pageCount() {
      return Math.ceil(this.students.length / this.perPage);
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.students.slice(start, end);
    },
  },
  methods: {
    clickCallback(pageNum) {
      this.currentPage = pageNum;
    },
  },
});

app.mount("#app");
