import { createContext, useContext, useReducer } from "react";
import { data } from "../ProductDatabase";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [
    { showInventoryAll, showFastDeliveryOnly, sortBy , AbhinavMentor , TanayMentor , ChethanMentor , JohnyMentor , OtherMentor ,  ProgrammingCategory, 
      DesignCategory , 
      ContentCategory , 
      EditingCategory },
    dispatch
  ] = useReducer(ProductReducer, {
    showInventoryAll: true,
    showFastDeliveryOnly: false,
    sortBy: null ,
    TanayMentor: false , 
    AbhinavMentor: false , 
    OtherMentor: false , 
    ChethanMentor: false, 
    JohnyMentor : false , 
    ProgrammingCategory: false, 
    DesignCategory: false , 
    ContentCategory: false , 
    EditingCategory: false

  });

  function ProductReducer(state, value) {
    switch (value.type) {
      case "TOGGLE_INVENTORY":
        return (state = {
          ...state,
          showInventoryAll: !state.showInventoryAll
        });
      case "TOGGLE_DELIVERY":
        return (state = {
          ...state,
          showFastDeliveryOnly: !state.showFastDeliveryOnly
        });
        case "TOGGLE_TANAY_MENTOR":
        return (state = {
          ...state,
          TanayMentor: !state.TanayMentor
        });
        case "TOGGLE_ABHINAV_MENTOR":
        return (state = {
          ...state,
          AbhinavMentor: !state.AbhinavMentor
        });
        case "TOGGLE_CHETHAN_MENTOR":
          return (state = {
            ...state,
            ChethanMentor: !state.ChethanMentor
          });
          case "TOGGLE_OTHERS":
            return (state = {
              ...state,
              OtherMentor: !state.OTH
            });
      case "SORT":
        return {
          ...state,
          sortBy: value.payload
        };
        case "CLEAR_ALL_INPUTS" :
          return {
            ...state , 
            showInventoryAll: true , showFastDeliveryOnly: false , sortBy: null , TanayMentor: false , AbhinavMentor: false , ChethanMentor: false , JohnyMentor: false , OtherMentor: false , 
            ProgrammingCategory: false , DesignCategory: false , EditingCategory: false , ContentCategory: false

          }
          case "TOGGLE_PROGRAMMING":
            return (state = {
              ...state,
              ProgrammingCategory: !state.ProgrammingCategory
            });
            case "TOGGLE_DESIGN":
              return (state = {
                ...state,
                DesignCategory: !state.DesignCategory
              });
              case "TOGGLE_CONTENT":
                return (state = {
                  ...state,
                  ContentCategory: !state.ContentCategory
                });
                case "TOGGLE_EDITING":
                  return (state = {
                    ...state,
                    EditingCategory: !state.EditingCategory
                  });
      default:
        return state;
    }
  }

  function getSortedData(data) {
    if (sortBy && sortBy === "HIGH-TO-LOW") {
      return data.sort((a, b) => b["price"] - a["price"]);
    }

    if (sortBy && sortBy === "LOW-TO-HIGH") {
      return data.sort((a, b) => a["price"] - b["price"]);
    }
    return data;
  }

  function getFilteredData(sortedData) {
    return sortedData
      .filter(({ fastDelivery }) =>
        showFastDeliveryOnly ? fastDelivery : true
      )
      .filter(({ inStock }) => (showInventoryAll ? true : inStock));
  }

  const sortedData = getSortedData([...data]);
  const filteredData = getFilteredData(sortedData);

  return (
    <ProductContext.Provider
      value={{
        data: filteredData,
        showFastDeliveryOnly,
        showInventoryAll,
        sortBy,  
        TanayMentor, 
        AbhinavMentor , 
        ChethanMentor , 
        OtherMentor , 
        JohnyMentor,
        ProgrammingCategory, 
        ContentCategory, 
        EditingCategory , 
        DesignCategory,
        dispatch
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
export function useProducts() {
  return useContext(ProductContext);
}