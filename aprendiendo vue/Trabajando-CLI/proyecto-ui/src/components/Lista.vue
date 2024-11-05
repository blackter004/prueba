<template>
  <div>
    <ul class="list-group">
      <li v-for="(item, index) of arrayOrdenado" :key="item.id" @click="aumentar(index)"
        class="list-group-item d-flex justify-content-between align-items-center"
      > <!--Es necesario poner alguna key para que no nos muestre un error y en le ponemos tambien al for el index para que lo atrape- como parametro-->
      {{ index }} - {{ item.nombre }}
        <span class="badge text-bg-primary rounded-pill">{{ item.cantidad }}</span>
      </li>

      <button class="btn btn-danger btn-block" @click="reiniciar">Reiniciar</button>
    </ul>

  </div>
</template>
  
  <script>

import {mapState, mapMutations} from 'vuex'; //importo los maps
export default {
  name: "Lista",
  computed:{
    ...mapState(['frutas']),//llamo el estado de mi tienda
  
    arrayOrdenado(){
      return this.frutas.sort((a, b) => b.cantidad - a.cantidad)
    }//esta funcion es para ordenar de menor a mayor nuestro arreglo
  
  },
  methods:{
    ...mapMutations(['aumentar', 'reiniciar'])
  }
};
</script>
  
  <style>
</style>
