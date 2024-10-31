const app = new Vue({

    el: '#app',

    data:{
        mensaje: 'hola soy sebas',
        contador: 0
    },
    methods: {

    },
    computed: {
        invertido(){
            return this.mensaje.split('').reverse().join('');//utilizamos elsplit para separar las letras como un array y el reversepara invertir el contenido, y luego con el join hacemos quese nos vea como un texto normal y no como un array

        },

        color(){
            return{
                'bg-success': this.contador <=10,
                'bg-warning': this.contador > 10 && this.contador < 20,
                'bg-danger': this.contador >=20
            }
        }


    }

})