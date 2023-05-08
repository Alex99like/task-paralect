import { controlCss, useFormStyle } from "./form.style"
import { Text, NumberInput, Select, Button } from '@mantine/core'
import { UseFormReturnType } from "@mantine/form"
import { IFormJob } from "../../pages/Jobs"
import { useCategories } from "../../hooks/useCategories"
import { ArrowIcon } from "../shared/ArrowIcon"
import { useState } from "react"
import { ButtonReset } from "../shared/ButtonReset"
import { useActions } from "../../hooks/useActions"

type FormProps = UseFormReturnType<IFormJob, (values: IFormJob) => IFormJob> 

export const Form = ({ form, submit }: { form: FormProps, submit: () => void }) => {
  const { classes } = useFormStyle()
  const { reset } = useActions()

  const handlerReset = () => {
    reset()
    form.reset()
  }

  const [ activeSelect, setActiveSelect ] = useState(false)
  const options = useCategories()
    
  return (
    <form className={classes.wrapper}>
      <Text className={classes.text}>Фильтры</Text>
        <ButtonReset reset={handlerReset} />
        <Select
          label="Отрасль"
          placeholder="Выберете отрасль"
          onDropdownOpen={() => setActiveSelect(true)}
          onDropdownClose={() => setActiveSelect(false)}
          rightSection={<ArrowIcon active={activeSelect} />}
          rightSectionWidth={47}
          w={'100%'}
          styles={{ rightSection: { pointerEvents: 'none' } }}
          labelProps={{ className: classes.label }}
          value={form.values.industry}
          onChange={(e) => form.setFieldValue('industry', e)}
          classNames={{ root: classes.mtOne, input: classes.inputWrapper }}
          data={options}
        />

      <NumberInput
        label={'Оклад'}
        placeholder="От"
        w={'100%'}
        className={classes.mtTwo}
        labelProps={{ className: classes.labelIndustry }}
        rightSectionWidth={35}
        styles={{ ...controlCss }}
        step={1000}
        min={0}
        value={form.values.from || ''}
        onChange={(e) => form.setFieldValue('from', e)}
      />
      <NumberInput
        variant="default"
        w={'100%'}
        placeholder="До"
        rightSectionWidth={35}
        styles={{ ...controlCss, wrapper: { marginBottom: 4 } }}
        min={form.values.from || 0}
        step={1000}
        value={form.values.to || ''}
        onChange={(e) => form.setFieldValue('to', e)}
      />

      <Button
        w={'100%'}
        className={classes.button}
        onClick={submit}
      >Применить</Button>
    </form>
  )
}
