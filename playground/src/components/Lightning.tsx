import { useEffect, type FC } from 'react'

const width = 700
const height = 621
const lineWidth = 5

let gradient: CanvasGradient;

let ctx: CanvasRenderingContext2D
let canvas: HTMLCanvasElement

const baseLinePath: { x: number, y: number }[] = []

const Lightning: FC = () => {
  const createCanvas = () => {
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
    ctx.strokeStyle = gradient;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    // ctx.lineTo(baseLinePath[1].x, baseLinePath[1].y + 30);
    // ctx.stroke()
  }

  const createStep = () => {
    drawLightning();
    const duration = 1000;
    let startTime: any
    let nextX: number, nextY: number;
    const startX = baseLinePath[0].x
    const startY = baseLinePath[0].y;
    const endX = baseLinePath[baseLinePath.length - 1].x;
    const endY = baseLinePath[baseLinePath.length - 1].y + 30;

    const step = (currentTime: any) => {
      !startTime && (startTime = currentTime);
      // 已经过去的时间(ms)
      const timeElapsed = currentTime - startTime;
      // 动画执行的进度 {0,1}
      const progress = Math.min(timeElapsed / duration, 1)

      const draw = () => {
        // 计算这一帧中线段应该到达的坐标点
        nextX = startX + (endX - startX) * progress
        nextY = startY + (endY - startY) * progress
        

      }

    }





  }

  const drawBaseLine = () => {
    ctx.beginPath()
    ctx.moveTo(width / 2, height - 1);
    baseLinePath.push({ x: width / 2, y: height - 1 });
    gradient = ctx.createLinearGradient(width / 2, height - 1, width, 0);
    gradient.addColorStop(1, '#99B6FF');
    gradient.addColorStop(0, '#E2F2FD');

    ctx.strokeStyle = '#292831';
    ctx.lineWidth = lineWidth;

    drawPartOne()
    drawPartTwo()
    drawPartThree();
    ctx.closePath();
  }

  useEffect(() => {
    createCanvas();
    drawBaseLine();
  }, [])

  return (
    <canvas id="canvas" width="700" height="621"></canvas>
  )
}
export default Lightning
