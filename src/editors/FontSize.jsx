import { useState } from 'react';
import './fontSize.css';

const FontSize = () => {
    const [selectedSize, setSelectedSize] = useState(null);

    // Function to wrap the selected text with a <span> tag
    const wrapSelectedText = (size) => {
        const selection = window.getSelection();
        if (!selection.rangeCount) return;

        const range = selection.getRangeAt(0);
        const selectedText = range.extractContents(); // Extract selected text
        const span = document.createElement("span");

        span.className = size; // Add the class to the <span>
        span.appendChild(selectedText); // Append the selected text inside the <span>

        range.insertNode(span); // Insert the <span> back into the DOM
    };

    // Handle select option change
    const handleSelectChange = (event) => {
        let newSize = event.target.value;
        setSelectedSize(newSize);
        wrapSelectedText(newSize); // Apply the change to the selected text
    };


    return (
        <div>
            <select onChange={handleSelectChange}>
                <option value="">Font Size</option>
                <option value="font-15">15px</option>
                <option value="font-20">20px</option>
                <option value="font-30">30px</option>
            </select>
        </div>

    );
};

export default FontSize;