export function createBasePoints(target: any, propertyKey: any) {
  target[propertyKey] = ([
    { x: target.width / 2, y: target.height - 1 },
    { x: target.width / 2, y: target.height - 201 },
    { x: target.width / 2 + 70, y: target.height - 201 - 70 },
    { x: target.width / 2 + 70, y: target.height - 201 - 170 },
  ] as any)
}
