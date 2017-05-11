<template>
    <div class="uk-card uk-card-default">
      <div class="uk-card-header uk-padding-remove">
          <img :src="product.image" :alt="product.title">
      </div>
      <div class="uk-card-body uk-padding-small">
        <a href="#">{{ product.title }}</a> {{ product.price }}
        <p>{{ product.description }}</p>
        <a href="#" class="uk-button uk-button-primary uk-width-1-1" role="button">Add to cart</a>
      </div>
    </div>
</template>

<script>
  export default {
    props: ['product']
  }
</script>
