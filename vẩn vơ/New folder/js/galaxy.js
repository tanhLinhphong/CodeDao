const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Vẽ hình tròn đại diện cho Trái đất
ctx.beginPath();
ctx.arc(300, 200, 150, 0, 2 * Math.PI);
ctx.fillStyle = "blue";
ctx.fill();

// Vẽ các đại dương
ctx.fillStyle = "lightblue";
ctx.fillRect(0, 0, 600, 200);
ctx.fillRect(0, 200, 300, 200);
ctx.fillRect(300, 200, 600, 200);

// Vẽ các lục địa
ctx.fillStyle = "green";
ctx.fillRect(0, 200, 300, 200);
ctx.fillRect(300, 0, 300, 200);

// Vẽ các đường xích đạo và kinh tuyến
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(0, 200);
ctx.lineTo(600, 200);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(300, 0);
ctx.lineTo(300, 400);
ctx.stroke()