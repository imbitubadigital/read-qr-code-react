import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  min-height: 100vh;
  color: #333;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  position: relative;
`;

export const Logo = styled.img`
  width: 180px;
`;

export const BoxInfoErro = styled.div`
  width: 100%;
  max-width: 520px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 40px;
    background: #e54f50;
    margin: 15px 0 30px;

    i {
      color: #fff;
      font-size: 30px;
    }
  }
  p {
    font-size: 20px;
    font-weight: 300px;
    text-align: center;
    color: #e54f50;
  }
  a {
    text-decoration: none;
    color: #470655;
    border: 1px solid #470655;
    padding: 10px 30px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    margin-top: 30px;
    text-transform: uppercase;
    font-weight: bold;
    &:hover {
      color: #fff;
      background: #470655;
      transition: all 0.3s linear;
    }
    &:hover i {
      color: #fff;
      transition: all 0.3s linear;
    }

    i {
      color: #470655;
      font-size: 22px;
      margin-right: 10px;
    }
  }
`;

export const BoxInfoSuccess = styled.div`
  width: 100%;
  max-width: 520px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 40px;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 40px;
    background: #470655;
    margin: 15px 0 30px;

    i {
      color: #fff;
      font-size: 30px;
    }
  }
  h2 {
    margin-bottom: 20px;
    color: #470655;
  }
  p {
    font-size: 20px;
    font-weight: 300px;
    text-align: center;
    color: #470655;
  }
  a {
    text-decoration: none;
    color: #470655;
    border: 1px solid #470655;
    padding: 10px 30px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    margin-top: 30px;
    text-transform: uppercase;
    font-weight: bold;
    &:hover {
      color: #fff;
      background: #470655;
      transition: all 0.3s linear;
    }
    &:hover i {
      color: #fff;
      transition: all 0.3s linear;
    }

    i {
      color: #470655;
      font-size: 22px;
      margin-right: 10px;
    }
  }
`;

export const BoxLoad = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 350px;

  z-index: 10;
  i {
    font-size: 40px;
    color: #470655;
    margin-bottom: 15px;
    animation: loading 1s cubic-bezier(0.25, 0.25, 0.25, 0.25) infinite;
  }

  h1 {
    font-size: 20px;
    color: #470655;
  }
  p {
    font-size: 18px;
    color: #470655;
  }

  @keyframes loading {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: #e7dfe9;
  position: absolute;
  bottom: 0;

  p {
    font-size: 14px;
    color: #470655;
    font-weight: bold;
  }
`;

export const BoxCheckout = styled.div`
  width: 100%;
  max-width: 580px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #470655;

  h1 {
    font-size: 18px;
  }
  h2 {
    font-size: 16px;
    font-weight: 300;
    text-align: center;
    margin: 10px 0;
  }

  .security {
    margin-bottom: 40px;
    i {
      margin-left: 10px;
    }
  }
`;

export const BoxPlan = styled.article`
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #470655;
  border: 1px solid #9647a4;
  border-radius: 5px;

  header {
    background: #c3aac8;
    border-radius: 5px 5px 0 0;
    width: 100%;
    padding: 10px;

    h3 {
      width: 100%;
      text-align: center;
      color: #9647a4;
    }
  }
  p {
    width: 100%;
    text-align: center;
    padding: 5px 10px;
  }
  .old_price {
    color: #c3aac8;
    font-size: 20px;
  }
  .price {
    color: #7b0d8f;
    font-size: 18px;
    span {
      font-size: 25px;
      font-weight: bold;
    }
  }
`;

export const BoxForm = styled.form`
  background: #c3aac8;
  width: 100%;
  margin: 20px 0 20px;
  padding: 20px;
  border-radius: 5px;
  span {
    color: #fff;
    display: block;
    margin-bottom: 5px;
    font-size: 15px;
  }

  .btn {
    background: #470655;
    &:hover {
      background: #9647a4;
      transition: 500ms all;
    }
  }
`;

export const BoxRadio = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 15px;
`;

export const ItemRadio = styled.div`
  flex-basis: 60px;
  margin: 4px 3px;
  .input-hidden {
    position: absolute;
    left: -9999px;
  }

  input[type='radio']:checked + label > img {
    border: 1px solid #fff;
    box-shadow: 0 0 3px 3px #7b0d8f;
  }

  /* Stuff after this is only to make things more pretty */
  input[type='radio'] + label > img {
    border: 1px solid #c3aac8;
    width: 100%;
    transition: 500ms all;
    opacity: 0.5;
  }

  input[type='radio']:checked + label > img {
    opacity: 1;
  }
`;

export const DivErro = styled.div`
  background: #ffd24d;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 15px;
  border-radius: 5px;
  font-size: 16px;
  margin-bottom: 15px;
  color: red;
  i {
    margin-right: 10px;
    font-size: 20px;
  }
`;

export const ContentForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: row;
`;

interface PropsBoxInput{
  basis: number
}
export const BoxInput = styled.div<PropsBoxInput>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-basis: ${props => `${props.basis}%`};
  margin-bottom: 18px;

  label {
    color: #fff;
    font-size: 14px;
    margin-bottom: 5px;
  }
  span {
    color: red;
    font-size: 14px;
    margin: 5px 0 0px 0 !important;
    width: 100%;
  }

  input {
    background: rgba(0, 0, 0, 0.2);
    padding: 8px 15px;
    border-radius: 5px;
    border-style: solid;
    border-width: 1px;
    border-color: ${props => (props.errorr ? 'red' : 'rgba(0, 0, 0, 0.1)')};
    width: 100%;
    color: #dcdfd9;
    font-size: 16px;
    ::placeholder,
    ::-webkit-input-placeholder {
      color: #c9cdc5;
    }
    :-ms-input-placeholder {
      color: #c9cdc5;
    }

    &:focus {
      border-color: #4db1a6;
    }
  }

  select {
    background: rgba(0, 0, 0, 0.2);
    padding: 8px 15px;
    border-radius: 5px;
    border-style: solid;
    border-width: 1px;
    border-color: ${props => (props.error ? 'red' : 'rgba(0, 0, 0, 0.1)')};
    width: 100%;
    color: #dcdfd9;
    font-size: 16px;
    ::placeholder,
    ::-webkit-input-placeholder {
      color: #c9cdc5;
    }
    :-ms-input-placeholder {
      color: #c9cdc5;
    }
    option {
      color: #666;
      background: #f4f4f4;
      display: flex;
      white-space: pre;
      min-height: 20px;
      padding: 0px 2px 1px;
    }

    &:focus {
      border-color: #4db1a6;
    }
  }

  textarea {
    background: rgba(0, 0, 0, 0.2);
    padding: 8px 15px;
    border-radius: 5px;
    border-style: solid;
    border-width: 1px;
    border-color: ${props => (props.error ? 'red' : 'rgba(0, 0, 0, 0.1)')};
    width: 100%;
    color: #dcdfd9;
    font-size: 16px;
    ::placeholder,
    ::-webkit-input-placeholder {
      color: #c9cdc5;
    }
    :-ms-input-placeholder {
      color: #c9cdc5;
    }

    &:focus {
      border-color: #4db1a6;
    }
  }

  .custom_select {
    width: 100%;
  }
  .css-bg1rzq-control {
  }
  /* .css-1pcexqc-container custom_select{} */
`;
