const initialState = {
  user: {},
  addressList: [],
  roles: [],
  creditCards: [], // İki tane vardı, teke düşürdük
  theme: 'light',
  language: 'en'
};

export const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_ROLES':
      return { ...state, roles: action.payload };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };
      
    // --- YENİ EKLENEN KISIM ---
    case 'SET_ADDRESS_LIST':
      return { ...state, addressList: action.payload };
    case 'SET_CREDIT_CARDS':
      return { ...state, creditCards: action.payload };
    // --------------------------
    
    default:
      return state;
  }
};