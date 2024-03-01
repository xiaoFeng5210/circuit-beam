import { createBasePoints } from './decorators'
import { type CircuitBeamTypes } from './types'

class CircuitBeamBaseLine implements CircuitBeamTypes {
  width = 700;
  height = 621;
  lineWidth = 4;

  @createBasePoints
  BASE_POINTS: CircuitBeamTypes['BASE_POINTS'];

  constructor(baseLinePoints: CircuitBeamTypes['BASE_POINTS']) {
    if (Array.isArray(baseLinePoints) && baseLinePoints.length > 0) {
      this.BASE_POINTS = baseLinePoints;
    }
  }

  

}

export default CircuitBeamBaseLine
