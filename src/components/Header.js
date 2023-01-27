import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <>
      {/** header */}
      <header className="flex flex-col items-center justify-center mb-5 lg:flex-row lg:justify-between">
        <div>
          <Link to="/">
            <h1 className="font-bold uppercase tracking-wide text-2xl mb-3">
              <span className="logo-start">EASY</span>BILL
            </h1>
          </Link>
        </div>
      </header>
      {/** end header */}
    </>
  );
};

export default Header;
