import React, { useState } from "react";

const List = () => {
  const [listType, setListType] = useState(null);

  const wrapTextWithList = (newListType) => {
    const selectedText = window.getSelection();
    console.log(selectedText);
    if (selectedText) {
      const parentListElement = selectedText.anchorNode.parentNode.closest(`ol, ul`);
      const isAlreadyWrapped = parentListElement && parentListElement.tagName === newListType.toUpperCase();
      console.log(parentListElement, newListType.toUpperCase())

      if (isAlreadyWrapped) {
        // Remove the list element if it's already wrapped with the same type of list

        const list = parentListElement.querySelectorAll('li');
        let textArray = [];
        // Loop through each <li> and log the text content
        list.forEach((li) => {
          textArray.unshift(li.textContent);
        });
        // const textArray = textContent.split("\n"); // Split the text content into an array of lines
        console.log(parentListElement, textArray)
        parentListElement.parentNode.removeChild(parentListElement);

        textArray.forEach((text) => {
          const textNode = document.createTextNode(text+'\n'); // Create a new text node for each line
          const brElement = document.createElement("br");
          const range = window.getSelection().getRangeAt(0);
          range.insertNode(brElement); 
          range.insertNode(textNode);
         
        });

        setListType(null);
      } else if (parentListElement && parentListElement.tagName !== newListType.toUpperCase() && newListType.toUpperCase() !== null) {
        // Convert the existing list to the new list type
        const newParentListElement = document.createElement(newListType);
        while (parentListElement.childNodes.length > 0) {
          newParentListElement.appendChild(parentListElement.childNodes[0]);
        }
        parentListElement.parentNode.replaceChild(newParentListElement, parentListElement);
        setListType(newListType);
      } else {
        const listElement = document.createElement(newListType);
        const text = selectedText.toString();
        const textArray = text.split("\n"); // Split the selected text into an array of lines

        if (textArray.length === 1) {
          // If the text is a single line, wrap it in a list item
          const listItem = document.createElement("li");
          listItem.textContent = text;
          listElement.appendChild(listItem);
        } else {
          // If the text is multi-line, create a new list item for each line
          textArray.forEach((text) => {
            const listItem = document.createElement("li");
            listItem.textContent = text;
            listElement.appendChild(listItem);
          });
        }

        const range = window.getSelection().getRangeAt(0);
        range.deleteContents();
        range.insertNode(listElement);

        setListType(newListType);
      }

      // Clear the selection
      window.getSelection().removeAllRanges();
    }
  };

  const makeOrderedList = () => {
    wrapTextWithList("ol");
  };

  const makeUnorderedList = () => {
    wrapTextWithList("ul");
  };

  return (
    <div>
      <button onClick={makeOrderedList}>ol</button>
      <button onClick={makeUnorderedList}>ul</button>
    </div>
  );
};

export default List;