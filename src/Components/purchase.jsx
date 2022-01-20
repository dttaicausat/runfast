import { useSelector } from "react-redux";
const Purchase = () => {
  const listCart= useSelector((state)=>state.itemReducer);
  let quantity=0;
  let price=0;
 listCart.OnProcessing.forEach(element => {
   quantity+= (element.quantity===0)?0:1;
   price+= (element.cost*element.quantity);
 });
  return <div className="cartPurchase">
      <p>amount of product:{quantity}</p>
      <h4> price :{price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}</h4>
      <button>purchase</button>
  </div>;
};

export default Purchase;