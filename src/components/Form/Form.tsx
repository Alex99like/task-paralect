import { controlCss, useFormStyle } from "./form.style"
import { Text, UnstyledButton, NumberInput, Select, Button, CSSObject } from '@mantine/core'
import ResetIcon from '../../assets/reset.svg'
import { UseFormReturnType } from "@mantine/form"
import { IFormJob } from "../../pages/Jobs"
import { useCategories } from "../../hooks/useCategories"
import { ArrowIcon } from "../../utils/ArrowIcon"
import { useState } from "react"

const inputCss: CSSObject = {
  background: 'transparent', 
  right: 6, 
  top: 0,
}

const inputWrapper: CSSObject = {
  height: 42,
  background: '#FFFFFF',
  border: '1px solid #D5D6DC',
  borderRadius: 8,
  padding: 11,
  paddingBottom: 13,
  '::placeholder': {
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: 14,
  }
}

type FormProps = UseFormReturnType<IFormJob, (values: IFormJob) => IFormJob> 


export const Form = ({ form, submit }: { form: FormProps, submit: () => void }) => {
  const { classes } = useFormStyle()
  const [ activeSelect, setActiveSelect ] = useState(false)
  const options = useCategories()
    
  return (
    <form className={classes.wrapper}>
      <Text className={classes.text}>Фильтры</Text>
      <UnstyledButton 
        className={classes.reset}
      >
        Сбросить все 
        <img className={classes.img} src={ResetIcon} style={{ top: 2 }} />
      </UnstyledButton>
        <Select
          label="Отрасль"
          placeholder="Выберете отрасль"
          data={options}
          onDropdownOpen={() => setActiveSelect(true)}
          onDropdownClose={() => setActiveSelect(false)}
          rightSection={<ArrowIcon active={activeSelect} />}
          rightSectionProps={{ style: inputCss }}
          w={'100%'}
          className={classes.mtOne}
          labelProps={{ className: classes.label }}
          styles={{input: inputWrapper }}
          value={form.values.industry}
          onChange={(e) => form.setFieldValue('industry', e)}
      />

      <NumberInput
        label={'Оклад'}
        placeholder="От"
        w={'100%'}
        className={classes.mtTwo}
        labelProps={{ className: classes.label }}
        rightSectionWidth={35}
        styles={{ ...controlCss }}
        step={1000}
        min={0}
        value={form.values.from}
        rightSectionProps={{ style: { border: '#fff' } }}
        onChange={(e) => form.setFieldValue('from', e)}
      />
      <NumberInput
        variant="default"
        w={'100%'}
        placeholder="До"
        labelProps={{ className: classes.label }}
        rightSectionWidth={35}
        styles={{ ...controlCss }}
        step={1000}
        value={form.values.to}
        rightSectionProps={{ style: { border: '#fff' } }}
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
