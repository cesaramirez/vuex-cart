<template lang="html">
    <div id="app">
      <top-header></top-header>
      <div class="uk-container">
          <div uk-grid>
              <div class="uk-width-1-4@m uk-margin-top">
                <mini-cart></mini-cart>
              </div>
              <div class="uk-width-3-4@m uk-margin-top">
                <products></products>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
  import TopHeader from './components/common/TopHeader'
  import MiniCart from './components/common/MiniCart'
  import Products from './components/shop/Products'

  export default {
    name: 'app',
    components: {
      TopHeader,
      MiniCart,
      Products
    }
  }
</script>
