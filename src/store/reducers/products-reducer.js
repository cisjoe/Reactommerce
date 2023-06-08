const initState = {
  productsData: {
    products: [
      {
        id: 0,
        title: "",
        description: "",
        price: 0,
        discountPercentage: 0,
        rating: 0,
        stock: 0,
        brand: "",
        category: "",
        thumbnail: "",
        images: ["", "", "", "", ""],
      },
    ],
  }, // placeholder
  categories: [],
  selectedProduct: { images: ["", "", "", "", ""] }, // placeholder
  cart: [],
};

function addToCart(cart, payload) {
  const findProduct = cart.find((prod) => prod.id === payload.id);

  if (findProduct) {
    return cart.map((prod) => {
      if (prod.id === findProduct.id) {
        return { ...findProduct, quantity: findProduct.quantity + 1 };
      } else {
        return prod;
      }
    });
  } else {
    return [...cart, { ...payload, quantity: 1 }];
  }
}

function increment(cart, payload) {
  return cart.map((prod) => {
    if (prod.id === payload.id) {
      return { ...payload, quantity: payload.quantity + 1 };
    } else {
      return prod;
    }
  });
}

function decrement(cart, payload) {
  return cart.map((prod) => {
    if (prod.id === payload.id) {
      return { ...payload, quantity: payload.quantity - 1 };
    } else {
      return prod;
    }
  });
}

export const productsReducer = (state = initState, action) => {
  switch (action.type) {
    case "get-products":
      return { ...state, productsData: action.payload };
    case "get-categories":
      return { ...state, categories: action.payload };
    case "selected-product":
      return { ...state, selectedProduct: action.payload };
    case "add-to-cart":
      return { ...state, cart: addToCart([...state.cart], action.payload) };
    case "increment":
      return { ...state, cart: increment([...state.cart], action.payload) };
    case "decrement":
      return { ...state, cart: decrement([...state.cart], action.payload) };
    case "delete-from-cart":
      return {
        ...state,
        cart: [...state.cart.filter((prod) => prod.id !== action.payload.id)],
      };
    case "clear-cart":
      return { ...state, cart: [] };
    default:
      return state;
  }
};
