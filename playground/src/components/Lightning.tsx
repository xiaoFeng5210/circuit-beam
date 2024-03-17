import { useEffect, type FC } from 'react'
import FlowBeam from '../../../lib/flowBeam';

const Lightning: FC = () => {
  useEffect(() => {
      new FlowBeam({startTime: 2000})
  }, [])

  return (
    <canvas id="canvas" width="700" height="621"></canvas>
  )
}
export default Lightning
