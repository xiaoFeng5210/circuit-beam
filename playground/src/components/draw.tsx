const width = 700
const height = 621
const lineWidth = 5

let ctx: CanvasRenderingContext2D
let canvas: HTMLCanvasElement

const baseLinePath: { x: number, y: number }[] = []

export const createCanvas = () => {
  canvas = document.getElementById('canvas') as HTMLCanvasElement;
  ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
}

const drawPartOne = () => {
  ctx.lineTo(width / 2, height - 200);
  baseLinePath.push({ x: width / 2, y: height - 200 });
  ctx.stroke();
}

const drawPartTwo = () => {
  const delta = 70
  const targetX = width / 2 + delta;
  const targetY = height - 201 - delta;
  baseLinePath.push({ x: targetX, y: targetY });
  ctx.lineTo(targetX, targetY);
  ctx.stroke();
}

const drawPartThree = () => {
  const currentPoint = baseLinePath[baseLinePath.length - 1];
  const targetX = currentPoint.x;
  const targetY = currentPoint.y - 100;
  baseLinePath.push({ x: targetX, y: targetY });
  ctx.lineTo(targetX, targetY);
  ctx.stroke();
}

const drawLightning = () => {
  ctx.beginPath();
  ctx.moveTo(baseLinePath[0].x, baseLinePath[0].y);
  // ctx.strokeStyle = '#f0f0f0';
  ctx.lineWidth = lineWidth;
  ctx.lineCap = 'round';
}

export const createStep = () => {
  drawLightning();
  const duration = 1000;
  let startTime: DOMHighResTimeStamp;

  let nextX: number, nextY: number;
  const startX = baseLinePath[0].x;
  const startY = baseLinePath[0].y;
  const endX = baseLinePath[1].x;
  const endY = baseLinePath[1].y;

  const step = (currentTime: DOMHighResTimeStamp) => {
    !startTime && (startTime = currentTime);
    // 动画执行的进度 {0,1}
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1)

    const draw = () => {
      // 计算这一帧中线段应该到达的坐标点
      nextX = startX + (endX - startX) * progress
      nextY = startY + (endY - startY) * progress
      const gradient = createGradient(startX, startY, nextX, nextY);
      ctx.strokeStyle = gradient;
      ctx.lineTo(nextX, nextY);
      ctx.stroke();
    }
    draw();

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      // startTime = 0;
    }
  }
  
  requestAnimationFrame(step);
}

export const drawBaseLine = () => {
  ctx.beginPath()
  ctx.moveTo(width / 2, height - 1);
  baseLinePath.push({ x: width / 2, y: height - 1 });
  ctx.strokeStyle = '#292831';
  ctx.lineWidth = lineWidth;
  drawPartOne()
  drawPartTwo()
  drawPartThree();
  ctx.closePath();
}

function createGradient(x1: number, y1: number, x2: number, y2: number) {
  const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
  gradient.addColorStop(1, '#92B0F9');
  gradient.addColorStop(0.8, '#99B6FF');
  gradient.addColorStop(0.7, '#8596BD');
  gradient.addColorStop(0.57, '#899ECF');
  gradient.addColorStop(0.45, '#8292B5');
  gradient.addColorStop(0.4, '#79849F');
  gradient.addColorStop(0.25, '#686F81');
  gradient.addColorStop(0, '#36373C');
  return gradient;
}
