import { useEffect, type FC } from 'react'
import CircuitBeamBaseLine from '../../../lib/baseLine';

const Lightning: FC = () => {
  useEffect(() => {
    setTimeout(() => {
      new CircuitBeamBaseLine();
    }, 1000)
  }, [])

  return (
    <canvas id="canvas" width="700" height="621"></canvas>
  )
}
export default Lightning
