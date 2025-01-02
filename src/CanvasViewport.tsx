import React from "react";
import "./App.css";


function CanvasViewport() {
    return (
        <div className="bg-[var(--background-indent)] h-screen flex">
            <div className="cursor-grab overflow-hidden active:cursor-grabbing h-1/2 w-2/3 bg-[var(--background-secondary-hover)]"> {/* imageViewingModule */}
                <div className="relative flex justify-center items-center w-full h-full "> {/* imageCanvasDiv */}
                    <canvas id="imageCanvas" className="bg-[var(--counter-intensity)]"></canvas>
                </div>
            </div>
        </div>
    );
}

export default CanvasViewport;
