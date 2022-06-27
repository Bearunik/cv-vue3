import hexRgb from 'hex-rgb'

export function getBgRbga (color: string): string {
  const rgb = hexRgb(color)
  const value = `rgba(${rgb.red}, ${rgb.green}, ${rgb.blue}, 0.2)`
  return value
}
