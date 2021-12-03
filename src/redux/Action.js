import ADD from "./ActionName";
const add= (item) => {
  return {
    type: ADD,
    payload :{
        id:item.id
    }
  }
};
export default add;
