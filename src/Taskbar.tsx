import React from "react";
import { getTauriVersion } from '@tauri-apps/api/app'
import { invoke } from '@tauri-apps/api/core';
import Dropdown from "./TaskbarDropdown";
import "./App.css";

const tauriVersion = await getTauriVersion();

function Taskbar() {
    return (
        <div className="justify-between bg-[var(--background)] w-full flex px-2 py-1 text-lg">
            <nav className="relative flex bg-[var(--background)] gap-2">
                <Dropdown
                    title="File"
                    items={[
                        { label: "Open", onClick: () => invoke("open") },
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
            <p className="px-2 text-[var(--text)] select-none">Built with Tauri v{tauriVersion}</p>
        </div>
    );
}

export default Taskbar;
