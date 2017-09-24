export const products = (state) => state.products

export const cart = (state) => state.cart

export const cartItemCount = (state) => state.cart.length

export const cartTotal = (state) => state.cart.reduce((a, b) => {
    return a + b.product.price * b.quantity
}, 0).toFixed(2)