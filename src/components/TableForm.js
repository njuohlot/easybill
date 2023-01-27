import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineDelete, AiOutlineEdit} from "react-icons/ai";

const TableForm = ({
  no,
  setAmount,
  setItemNumber,
  desc,
  setPrice,
  setDesc,
  setQuantity,
  quantity,
  price,
  list,
  setList,
  total,
  setTotal,
  currency,
}) => {
  const [edit, setEdit] = useState(false);

  //edit function

  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id);
    setList(list.filter((row) => row.id !== id));
    subTot();
    setEdit(true);
    setDesc(editingRow.desc);
    setPrice(editingRow.price);
    setAmount(editingRow.amount);
    setItemNumber(editingRow.number);
    setQuantity(editingRow.quantity);
  };
  //calculate total excluding tax and discount
  useEffect(() => {
    subTot();
  }, [list]);

  //calculate sub total

  const subTot = () => {
    let sum = 0;

    for (let i = 0; i < list.length; i++) {
      if (list.length > 0) {
        sum += list[i]["amount"];
        setTotal(sum);
      }
    }

    
  };

  const handleSumbmit = (e) => {
    e.preventDefault();
    if(!price || !quantity || !desc || !no){
      alert('Please fill in all inputs')

    }else{
      const newItems = {
        id: uuidv4(),
        number: no,
        desc: desc,
        price: price,
        quantity: quantity,
        amount: price * quantity,
      };
      setList = list.push(newItems);
      subTot();
      setEdit(false);
      setAmount("");
      setDesc("");
      setItemNumber("");
      setPrice("");
      setQuantity("");
      //creating a new array keeping the items already in the array
      //...is a spread operator meaning if list already contains items, grap all of them and add new item

    }
    
  };
  //delete function
  const deleteRow = (id) => {
    setList(list.filter((row) => row.id !== id));
    subTot();
  };

  return (
    <>
      <form onSubmit={handleSumbmit}>
        <div className="md:grid grid-cols-2 gap-10 md:mt-16">
          <div className="flex flex-col">
            <label htmlFor="no">Item No</label>
            <input
              type="number"
              name="no"
              id="no"
              placeholder="Item No"
              value={no}
              onChange={(e) => setItemNumber(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="description">description</label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Item name"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
        </div>
        <div className="md:grid grid-cols-3 gap-10 md:mt-1">
          <div className="flex flex-col">
            <label htmlFor="unit">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="quan">Quantity</label>
            <input
              type="number"
              name="quan"
              id="quan"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="amount">Amount</label>
            <p>{price * quantity}</p>
          </div>
        </div>
        <button className=" mb-5  text-white font-bold transition-all duration-300 py-2 px-8 rounded shadow" style={{backgroundColor: 'goldenrod'}}>
          {edit ? "Edit item" : "Add  Item"}
        </button>
      </form>
      {/**table items */}

      <>
      {
        list.length > 0 ? (
            <>
             <div className="invoice">
          <table width="100%" className="mb-10">
            <thead>
              <tr className="bg-gray-100 p-1">
                <th className="font-bold">No</th>
                <th className="font-bold">Description</th>
                <th className="font-bold">Price</th>
                <th className="font-bold">Quantity</th>
                <th className="font-bold">Amount</th>
              </tr>
            </thead>
            <tbody>
              {list.map(({ id, number, desc, price, quantity, amount }) => (
                <tr key={id}>
                  <td>{number}</td>
                  <td>{desc}</td>
                  <td>{price}</td>
                  <td>{quantity}</td>
                  <td className="amount">{amount}</td>
                  <td>
                    <button onClick={() => deleteRow(id)}>
                      <AiOutlineDelete className="text-red-500 font-bold text-xl" />
                    </button>
                  </td>
                  <td>
                    <button onClick={() => editRow(id)}>
                      <AiOutlineEdit className="text-gray-500 font-bold text-xl" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-5 mb-5">
          <h3 className="flex items-end justify-end text-gray-800">
            <strong>SubTotal:</strong> {currency}{total}
          </h3>
        </div>
            </>
        ) : ''
      }
       
      </>
    </>
  );
};

export default TableForm;
