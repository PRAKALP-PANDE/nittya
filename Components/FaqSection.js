import { Apple, AppleIcon } from 'lucide-react';
import React, { useState } from 'react';

const faqData = [
    {
        question: "What type of diet plans do you offer?",
        answer:
            "We provide homemade vegetarian, Maharashtrian, and Indian meals with daily variety. No fad diets like daily chicken or soy are included—our meals are always balanced and nutritious.",
    },
    {
        question: "Can non-veg be included?",
        answer:
            "Our standard plans are vegetarian, but separate non-veg options are available.",
    },
    {
        question: "Do you recommend supplements?",
        answer:
            "No, we do not suggest supplements, powders, or ready-made products (e.g., Herbalife).",
    },
    {
        question: "Are the meals raw or boiled?",
        answer:
            "No, our plans include complete balanced meals—roti, rice, sabji, etc.",
    },
    {
        question: "What makes your diet special?",
        answer:
            "We specialize in women-centric diet plans but offer plans for men too. Along with weight loss, we focus on: \n • PCOS/PCOD, hormonal balance \n • Iron, calcium, hemoglobin levels \n • Skin & hair health (Vitamin A, C, E) \n • Thyroid, diabetes, BP, joint pain, cholesterol \n Plans: ₹1500/- (4 weeks) | ₹3999/- (3 months).",
    },
    {
        question: "How does it work?",
        answer:
            "Weekly grocery list provided in advance. \n Daily check-in via WhatsApp—weight tracking & adjustments.",
    },
    {
        question: "What exercise is required?",
        answer:
            "30 min morning activity + 30 min night walk (compulsory).",
    },
    {
        question: "Do I need to measure food portions?",
        answer:
            "No, eat as per your appetite.",
    },
    {
        question: "How much weight can I lose?",
        answer:
            "On average, 4 kg/month (varies from 2-5 kg).",
    },
    {
        question: "How to enroll?",
        answer:
            "1. Limited slots open every Monday. \n2. Payment by Saturday before enrollment. \n3. Receive a grocery list & YouTube video for guidance.",
    },
];

const FaqSection = () => {
    const [open, setOpen] = useState(null);

    const toggleFaq = (index) => {
        setOpen(open === index ? null : index);
    };

    return (
        <div className="relative py-16 px-6 sm:px-10 lg:px-20 rounded-lg shadow-md overflow-hidden mb-4">
            {/* Decorative Images */}
            <AppleIcon color="red" size={48} alt="fruit" className="absolute top-4 left-4 w-20 opacity-30 rotate-12" />
            <img src="/homepage/vegie.jpg" alt="veggie" className="absolute bottom-4 right-4 w-24 opacity-30 rotate-[-12deg] bg-blend-color-burn" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzw7A-G0lFW-jm9X782tVRexVdfol64vuNnA&s" alt="leaf" className="absolute top-1/2 right-10 w-16 opacity-20 hidden md:block" />

            <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-4xl font-extrabold text-center text-green-800 mb-10 drop-shadow-md">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white border border-green-200 rounded-lg shadow-sm p-4 transition duration-300 hover:shadow-md"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full flex justify-between items-center text-lg font-semibold text-green-900"
                            >
                                <span>{faq.question}</span>
                                <span className="text-2xl text-green-500 cursor-pointer">
                                    {open === index ? '−' : '+'}
                                </span>
                            </button>
                            <div
                                className={`mt-3 overflow-hidden transition-all duration-500 ease-in-out ${open === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className="text-gray-700 text-base leading-relaxed">
                                    {faq.answer.split('\n').map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FaqSection;
