const initialState = {
    products: [
        { id: 1, name: 'Product One' },
        { id: 2, name: 'Product Two' },
        { id: 3, name: 'Product Three' },
        { id: 4, name: 'Product Four' }
    ],
    cartProducts: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CART_PRODUCT':

            let currentCart = [...state.cartProducts];
            let product = currentCart.find(c => c.id === action.id);

            if (!product) {

                return {
                    ...state,
                    cartProducts: [
                        ...state.cartProducts,
                        {
                            id: action.id,
                            name: action.name,
                            amount: 1
                        }
                    ]
                }

            } else {

                ++product.amount;

                return {
                    ...state,
                    cartProducts: currentCart
                }
            }

        default:
            return state;
    }
}

export default reducer;