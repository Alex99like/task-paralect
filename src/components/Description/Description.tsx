import { useDescriptionStyle } from './description.type'
import { Flex } from '@mantine/core'

export const Description = ({ html }: { html: string }) => {
  const { classes } = useDescriptionStyle()

  return (
    <Flex dangerouslySetInnerHTML={{ __html: html }} className={classes.wrapper} direction={'column'}>
    </Flex>
  )
}
