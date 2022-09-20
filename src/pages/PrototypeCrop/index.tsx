import React, { useCallback, useState } from 'react';
import { ButtonCrop } from '../../components/ButtonCrop';

import * as S from './styles';

const aspectRatios = [
  { value: 4 / 3, text: "4/3" },
  { value: 16 / 9, text: "16/9" },
  { value: 1 / 2, text: "1/2" },
  { value: 4 / 4, text: "4/4" },

];

export function PrototypeCrop() {
  const [croppedImage, setCroppedImage] = useState('')

  const handleSettingCroppedImage = useCallback((image: string) => {
    setCroppedImage(image)
  }, [])
  return (
    <S.Container>
       <S.ContainerImage>
      {croppedImage && <S.Image src={croppedImage} />}
    </S.ContainerImage>

      <ButtonCrop
      settingCroppedImage={handleSettingCroppedImage}
      aspectRatios={aspectRatios}
      />
    </S.Container>
  );
}
