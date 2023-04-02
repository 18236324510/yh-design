export const colorEnum = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'cyan',
  'blue',
  'purple',
  'mauve',
  'pink',
  'brown',
  'grey',
  'gray',
  'black',
  'white'
] as const

export type ColorType = (typeof colorEnum)[number]
