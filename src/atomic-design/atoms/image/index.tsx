import { FC } from 'react'
import BgHome from '../../../assets/bg-home.svg'
import LogoBlack from '../../../assets/logo-black.png'
import LogoWhite from '../../../assets/logo-white.png'
import { ImageStyle } from './style'
import { IImage } from '../../../interfaces/atoms'

export const ImageComponent: FC<IImage> = ({ option, height, width }) => {
  function selectedImage() {
    switch (option) {
      case 'bg-home':
        return (
          <ImageStyle height={height} width={width} src={BgHome} alt={option} />
        )

      case 'logo-white':
        return (
          <ImageStyle
            height={height}
            width={width}
            src={LogoWhite}
            alt={option}
          />
        )

      case 'logo-black':
        return (
          <ImageStyle
            height={height}
            width={width}
            src={LogoBlack}
            alt={option}
          />
        )

      default:
        break
    }
  }

  return selectedImage()
}
