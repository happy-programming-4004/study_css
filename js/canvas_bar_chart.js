const months = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
function draw() {
  let canvas = document.getElementById("bar-chart");
  let ctx = canvas.getContext("2d");

  // 获取canvas 宽高
  let cWidth = canvas.width;
  let cHeight = canvas.height;
  ctx.fillStyle = "#f8fcff";
  ctx.fillRect(0, 0, cWidth, cHeight);

  // 计算9个柱子的位置
  // canvas内边距
  let padding = 40;
  // 柱子的宽度
  let width = 8;
  // 柱子的最大高度
  let maxHeight = (cHeight - padding * 2) / 2;
  // 柱子最小高度
  let minHeight = maxHeight / 2;
  // 柱子间距
  let barGap = (cWidth - 2 * padding - 9 * width) / 8;
  // 柱子圆角
  let radius = 5;
  // y坐标开始于canvas中间
  let y = cHeight / 2;
  console.log(`cWidth:${cWidth}, cHeight:${cHeight},maxHeight:${maxHeight},minHeight:${minHeight}`);
  console.log(`padding:${padding}, barGap:${barGap}, radius:${radius},width:${width},y:${y}`);

  for (let i = 0; i < 9; i++) {
    // 柱子上半部分高度，随机产生[minHeight,maxHeight]区间数字
    let height1 = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
    // 柱子下半部分高度
    let height2 = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
    // 计算每个柱子起始x坐标的位置
    let x = padding + (barGap + width) * i;
    console.log(`x:${x},width:${width},height1:${height1}, height2:${height2}`);
    // 画柱图
    drawBar(ctx, x, y, width, height1, height2, radius);

    // 画月
    ctx.fillStyle = "#747d8c";
    ctx.textAlign = "center";
    // 设置字体粗细、大小，字体名
    ctx.font = "300 12px sans-serif";
    // 在柱子中间画文字

    ctx.fillText(months[i], x + width / 2, y + maxHeight + 20);
  }
}

function drawBar(ctx, x, y, width, height1, height2, radius) {
  // 上部分
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y - height1 + radius);
  ctx.arcTo(x, y - height1, x + radius, y - height1, radius);
  ctx.lineTo(x + width - radius, y - height1);
  ctx.arcTo(x + width, y - height1, x + width, y - height1 + radius, radius);
  ctx.lineTo(x + width, y);
  ctx.lineTo(x, y);
  ctx.fillStyle = "#341F97";
  ctx.fill();

  // 下部分
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + height2 - radius);
  ctx.arcTo(x, y + height2, x + radius, y + height2, radius);
  ctx.lineTo(x + width - radius, y + height2);
  ctx.arcTo(x + width, y + height2, x + width, y + height2 - radius, radius);
  ctx.lineTo(x + width, y);
  ctx.lineTo(x, y);
  ctx.fillStyle = "#54a0ff";
  ctx.fill();

  // ctx.stroke();
}
