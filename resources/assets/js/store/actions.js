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
// get cart add a product to our cart remove a product from cart remove all
// product from our cart