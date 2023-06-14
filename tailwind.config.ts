import type { Config } from 'tailwindcss'
import tailwindTypography from '@tailwindcss/typography'

type themeColor = { theme: (color: string) => void }

export default <Partial<Config>>{
  darkMode: 'class',
  plugins: [tailwindTypography],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#292F33'
      },
      typography: ({ theme }: themeColor) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.secondary'),
            '--tw-prose-headings': theme('colors.secondary'),
            '--tw-prose-lead': theme('colors.secondary'),
            '--tw-prose-links': theme('colors.secondary'),
            '--tw-prose-bold': theme('colors.secondary'),
            '--tw-prose-counters': theme('colors.secondary'),
            '--tw-prose-bullets': theme('colors.secondary'),
            '--tw-prose-hr': theme('colors.secondary'),
            '--tw-prose-quotes': theme('colors.secondary'),
            '--tw-prose-quote-borders': theme('colors.secondary'),
            '--tw-prose-captions': theme('colors.secondary'),
            '--tw-prose-code': theme('colors.secondary'),
            '--tw-prose-pre-code': theme('colors.secondary'),
            '--tw-prose-pre-bg': theme('colors.secondary'),
            '--tw-prose-th-borders': theme('colors.secondary'),
            '--tw-prose-td-borders': theme('colors.secondary'),
            '--tw-prose-invert-body': theme('colors.primary'),
            '--tw-prose-invert-headings': theme('colors.primary'),
            '--tw-prose-invert-lead': theme('colors.primary'),
            '--tw-prose-invert-links': theme('colors.primary'),
            '--tw-prose-invert-bold': theme('colors.primary'),
            '--tw-prose-invert-counters': theme('colors.primary'),
            '--tw-prose-invert-bullets': theme('colors.primary'),
            '--tw-prose-invert-hr': theme('colors.primary'),
            '--tw-prose-invert-quotes': theme('colors.primary'),
            '--tw-prose-invert-quote-borders': theme('colors.primary'),
            '--tw-prose-invert-captions': theme('colors.primary'),
            '--tw-prose-invert-code': theme('colors.primary'),
            '--tw-prose-invert-pre-code': theme('colors.primary'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.primary'),
            '--tw-prose-invert-td-borders': theme('colors.primary')
          }
        }
      })
    }
  }
}
