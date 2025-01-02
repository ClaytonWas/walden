import React, { useRef, useState } from "react";
import "./App.css";

function CanvasViewport() {
    const [isPanning, setIsPanning] = useState(false);
    const [startPoint, setStartPoint] = useState({ x: 0, y: 0 });
    const [currentTranslate, setCurrentTranslate] = useState({ x: 0, y: 0 });
    const [scale, setScale] = useState(1);
    const canvasDivRef = useRef(null);

    const updateTransform = () => {
        if (canvasDivRef.current) {
            canvasDivRef.current.style.transform = `translate(${currentTranslate.x}px, ${currentTranslate.y}px) scale(${scale})`;
        }
    };

    const handleMouseDown = (event) => {
        setIsPanning(true);
        setStartPoint({
            x: event.clientX - currentTranslate.x,
            y: event.clientY - currentTranslate.y,
        });
    };

    const handleMouseMove = (event) => {
        if (!isPanning) return;
        setCurrentTranslate({
            x: event.clientX - startPoint.x,
            y: event.clientY - startPoint.y,
        });
        updateTransform();
    };

    const handleMouseUpOrLeave = () => {
        setIsPanning(false);
    };

    const handleWheel = (event) => {
        event.preventDefault();

        const rect = canvasDivRef.current.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        const beforeTransformX = (mouseX - currentTranslate.x) / scale;
        const beforeTransformY = (mouseY - currentTranslate.y) / scale;

        const newScale = event.deltaY < 0 ? scale * 1.1 : scale * 0.9;
        setScale(Math.min(Math.max(0.5, newScale), 20));

        const afterTransformX = (mouseX - currentTranslate.x) / newScale;
        const afterTransformY = (mouseY - currentTranslate.y) / newScale;

        setCurrentTranslate((prev) => ({
            x: prev.x + (afterTransformX - beforeTransformX) * newScale,
            y: prev.y + (afterTransformY - beforeTransformY) * newScale,
        }));
        updateTransform();
    };

    return (
            <div
                className="h-[calc(80vh)] w-4/5 cursor-grab overflow-hidden active:cursor-grabbing bg-[var(--background-secondary-hover)]"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUpOrLeave}
                onMouseLeave={handleMouseUpOrLeave}
                onWheel={handleWheel}
            >
                <div
                    ref={canvasDivRef}
                    className="flex justify-center items-center h-full"
                >
                    <canvas id="imageCanvas" className="bg-[var(--counter-intensity)]"></canvas>
                </div>
            </div>
    );
}

export default CanvasViewport;
