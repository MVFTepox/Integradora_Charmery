<script setup lang="ts">
import navbar from '@/components/navbar.vue'
import Carrucel from '@/components/pagprincipal/Carrucel.vue';
import footerpage from '@/components/footerPag.vue';
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import productospagprincipal from '@/components/pagprincipal/productospagprincipal.vue';
</script>

<template>
  <main>
    <navbar />

    <div class="container-fluid" style="height: 500px;">
      <div style="
      position: relative;
      top: 25px;
      left: -250px;
      height: 450px;
      width: 450px; 
      background-color:darkred;
      border-radius: 300px;

    "></div>
      <div class="" style="
      position: relative;
      top: -400px;
      left: 400px;
      height: 400px;
      width: 300px; 
      background-color:blue;
      border-radius: 250px;
      z-index: 2;
    "></div>
    <div class="" style="
    position: relative;
    top: -800px;
    left: 500px;
    height: 400px;
    width: 300px; 
    background-color:aquamarine;
    border-radius: 250px;
    z-index: 1;
    

  "></div>
  <div class="" style="
  position: relative;
  top: -1200px;
  left: 600px;
  height: 400px;
  width: 300px; 
  background-color:red;
  border-radius: 250px;
  z-index: 0;
  

"></div>

    </div>
    <Carrucel />

    <h1 class="text-center my-5 p-5">Descubre nuestros productos</h1>

    <br>
    <hr class="mx-5">
    <div class="container">
      <div class="row">
        <div class="d-flex justify-content-between">
          <h4>Pulseras</h4>
          <div>
            <button type="button" class="btn">Ver más</button>
          </div>
        </div>
      </div>
      <productospagprincipal />
    </div>
    <br>
    <hr class="mx-5">
    <div class="container">
      <div class="row">
        <div class="d-flex justify-content-between">
          <h4>Pulseras</h4>
          <div>
            <button type="button" class="btn">Ver más</button>
          </div>
        </div>
      </div>
      <productospagprincipal />
    </div>


    <footerpage />
  </main>
</template>

<style scoped>
h1,
h4 {
  color: #865b53;
}

button {
  background-color: rgb(183, 13, 13);
  color: white;
}

button:hover {
  background-color: rgb(255, 0, 0);
  color: white;
}
</style>