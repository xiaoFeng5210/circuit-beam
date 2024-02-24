import { useEffect, type FC } from 'react'
const width = 700
const height = 621
let ctx: CanvasRenderingContext2D
let canvas: HTMLCanvasElement

const baseLinePath: {x: number, y: number}[] = []

const Lightning: FC = () => {
  const createCanvas = () => {
    canvas = document.getElementById('canvas') as HTMLCanvasElement
    ctx = canvas.getContext('2d') as CanvasRenderingContext2D
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

  const drawBaseLine = () => {
    ctx.beginPath()
    ctx.moveTo(width / 2, height - 1);
    ctx.strokeStyle = '#292831';
    ctx.lineWidth = 5;
    baseLinePath.push({ x: width / 2, y: height - 1 });
    drawPartOne()
    drawPartTwo()
    drawPartThree()
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
