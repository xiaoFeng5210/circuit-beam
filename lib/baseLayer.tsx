class BaseLayer {
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;

  constructor(domId: string) {
    const elementId = domId ?? 'canvas';
    this.canvas = document.getElementById(`${elementId}`) as HTMLCanvasElement;
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
  }
  
}
