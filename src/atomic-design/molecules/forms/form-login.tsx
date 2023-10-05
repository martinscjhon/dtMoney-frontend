import { FC, useState } from 'react'
import { Container, Form, ContainerPassword } from './style'
import { TitleComponent } from '../../atoms/title'
import { colors } from '../../../styles/colors'
import { InputComponent } from '../../atoms/input'
import { ButtonComponent } from '../../atoms/button'
import { Icone } from '../../atoms/icone'
import { LinkComponent } from '../../atoms/link'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Messages } from '../../../common/message'
import { useForm } from 'react-hook-form'
import { handleAuth } from '../../../services/handles'
import { setLocalstorage } from '../../../common/storage'
import { toast } from 'react-toastify'
import { Navigate } from 'react-router-dom'
import { IInfoUser, ILogin } from '../../../interfaces/services'
import { useControlUser } from '../../../context/user-context'

const loginFormSchema = z.object({
  Email: z
    .string()
    .nonempty(Messages.Required)
    .email(Messages.FormatEmailInvalid),
  Password: z.string().nonempty(Messages.Required).min(6, Messages.MinPassword),
})

type LoginFormData = z.infer<typeof loginFormSchema>

export const FormLogin: FC = () => {
  const { setControlUser } = useControlUser()
  const [viewPassword, setViewPassword] = useState<boolean>(false)
  const [redirect, setRedirect] = useState<boolean>(false)
  const [url, setUrl] = useState<string>('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  })

  const SendLogin = async (data: ILogin) => {
    await handleAuth
      .send(data)
      .then((res: any) => {
        setControlUser(res)
        setRedirect(true)
        setUrl('/home')
        setLocalstorage('token', res.token)

        const infoUSer: IInfoUser = {
          Nome: res?.Nome,
          Email: res?.Email,
        }

        setLocalstorage('user', infoUSer)
      })
      .catch((error) => {
        toast.error(error?.message)
      })
  }

  return (
    <>
      {redirect ? <Navigate to={url} /> : <></>}

      <Form onSubmit={handleSubmit(SendLogin)}>
        <TitleComponent
          title={'Faça seu login'}
          size={'1.3rem'}
          color={colors.basic._000}
          weight={600}
        />

        <Container>
          <InputComponent
            label={'E-mail'}
            htmlFor={''}
            type={''}
            messageError={errors.Email?.message}
            {...register('Email')}
          />

          <ContainerPassword>
            <InputComponent
              label={'Senha'}
              htmlFor={''}
              type={viewPassword ? 'text' : 'password'}
              iconExist={true}
              onClickButton={() => setViewPassword(!viewPassword)}
              icon={viewPassword ? Icone.ViewPassword : Icone.PasswordSecret}
              messageError={errors.Password?.message}
              {...register('Password')}
            />
            <LinkComponent
              href={'/esqueci/senha'}
              color={colors.gray[200]}
              size={'12px'}
              weight={500}
              title={'Esqueci minha senha'}
              decoration={true}
            />
          </ContainerPassword>
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

          <LinkComponent
            href={'/criar/conta'}
            color={colors.purple[200]}
            size={'14px'}
            weight={500}
            title={'Crie uma conta'}
            decoration={false}
          />
        </div>
      </Form>
    </>
  )
}
