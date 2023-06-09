import { useDescriptionStyle } from './description.style'
import { TypographyStylesProvider } from '@mantine/core'

export const Description = ({ html }: { html: string }) => {
  const { classes } = useDescriptionStyle()

  return (
    <TypographyStylesProvider className={classes.wrapper}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </TypographyStylesProvider>
  )
}
