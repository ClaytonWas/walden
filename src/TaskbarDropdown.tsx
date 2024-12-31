import React, { useState } from "react";

function TaskbarDropdown({ title, items }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative w-24">
            <button
                className="w-full text-left pl-2 border rounded-sm bg-[var(--background-hover)] border-[var(--background-secondary)] hover:border-[var(--foreground)] hover:bg-[var(--background-secondary-hover)]"
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
            </button>
            {isOpen && (
                <ul className="absolute bg-[var(--background)] w-fit z-50 border rounded-md shadow-lg">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className="pb-2 pr-20 border border-transparent hover:border-[var(--foreground)] hover:bg-[var(--background-secondary-hover)] cursor-pointer"
                            onClick={() => {
                                item.onClick && item.onClick();
                                setIsOpen(false); // Close the dropdown after selection
                            }}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default TaskbarDropdown;
