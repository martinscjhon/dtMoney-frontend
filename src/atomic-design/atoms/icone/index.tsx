import {
  AiOutlineClose,
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineMenu,
} from 'react-icons/ai'
import { BsArrowUpCircle, BsArrowDownCircle } from 'react-icons/bs'
import { colors } from '../../../styles/colors'

export const Icone = {
  ViewPassword: <AiOutlineEye />,
  PasswordSecret: <AiOutlineEyeInvisible />,
  Close: <AiOutlineClose />,
  Menu: <AiOutlineMenu color="#fff" size="20" />,
  ArrowUp: <BsArrowUpCircle color={colors.green[500]} size="25" />,
  ArrowDown: <BsArrowDownCircle color={colors.red[500]} size="25" />,
}
