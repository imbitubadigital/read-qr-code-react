import React, { useState, useEffect } from 'react';

import InputMask from 'react-input-mask';

import { money } from '../../utils/format';
//import { ContentForm, BoxInput } from '~/styles/components/Forms';
import Button from './Button';
import {
  Container,
  Logo,
  BoxInfoErro,
  BoxInfoSuccess,
  BoxLoad,
  BoxCheckout,
  BoxPlan,
  BoxForm,
  BoxRadio,
  ItemRadio,
  DivErro,
  Footer,
  ContentForm,
  BoxInput,
} from './styles';


import visa from '../../assets/bandeiras/visa.png';
import mastercard from '../../assets/bandeiras/mastercard.png';
import jcb from '../../assets/bandeiras/jcb.png';
import diners from '../../assets/bandeiras/diners.png';
import discover from '../../assets/bandeiras/discover.png';
import elo from '../../assets/bandeiras/elo.png';
import amex from '../../assets/bandeiras/amex.png';
import aura from '../../assets/bandeiras/aura.png';

const logo = 'https://fidelion2.s3-sa-east-1.amazonaws.com/logo_email_160.png';

export function Checkout() {
  const [erro, setErro] = useState('');
  const [errorForm, setErrorForm] = useState('');
  //  const [dataSuccess, setDataSuccess] = useState(null);
  const [dataLink, setDataLink] = useState('');
  const [success, setSuccess] = useState(false);
  const [load, setLoad] = useState(false);
  const [loading, setLoading] = useState(false);
  const [brand, setBrand] = useState('');
  const [titularCard, setTitularCard] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [numCard, setNumCard] = useState('');
  const [cvv, setCvv] = useState(null);
  const [payment, setPayment] = useState('');
  const [years, setYears] = useState([10]);
 // const { code } = useParams();
console.log('aquii',  import.meta.env.VITE_APP_PAYMENT_ENV)
  useEffect(() => {
    function createYear() {
      const start = new Date().getFullYear();
      const end = start + 10;
      let i = null;
      const listYears = [];
      /* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
      for (i = start; i <= end; i++) {
        listYears.push(i);
      }
      setYears(listYears);
    }

    // async function checkLink() {
    //   setLoad(true);
    //   try {
    //     const response = await api.get(`/check-link-card/${code}`);
    //     setLoad(false);
    //     setDataLink(response.data);
    //   } catch (err) {
    //     const { response } = err;
    //     if (response && response.status && response.status === 401) {
    //       setErro(response.data.error.message);
    //       setSuccess(false);
    //       setLoad(false);
    //       setDataLink(null);
    //     } else {
    //       setErro('Erro interno ao checar dados!');
    //       setSuccess(false);
    //       setLoad(false);
    //       setDataLink(null);
    //     }
    //   }
    // }

  //  checkLink();
    createYear();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function checkoutApi() {
      try {
        setLoading(true);
        // await api.post('signatures-card', {
        //   code,
        //   payment,
        //   number_address: dataLink.user.address.number,
        //   birth_date: dataLink.user.birth,
        // });
        setErro('');
        setSuccess(true);
        setLoading(false);
        // setDataSuccess(response.data);
        setDataLink('');
      } catch (err) {
        // const { response } = err;
        // if (response && response.status && response.status === 401) {
        //   setErrorForm(response.data.error.message);
        //   setSuccess(false);
        //   setLoading(false);
        //   //  setDataSuccess(null);
        // } else if (response && response.status && response.status === 400) {
        //   setErrorForm(response.data[0].message);
        //   setSuccess(false);
        //   setLoading(false);
        //   // setDataSuccess(null);
        // } else {
        //   setErrorForm('Erro interno ao concluir sua assinatura!');
        //   setSuccess(false);
        //   setLoading(false);
        //   //  setDataSuccess(null);
        // }

        setErrorForm('Erro interno ao concluir sua assinatura!');
      }
    }
    if (payment) {
    //  checkoutApi();
    console.log('bora bill')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [payment]);

  function oldPrice(price_base, interval) {
    const priceBase = price_base * interval;
    return money(priceBase);
  }

  function changeRadio(e) {
    setBrand(e.currentTarget.value);
  }

  function checkPayment(error, response) {
    if (error) {
      const res1 = error.error_description.replace(
        '[number]',
        '(Número do Cartão)'
      );
      console.log('errro checkPayment', error)
      setLoading(false);
      setErrorForm(res1);
    } else {
      // Trata a resposta
      console.log('Success', response)
      const { data } = response;
      setPayment(data.payment_token);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();


    if (!brand) {
      setErrorForm('Selecione a Bandeira do Cartão');
    } else if (!titularCard || !month || !year || !numCard || !cvv) {
      setErrorForm(
        'Por favor preencha todos campos para concluír a assinatura!'
      );
    } else {
      setErrorForm('');
      setLoading(true);

      window.getPaymentToken(
        {
          brand,
          number: numCard,
          cvv,
          expiration_month: month,
          expiration_year: year,
        },
        checkPayment
      );
    }
  }

  return (
    <Container>
      {load ? (
        <>
          <Logo src={logo} alt="Map Imóveis" />
          <BoxLoad>
            <i className="fa fa-refresh" aria-hidden="true" />
            <h1>Aguarde...</h1>
            <p>Verificando dados!</p>
          </BoxLoad>
        </>
      ) : (
        <>
          {erro && (
            <>
              <Logo src={logo} alt="Map Imóveis" />
              <BoxInfoErro>
                <span>
                  <i className="fa fa-info" aria-hidden="true" />
                </span>
                <p>{erro}</p>
              </BoxInfoErro>
            </>
          )}

            <BoxCheckout>
              <h1>Assinatura com Cartão</h1>

              <BoxForm onSubmit={handleSubmit}>
                {errorForm && (
                  <DivErro>
                    <i className="fa fa-info-circle " aria-hidden="true" />
                    <p>{errorForm}</p>
                  </DivErro>
                )}
                <span>Selecione a Bandeira</span>
                <BoxRadio>
                  <ItemRadio>
                    <input
                      type="radio"
                      name="emotion"
                      id="visa"
                      className="input-hidden"
                      value="visa"
                      onChange={changeRadio}
                    />
                    <label htmlFor="visa">
                      <img src={visa} alt="visa" />
                    </label>
                  </ItemRadio>

                  <ItemRadio>
                    <input
                      type="radio"
                      name="emotion"
                      id="mastercard"
                      className="input-hidden"
                      value="mastercard"
                      onChange={changeRadio}
                    />
                    <label htmlFor="mastercard">
                      <img src={mastercard} alt="Mastercard" />
                    </label>
                  </ItemRadio>
                  <ItemRadio>
                    <input
                      type="radio"
                      name="emotion"
                      id="jcb"
                      className="input-hidden"
                      value="jcb"
                      onChange={changeRadio}
                    />
                    <label htmlFor="jcb">
                      <img src={jcb} alt="Jcb" />
                    </label>
                  </ItemRadio>
                  <ItemRadio>
                    <input
                      type="radio"
                      name="emotion"
                      id="diners"
                      className="input-hidden"
                      value="diners"
                      onChange={changeRadio}
                    />
                    <label htmlFor="diners">
                      <img src={diners} alt="Diners" />
                    </label>
                  </ItemRadio>
                  <ItemRadio>
                    <input
                      type="radio"
                      name="emotion"
                      id="discover"
                      className="input-hidden"
                      value="discover"
                      onChange={changeRadio}
                    />
                    <label htmlFor="discover">
                      <img src={discover} alt="Discover" />
                    </label>
                  </ItemRadio>
                  <ItemRadio>
                    <input
                      type="radio"
                      name="emotion"
                      id="amex"
                      className="input-hidden"
                      value="amex"
                      onChange={changeRadio}
                    />
                    <label htmlFor="amex">
                      <img src={amex} alt="Amex" />
                    </label>
                  </ItemRadio>
                  <ItemRadio>
                    <input
                      type="radio"
                      name="emotion"
                      id="elo"
                      className="input-hidden"
                      value="elo"
                      onChange={changeRadio}
                    />
                    <label htmlFor="elo">
                      <img src={elo} alt="Elo" />
                    </label>
                  </ItemRadio>
                  <ItemRadio>
                    <input
                      type="radio"
                      name="emotion"
                      id="aura"
                      className="input-hidden"
                      value="aura"
                      onChange={changeRadio}
                    />
                    <label htmlFor="aura">
                      <img src={aura} alt="Aura" />
                    </label>
                  </ItemRadio>
                </BoxRadio>
                <ContentForm>
                  <BoxInput basis={100}>
                    <label>Titular do Cartão:</label>
                    <input
                      name="titular_card"
                      onChange={e => setTitularCard(e.target.value)}
                      placeholder="Nome do titular do cartão"
                    />
                  </BoxInput>
                  <BoxInput basis={48}>
                    <label>Mês de Vencimento do Cartão:</label>
                    <select
                      name="month"
                      onChange={e => setMonth(e.target.value)}
                    >
                      <option value="">DIA</option>
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </select>
                  </BoxInput>
                  <BoxInput basis={48}>
                    <label>Ano de Vencimento do Cartão:</label>
                    <select name="year" onChange={e => setYear(e.target.value)}>
                      <option value="">DIA</option>
                      {years.length > 9 &&
                        years.map(y => (
                          <option key={y} value={y}>
                            {y}
                          </option>
                        ))}
                    </select>
                  </BoxInput>
                  <BoxInput basis={48}>
                    <label>Número do Cartão:</label>
                    <InputMask
                      placeholder="Informe o número do cartão"
                      type="text"
                      onChange={e => setNumCard(e.target.value)}
                      name="card"
                      mask="9999.9999.9999.9999"
                    />
                  </BoxInput>
                  <BoxInput basis={48}>
                    <label>Código de Segurança (CVV):</label>
                    <InputMask
                      placeholder="Últimos 3 dígitos no verso do Cartão"
                      type="text"
                      onChange={e => setCvv(e.target.value)}
                      name="card"
                      mask="999"
                    />
                  </BoxInput>
                  {!loading ? (
                    <Button
                      className="btn"
                      size="big"
                      color="transparent"
                      type="submit"
                    >
                      <i className="fa fa-credit-card" aria-hidden="true" />
                      Assinar
                    </Button>
                  ) : (
                    <Button
                      className="btn"
                      size="default"
                      color="transparent"
                      type="button"
                    >
                      <i
                        className="fa fa-circle-o-notch load-rotate"
                        aria-hidden="true"
                      />
                      Assinando
                    </Button>
                  )}
                </ContentForm>
              </BoxForm>
              <p className="security">
                ASSINE COM SEGURANÇA
                <i className="fa fa-lock" aria-hidden="true" />
              </p>
            </BoxCheckout>

          {success && (
            <>
              <Logo src={logo} alt="Map Imóveis" />
              <BoxInfoSuccess>
                <span>
                  <i className="fa fa-check" aria-hidden="true" />
                </span>
                {dataLink && <h2>{`Parabéns ${dataLink.user.username}`}</h2>}
                <p>
                  Sua assinatura com cartão foi concluída com sucesso. Acesse
                  seu aplicativo e acompanhe o status de ativação de sua
                  assinatura. Desde já muito obrigado por fazer parte da família
                  FideliOn!
                </p>
                <Link to="/">
                  <i className="fa fa-sign-in" aria-hidden="true" />
                  Acesse Nosso site!
                </Link>
              </BoxInfoSuccess>
            </>
          )}
        </>
      )}


    </Container>
  );
}
