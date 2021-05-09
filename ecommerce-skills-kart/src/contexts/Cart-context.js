import { createContext, useContext, useReducer } from "react";

export const CartStateContext = createContext();
export const CartDispatchContext = createContext();

function CartReducer(state, action) {
  switch (action.type) {
    case "ADDTOCARTFROMSHOP":
      return [...state, action.item];

    case "ADDTOCARTFROMWISHLIST":
      return [...state, action.item];


    case "REMOVE":
      return state.filter((prevItem) => prevItem.id !== action.item.id);

    case "INCREMENT":
      return state.map((item) =>
        item.id === action.item.id ? { ...item, qty: item.qty + 1 } : item
      );

    case "DECREMENT":
      return state.map((item) =>
        item.id === action.item.id ? { ...item, qty: item.qty - 1 } : item
      );
  
 
    default:
      return { state };
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(CartReducer, []);
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
}

export function useCart() {
  return useContext(CartStateContext);
}

export function useDispatchCart() {
  return useContext(CartDispatchContext);
}
