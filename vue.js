new Vue({
  el: "#app",
  data: {
    info: null,
    datos: null,
    esp: ' '
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
      notificePorcentaje: function( x){
          
          alert('Funciona');
      }
  },
});



