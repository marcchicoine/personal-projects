// Set up the canvas element
var canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

// Set up the context
var context = canvas.getContext('2d');

// Set up the koi fish
var koiFish = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 25,
  speed: 3,
  color: '#FFA500',
  tailSize: 20,
  tailColor: '#FF4500',
  finSize: 10,
  finColor: '#FF8C00'
};

// Draw the koi fish
function drawKoiFish() {
  // Draw the body
  context.beginPath();
  context.ellipse(koiFish.x, koiFish.y, koiFish.radius * 1.5, koiFish.radius, Math.PI / 4, 0, Math.PI * 2, false);
  var bodyGradient = context.createRadialGradient(koiFish.x, koiFish.y, 0, koiFish.x, koiFish.y, koiFish.radius * 1.5);
  bodyGradient.addColorStop(0, koiFish.color);
  bodyGradient.addColorStop(1, '#FFC0CB');
  context.fillStyle = bodyGradient;
  context.fill();

  // Draw the tail
  context.beginPath();
  context.moveTo(koiFish.x - koiFish.radius - koiFish.tailSize, koiFish.y);
  context.quadraticCurveTo(koiFish.x - koiFish.radius - koiFish.tailSize * 1.5, koiFish.y - koiFish.tailSize / 2, koiFish.x - koiFish.radius, koiFish.y - koiFish.tailSize / 2);
  context.lineTo(koiFish.x - koiFish.radius, koiFish.y + koiFish.tailSize / 2);
  context.quadraticCurveTo(koiFish.x - koiFish.radius - koiFish.tailSize * 1.5, koiFish.y + koiFish.tailSize / 2, koiFish.x - koiFish.radius - koiFish.tailSize, koiFish.y);
  context.closePath();
  var tailGradient = context.createLinearGradient(koiFish.x - koiFish.radius - koiFish.tailSize * 1.5, koiFish.y, koiFish.x - koiFish.radius + koiFish.tailSize * 0.5, koiFish.y);
  tailGradient.addColorStop(0, '#FF4500');
  tailGradient.addColorStop(1, '#FF8C00');
  context.fillStyle = tailGradient;
  context.fill();

// Draw the fins
context.beginPath();
context.moveTo(koiFish.x + koiFish.radius / 2, koiFish.y - koiFish.finSize / 2);
context.lineTo(koiFish.x + koiFish.radius / 2, koiFish.y + koiFish.finSize / 2);
context.lineTo(koiFish.x + koiFish.radius, koiFish.y);
context.closePath();
context.fillStyle = koiFish.finColor;
context.fill();
context.beginPath();
context.moveTo(koiFish.x - koiFish.radius / 2, koiFish.y - koiFish.finSize / 2);
context.lineTo(koiFish.x - koiFish.radius / 2, koiFish.y + koiFish.finSize / 2);
context.lineTo(koiFish.x - koiFish.radius, koiFish.y); // This line was missing an argument in the code I provided earlier
context.closePath();
context.fillStyle = koiFish.finColor;
context.fill();

       // Draw the other fin
     context.lineTo(koiFish.x - koiFish.radius, koiFish.y);
     context.closePath();
     context.fillStyle = koiFish.finColor;
     context.fill();
   }
   
   // Move the koi fish
   function moveKoiFish() {
     // Check if the fish is out of bounds
     if (koiFish.x + koiFish.radius > canvas.width || koiFish.x - koiFish.radius < 0) {
       koiFish.speed = -koiFish.speed;
     }
   
     // Move the fish
     koiFish.x += koiFish.speed;
   
     // Redraw the fish and request a new frame
     context.clearRect(0, 0, canvas.width, canvas.height);
     drawKoiFish();
     window.requestAnimationFrame(moveKoiFish);
   }
   
   // Start the animation loop
   moveKoiFish();
   