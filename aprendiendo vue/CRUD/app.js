const app = new Vue({
    //Aqui trabajamos la libreria de Vue

    el: '#app', //Aqui le decimos a nuestro codigo que nuestro contenedor con id "app" va a ser gestionado con Vue
    //los datos se trabajan con Data
    data: {
        titulo: 'Gym con Vue',
        tareas: [],
        nuevaTarea: ''
    },
    methods:{
        agregarTarea(){
            //console.log(this.nuevaTarea),
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            console.log(this.tareas);
            this.nuevaTarea = ''
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        },
        editarTarea(index){
            this.tareas[index].estado = true;
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        },
        eliminar(index){
            this.tareas.splice(index, 1);//El splice es para eliminar objetos de un array
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        }
    },
    created(){
        let datosDB = JSON.parse(localStorage.getItem('gym-vue'))
        if(datosDB === null){
            this.tareas = [];
        }else{
            this.tareas = datosDB;
        }
    }
})
