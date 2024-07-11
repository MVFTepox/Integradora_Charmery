<script setup lang="ts">
import navbar from '@/components/navbar.vue';
import { RouterLink, RouterView, routerViewLocationKey } from 'vue-router';
import footerPag from '@/components/footerPag.vue';
</script>

<template>
    <navbar />
    
    <div class="container">
        <div class="row d-flex justify-content-center my-3">
            <button class="btn">
                <router-link to="/iniciarseccion" class="btninit">Iniciar sesion
                </router-link>
            </button>
            <div class="col-md-4">

            </div>
        </div>
    </div>
    <footerPag />
</template>

<style scoped>
p i {
    clear: both;
}

.iform {
    color: #662f25;
    background-color: #eddaab;
    border: var(--color-cafe3)solid 3px;
    border-radius: 30px;
}

.card {
    border: #eddaab solid 3px;
    border-radius: 30px;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.108) 15px 15px 15px;
}

.btninit {
    background-color: var(--color-cafe1);
    color: var(--color-cafe2);
    border: var(--color-cafe3) Solid 3px;
    border-radius: 30px;
}

.form-check-input {
    background-color: #eddaab;
    border-color: #2e240a;
    
    border-radius: 0px;
    transition: all 0.3s ease-in-out;
}

.form-check-input:checked {
    background-color: #eddaab;
    border-color: #2e240a;
    animation: conver 0.5s forwards;
}

@keyframes conver {
    0% {
        border-radius: 0;
    }

    100% {
        border-radius: 50%;
    }
}
</style>
