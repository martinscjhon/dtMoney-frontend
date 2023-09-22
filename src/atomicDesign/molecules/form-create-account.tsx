import { ChangeEvent, FC, useState } from 'react'
import { Container, Form } from './style'
import { TitleComponent } from '../atoms/title'
import { colors } from '../../styles/colors'
import { InputComponent } from '../atoms/input'
import { ButtonComponent } from '../atoms/button'
import { Icone } from '../atoms/icone'
import { LinkComponent } from '../atoms/link'

export const FormCreateAccount: FC = () => {
  const [viewPassword, setViewPassword] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')

  return (
    <Form>
      <TitleComponent
        title={'Crie sua conta'}
        size={'1rem'}
        color={colors.basic._000}
        weight={600}
      />

      <Container>
        <InputComponent
          label={'Nome completo'}
          htmlFor={''}
          type={''}
          isError={null}
          value={''}
          name={''}
        />

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
          title={'Criar conta'}
          color={colors.basic._fff}
          backgorund={colors.purple[300]}
          width={'60%'}
          height={'1.5rem'}
          weight={500}
        />

        <LinkComponent
          href={'/'}
          color={colors.gray[200]}
          size={'10px'}
          weight={500}
          title={'Voltar'}
          decoration={false}
        />
      </div>
    </Form>
  )
}
