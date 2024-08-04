import { type CircuitBeamTypes } from './types'
import BaseLayer from './baseLayer';
import {createBaseLinePoints} from './decorators'

class CircuitBeamBaseLine extends BaseLayer implements CircuitBeamTypes {
  
  BASE_POINTS: CircuitBeamTypes['BASE_POINTS'] = []

  constructor(
    baseLinePoints?: CircuitBeamTypes['BASE_POINTS'],
    canvasId?: string
  ) {
    // baseLayer run
    super(canvasId)

    if (Array.isArray(baseLinePoints) && baseLinePoints.length > 0) {
      this.BASE_POINTS = baseLinePoints;
    }
    else {
      this.BASE_POINTS = createBaseLinePoints(this);
    }

    this.drawBaseLine();
  }

  drawBaseLine() {
   this.ctx.beginPath()
   this.ctx.moveTo(this.width / 2, this.height - 5);
   this.BASE_POINTS?.forEach((point) => {
      this.ctx.lineTo(point.x, point.y);
    })
    this.ctx.stroke();
    this.ctx.closePath(); 
  } 
 
}

export default CircuitBeamBaseLine
