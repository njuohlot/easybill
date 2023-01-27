import React, { useRef, useState } from "react";
import Header from "../components/Header";
import Clientdetails from "../components/Clientdetails";
import Date from "../components/Date";
import BusinessDetails from "../components/BusinessDetails";
import Footer from "../components/Footer";
import Notes from "../components/Notes";
import Table from "../components/Table";
import TableForm from "../components/TableForm";
import ReactToPrint from "react-to-print";
import { Link, useNavigate} from "react-router-dom";



function Home() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [client_name, setClientName] = useState("");
  const [client_address, setClientAddress] = useState("");
  const [client_phone, setClientPhone] = useState("");
  const [client_email, setClientEmail] = useState("");
  const [business_name, setBusinessName] = useState("");
  const [business_address, setBusinessAddress] = useState("");
  const [business_email, setBusinessEmail] = useState("");
  const [bank_details, setBankDetails] = useState("");
  const [business_phone, setBusinessPhone] = useState("");
  const [date, setDate] = useState('');
  const [due_date, setDueDate] = useState('');
  const [Invoice_number, setInvoiceNummber] = useState("");
  const [bank, setBank] = useState("");
  const [account_number, setAccountNumber] = useState("");
  const [account_holder, setAccountHolder] = useState("");
  const [tax_rate, setTaxRate] = useState('');
  const [currency, setCurrency] = useState("$");
  const [discount, setDiscount] = useState('');
  const [country, setCountry] = useState("");
  const [notes, setNote] = useState("");
  const [itemNumber, setItemNumber] = useState("");
  const [desc, setDesc] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const componentsRef = useRef();


  const handleClick = (e) =>{
    e.preventDefault();
      setShowInvoice(true)

  }

  return (
    <>
      <main className="m-5 p-5 xl:max-w-4xl  md:max-w-xl md:mx-auto lg:max-w-4xl bg-white rounded shadow">
       
        {showInvoice ? (
          <>
           <ReactToPrint
          trigger={() => (
            <button className="ml-8 bg-blue-500 text-white font-bold transition-all duration-300 py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-gray-500 mx-2">
              Print/Download
            </button>
          )}
          content={() => componentsRef.current}
        />
            <div ref={componentsRef} className='p-5'>
              <Header />
              <BusinessDetails
                name={business_name}
                address={business_address}
                details={bank_details}
                phone={business_phone}
              />
              <Clientdetails
                name={client_name}
                address={client_address}
                email={client_email}
                phone={client_phone}
                country={country}
              />
              <Date number={Invoice_number} date={date} due={due_date} />
              <div className="invoice">
                <Table list={list} total={total} setTotal={setTotal} />
              </div>

              {/** totals */}
              <div className="mb-10 mt-4">
                <h2 className=" text-gray-800">
                  <strong>SubTotal: </strong> {currency}
                  {total}
                </h2>
                <h2 className=" text-gray-800">
                  <strong>Tax :</strong> {tax_rate}%
                </h2>
                <h2 className=" text-gray-800">
                  <strong>Discount :</strong> {discount}%
                </h2>
                <h2 className=" text-gray-800">
                  <strong>Amount To pay: </strong> {currency}
                  {(tax_rate / 100) * total  + total - (discount / 100) * total}
                </h2>
              </div>
              <Notes note={notes} />
              <Footer
                name={business_name}
                email={business_email}
                bank={bank}
                holder={account_holder}
                number={account_number}
              />
            </div>
            <button
              onClick={() => setShowInvoice(false)}
              className="bg-blue-500 mt-5 text-white font-bold transition-all duration-300 py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500"
            >
              Edit Information
            </button>
          </>
        ) : (
          <>
           <header>
            <div className='logo'>

              <Link to='/'>
              <h1><span className='logo-start'>EASY</span>BILL</h1>

              </Link>
                
            </div>
           
            
        </header>
            <div className="flex flex-col justify-center bt-2">
              
              <h2 className="font-bold tracking-wide text-2xl mb-2 mt-3">
                Business Information
              </h2>
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col justify-center">
                  <label htmlFor="bname">Name</label>
                  <input
                    type="text"
                    name="bname"
                    placeholder="Business Name"
                    value={business_name}
                    onChange={(e) => setBusinessName(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <label htmlFor="baddress">Address</label>
                  <input
                    type="text"
                    name="baddress"
                    placeholder="Business Adresse"
                    value={business_address}
                    onChange={(e) => setBusinessAddress(e.target.value)}
                    required
                  />
                </div>
              </article>
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col justify-center">
                  <label htmlFor="bbdetails">Bank Details</label>
                  <input
                    type="text"
                    name="bbdeatails"
                    placeholder="Bank Details"
                    value={bank_details}
                    onChange={(e) => setBankDetails(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <label htmlFor="bphone">Phone</label>
                  <input
                    type="text"
                    name="bphone"
                    placeholder="Business Phone"
                    value={business_phone}
                    onChange={(e) => setBusinessPhone(e.target.value)}
                    required
                  />
                </div>
              </article>
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col justify-center">
                  <label htmlFor="bemail">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Business Email"
                    value={business_email}
                    onChange={(e) => setBusinessEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col justify-center"></div>
              </article>
              <h2 className="font-bold tracking-wide text-2xl mb-2 mt-3 ">
                Bank Information
              </h2>
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col justify-center">
                  <label htmlFor="bank">Bank Name</label>
                  <input
                    type="text"
                    name="bankname"
                    placeholder="Bank name"
                    value={bank}
                    onChange={(e) => setBank(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <label htmlFor="holder">Account Holder</label>

                  <input
                    type="text"
                    name="holder"
                    placeholder="Account Holder"
                    value={account_holder}
                    onChange={(e) => setAccountHolder(e.target.value)}
                    required
                  />
                </div>
              </article>
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col justify-center">
                  <label htmlFor="anumber">Account number</label>
                  <input
                    type="text"
                    name="anumber"
                    placeholder="Account Number"
                    value={account_number}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col justify-center"></div>
              </article>

              <h2 className="font-bold tracking-wide text-2xl mb-2 mt-3">
                Invoice Information
              </h2>
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col justify-center">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
              </article>
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col justify-center">
                  <label htmlFor="inumber">Invoice No.</label>
                  <input
                    type="text"
                    name="inumber"
                    placeholder="Invoice Number"
                    value={Invoice_number}
                    onChange={(e) => setInvoiceNummber(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <label htmlFor="currency">Currency</label>
                  <input
                    type="text"
                    name="currency"
                    placeholder="FCFA"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    required
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col justify-center">
                  <label htmlFor="tax-rate">Tax-Rate</label>
                  <input
                    type="number"
                    name="tax-rate"
                    placeholder="Tax-Rate %"
                    value={tax_rate}
                    onChange={(e) => setTaxRate(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <label htmlFor="discount">Discount</label>
                  <input
                    type="number"
                    name="dicount"
                    placeholder="Discount Rate"
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                    required
                  />
                </div>
              </article>
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col justify-center">
                  <label htmlFor="due">Due Date</label>
                  <input
                    type="date"
                    name="duedate"
                    value={due_date}
                    onChange={(e) => setDueDate(e.target.value)}
                    required
                  />
                </div>
              </article>

              <h2 className="font-bold tracking-wide text-2xl mb-2 mt-3">
                Client Information
              </h2>
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col justify-center">
                  <label htmlFor="cname">Name</label>
                  <input
                    type="text"
                    name="cname"
                    placeholder="Client Name"
                    value={client_name}
                    onChange={(e) => setClientName(e.target.value)}
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <label htmlFor="cemail">Email</label>
                  <input
                    type="email"
                    name="cemail"
                    placeholder="Client Email"
                    value={client_email}
                    onChange={(e) => setClientEmail(e.target.value)}
                    autoComplete="off"
                    required
                  />
                </div>
              </article>
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col justify-center">
                  <label htmlFor="caddres">Address</label>
                  <input
                    type="text"
                    name="caddress"
                    placeholder="Client Address"
                    value={client_address}
                    onChange={(e) => setClientAddress(e.target.value)}
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <label htmlFor="cphone">Phone</label>
                  <input
                    type="text"
                    name="cphone"
                    placeholder="Client Phone"
                    value={client_phone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    autoComplete="off"
                    required
                  />
                </div>
              </article>
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col justify-center">
                  <label htmlFor="country">Country</label>
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    autoComplete="off"
                    required
                  />
                </div>
              </article>
              {/**table-here */}

              <h2 className="font-bold tracking-wide text-2xl mb-1 mt-3">
                Invoice Items
              </h2>

              <article>
                <TableForm
                  desc={desc}
                  setDesc={setDesc}
                  no={itemNumber}
                  setItemNumber={setItemNumber}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  price={price}
                  setPrice={setPrice}
                  amount={amount}
                  setAmount={setAmount}
                  list={list}
                  setList={setList}
                  total={total}
                  setTotal={setTotal}
                  currency={currency}
                />
              </article>
              <article className="md:grid grid-cols-1 gap-10">
                <div className="flex flex-col justify-center">
                  <label htmlFor="notice">Notice</label>
                  <textarea
                    placeholder="Note...."
                    onChange={(e) => setNote(e.target.value)}
                    value={notes}
                  ></textarea>
                </div>
              </article>

              <button
                onClick={handleClick}
                className=" mt-5 text-white font-bold transition-all duration-300 py-2 px-8 rounded shadow"
              style={{backgroundColor: 'goldenrod'}}>
                Preview Invoice
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default Home;
