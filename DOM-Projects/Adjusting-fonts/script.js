window.onload = () => {
  const h5 = document.getElementById("dynamicText");
  const containerWidth = h5.parentElement.offsetWidth; // Width of the container
  const textWidth = h5.scrollWidth; // Width of the text content
  const fontSize = parseFloat(window.getComputedStyle(h5).fontSize); // Initial font size in pixels

  // If the text width exceeds the container width, decrease the font size
  if (textWidth > containerWidth) {
    const newFontSize = (containerWidth / textWidth) * fontSize;
    h5.style.fontSize = newFontSize + "px";
  }
};