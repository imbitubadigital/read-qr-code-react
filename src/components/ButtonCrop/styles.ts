import styled from 'styled-components';
import Modal from 'react-modal';
import {SliderProps} from 'rc-slider';
export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: red;
padding: 10px;
width: 100px;
height: 100px;
position: relative;

`;

export const BtnClose = styled.button`
  border: 0;
  outline: 0;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: absolute;
  top: -20px;
  right: -20px;
  font-size: 20;
  background: blue;
  z-index: 15000;
`;



export const Label = styled.label`
  display: flex;
  flex: 1;
  background: green;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const FileInput = styled.input`
position: fixed;
right: -9300px;
z-index: 9000;
`;

//modal content ou crop
export const CropContainer = styled.div`
  position: relative;
  width: 100%;
  min-width: 600px;
  background: #333;
  height: 400px;
`;

export const Controls = styled.div`
  padding: 16px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ContainerSlide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-basis: 30%;
  padding: 0 15px;
`;
export const ContainerSelectRatio = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-basis: 30%;
  padding: 0 15px;

`;
export const SelectRatio = styled.select`

`;
export const LabelSlide = styled.span`
  color: #666;
  font-size: 16px;
  display: inline-block;
  margin-right: 20px;
`;
export const BtnConcludeCrop = styled.button`
  border: 0;
  outline: none;
  height: 42px;
  background: blue;
  padding: 0 20px;
  border-radius: 8px;
  color: #fff;
`;

export const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',

  },
} as Modal.Styles;

export const sliderStyle = {
    background: 'red'

} as SliderProps

