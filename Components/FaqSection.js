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
        <div className="relative py-16 px-6 sm:px-10 lg:px-20 rounded-lg shadow-xl overflow-hidden">
            {/* Decorative Images */}
            <img src="https://www.shutterstock.com/image-photo/world-best-exotic-fruit-platter-260nw-2490229919.jpg" alt="fruit" className="absolute top-4 left-4 w-20 opacity-30 rotate-12" />
            <img src="https://marleyspoon.com/media/recipes/85013/main_photos/large/vegie-398b78339b89602cf740f52d2a54b6aa.jpeg" alt="veggie" className="absolute bottom-4 right-4 w-24 opacity-30 rotate-[-12deg]" />
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
                                className={`mt-3 overflow-hidden transition-all duration-500 ease-in-out ${
                                    open === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <p className="text-gray-700 text-base leading-relaxed">
                                    {faq.answer}
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
