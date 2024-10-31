Vue.component('padre',{
    template://html
    `
    <div class="p-5 bg-dark text-white">
        <h2>Componente Padre: {{numeroPadre}}</h2>
        <button class="btn btn-danger" @click="numeroPadre++">+</button>
        {{nombrePadre}}<!--Aqui va a tener el mismo dato del hijo al haberlo hecho dinamico con el evento-->
        <hijo :numero="numeroPadre" @nombreHijo="nombrePadre = $event"></hijo><!--componente hijo--> <!--Llamamos el evento del componente hijo con el $event y @nombre-del-data-->
        
    </div>
    `,

    data(){
        return{
            numeroPadre:0,
            nombrePadre: ''
        }
    }
})