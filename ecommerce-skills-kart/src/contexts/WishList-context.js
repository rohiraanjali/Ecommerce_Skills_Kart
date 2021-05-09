import { createContext, useContext, useReducer } from "react";

export const WishListStateContext = createContext();
export const WishListDispatchContext = createContext();

function WishListReducer(state, action) {
  switch (action.type) {
    case "ADDTOWISHLISTFROMSHOP":
      return [...state, action.wishItem];
      
    case "ADDTOWISHLISTFROMCART":
        return [...state, action.item];

    case "REMOVEWISHFROMSHOP":
        return state.filter((prevItem) => prevItem.id !== action.id);

    case "REMOVEWISHFROMCART":
          return state.filter((prevItem) => prevItem.id !== action.item.id);

    case "REMOVEWISHFROMWISHLIST":
          return state.filter((prevItem) => prevItem.id !== action.id);
          
    default:
         return { state };
  }
}

export function WishListProvider({ children }) {
  const [state, wishDispatch] = useReducer(WishListReducer, []);
  return (
    <WishListDispatchContext.Provider value={wishDispatch}>
      <WishListStateContext.Provider value={state}>
        {children}
      </WishListStateContext.Provider>
    </WishListDispatchContext.Provider>
  );
}

export function useWishList() {
  return useContext(WishListStateContext);
}

export function useDispatchWishList() {
  return useContext(WishListDispatchContext);
}
