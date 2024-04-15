import React, { useState } from "react";

import { FaPlusSquare } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";

const Faq = ({ id, title, desc }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <article className=" border mb-2 p-3 rounded">
      <div className="flex justify-between">
        <h4 className=" text-xl font-semibold normal-case">{title}</h4>
        <button className=" text-2xl" onClick={() => setToggle(!toggle)}>
          {toggle ? <FaMinusSquare /> : <FaPlusSquare />}
        </button>
      </div>
      {toggle && <p className=" text-sm text-[#666] pt-2">{desc}</p>}
    </article>
  );
};

export default Faq;
