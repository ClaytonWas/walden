import React, { useState } from "react";

function TaskbarDropdown({ title, items }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative w-24 text-[var(--text)]">
            <button
                className="w-full text-left pl-2 border border-transparent rounded-sm bg-[var(--background-indent)] hover:border-[var(--accent)] hover:bg-[var(--background-secondary-hover)] hover:font-semibold"
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
            </button>
            {isOpen && (
                <ul className="absolute bg-[var(--background-indent)] w-fit z-50 border border-[var(--background)] rounded-xs shadow-lg">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className="pb-2 pl-1 pr-20 border border-transparent rounded-sm hover:border-[var(--accent)] hover:bg-[var(--background-secondary-hover)] hover:font-semibold cursor-pointer"
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
