import { api } from '../../api/axiosInstance';

export const setCategories = (categories) => ({ type: 'SET_CATEGORIES', payload: categories });
export const setProductList = (productList) => ({ type: 'SET_PRODUCT_LIST', payload: productList });
export const setTotal = (total) => ({ type: 'SET_TOTAL', payload: total });
export const setLimit = (limit) => ({ type: 'SET_LIMIT', payload: limit });
export const setOffset = (offset) => ({ type: 'SET_OFFSET', payload: offset });
export const setFilter = (filter) => ({ type: 'SET_FILTER', payload: filter });
export const setFetchState = (fetchState) => ({ type: 'SET_FETCH_STATE', payload: fetchState });

export const fetchCategories = () => async (dispatch, getState) => {
  // Eğer kategoriler zaten çekilmişse boşuna API'yi yorma (Kanban kuralı)
  const currentCategories = getState().product.categories;
  if (currentCategories && currentCategories.length > 0) return;

  try {
    const response = await api.get('/categories');
    dispatch(setCategories(response.data));
  } catch (error) {
    console.error("Kategoriler çekilirken hata oluştu:", error);
  }
};