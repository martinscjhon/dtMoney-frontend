import { FC, useState } from 'react'
import { Container, Form } from './style'
import { TitleComponent } from '../../atoms/title'
import { colors } from '../../../styles/colors'
import { InputComponent } from '../../atoms/input'
import { ButtonComponent } from '../../atoms/button'
import { Icone } from '../../atoms/icone'
import { LinkComponent } from '../../atoms/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Messages } from '../../../common/message'
import { toast } from 'react-toastify'
import { handleUser } from '../../../services/handles'

const createUserFormSchema = z.object({
  Email: z
    .string()
    .nonempty(Messages.Required)
    .email(Messages.FormatEmailInvalid),
  Name: z.string().nonempty(Messages.Required),
  Password: z.string().nonempty(Messages.Required).min(6, Messages.MinPassword),
})

type CreateUSerFormData = z.infer<typeof createUserFormSchema>

export const FormCreateAccount: FC = () => {
  const [viewPassword, setViewPassword] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUSerFormData>({
    resolver: zodResolver(createUserFormSchema),
  })

  const createUser = async (data: any) => {
    await handleUser
      .insert(data)
      .then(() => {
        return toast.success(Messages.SuccessCreateUser)
      })
      .catch((error) => {
        toast.error(error?.message)
      })
  }

  return (
    <Form onSubmit={handleSubmit(createUser)}>
      <TitleComponent
        title={'Crie sua conta'}
        size={'1.1rem'}
        color={colors.basic._000}
        weight={600}
      />

      <Container>
        <InputComponent
          label={'Nome completo'}
          htmlFor={''}
          type={''}
          messageError={errors.Name?.message}
          {...register('Name')}
        />

        <InputComponent
          label={'E-mail'}
          htmlFor={''}
          type={''}
          messageError={errors.Email?.message}
          {...register('Email')}
        />

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
      </Container>

      <div className="actions">
        <ButtonComponent
          title={'Criar conta'}
          color={colors.basic._fff}
          backgorund={colors.purple[300]}
          width={'60%'}
          height={'1.5rem'}
          weight={500}
          type="submit"
        />

        <LinkComponent
          href={'/'}
          color={colors.gray[200]}
          size={'12px'}
          weight={500}
          title={'Voltar'}
          decoration={false}
        />
      </div>
    </Form>
  )
}
