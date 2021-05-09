import React , {useState} from "react";
import { useCart, useDispatchCart } from "../contexts/Cart-context";
import { useDispatchWishList, useWishList } from "../contexts/WishList-context";
import {checkingItem} from "../utils";
import "../App.css";
export const Cart = () =>  {

  const items = useCart();
  const dispatch = useDispatchCart();
  const handleRemove = (item) => {
    dispatch({ type: "REMOVE", item });
  };

  const handleIncQty = (item) => {
    dispatch({ type: "INCREMENT", item });
  };
  const handleDecQty = (item) => {
    dispatch({ type: "DECREMENT", item });
  };
  const wishDispatch = useDispatchWishList();
  const WishListItems = useWishList();
  const addToWishListFromCart = (item) => {
    wishDispatch({ type: "ADDTOWISHLISTFROMCART", item });
  };
  const removeWishFromCart = (item) => {
    wishDispatch({ type: "REMOVEWISHFROMCART", item });
  };


  const getTotalAmount = (items) => {
    return items.reduce((total, { price , qty }) => total + price * qty, 0);
  };

  if (items.length === 0) {
    return <>
    <br />
    <h1 style={{color: "lightgrey" , marginTop : "100px" , fontFamily: "var(--font-fam)"}}>Your Cart is empty :( </h1>
    <i style={{fontSize: "8rem " , color: "lightgrey"}} className="fa fa-shopping-cart"></i>
  </>
  }
  return (
    <>
    <div style={{marginTop: "130px"}} className="cart-page">
        <br />
        <br />
     <div className="checkout">
     <p className="totalCart-amt"> Total: <span className="amt-cart">&nbsp;₹{getTotalAmount(items)}&nbsp;</span><sup className="strike-price">₹ 8960</sup><sup style={{fontSize: "1rem"}}>&nbsp; (50% off)&nbsp;</sup></p>
     
     <strong style={{float: "left" , padding: "10px" , color: "rgb(76, 175, 80)" , fontSize: "0.9rem"}}>INSERT CODE</strong> <br />
     <br />
     <button className="btn-checkout">CHECKOUT</button>
     <br />
     <br />
     <hr style={{width: "100%" , opacity: "0.5"}}/>
     <h3 className="cart-length-title">{items.length} items in Cart</h3>
     </div>
      <div style={{
      display: "grid" ,
      gridTemplateColumns: "repeat(1, 1fr)" ,
      gridGap: "1rem"
      }} className="cart-cards" >
            {items.map((item) => (
                <div className="product-cart-card"
                  key={item.id}
                >
			<img className="cart-product-img"src= {item.image} width="50%" height="auto" alt="product" />
            <div class="product-links">
            <i 
         onClick={() => {
       checkingItem(WishListItems , item.id) ?
         removeWishFromCart(item) :
           addToWishListFromCart(item)}}
        style={{color: checkingItem(WishListItems , item.id) ? "red" : "lightgrey" , border: "none"}} className="fa fa-heart"></i>
            </div>
			<h3 className="product-cart-name">{item.name} {<small style={{color: "grey" , fontSize: "0.9rem" , fontWeight: "lighter"}}> <br />- By {item.mentors} </small>}<span className="product-cart-category">{item.category}</span></h3>
        <p className="product-cart-price">₹ {item.price} <small className="offer-styling"> (50% OFF) </small></p>
      &nbsp; <button className="btn-dec" onClick={() => handleDecQty(item)}
      disabled={item.qty <= 0}
      >
          {item.qty <= 1 ? <i  onClick={() => handleRemove(item)} className="fas fa-trash-alt"></i>:  <i class="fa fa-minus" aria-hidden="true"></i>}
         
         
</button>&nbsp;
      <span className="btn-qty">&nbsp;{item.qty}&nbsp;</span>
      &nbsp; <button className="btn-inc" onClick={() => handleIncQty(item)}><i class="fa fa-plus" aria-hidden="true"></i>
</button>&nbsp;
                  
        </div>
              )
            )}
          </div>
          </div>
         
    </>
  );
}

export default Cart;