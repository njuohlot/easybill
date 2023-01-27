import React from 'react'

const Date = (props) => {
  return (
    <>
      
       {/** date */}
       <article className="mt-5 mb-14 flex items-end justify-end">
        <ul>
          <li className='py-1'><span className="font-bold">Invoice No:</span> {props.number}</li>
          <li className='pt-1'><span className="font-bold">Invoice date:</span> {props.date}</li>
          <li className='py-1'><span className="font-bold">Due date:</span> {props.due}</li>
        </ul>
       </article>

        {/** end date */}
    
    </>
  )
}

export default Date