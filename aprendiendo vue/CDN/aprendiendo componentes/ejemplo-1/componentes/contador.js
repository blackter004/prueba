Vue.component('contador', {
    //Aqui con el comentario de html me deja vizualizar mejor la estructura gracias a la extension es6-string-html
    template://html 
    `
    <div>
        <h3>{{numero}}</h3>
        <button @click="numero++">+</button>
    </div> <!--Todo esto debe ir dentro de un div si son varias cosas-->
    
    `,//Utilizamos las comillas invertidas `` para poder trabajar en varias lineas de html en nuestro js

    data(){
        return{
            numero: 0
        }//se retornan cada uno de los datos
    }//La data en los componentes se utiliza como una funcion
})//creacion de componentes