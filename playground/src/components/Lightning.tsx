import { useEffect, type FC } from 'react'
import { createCanvas, createFlowBeam, drawBaseLine } from './draw';

const Lightning: FC = () => {
  useEffect(() => {
    createCanvas();
    drawBaseLine();
    setTimeout(() => {
      createFlowBeam();
    }, 1000)
  }, [])

  return (
    <canvas id="canvas" width="700" height="621"></canvas>
  )
}
export default Lightning
