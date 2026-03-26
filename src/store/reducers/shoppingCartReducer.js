const initialState = {
  cart: [], // Format: { count: 1, checked: true, product: { id: "1235", ... } }
  payment: {},
  address: {}
};

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CART':
      return { ...state, cart: action.payload };
      
    case 'ADD_TO_CART':
      // 1. Ürün zaten sepette var mı kontrol et
      const existingItemIndex = state.cart.findIndex(item => item.product.id === action.payload.id);
      
      if (existingItemIndex !== -1) {
        // 2. Varsa: Sadece sayısını (count) 1 artır
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].count += 1;
        return { ...state, cart: updatedCart };
      } else {
        // 3. Yoksa: Yeni bir obje olarak, Kanban'ın istediği formatta listeye ekle
        const newItem = { count: 1, checked: true, product: action.payload };
        return { ...state, cart: [...state.cart, newItem] };
      }

      case 'REMOVE_FROM_CART':
      return { 
        ...state, 
        cart: state.cart.filter(item => item.product.id !== action.payload) 
      };

    case 'UPDATE_CART_ITEM_COUNT':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.product.id === action.payload.productId
            ? { ...item, count: action.payload.newCount }
            : item
        )
      };

    case 'TOGGLE_CART_ITEM_CHECK':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.product.id === action.payload
            ? { ...item, checked: !item.checked }
            : item
        )
      };

    case 'SET_PAYMENT':
      return { ...state, payment: action.payload };
    case 'SET_ADDRESS':
      return { ...state, address: action.payload };

      case 'CLEAR_CART':
      return { ...state, cart: [] };

    default:
      return state;
  }
};