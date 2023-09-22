import { forwardRef, ForwardRefRenderFunction } from 'react'
import { IInput } from '../../../interfaces/atoms'
import { Container, InputStyle, PrincipalContainer } from './style'
import { LabelComponent } from '../label'
import { ButtonComponent } from '../button'

export const Input: ForwardRefRenderFunction<HTMLInputElement, IInput> = (
  {
    label,
    htmlFor,
    type,
    value,
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
    <PrincipalContainer>
      <LabelComponent htmlFor={htmlFor} title={label} />
      <Container>
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
      </Container>
    </PrincipalContainer>
  )
}

export const InputComponent = forwardRef(Input)
