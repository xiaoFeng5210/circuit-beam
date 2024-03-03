class BaseLayer {
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;

  width = 700;
  height = 621;
  lineWidth = 4;

  constructor(domId?: string) {
    const elementId = domId ?? 'canvas';
    this.canvas = document.getElementById(`${elementId}`) as HTMLCanvasElement;
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
  }

  createBasePen() {
    this.ctx.lineWidth = this.lineWidth;
  }

}

export default BaseLayer;
