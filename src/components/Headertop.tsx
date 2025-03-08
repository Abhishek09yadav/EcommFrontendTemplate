import React from 'react'
import { FaFacebook, FaInstagramSquare, FaPinterest,  } from "react-icons/fa";

const Headertop = () => {
  return (
    <div className="border-b  border-grey-200 hidden sm:block ">
      <div className="container px-5 py-4 ">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <div className="header_top__icon_wrapper">
              <FaFacebook />
            </div>
            <div className="header_top__icon_wrapper">
              <FaInstagramSquare />
            </div>
            <div className="header_top__icon_wrapper">
              <FaPinterest />
            </div>
          </div>
          <div className="text-base font-semibold">
            {" "}
            <b>Holi Festival </b> Sale{" "} 50% off
          </div>
          <div className="flex gap-4 text-grey-500 text-xs">
            <select name="currency" id="currency">
              <option value="INR">INR</option>
              <option value="USD">USD</option>
              <option value="EURO">EURO</option>
            </select>
            <select name="language" id="currency">
              <option value="Eng">Eng</option>
              <option value="Hindi">Hindi</option>
              <option value="Dutch">Dutch</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Headertop