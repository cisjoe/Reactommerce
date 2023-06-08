export default function action(type, payload) {
  return {
    type: type,
    payload: payload,
  };
}

export const fetchProducts = () => {
  return async (dispatch) => {
    const res = await fetch("https://dummyjson.com/products?limit=0");
    const data = await res.json();
    dispatch(action("get-products", data));
  };
};

export const getCats = () => {
  return async (dispatch) => {
    const res = await fetch("https://dummyjson.com/products/categories");
    const data = await res.json();
    dispatch(action("get-categories", data));
  };
};
