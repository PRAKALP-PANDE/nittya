import { useState } from 'react';

const faqData = [
    {
        question: "What is the role of a nutritionist?",
        answer:
            "A nutritionist provides expert advice on matters related to food and nutrition, helping you achieve health goals, manage chronic conditions, and improve overall well-being.",
    },
    {
        question: "How often should I see a nutritionist?",
        answer:
            "It depends on your goals. For general health advice, a few visits might be enough. However, if you have specific health conditions, frequent visits might be necessary.",
    },
    {
        question: "What should I expect during my first consultation?",
        answer:
            "Your nutritionist will assess your health history, eating habits, lifestyle, and any medical conditions. They will then create a personalized plan to meet your health goals.",
    },
    {
        question: "Can a nutritionist help with weight loss?",
        answer:
            "Yes, a nutritionist can help with safe and sustainable weight loss by providing guidance on diet, exercise, and healthy habits tailored to your specific needs.",
    },
];

const FaqSection = () => {
    const [open, setOpen] = useState(null);

    const toggleFaq = (index) => {
        setOpen(open === index ? null : index);
    };

    return (
        <div className="w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
                {faqData.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4">
                        <button
                            onClick={() => toggleFaq(index)}
                            className="w-full text-left text-xl font-semibold text-gray-800 flex items-center justify-between"
                        >
                            <span>{faq.question}</span>
                            <span className="text-xl text-gray-500">{open === index ? '-' : '+'}</span>
                        </button>
                        {open === index && (
                            <p
                                className={`mt-2 text-gray-600 text-lg transition-all duration-300 ease-in-out ${open === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                {faq.answer}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FaqSection;