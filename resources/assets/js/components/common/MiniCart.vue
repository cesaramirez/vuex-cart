<template>
  <div class="uk-card uk-card-body uk-card-default mini-cart uk-padding-small" uk-sticky="offset: 50">
    <ul class="uk-list uk-list-divider uk-text-small" v-if="cart.length">
      <li v-for="item in cart">
        <a class="uk-button 
                  uk-button-danger 
                  uk-button-small 
                  uk-text-small" 
            href="#">
            Remove
        </a>
        {{ item.quantity }} x {{ item.product.title }} @ ${{ item.product.price }}
      </li>      
      <li>
        <a  class="uk-button uk-button-primary uk-width-1-1"
            href='#'>
                Clear cart
            </a>
      </li>
    </ul>
    <p v-else>No items in cart</p>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'mini-cart',
    computed: {
      ...mapGetters({
        cart: 'cart'
      })
    },
    methods: {
      ...mapActions({
        getCart: 'getCart'
      })
    },
    mounted () {
      this.getCart()
    }
  }
</script>
