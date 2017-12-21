import axios from 'axios'

export const getProducts = ({
        commit
    }) => axios
    .get('/api/products')
    .then((response) => {
        commit('setProducts', response.data)
    })

export const addProductToCart = ({
    commit
}, {
    product,
    quantity
}) => {
    commit('appendToCart', product)

    return axios.post('/api/cart', {
        product_id: product.id,
        quantity
    }).then(() => {

    })
}

export const getCart = ({
        commit
    }) => axios
    .get('/api/cart')
    .then((response) => {
        commit('setCart', response.data)
        return Promise.resolve()
    })

export const removeProductFromCart = ({
    commit
}, productId) => {
    commit('removeFromCart', productId)
    axios.delete(`/api/cart/${productId}`)
}

export const removeAllProductsFromCart = ({
    commit
}) => {
    commit('clearCart')
    axios.delete('/api/cart')
}