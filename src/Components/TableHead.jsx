const TableHead = () => {
  return (
    <div>
   <table className="table">
        {" "}
    
        <tr>
        <th scope="col">Name</th>
        <th scope="col"> image </th>
        <th scope="col">quantity</th>
        <th scope="col">price</th>
        <th scope="col">adjustment</th>
      </tr>
      </table>
    </div>
  );
};
export default TableHead;
