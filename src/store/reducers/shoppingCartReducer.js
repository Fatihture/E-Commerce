const initialState = {
  cart: [], // Format: { count: 1, product: { id: "1235", ... } }
  payment: {},
  address: {}
};

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CART':
      return { ...state, cart: action.payload };
    case 'SET_PAYMENT':
      return { ...state, payment: action.payload };
    case 'SET_ADDRESS':
      return { ...state, address: action.payload };
    default:
      return state;
  }
};