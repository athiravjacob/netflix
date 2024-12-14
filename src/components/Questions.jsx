import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Questions() {
  const FAQ = [
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    },
    {
      question: "How much does Netflix cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans start from ₹149 a month. No extra costs, no contracts.",
    },
    {
      question: "Where can I watch?",
      answer:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device.",
    },
    {
      question: "Can I download content?",
      answer:
        "Yes! You can download your favorite shows and movies to watch offline on iOS, Android, or Windows 10 apps.",
    },
    {
      question: "How do I cancel?",
      answer:
        "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online with just two clicks.",
    },
  ];

  return (
    <div className="px-6 sm:px-12 lg:px-36 bg-black mb-20">
      <h1 className="py-7 font-bold text-white text-2xl sm:text-3xl lg:text-4xl text-center sm:text-left">
        Frequently Asked Questions
      </h1>
      <div>
        {FAQ.map((ques, index) => (
          <Accordion
            key={index}
            sx={{
              backgroundColor: "#141414",
              color: "white",
              borderRadius: 4,
              borderBottom: "1px solid #333",
              marginBottom: 1,
            }}
          >
            <AccordionSummary
              sx={{
                backgroundColor: "#141414",
                fontWeight: "bold",
                padding: 1,
                margin: 1,
                "& .MuiAccordionSummary-expandIconWrapper": { color: "white" },
              }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              {ques.question}
            </AccordionSummary>
            <AccordionDetails
              sx={{
                padding: 2,
                backgroundColor: "#222",
                borderRadius: 4,
                borderBottom: "1px solid #333",
              }}
            >
              {ques.answer}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
