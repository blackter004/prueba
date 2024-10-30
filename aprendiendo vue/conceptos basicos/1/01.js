const app = new Vue({
    //Aqui trabajamos la libreria de Vue

    el: '#app', //Aqui le decimos a nuestro codigo que nuestro contenedor con id "app" va a ser gestionado con Vue
    //los datos se trabajan con Data
    data: {
        titulo: 'Hola mundo con Vue', //aqui ya trabajamos con un dato para nuestro sitio web
        frutas: ['Manzana', 'Pera', 'Platano'],//Aqui ya lo trabajariamos con arrays
        jugadores: [
            {nombre:'Belli', numero:5},
            {nombre:'Vini', numero:7},
            {nombre:'Mbappe', numero:9}
        ], //Aqui estamos trabajando un objeto
    
        nuevoJugador: '',//dejamos esto vacio para que con el v-model le enviemos lo que contendra
        total: 0
    },
    methods:{
        agregarJugador(){
            this.jugadores.push({//Utilizamos la palabra reservada de Vue "this" para poder acceder a los datos nuestro codigo y realizar los cambios
                nombre: this.nuevoJugador, numero:0
            });
            this.nuevoJugador= '' //Para dejar el input vacio luego de enviar el string
        }
    },//Nos sirve para agregar metodos de la misma forma que los objetos

    computed: {//Computed tambien es un arregloen donde guardamos todas las funciones que necesitemos
        sumarDorsales(){
            this.total = 0; //Es como quiero que parta en 0 para que haga el recorrido
            for(jugador of this.jugadores){//Ciclo para que nuestros dorsales se sumen el uno al otro
                this.total = this.total + jugador.numero;
            }
            return this.total;
        }
    }
})
