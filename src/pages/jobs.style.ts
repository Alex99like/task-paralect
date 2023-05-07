import { createStyles } from '@mantine/core'

export const useStyleJobs = createStyles(() => ({
  wrapper: {
    '@media (max-width: 720px)': {
      flexDirection: 'column',
    },
  }
}))