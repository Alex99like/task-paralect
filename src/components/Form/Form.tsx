import { controlCss, useFormStyle } from "./form.style"
import { Text, UnstyledButton, NumberInput, Select, Button, CSSObject } from '@mantine/core'
import ResetIcon from '../../assets/reset.svg'
import DownIcon from '../../assets/down.svg'

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

export const Form = () => { 
  const { classes } = useFormStyle()
  const options = [
    { label: "IT", value: "it" },
    { label: "Финансы", value: "finance" },
    { label: "Медиа", value: "media" },
  ];
    
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
          rightSection={<img src={DownIcon} />}
          rightSectionProps={{ style: inputCss }}
          w={'100%'}
          className={classes.mtOne}
          labelProps={{ className: classes.label }}
          styles={{input: inputWrapper }}
      />

      <NumberInput
        label={'Оклад'}
        placeholder="От"
        w={'100%'}
        className={classes.mtTwo}
        labelProps={{ className: classes.label }}
        rightSectionWidth={35}
        styles={{ ...controlCss }}
        rightSectionProps={{ style: { border: 'transparent' } }}
      />
      <NumberInput
        variant="default"
        w={'100%'}
        placeholder="До"
        labelProps={{ className: classes.label }}
        rightSectionWidth={35}
        styles={{ ...controlCss }}
        rightSectionProps={{ style: { border: 'transparent' } }}
      />

      <Button
        w={'100%'}
        className={classes.button}
      >Применить</Button>
    </form>
  )
}