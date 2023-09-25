let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

const blue = '#0055A4';
const black = '#000000';
const white = '#FFFFFF';

const flagWidth = canvas.width;
const flagHeight = canvas.height / 4;

// Define the offset values to move the flag and the black segment
const flagOffsetX = 20; // Move the flag to the right
const segmentOffsetX = 40; // Move the black segment to the right
const segmentOffsetY = 20; // Move the black segment down

// Draw the blue rectangle
ctx.fillStyle = blue;
ctx.fillRect(-150 + flagOffsetX, 0, flagWidth, flagHeight);

// Draw the black rectangle
ctx.fillStyle = black;
ctx.fillRect(-150 + flagOffsetX, flagHeight, flagWidth, flagHeight);

// Draw the white rectangle
ctx.fillStyle = white;
ctx.fillRect(0 + flagOffsetX, flagHeight * 2, flagWidth, flagHeight);

// Draw a stroke box around the flag
ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
ctx.rect(-150 + flagOffsetX, 0, flagWidth, flagHeight * 3); // Adjusted to include all flag sections
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.lineWidth = 2;

const centerX1 = canvas.width / 1.5 + flagOffsetX;
const centerY1 = canvas.height / 4;
const outerRadius = 30;
const innerRadius = 10;
const numPoints = 5;
const rotation = Math.PI / 4;

// Define the new center coordinates for the black segment
const segmentCenterX = centerX1 + segmentOffsetX;
const segmentCenterY = centerY1 + segmentOffsetY;

// Draw a black segment of the circle
ctx.beginPath();
ctx.moveTo(segmentCenterX, segmentCenterY);
ctx.arc(segmentCenterX, segmentCenterY, outerRadius, 0, Math.PI * 0.4); // Modify the angles as needed
ctx.closePath();
ctx.fillStyle = 'black';
ctx.fill();

ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;

for (let i = 0; i < numPoints * 2; i++) {
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const angle = (Math.PI / numPoints) * i + rotation;
    const x = centerX1 + radius * Math.cos(angle);
    const y = centerY1 + radius * Math.sin(angle);

    if (i === 0) {
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
    }
}

ctx.closePath();
ctx.stroke();

const smallCircleRadius = 20;
const bottomRightX = canvas.width - smallCircleRadius - 80 + flagOffsetX;
const bottomRightY = canvas.height - smallCircleRadius - 40;

ctx.beginPath();
ctx.arc(bottomRightX, bottomRightY, smallCircleRadius, 0, Math.PI * 2);

ctx.lineWidth = 2;
ctx.strokeStyle = 'black';

ctx.stroke();
