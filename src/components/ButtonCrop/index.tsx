import  { ChangeEvent, FormEvent, useCallback,  useState } from 'react';
import { getOrientation } from 'get-orientation/browser'
import * as S from './styles';
import { readFile } from './utils/read-file';
import { ORIENTATION_TO_ANGLE } from './utils/oritentation';
import { getCroppedImg, getRotatedImage } from './utils/canvas-utils';
import Modal from 'react-modal';
import Cropper from 'react-easy-crop'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { AreaProps, ButtonCropProps } from './interfaces';




Modal.setAppElement('#root');

export function ButtonCrop({aspectRatios, settingCroppedImage}: ButtonCropProps) {
  const [imageSrc, setImageSrc] = useState('')

  const [modalIsOpen, setIsOpen] = useState(false);

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<AreaProps>({} as AreaProps)

  const [aspectRatio, setAspectRatio] = useState(aspectRatios[0]);

  const onFileChange = useCallback(async(e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

       let imageDataUrl = await readFile(file)

      const orientation = await getOrientation(file)

      const rotation = ORIENTATION_TO_ANGLE[orientation]
      if (rotation) {
         imageDataUrl = await getRotatedImage(imageDataUrl, rotation)
      }

      setImageSrc(imageDataUrl)
      setIsOpen(true);
      e.target.value = '';
    }

  }, [])




  function closeModal() {
    setIsOpen(false);
  }

  const onCropComplete = useCallback((croppedArea: AreaProps, croppedAreaPixels: AreaProps) => {

  setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        rotation
      ) as string

      settingCroppedImage(croppedImage)
      setIsOpen(false);
      setImageSrc('');
    } catch (e) {
      console.error(e)
    }
  }, [imageSrc, croppedAreaPixels, rotation])

  const handleSelect = useCallback((event: FormEvent<HTMLSelectElement>) => {
    const element = event.target as HTMLSelectElement
    const find = aspectRatios.find( ar => ar.value === Number(element.value))
    if(find?.value){
      setAspectRatio(find)
    }
  }, [])


  return (
    <>

    <S.Container>
      <S.Label htmlFor='inputFile'>Clique</S.Label>
      <S.FileInput id="inputFile" type="file" onChange={onFileChange} accept="image/*" />

    </S.Container>

    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={S.customStyles}
      >

        <S.CropContainer>
        <S.BtnClose onClick={closeModal}>X</S.BtnClose>
          <Cropper
              image={imageSrc}
              crop={crop}
              rotation={rotation}
              zoom={zoom}
              aspect={aspectRatio.value}
              onCropChange={setCrop}
              onRotationChange={setRotation}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
          />
        </S.CropContainer>
        <S.Controls>
          <S.ContainerSlide>
            <S.LabelSlide>Zoom</S.LabelSlide>
            <Slider
              trackStyle={{ background: 'green' }}
              handleStyle={{ background: 'blue' }}
              defaultValue={zoom}
              value={zoom}
              min={1}
              max={3}
              step={0.1}
              onChange={(v) => setZoom(v as number)}
            />
          </S.ContainerSlide>

          <S.ContainerSlide>
            <S.LabelSlide>Rotação</S.LabelSlide>
            <Slider
              trackStyle={{ background: 'green' }}
              handleStyle={{ background: 'blue' }}
              defaultValue={rotation}
              value={rotation}
              min={0}
              max={360}
              step={1}
              onChange={(v) => setRotation(v as number)}
            />
          </S.ContainerSlide>
          <S.ContainerSelectRatio>
            <S.LabelSlide>Ratio</S.LabelSlide>
            <S.SelectRatio onChange={handleSelect}>
              {aspectRatios.map(ar => <option key={ar.text} value={ar.value}>{ar.text}</option>)}

            </S.SelectRatio>
          </S.ContainerSelectRatio>

            <S.BtnConcludeCrop
            type="button"
            onClick={showCroppedImage}
            >Cortar</S.BtnConcludeCrop>



        </S.Controls>
      </Modal>
    </>
  );
}
