import { setColor } from './index'

export interface LucidOptions {
  colors?: LucidColors
}

export interface LucidColors {
  [item: string]: any
  primary: string
  success: string
  danger: string
  warn: string
  dark: string
}

const defineColors = (colors: LucidColors) => {
  Object.keys(colors).forEach((item) => {
    if (document.body) {
      setColor(item, colors[item], document.body)
    }
  })
}

export const defineLucidOptions = (options: LucidOptions) => {
  if (!!options.colors) {
    defineColors(options.colors)
  }
}
