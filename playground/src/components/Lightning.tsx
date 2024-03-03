import { useEffect, type FC } from 'react'
import CircuitBeamBaseLine from '../../../lib/baseLine';

const Lightning: FC = () => {
  useEffect(() => {
    setTimeout(() => {
      const obj = new CircuitBeamBaseLine();
      console.log(obj.BASE_POINTS)
    }, 1000)
  }, [])

  return (
    <canvas id="canvas" width="700" height="621"></canvas>
  )
}
export default Lightning
