<template>
    <div class="card">
        <img :src="`${product.image}`">
        <div class="card-des">
            <RouterLink 
            class="card-title"
            :to="{name:}">
                {{ product.title }}
            </RouterLink>
            <p class="card-price">{{ product.price }}$</p>
        </div>
    </div>
</template>
  
<script>
  
export default {
    name: 'CardItem',
    props: {
        product: {
            type: Object
        },
    }
}
</script>
  
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.card {

    width: 20%;
    height: 30%;
    margin: 2%;
    border-bottom: 1px solid black;
}
.card-des .card-title {
    font: lighter 10pt Verdana, sans-serif;
    text-align: left;
    margin-top: 0%;
    margin-bottom: 5%;
    min-height: 100pt;
}
.card-des .card-price {
    text-align: right;
    margin-top: 0%;
    margin-bottom: 5%;
}
img {
    width: 100px;
    height: 125px;
}
</style>
  