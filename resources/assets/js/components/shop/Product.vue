<template>
    <div class="uk-card uk-card-default">
      <div class="uk-card-header uk-padding-remove">
          <img :src="product.image" :alt="product.title">
      </div>
      <div class="uk-card-body uk-padding-small">
        <span class="uk-text-primary">{{ product.title }}</span> {{ product.price }}
        <p>{{ product.description }}</p>
        <a class="uk-button 
                  uk-button-primary 
                  uk-width-1-1" 
            role="button" 
            href="#" @click.prevent="addToCart">
            Add to cart
        </a>
      </div>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    props: ['product'],
    methods: {
      ...mapActions({
        addProductToCart: 'addProductToCart'
      }),

      addToCart () {
        this.addProductToCart({
          product: this.product,
          quantity: 1
        })
      }
    }
  }
</script>
