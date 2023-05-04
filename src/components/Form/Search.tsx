import { TextInput, Image, Button } from "@mantine/core"
import { useSearchStyle } from "./search.style"
import SearchIcon from '../../assets/search.svg'
import { UseFormReturnType } from "@mantine/form"
import { IFormJob } from "../../pages/Jobs"

type FormProps = UseFormReturnType<IFormJob, (values: IFormJob) => IFormJob> 

export const Search = ({ form }: { form: FormProps }) => {
    const { classes } = useSearchStyle()

    return (
        <TextInput
          classNames={{
            
            input: classes.wrapper,
            icon: classes.icon
          }}
          onChange={(e) => form.setFieldValue('search', e.target.value)}
          icon={<Image style={{ width: 16 }} src={SearchIcon} />}
          size="md"
          iconWidth={35}
          style={{ minWidth: 320, width: "100%", maxWidth: 773 }}
          rightSection={
            <Button className={classes.button}>Поиск</Button>
          }
          placeholder="Введите название вакансии"
          rightSectionWidth={106}
          
        />
    )
}
