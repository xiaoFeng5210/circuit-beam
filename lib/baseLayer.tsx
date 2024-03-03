class BaseLayer {
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;

  width = 700;
  height = 621;
  lineWidth = 4;
  gradient: CanvasGradient;

  constructor(domId?: string) {
    const elementId = domId ?? 'canvas';
    this.canvas = document.getElementById(`${elementId}`) as HTMLCanvasElement;
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.createBasePen();
  }

  createBasePen() {
    this.ctx.lineWidth = this.lineWidth;
  }
  createGradient(x1: number, y1: number, x2: number, y2: number) {
    this.gradient = this.ctx.createLinearGradient(x1, y1, x2, y2);
    this.gradient.addColorStop(1, '#92B0F9');
    this.gradient.addColorStop(0.8, '#99B6FF');
    this.gradient.addColorStop(0.7, '#899ECF');
    this.gradient.addColorStop(0.57, '#8596BD');
    this.gradient.addColorStop(0.45, '#8292B5');
    this.gradient.addColorStop(0.4, '#79849F');
    this.gradient.addColorStop(0.25, '#686F81');
    this.gradient.addColorStop(0, '#36373C');
  }
}

export default BaseLayer;
