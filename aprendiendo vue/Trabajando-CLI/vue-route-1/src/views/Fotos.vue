<template>
  <div>
    <h1>Galería de Fotos: </h1>

    <router-link :to="{name: 'fotos', params: {id: item}}" 
    v-for="(item, index) of fotosArreglo" :key="index">
      <button>Foto: {{ item }}</button>
    </router-link>
    <Foto></Foto>
    <button @click="home">Home</button>
    <button @click="anterior">Anterior</button>
    <button @click="siguiente">Siguiente</button>
  </div>
</template>

<script>
import Foto from "@/components/Foto.vue";
export default {
    name:'Fotos',
    components: {
        Foto
    },
    data(){
    return{
      fotosArreglo: [1,2,3]
    }
 },
 methods:{
      home(){
        this.$router.push('/')
      },
      anterior(){
        this.$router.go(-1)
      },
      siguiente(){
        this.$router.go(+1)
      }
    }
}
</script>

<style>

</style>