
export interface RatioProps {
  value: number;
   text: string;
}

export interface AreaProps {
  height: number;
  width: number;
  x: number;
  y: number;
}

export interface ButtonCropProps {
  settingCroppedImage: (image: string) => void;
  aspectRatios: RatioProps[]
}


