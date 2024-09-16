import { useState } from 'react';
import './fontBold.css';

const Bold = () => {
    const [selectedBold, setSelectedBold] = useState(null);

    // Function to wrap the selected text with a <span> tag
    const wrapSelectedText = (bold) => {
        const selection = window.getSelection();
        if (!selection.rangeCount) return;

        const range = selection.getRangeAt(0);
        const selectedText = range.extractContents(); // Extract selected text
        const span = document.createElement("span");

        span.className = bold; // Add the class to the <span>
        span.appendChild(selectedText); // Append the selected text inside the <span>

        range.insertNode(span); // Insert the <span> back into the DOM
    };

    // Handle select option change
    const handleSelectChange = (event) => {
        let newBold = event.target.value;
        setSelectedBold(newBold);
        wrapSelectedText(newBold); // Apply the change to the selected text
    };


    return (
        <div>
            <select onChange={handleSelectChange}>
                <option value="">Font Bold</option>
                <option value="bold-400">small</option>
                <option value="bold-600">medium</option>
                <option value="bold-900">large</option>
            </select>
        </div>

    );
};

export default Bold;