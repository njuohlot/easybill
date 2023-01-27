import React from 'react'


const Table = ({list}) => {

  return (
    <>
    <table width='100%' className='mb-10 table-bordered'>
    <thead>
      <tr className='bg-gray-100 p-1'>
        <th className='font-bold'>No</th>
        <th className='font-bold'>Description</th>
        <th className='font-bold'>Price</th>
        <th className='font-bold'>Quantity</th>
        <th className='font-bold'>Amount</th>
      </tr>
    </thead>
    <tbody>
    {list.map((items) => (
                <tr key={items.id}>
                  <td>{items.number}</td>
                  <td>{items.desc}</td>
                  <td>{items.price}</td>
                  <td>{items.quantity}</td>
                  <td>{items.amount}</td>
                </tr>
              ))}
    </tbody>
  </table>


   
  
    </>
  )
}

export default Table