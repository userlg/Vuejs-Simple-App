new Vue({
  el: "#app",
  data: {
    info: null,
    datos: null
  },

  mounted() {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => (this.info = response.data))
      .catch((e) => {
        console.log(e);
      });
  },
  methods: {
      mostrarId: function(){
          console.log(this.info.id)
      }
  },
});



