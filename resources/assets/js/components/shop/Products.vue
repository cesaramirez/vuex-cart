<template>
  <div uk-grid>
      <product></product>
      <product></product>
      <product></product>
      <product></product>
  </div>
</template>

<script>
  import Product from './Product'

  export default {
    name: 'products',
    components: {
      Product
    }
  }
</script>

<style>
  .thumbnail img {
    width: 100%;
  }
</style>
