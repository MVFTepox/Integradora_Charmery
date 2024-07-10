<template>
    <div class="row overflow-x-auto">
        <div v-for="n in 8" :key="n" class="col-md-4  d-flex justify-content-center">
            <div class="card p-3">
                <div class="row">
                    <div class="col-9 p-0 ps-2">
                        <h6>ejemplos de producto {{ n }}</h6>
                    </div>
                    <div class="col-3">
                        <button class="corazonM btn"><i class=" bi bi-heart"></i></button>
                    </div>
                </div>
                <img src="" alt="" height="200px">
                <br>
                <button class="btn btnDeCompra"><i class="bi bi-bag-dash"></i> Agregar al carrito</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.row {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: 1rem 0;
}

.col-md-3 {
    flex: 0 0 auto;
    margin-right: 1rem;
}

.card {
    width: 350px;
    border: #EDDAAB solid 3px;
    border-radius: 30px;
    /* Establecemos un ancho fijo para las tarjetas */
}
.corazonM {
    position: relative;
    bottom: 10px;
    right: 2px;
}

.btnDeCompra {
    padding: 3px 0;
    background-color: #B66141;
    ;
    color: white;
    border: 1px solid #865b53;
    border-radius: 15px;
}

.btnDeCompra:hover {
    border: 1px solid #865b53;
    background-color: white;
    color: black;
}


/* Estilos para Webkit (Chrome, Safari, Edge) */
/* Estilo del scrollbar */
::-webkit-scrollbar {
    width: 8px;
    /* Ancho del scrollbar */
    background-color: #f5f5f5;
    /* Color de fondo del scrollbar */
}

/* Estilo del track (el fondo del scrollbar) */
::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    /* Color del fondo del scrollbar */
}

/* Estilo del thumb (el "botón" del scrollbar) */
::-webkit-scrollbar-thumb {
    background-color: #ccc;
    /* Color del thumb */
    border-radius: 4px;
    /* Radio de borde del thumb */
}

/* Estilo del thumb cuando se mueve */
::-webkit-scrollbar-thumb:hover {
    background-color: #999;
    /* Color del thumb al pasar el mouse */
}
</style>