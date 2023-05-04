import { TextInput, ActionIcon, Image, Button } from "@mantine/core"
import { useSearchStyle } from "./search.style"
import SearchIcon from '../../assets/search.svg'

export const Search = () => {
    const { classes } = useSearchStyle()

    return (
        <TextInput
          classNames={{
            input: classes.wrapper,
            icon: classes.icon
          }}
          icon={<Image style={{ width: 16 }} src={SearchIcon} />}
          size="md"
          iconWidth={35}
          rightSection={
            <Button className={classes.button}>Поиск</Button>
          }
          placeholder="Введите название вакансии"
          rightSectionWidth={106}
          
        />
    )
}
