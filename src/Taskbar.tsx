import React from "react";
import { getTauriVersion } from '@tauri-apps/api/app'
import Dropdown from "./TaskbarDropdown";
import "./App.css";

const tauriVersion = await getTauriVersion();

function Taskbar() {
    return (
        <div className="justify-between bg-[var(--background)] w-full flex">
            <nav className="relative flex bg-[var(--background)] gap-1">
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
            <p className="px-2 text-[var(--text)]">Built with Tauri v{tauriVersion}</p>
        </div>
    );
}

export default Taskbar;
