<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container d-flex align-items-center justify-content-between">
            <a class="navbar-brand" href="#">
                <img src="../assets/logohtml.png" alt="Logo" width="70px" >
            </a>
            <div class="categorias d-flex align-items-center">
                <button class="mb-0 btn">Categorias <i class="bi bi-chevron-down"></i></button>
                <a href=""><img src="./src/img/down.png" alt="" width="25px"></a>
            </div>
            <form class="search d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Buscar...">
                <button type="submit">
                    <i class="bi bi-search"></i>
                </button>
            </form>
            <div class="icons d-flex align-items-center">
                <a href=""><i class="bi bi-heart"></i></a>
                <a href="/acceso"><i class="bi bi-person"></i></a>
                <a href=""><i class="bi bi-bag"></i></a>
            </div>
        </div>
    </nav>
    
</template>

<script>
export default {
    name: 'navbar'
}

import logo from '../assets/logohtml2.png'
</script>

<style scoped>
nav {

    position: sticky;
    top: 0;
    z-index: 10;
    border-radius: 0 0 200px 200px;

}
.categorias button {
    font-size: 110%;
    color: #b66141;
}
.categorias {
    display: flex;
}
.navbar {
    background-color: #eddaab;
    display: flex;
}
.icons {
    display: flex;
}
.search input {
    background: transparent;
    border-radius: 20px;
    border-color: #b66141;
    width: 300px;
}
.search button {
    background: transparent;
    border: none;
}
.icons a {
    margin-right: 20px;
}

.icons a:last-child {
    margin-right: 0;
}
</style>