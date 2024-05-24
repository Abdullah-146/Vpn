import React from "react";
import FaqItem from "./FaqItem";
import FaqIcon from "../Svgs/FaqIcon";
import { useSelector } from "react-redux";

const FaqBox = () => {
  const {
    loading: faqsLoading,
    faqs,
    error: faqsError,
  } = useSelector((state) => state.faq);

  return (
    <div className="flex-1 flex flex-col container mb-6 ">
      <div className="flex flex-row items-center justify-center space-x-4">
        <FaqIcon />
        <p className="font-subHeading text-simple">Your Questions</p>
      </div>
      <p className="font-heading text-heading text-center">FAQ</p>
      <div className="flex-1 flex flex-col space-y-4 p-4">
        {faqs.map((faq, index) => {
          return (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FaqBox;
