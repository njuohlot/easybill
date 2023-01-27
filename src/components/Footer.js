import React from 'react'

const Footer = (props) => {
  return (
    <>
     {/* footer */}
     <footer className='footer border-t-2 border-gray-300 pt-5'>
          <ul className="flex flex-wrap items-center justify-center">
            <li> <span className="font-bold">Business name: </span>{props.name}- </li>
            <li><span className="font-bold"> Email:</span> {props.email} - </li>
            <li><span className="font-bold">Bank:</span> {props.bank} - </li>
            <li><span className="font-bold"> Account holder:</span> {props.holder} - </li>
            <li><span className="font-bold">Account Number:</span> {props.number}</li>
          </ul>
        </footer>

        {/* end of footer */}
    
    </>
  )
}

export default Footer