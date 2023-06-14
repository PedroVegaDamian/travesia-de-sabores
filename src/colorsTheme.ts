import type { ColorModeInstance } from '@nuxtjs/color-mode/dist/runtime/types'

export type nameThemeColors = 'dark' | 'light'

export const colorsTheme: Record<nameThemeColors, string> = {
  dark: '#FFFFFF',
  light: '#292F33'
}

interface ColorModeTheme extends ColorModeInstance {
  value: nameThemeColors
}

export const useColorTheme = useColorMode as () => ColorModeTheme
