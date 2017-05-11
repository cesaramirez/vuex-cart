<template>
  <nav class="uk-background-secondary uk-light uk-navbar" uk-navbar>
    <div class="uk-navbar-left">
        <div class="uk-navbar-item uk-margin-left">
            {{ cartItemCount }} items in cart (£{{ cartTotal }})
        </div>
    </div>
</nav>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'top-header',
    computed: {
      ...mapGetters({
        cartItemCount: 'cartItemCount',
        cartTotal: 'cartTotal'
      })
    }
  }
</script>