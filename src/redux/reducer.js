import ADD from "./ActionName";
import ListItem from "../Products/product";
const intinitial = {
  
    Product: ListItem,
    OnProcessing: []
  ,
}
const CartReducer = (state = intinitial, action) => {
  switch (action.type) {
    case ADD:
      const Item = state.Product.find((p) => p.id === action.payload.id);
      const inCart = state.OnProcessing.find((p) =>
        p.id === action.payload.id ? true : false
      );
      return {
        ...state,
        OnProcessing: inCart
          ? state.OnProcessing.map((p) =>
              p.id === action.payload.id ? { ...p, quantity: p.quantity + 1 } : p
            )
          : [...state.OnProcessing, { ...Item, quantity: 1 }],
      };
      default : return  state;
  }
};
export default CartReducer;