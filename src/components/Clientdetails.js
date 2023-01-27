import React from 'react'

const Clientdetails = (props) => {
  return (
    <>
    {/** client details */}
    <section className="mt-10">
    <h2 className="text-1xl mb-1"><strong>To:</strong> </h2>
        <h3 className="text-1xl uppercase mb-1 font-bold">{props.name}</h3>
        <p>{props.address}</p>
        <p>{props.phone}</p>
        <p>{props.email}</p>
        <p>{props.country}</p>
       
      </section>
       {/** end client details */}
    </>
  )
}

export default Clientdetails