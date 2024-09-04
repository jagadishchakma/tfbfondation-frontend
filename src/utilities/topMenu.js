function navigationSlider() {
  const tabs = document.querySelectorAll(".stack-tab-container a.tab");
  const scrollRightArrow = document.querySelector(".stack-tab-container .right-arrow");
  const scrollLeftArrow = document.querySelector(".stack-tab-container .left-arrow");
  const tabList = document.querySelector(".stack-tab-container ul.tabs");
  const leftArrowContainer = document.querySelector(".stack-tab-container .left-arrow");
  const rightArrowContainer = document.querySelector(".stack-tab-container .right-arrow");

  // Function to remove "active" class from all tabs
  const removeActiveClasses = () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
  };

  // Function to manage arrow buttons
  const manageArrows = () => {
    const tabListWidth = tabList.offsetWidth;
    const tabListScrollWidth = tabList.scrollWidth;
    const scrollLeft = tabList.scrollLeft;

    if (tabListWidth >= tabListScrollWidth) {
      leftArrowContainer.classList.remove("active");
      rightArrowContainer.classList.remove("active");
    } else {
      if (scrollLeft <= 0) {
        leftArrowContainer.classList.remove("active");
        rightArrowContainer.classList.add("active");
      } else if (scrollLeft + tabListWidth >= tabListScrollWidth - 1) { // Add a tolerance value of 1 pixel
        leftArrowContainer.classList.add("active");
        rightArrowContainer.classList.remove("active");
      } else {
        leftArrowContainer.classList.add("active");
        rightArrowContainer.classList.add("active");
      }
    }
  };

  // Add "active" class to clicked tab and remove from others
  tabs.forEach((tab) => {
    tab.addEventListener("click", (event) => {
      event.preventDefault();
      removeActiveClasses();
      tab.classList.add("active");
    });
  });

  // Scroll the tab list to the right
  scrollRightArrow.addEventListener("click", () => {
    tabList.scrollLeft += 300;
    manageArrows();
  });

  // Scroll the tab list to the left
  scrollLeftArrow.addEventListener("click", () => {
    tabList.scrollLeft -= 300;
    manageArrows();
  });

  // Listen to scroll event to manage arrow buttons
  tabList.addEventListener("scroll", manageArrows);

  // Adding the dragging functionality
  let drag = false;
  const dragging = (e) => {
    if (!drag) return;
    tabList.classList.add("dragging");
    tabList.scrollLeft -= e.movementX;
    manageArrows();
  };

  tabList.addEventListener("mousedown", () => {
    drag = true;
    tabList.addEventListener("mousemove", dragging);
  });

  document.addEventListener("mouseup", () => {
    drag = false;
    tabList.removeEventListener("mousemove", dragging);
    tabList.classList.remove("dragging");
  });

  // Initialize arrow buttons
  manageArrows();
}

export default navigationSlider;