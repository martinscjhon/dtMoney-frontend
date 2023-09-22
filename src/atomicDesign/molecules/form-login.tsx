import { ChangeEvent, FC, useState } from 'react'
import { Container, Form } from './style'
import { TitleComponent } from '../atoms/title'
import { colors } from '../../styles/colors'
import { InputComponent } from '../atoms/input'
import { ButtonComponent } from '../atoms/button'
import { Icone } from '../atoms/icone'

export const FormLogin: FC = () => {
  const [viewPassword, setViewPassword] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')

  return (
    <Form>
      <TitleComponent
        title={'Faça seu login'}
        size={'1rem'}
        color={colors.basic._000}
        weight={600}
      />

      <Container>
        <InputComponent
          label={'E-mail'}
          htmlFor={''}
          type={''}
          isError={null}
          value={''}
          name={''}
        />

        <InputComponent
          label={'Senha'}
          htmlFor={''}
          type={viewPassword ? 'text' : 'password'}
          isError={null}
          messageError={''}
          value={value}
          name={''}
          iconExist={true}
          onClickButton={() => setViewPassword(!viewPassword)}
          icon={viewPassword ? Icone.ViewPassword : Icone.PasswordSecret}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        />
      </Container>

      <div className="actions">
        <ButtonComponent
          title={'Entrar'}
          color={colors.basic._fff}
          backgorund={colors.purple[300]}
          width={'60%'}
          height={'1.5rem'}
          weight={500}
        />

        <ButtonComponent
          title={'Crie uma conta'}
          color={colors.purple[200]}
          backgorund={'transparent'}
          width={'100%'}
          height={'1.5rem'}
          weight={500}
        />

        <ButtonComponent
          title={'Esqueci minha senha'}
          color={colors.gray[200]}
          backgorund={'transparent'}
          width={'100%'}
          height={'1.5rem'}
          weight={500}
        />
      </div>
    </Form>
  )
}
