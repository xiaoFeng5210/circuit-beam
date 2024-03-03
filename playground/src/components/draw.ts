const width = 700
const height = 621
const lineWidth = 4

let ctx: CanvasRenderingContext2D
let canvas: HTMLCanvasElement

const baseLinePath: { x: number, y: number }[] = [
  { x: width / 2, y: height - 1 },
  { x: width / 2, y: height - 201 },
  { x: width / 2 + 70, y: height - 201 - 70 },
  { x: width / 2 + 70, y: height - 201 - 170 },
]

/**
 * * flowbeam
 * @returns 
 */
export function flowBeamComposable() {
  const duration = 1000;
  let startTime: DOMHighResTimeStamp;
  let nextX: number, nextY: number;
  // 需要一个计数器, 第一次到达第一个拐点
  let pathNode = 1;

  const createFlowBeam = () => {
    startDrawLightning();
    requestAnimationFrame(flowBeam);
  }

  function startDrawLightning() {
    ctx.beginPath();
    ctx.moveTo(baseLinePath[0].x, baseLinePath[0].y);
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
  }

  function flowBeam(currentTime: DOMHighResTimeStamp) {
    !startTime && (startTime = currentTime);
    // 动画执行的进度 {0,1}
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1)
    draw(progress);
    if (progress < 1) {
      requestAnimationFrame(flowBeam);
    } else finishCurrentStage();
  }

  function finishCurrentStage() {
    startTime = 0;
    if (pathNode <= baseLinePath.length - 1) {
      pathNode++;
      requestAnimationFrame(flowBeam);
    } else {
      ctx.closePath();
    }
  }

  function draw(progress: number) {
    const { startX, startY, endX, endY } = createLightningStartAndEnd();
    // 计算这一帧中线段应该到达的坐标点
    nextX = startX + (endX - startX) * progress
    nextY = startY + (endY - startY) * progress
    const gradient = createGradient(startX, startY, nextX, nextY);
    ctx.strokeStyle = gradient;
    ctx.lineTo(nextX, nextY);
    ctx.stroke();
  }

  function createLightningStartAndEnd() {
    const startX = baseLinePath[pathNode - 1].x;
    const startY = baseLinePath[pathNode - 1].y;
    const endX = baseLinePath[pathNode].x;
    const endY = baseLinePath[pathNode].y;
    return { startX, startY, endX, endY };
  }

  function createGradient(x1: number, y1: number, x2: number, y2: number) {
    const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
    gradient.addColorStop(1, '#92B0F9');
    gradient.addColorStop(0.8, '#99B6FF');
    gradient.addColorStop(0.7, '#899ECF');
    gradient.addColorStop(0.57, '#8596BD');
    gradient.addColorStop(0.45, '#8292B5');
    gradient.addColorStop(0.4, '#79849F');
    gradient.addColorStop(0.25, '#686F81');
    gradient.addColorStop(0, '#36373C');
    return gradient;
  }

  return createFlowBeam
}


/**
 * * baseline
 * @returns 
 */
export function baseLineComposable() {
  const drawBaseLine = () => {
    ctx.beginPath()
    ctx.moveTo(width / 2, height - 1);
    ctx.strokeStyle = '#292831';
    ctx.lineWidth = lineWidth;
    baseLinePath.forEach((point) => {
      ctx.lineTo(point.x, point.y);
    })
    ctx.stroke();
    ctx.closePath(); 
  } 
  return drawBaseLine
}

export function createCanvas() {
  canvas = document.getElementById('canvas') as HTMLCanvasElement;
  ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
}
