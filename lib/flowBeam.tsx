import BaseLine from './baseLine';
import { type CircuitBeamTypes } from './types';

class FlowBeam extends BaseLine {

  duration = 1000;
  startTime: DOMHighResTimeStamp = 0;
  nextX: number = 0;
  nextY: number = 0;
  pathNode = 1;

  mainBind = this.main.bind(this);

  constructor(
    baseLinePoints?: CircuitBeamTypes['BASE_POINTS'],
    canvasId?: string) {
    super(baseLinePoints, canvasId);
    this.startDrawLightning();;
    requestAnimationFrame(this.mainBind);
  }

  main(currentTime: DOMHighResTimeStamp) {
    !this.startTime && (this.startTime = currentTime);
    // 动画执行的进度 {0,1}
    const timeElapsed = currentTime - this.startTime;
    const progress = Math.min(timeElapsed / this.duration, 1)
    this.draw(progress);
    if (progress < 1) {
      requestAnimationFrame(this.mainBind);
    } 
    else this.finishCurrentStage();
  }

  draw(progress: number) {
    const { startX, startY, endX, endY } = this.createLightningStartAndEnd();
    // 计算这一帧中线段应该到达的坐标点
    this.nextX = startX + (endX - startX) * progress
    this.nextY = startY + (endY - startY) * progress
    this.createGradient(startX, startY, this.nextX, this.nextY);
    this.ctx.strokeStyle = this.gradient!;
    this.ctx.lineTo(this.nextX, this.nextY);
    this.ctx.stroke();
  }

  finishCurrentStage() {
    this.startTime = 0;
    if (this.pathNode <= this.BASE_POINTS.length - 1) {
      this.pathNode++;
      requestAnimationFrame(this.mainBind);
    } else {
      this.ctx.closePath();
    }
  }

  createLightningStartAndEnd() {
    const startX = this.BASE_POINTS[this.pathNode - 1].x;
    const startY = this.BASE_POINTS[this.pathNode - 1].y;
    const endX = this.BASE_POINTS[this.pathNode].x;
    const endY = this.BASE_POINTS[this.pathNode].y;
    return { startX, startY, endX, endY };
  }

  startDrawLightning() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.BASE_POINTS[0].x, this.BASE_POINTS[0].y);
    this.ctx.lineCap = 'round';
  }
}

export default FlowBeam;
