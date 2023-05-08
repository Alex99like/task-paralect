import { createStyles } from '@mantine/core'

export const useDescriptionStyle = createStyles((theme) => ({
  wrapper: {
    background: theme.colors.white,
    marginTop: 20,
    padding: '20px 40px',
    border: `1px solid ${theme.colors.gray}`,
    borderRadius: 12,
  }
}))