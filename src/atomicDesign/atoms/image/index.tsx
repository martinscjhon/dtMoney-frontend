import { FC } from 'react'
import BgHome from '../../../assets/bg-home.svg'
import LogoBlack from '../../../assets/logo-black.png'
import { Image } from './style'
import { IImage } from '../../../interfaces/atoms'

export const ImageComponent: FC<IImage> = ({ option, height, width }) => {
  function selectedImage() {
    switch (option) {
      case 'bg-home':
        return <Image height={height} width={width} src={BgHome} alt={option} />

      case 'logo-black':
        return (
          <Image height={height} width={width} src={LogoBlack} alt={option} />
        )

      default:
        break
    }
  }

  return selectedImage()
}
