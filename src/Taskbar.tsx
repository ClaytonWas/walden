import React from "react";
import Dropdown from "./TaskbarDropdown"; // Import the Dropdown component
import "./App.css";

function Taskbar() {
    return (
        <nav className="relative flex w-full bg-[var(--background)] gap-1">
            <Dropdown
                title="File"
                items={[
                    { label: "Open", onClick: () => console.log("Open clicked") },
                    { label: "Export", onClick: () => console.log("Export clicked") },
                ]}
            />
            
            <Dropdown
                title="Insert"
                items={[
                    { label: "Table", onClick: () => console.log("Table clicked") },
                    { label: "List", onClick: () => console.log("List clicked") },
                    { label: "Hyperlink", onClick: () => console.log("Hyperlink clicked") },
                ]}
            />
            
            <Dropdown
                title="Edit"
                items={[
                    { label: "Cut", onClick: () => console.log("Cut clicked") },
                    { label: "Copy", onClick: () => console.log("Copy clicked") },
                    { label: "Paste", onClick: () => console.log("Paste clicked") },
                ]}
            />
        </nav>
    );
}

export default Taskbar;
