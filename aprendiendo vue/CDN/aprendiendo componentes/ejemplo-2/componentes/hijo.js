Vue.component('hijo',{
    template://html
    `
    <div class="py-5 bg-success">
        <h4>componente hijo: {{numero}}</h4>
        <h4>Nombre: {{nombre}}<h4/>
    </div>
    `,
//Ahora vemos algo de como se utilizan los props
    props: ['numero'],
    data(){
        return{
            nombre: 'Sebas'
        }
    },

    mounted(){
        this.$emit('nombreHijo', this.nombre) //Tener en cuenta el ciclo de vida en el que especifica en que parte del proceso es el mounted, luego con este emit le ponemos un nombre y especificamos que dato es el que queremos emitir
        
    }
})