import { createStore } from 'vuex'

export default createStore({
  state: {
    frutas:[
      {nombre: 'Manzana', cantidad: 0},
      {nombre: 'Pera', cantidad: 0},
      {nombre: 'Naranja', cantidad: 0}
    ]
  },
  getters: {
  },
  mutations: {
    aumentar(state, index){
      state.frutas[index].cantidad ++

    },//creamos la mutacion y le pasamos los parametros de state y de index
    reiniciar(state){
      state.frutas.forEach(elemento =>{
        elemento.cantidad=0
      }//con el foreach le decimos que vaya recorriendo uno a uno el contenido de nuestro array y lo vaya colocando en 0
      

      )
    }
  },
  actions: {
  },
  modules: {
  }
})
