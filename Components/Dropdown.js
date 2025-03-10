import { useState } from 'react';
import Link from 'next/link';

const Dropdown = ({ title, items }) => {
    return (
        <details className="mx-3 overflow-hidden rounded [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-2 py-2 transition">
                <span className="block hover:text-green-400 transition-colors duration-200 text-md font-semibold"> {title} </span>
                <span className="transition group-open:-rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </span>
            </summary>
            <div className='relative border-s-2 border-gray-200'>
                <ul className="space-y-1 p-2 mx-2">
                    {items.map((item, index) => (
                    <li key={index}>
                        <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
                            <Link href={item.href} className="text-md">{item.label} </Link>
                        </label>
                    </li>
                    ))}
                </ul>
            </div>
        </details>
    );
};

export default Dropdown;
