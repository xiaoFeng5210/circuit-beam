import { createBasePoints } from './decorators'
import { type CircuitBeamTypes } from './types'
import BaseLayer from './baseLayer';

class CircuitBeamBaseLine extends BaseLayer implements CircuitBeamTypes {

  @createBasePoints
  BASE_POINTS: CircuitBeamTypes['BASE_POINTS'];

  constructor(
    baseLinePoints: CircuitBeamTypes['BASE_POINTS'],
    canvasId?: string
  ) {
    super(canvasId)

    if (Array.isArray(baseLinePoints) && baseLinePoints.length > 0) {
      this.BASE_POINTS = baseLinePoints;
    }
  }
}

export default CircuitBeamBaseLine
