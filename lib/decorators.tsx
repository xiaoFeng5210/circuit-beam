export function propertyBasePointsDeractor(target: any, propertyKey: string) {
  console.log('target', '装饰器执行了')
  target[propertyKey] = [
    { x: target.width / 2, y: target.height - 1 },
    { x: target.width / 2, y: target.height - 201 },
    { x: target.width / 2 + 70, y: target.height - 201 - 70 },
    { x: target.width / 2 + 70, y: target.height - 201 - 170 },
  ]
}

export function createBaseLinePoints(target: any) {
  return [
    { x: target.width / 2, y: target.height - 20 },
    { x: target.width / 2, y: target.height - 201 },
    { x: target.width / 2 + 70, y: target.height - 201 - 70 },
    { x: target.width / 2 + 70, y: target.height - 201 - 170 },
  ]
}
