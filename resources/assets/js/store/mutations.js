export const setProducts = (state, products) => state.products = products

export const setCart = (state, items) => state.cart = items

export const appendToCart = (state, product) => {
    const existing = state.cart.find( (item) => {
        return item.product.id === product.id
    })

    if (existing) {
        existing.quantity++
    } else {
        state.cart.push({    
            product,
            quantity: 1
        })
    }
}

export const removeFromCart = (state, productId) => {
    const existing = state.cart.find( (item) => {
        return item.product.id === productId
    })

    if ( existing.quantity > 1 ) {
        existing.quantity--
    } else {
        state.cart = state.cart.filter( (item) => item.product.id !== productId)
    }
}
// set cart
// clear cart
// remove from cart