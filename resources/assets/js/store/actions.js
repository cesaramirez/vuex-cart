import axios from 'axios'

export const getProducts = ({
        commit
    }) => axios
    .get('http://vuex-cart.dev/api/products')
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

    return axios.post('http://vuex-cart.dev/api/cart', {
        product_id: product.id,
        quantity
    }).then(() => {

    })
}

export const getCart = ({ commit }) => axios
    .get('http://vuex-cart.dev/api/cart')
    .then((response) => {
        commit('setCart', response.data)
        return Promise.resolve()
    })

export const removeProductFromCart = ({ commit }, productId) => {
    commit('removeFromCart', productId)
    axios.delete(`http://vuex-cart.dev/api/cart/${productId}`).then( (response) => {

    })
}