import { data } from "../ProductDatabase";
import React , {useState , useEffect} from "react";

import '../App.css';
import Cart from "./Cart";
import { useDispatchWishList , useWishList } from "../contexts/WishList-context"
import { useDispatchCart , useCart} from "../contexts/Cart-context"
import { useProducts } from "../contexts/Product-context";
import {checkingItem} from "../utils";
import {useNavigate } from "react-router-dom";
export const Shop = () => {
  

  const navigate = useNavigate();
  const dispatch = useDispatchCart();
  const items = useCart();
  const addToCartFromShop = (item) => {
    dispatch({ type: "ADDTOCARTFROMSHOP", item });
  };
  const wishDispatch = useDispatchWishList();
  const WishListItems = useWishList();
  const addToWishListFromShop = (wishItem) => {
    wishDispatch({ type: "ADDTOWISHLISTFROMSHOP", wishItem });
  };

  const removeWishFromShop = ({id}) => {
    wishDispatch({type: "REMOVEWISHFROMSHOP" , id});
  }
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1023);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1023);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const [visible, setVisible] = React.useState(false);
    const {
        data,
        dispatch: productDispatch,
        sortBy,
        showInventoryAll,
        showFastDeliveryOnly,
        TanayMentor, 
        AbhinavMentor,
        OtherMentor, 
        ChethanMentor, 
        JohnyMentor, 
        ProgrammingCategory, 
        DesignCategory , 
        ContentCategory , 
        EditingCategory
      } = useProducts();
      return (
        <div className="App">

{isDesktop ? (
         <div className="refine-box-inner" >
         <div className="refine-btns">
         <button className="btn-apply" onClick={() =>setVisible(!visible)}>APPLY</button>
         <button className="btn-clearAll" onClick={() => productDispatch({ type: "CLEAR_ALL_INPUTS" })} ><u>CLEAR ALL</u></button>
         &nbsp;
          <div><hr /></div>
          </div>
         <div className="radio-flex">
        
          <legend style={{}}><strong style={{color: "grey"}}>Sort By</strong></legend>
          &nbsp;
       <label>
         <input
           type="radio"
           name="sort"
           onChange={() => productDispatch({ type: "SORT", payload: "HIGH-TO-LOW" })}
           checked={sortBy && sortBy === "HIGH-TO-LOW"}
         ></input>
         Price High to Low
       </label>

       <label>
         <input
           style={{}}
           type="radio"
           name="sort"
           onChange={() => productDispatch({ type: "SORT", payload: "LOW-TO-HIGH" })}
           checked={sortBy && sortBy === "LOW-TO-HIGH"}
         ></input>
         Price Low to High
       </label>
       </div>
       <hr/>
       <div className="checkbox-flex">
       <legend style={{marginTop: "8px"}}><strong style={{color: "grey"}}>Filters</strong></legend>
       <p style={{color: "grey"}}>Categories</p>
       <label>
         <input
           type="checkbox"
           checked={ProgrammingCategory}
           onChange={() => productDispatch({ type: "TOGGLE_PROGRAMMING" })}
         />
         Programming
       </label>

       <label>
         <input
           type="checkbox"
           checked={DesignCategory}
           onChange={() => productDispatch({ type: "TOGGLE_DESIGN" })}
         />
         Designing
       </label>
       <label>
         <input
           type="checkbox"
           checked={ContentCategory}
           onChange={() => productDispatch({ type: "TOGGLE_CONTENT" })}
         />
         Copywriting
       </label>
       <label>
         <input
           type="checkbox"
           checked={EditingCategory}
           onChange={() => productDispatch({ type: "TOGGLE_EDITING" })}
         />
       Video editing & Filmaking
       </label>
    
       &nbsp;
       
       <p style={{color: "grey"}}>Mentors / Authors</p>
       <label>
         <input
           type="checkbox"
           checked={TanayMentor}
           onChange={() => productDispatch({ type: "TOGGLE_TANAY_MENTOR" })}
         />
         Tanay Pratap
       </label>
         
       <label>
         <input
           type="checkbox"
           checked={AbhinavMentor}
           onChange={() => productDispatch({ type: "TOGGLE_ABHINAV_MENTOR" })}
         />
         Abhinav Chikara
       </label>
       
       <label>
         <input
           type="checkbox"
           checked={ChethanMentor}
           onChange={() => productDispatch({ type: "TOGGLE_CHETHAN_MENTOR" })}
         />
         Design Pilot - Chethan
       </label>
       <label>
         <input
           type="checkbox"
           checked={JohnyMentor}
           onChange={() => productDispatch({ type: "TOGGLE_JOHNY_MENTOR" })}
         />
        Johny Harris
       </label>
       <label>
         <input
           type="checkbox"
           checked={OtherMentor}
           onChange={() => productDispatch({ type: "TOGGLE_OTHERS" })}
         />
        others
       </label>
       &nbsp;
       <p style={{color: "grey"}}>Others</p>
       <label>
         <input
           type="checkbox"
           checked={showInventoryAll}
           onChange={() => productDispatch({ type: "TOGGLE_INVENTORY" })}
         />
         Include Out of Stock
       </label>

       <label>
         <input
           type="checkbox"
           checked={showFastDeliveryOnly}
           onChange={() => productDispatch({ type: "TOGGLE_DELIVERY" })}
         />
         Fast Delivery Only
       </label>
       </div>
       </div>
      ) : (
        <div className="refine-box-outer">
        <button className="btn-clearAll-refine" onClick={() => productDispatch({ type: "CLEAR_ALL_INPUTS" })} ><u>{!visible ? "CLEAR ALL" : " "}</u></button>
          <button onClick={() => setVisible(!visible)} className="refine-search">{!visible ? "REFINE SEARCH" : " "}</button>
      
          {visible  && (
            
            <div className="refine-box-inner">
            <div className="refine-btns">
            <button className="btn-apply" onClick={() =>setVisible(!visible)}>APPLY</button>
            <button className="btn-clearAll" onClick={() => productDispatch({ type: "CLEAR_ALL_INPUTS" })} ><u>CLEAR ALL</u></button>
            &nbsp;
             <div><hr /></div>
             </div>
            <div className="radio-flex">
           
             <legend style={{}}><strong style={{color: "grey"}}>Sort By</strong></legend>
             &nbsp;
          <label>
            <input
              type="radio"
              name="sort"
              onChange={() => productDispatch({ type: "SORT", payload: "HIGH-TO-LOW" })}
              checked={sortBy && sortBy === "HIGH-TO-LOW"}
            ></input>
            Price High to Low
          </label>
  
          <label>
            <input
              style={{}}
              type="radio"
              name="sort"
              onChange={() => productDispatch({ type: "SORT", payload: "LOW-TO-HIGH" })}
              checked={sortBy && sortBy === "LOW-TO-HIGH"}
            ></input>
            Price Low to High
          </label>
          </div>
          <hr/>
          <div className="checkbox-flex">
          <legend style={{marginTop: "8px"}}><strong style={{color: "grey"}}>Filters</strong></legend>
          <p style={{color: "grey"}}>Categories</p>
          <label>
            <input
              type="checkbox"
              checked={ProgrammingCategory}
              onChange={() => productDispatch({ type: "TOGGLE_PROGRAMMING" })}
            />
            Programming
          </label>
  
          <label>
            <input
              type="checkbox"
              checked={DesignCategory}
              onChange={() => productDispatch({ type: "TOGGLE_DESIGN" })}
            />
            Designing
          </label>
          <label>
            <input
              type="checkbox"
              checked={ContentCategory}
              onChange={() => productDispatch({ type: "TOGGLE_CONTENT" })}
            />
            Copywriting
          </label>
          <label>
            <input
              type="checkbox"
              checked={EditingCategory}
              onChange={() => productDispatch({ type: "TOGGLE_EDITING" })}
            />
          Video editing & Filmaking
          </label>
       
          &nbsp;
          
          <p style={{color: "grey"}}>Mentors / Authors</p>
          <label>
            <input
              type="checkbox"
              checked={TanayMentor}
              onChange={() => productDispatch({ type: "TOGGLE_TANAY_MENTOR" })}
            />
            Tanay Pratap
          </label>
            
          <label>
            <input
              type="checkbox"
              checked={AbhinavMentor}
              onChange={() => productDispatch({ type: "TOGGLE_ABHINAV_MENTOR" })}
            />
            Abhinav Chikara
          </label>
          
          <label>
            <input
              type="checkbox"
              checked={ChethanMentor}
              onChange={() => productDispatch({ type: "TOGGLE_CHETHAN_MENTOR" })}
            />
            Design Pilot - Chethan
          </label>
          <label>
            <input
              type="checkbox"
              checked={JohnyMentor}
              onChange={() => productDispatch({ type: "TOGGLE_JOHNY_MENTOR" })}
            />
           Johny Harris
          </label>
          <label>
            <input
              type="checkbox"
              checked={OtherMentor}
              onChange={() => productDispatch({ type: "TOGGLE_OTHERS" })}
            />
           others
          </label>
          &nbsp;
          <p style={{color: "grey"}}>Others</p>
          <label>
            <input
              type="checkbox"
              checked={showInventoryAll}
              onChange={() => productDispatch({ type: "TOGGLE_INVENTORY" })}
            />
            Include Out of Stock
          </label>
  
          <label>
            <input
              type="checkbox"
              checked={showFastDeliveryOnly}
              onChange={() => productDispatch({ type: "TOGGLE_DELIVERY" })}
            />
            Fast Delivery Only
          </label>
          </div>
          </div>
        
          )}
          
          
        </div>
      )} 
          <div style={{marginTop: "130px"}}className="cards" >
          
            { data.map(
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
                
                <div
                  key={id}
                >
              
    <div className="product-card">
                  
		{inStock && fastDelivery &&  <div class="badge">BESTSELLER </div> }


    <div class="product-links">
				<i 
         onClick={() => { 
           checkingItem(WishListItems , id) ?
           removeWishFromShop({ id }) :
           addToWishListFromShop({
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
        })}}
        style={{color: checkingItem(WishListItems , id) ? "red" : "lightgrey" , border: "none"}} className="fa fa-heart"></i>
    </div>
   
    
      {!inStock ? (
        <div className="product-tumb-notinstock">
        <img src= {image} width="100%" height="auto" alt={productName} />
      </div>
         ) : (
          <div className="product-tumb">
			<img src= {image} width="100%" height="auto" alt={productName} />
		</div>
        )}
		
		<div className="product-details">
		{!inStock ? (
        <div className="product-category-notinstock" >{category}</div>
         ) : (
          <div className="product-category" >{category}</div>
        )}
        
			<h4 className="product-name"><a href="">{name} {<small style={{color: "grey"}}> - {mentors} </small>}</a></h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
      {!inStock ? (
         <div style={{color: "grey" , textAlign: "left"}} className="levels-notinstock">Level: {level}</div>
         ) : (
          <div className="levels">Level: {level}</div>
        )}
     
     
      <div className="product-bottom-details">
        {inStock ? (
        <div className="product-price">₹ {price}<small>(50% OFF)</small></div>
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
            addToCartFromShop({
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
      );
}
export default Shop;
