// Get the filter element and the rectangle element
const filterEl = document.querySelector('feTurbulence');
const rectEl = document.querySelector('rect');


// Add a mousemove event listener to the document
document.addEventListener('mousemove', (e) => {
    // Get the position of the mouse
    const mouseX = e.clientX;
    const mouseY = e.clientY;
  
    // Get the position and dimensions of the rectangle
    const rectX = rectEl.getBoundingClientRect().left;
    const rectY = rectEl.getBoundingClientRect().top;
    const rectWidth = rectEl.getBoundingClientRect().width;
    const rectHeight = rectEl.getBoundingClientRect().height;
  
    // Calculate the distance between the mouse and the filter
    const distX = Math.abs(mouseX - (rectX + rectWidth / 2));
    const distY = Math.abs(mouseY - (rectY + rectHeight / 2));
    const dist = Math.sqrt(distX ** 2 + distY ** 2);
  
    // Update the baseFrequency of the filter based on the distance
    const maxDist = Math.sqrt(rectWidth ** 2 + rectHeight ** 2);
    const minFreq = 0.02;
    const maxFreq = 0.1;
    const freq = minFreq + (maxFreq - minFreq) * (dist / maxDist);
    filterEl.setAttribute('baseFrequency', `${freq} ${freq}`);
  });
  
  
  
  
  
  