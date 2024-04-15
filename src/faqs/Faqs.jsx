import React, { useState } from "react";

import { faqsData } from "./faqData";
import Faq from "./Faq";

const Faqs = () => {
  const [faqs, setFaqs] = useState(faqsData);
  return (
    <main className=" max-w-container mx-auto mt-32 bg-white shadow rounded">
      <section className=" px-7 py-10">
        <h2 className=" text-center text-2xl font-bold mb-4 uppercase">faqs</h2>
        {faqs.map((faq) => (
          <Faq key={faq.id} {...faq} />
        ))}
      </section>
    </main>
  );
};

export default Faqs;
