import React from 'react'

const BusinessDetails = (props) => {
  return (
    <>
    
      {/** Your details */}
      <section className="flex flex-col items-end justify-end">
      <h2 className="text-1xl mb-1"><strong>From:</strong></h2>
        <h3 className="text-1xl uppercase font-bold mb-1">{props.name}</h3>
        <p>{props.address}</p>
        <p>{props.details}</p>
        <p>{props.phone}</p>
        {/** end details */}
      </section>
      
    </>
  )
}

export default BusinessDetails