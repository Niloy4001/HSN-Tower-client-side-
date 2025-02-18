import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import faqimg from "../../assets/FAQ.png";

const faqs = [
  {
    question: "How can I apply for an apartment?",
    answer:
      "You can apply through our online portal by selecting an apartment and submitting a membership request.",
  },
  {
    question: "What payment methods are accepted for rent?",
    answer:
      "We accept online bank transfers, mobile banking (Bkash, Nagad), and credit/debit card payments.",
  },
  {
    question: "Is there a security deposit required?",
    answer:
      "Yes, a refundable security deposit is required at the time of booking. The amount depends on the apartment type.",
  },
  {
    question: "Can I visit the apartment before booking?",
    answer:
      "Yes, you can schedule a visit through our website. Our team will arrange a tour for you.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16  ">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A3D7C] mb-6">
        Frequently Asked <span className="text-[#F8B400]">Questions</span>
      </h2>
      <p className="text-[#2C3E50] text-lg text-center mb-10">
        Find answers to common questions about apartments, payments, and more.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[90%] mx-auto items-center">
        {/* left image */}
        <div className="col-span-1">
          <img src={faqimg} className="w-full h-[350px]" alt="" />
        </div>
        {/* question and answer */}
        <div className="col-span-1 ">
          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#F4F6F9] p-5 rounded-lg shadow-md cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                {/* Question */}
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-[#1A3D7C]">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <FaChevronUp className="text-[#F8B400] text-xl" />
                  ) : (
                    <FaChevronDown className="text-[#F8B400] text-xl" />
                  )}
                </div>

                {/* Answer */}
                {openIndex === index && (
                  <p className="text-[#2C3E50] mt-3">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
