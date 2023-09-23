import { forwardRef, ForwardRefRenderFunction } from 'react'
import { IInput } from '../../../interfaces/atoms'
import { ContainerStyle, InputStyle, PrincipalContainerStyle } from './style'
import { LabelComponent } from '../label'
import { ButtonComponent } from '../button'
import { TextComponent } from '../text'
import { colors } from '../../../styles/colors'

export const Input: ForwardRefRenderFunction<HTMLInputElement, IInput> = (
  {
    label,
    htmlFor,
    type,
    value,
    messageError,
    name,
    disabled = false,
    iconExist = false,
    onClickButton,
    icon,
    ...rest
  },
  ref,
) => {
  return (
    <PrincipalContainerStyle>
      <LabelComponent htmlFor={htmlFor} title={label} />
      <ContainerStyle>
        <InputStyle
          {...rest}
          disabled={disabled}
          type={type}
          ref={ref}
          id={htmlFor}
          value={value}
          name={name}
          placeholder={label}
        />

        {iconExist && (
          <ButtonComponent
            title={icon}
            backgorund={'transparent'}
            width={'auto'}
            height={'auto'}
            weight={0}
            color={''}
            onClick={onClickButton}
            type="button"
          />
        )}
      </ContainerStyle>
      {messageError && (
        <TextComponent
          title={messageError}
          color={colors.red[500]}
          size={'12px'}
          weight={400}
        />
      )}
    </PrincipalContainerStyle>
  )
}

export const InputComponent = forwardRef(Input)
