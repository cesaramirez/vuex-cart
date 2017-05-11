<template>
  <div class="uk-card uk-card-body uk-card-default mini-cart uk-padding-small">
    <ul class="uk-list uk-list-divider uk-text-small">
      <li>
        <a class="uk-button 
                  uk-button-danger 
                  uk-button-small 
                  uk-text-small" 
            href="#">
            Remove
        </a>
        1 x Some product £0.00
      </li>      
      <li>
        <a  class="uk-button uk-button-primary uk-width-1-1"
            href='#'>
                Clear cart
            </a>
      </li>
    </ul>
    <p>No items in cart</p>
  </div>
</template>

<script>
  export default {
    name: 'mini-cart'
  }
</script>
