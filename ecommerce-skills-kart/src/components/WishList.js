import React from "react";
import { useNavigate } from "react-router";
import { useDispatchCart , useCart } from "../contexts/Cart-context";
import { useDispatchWishList, useWishList } from "../contexts/WishList-context";
import {checkingItem} from "../utils";


export const WishList = ({route}) => {

  const navigate = useNavigate();
  const WishListItems = useWishList();
  const wishDispatch = useDispatchWishList();
  const handleRemoveWish = ({id}) => {
    wishDispatch({ type: "REMOVEWISHFROMWISHLIST", id  });
  };
 const items = useCart();
 const dispatch = useDispatchCart();
 const addToCartFromWishList = (item) => {
  dispatch({ type: "ADDTOCARTFROMWISHLIST", item });
};
  if (WishListItems.length === 0) {
    return <h1 style={{color: "lightgrey" , marginTop : "100px"}}>Add your favourite items to wishList :) </h1>
  }
  return (
    <>
    <div style={{marginTop: "130px"}}  className="wishList-page">
    <h3 style={{fontWeight: "550" , color: "grey" , textAlign: "center" , fontFamily: "var(--font-fam)"}}>{WishListItems.length} items in WishList</h3>
    <div className="wishList-cards" >
    
    {WishListItems.map(
            ({
              id,
              name,
              image,
              price,
              productName,
              inStock,
              level,
              fastDelivery , 
              category, 
              mentors
            }) => (
            <div key={id}>
            <div  className="wishList-product-card">    
            {inStock && fastDelivery &&  <div class="badge">BESTSELLER </div> } 
            
            
            {!inStock ? (
            <div className="product-tumb-notinstock">
                <i onClick={() => handleRemoveWish({ id })} className="fa fa-times" aria-hidden="true"></i>
            <img src= {image} width="100%" height="auto" alt={productName} />
            </div>
            ) : (
            <div className="product-tumb">
                <i onClick={() => handleRemoveWish({ id })} className="fa fa-times" aria-hidden="true"></i>
            <img src= {image} width="100%" height="auto" alt={productName} />
            </div>
            )}
      
      <div className="product-details">
      {!inStock ? (
      <div className="product-category-notinstock" >{category}</div>
       ) : (
        <div className="product-category" >{category}</div>
      )}
      
      <h4 className="product-name"><a href="">{name} {<small style={{color: "grey"}}> - {mentors} </small>}</a></h4>          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
    {!inStock ? (
       <div style={{color: "grey" , textAlign: "left"}} className="levels-notinstock">Level: {level}</div>
       ) : (
        <div className="levels">Level: {level}</div>
      )}
   
   
    <div className="product-bottom-details">
              
     
      {inStock ? (
      <div className="product-price">₹ {price} <small> (50% OFF)</small></div>
       ) : null}

      {fastDelivery ? (
      <div style={{textAlign: "right" , color: "rgb(76, 175, 80)"}}><strong>{!inStock ? " " : "FAST DELIVERY"}</strong></div>
       ) : (
       <div style={{textAlign: "right" , color: "rgb(76, 175, 80)"}}>{!inStock ? " " : "3 Days Minimum"}</div>
      )}
      <br />
      <br />
      {!inStock ? (
        <button className="btn-Cart-notinstock" >OUT OF STOCK</button>
         ) : (
          <button onClick={() => {
            checkingItem(items , id) ? 
            navigate("/cart") :
            addToCartFromWishList({
            id,
            name,
            image,
            price,
            productName,
            inStock,
            level,
            fastDelivery , 
            category, 
            mentors, 
            qty: 1,
          })
          }}
           className="btn-Cart-stock" >
           {checkingItem(items, id) ? "GO TO CART" : "ADD TO CART"}
           </button>
        )}
            </div>
           </div>  
      </div>
      </div>
            )
          )}
        </div>
        </div>
    </>
  )
}
export default WishList;
