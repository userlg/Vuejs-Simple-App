new Vue({
  el: "#app",
  data: {
    info: null,
    datos: null,
    esp: " ",
    num: 0,
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
    notificePorcentaje: function (x) {
      let porcentaje = ((100 / 6) * x) / 10;
      // alert("El porcentaje de caracteres es " + porcentaje.toFixed(2) + "%");
      this.num = porcentaje.toFixed(2);
    },
    showPorcentaje: function() {
      alert("El porcentaje de caracteres es " + this.num + "%");
    },
  },
});
