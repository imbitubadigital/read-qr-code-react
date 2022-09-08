
import { useCallback, useState } from 'react';
import styles from './styles.module.css'
import QRcode    from 'qrcode.react'
import { jsPDF } from 'jspdf'

interface ListQr {
  id: number;
  label: string
  n: number
}
export function GenerateQrCode() {
  const [qtdQr, setQtdQr] = useState('')
  const [codes, setCodes] = useState<ListQr[]>([])

  const generatePDF = useCallback(() => {
    console.log('aaaa')
    if(qtdQr !== ''){
     const newCodes = Array(Number(qtdQr))
      .fill('')
      .map((_, index) => (
        {
          id: index + 1,
          label: `Testando-${index + 1}`,
          n: index + 1
        }

      ))

      setCodes(newCodes)
    }

  }, [qtdQr])

//   const downloadQrCodePDF = () => {

//     // Defines the pdf
//     let pdf = new jsPDF({
//         orientation: 'landscape',
//         unit: 'mm',
//         format: [210, 297]
//     })


//      const imagesCodes = document.querySelectorAll<HTMLCanvasElement>('.qrcode')

//      console.log(imagesCodes)

//     //  imagesCodes.map((c, i) => {
//     //   const qd = c.toDataURL()

//     //   const base = i + 1;

//     //   const val1 = base > 1 ? (base * 40) + 10;

//     //   pdf.addImage(qd, 'png', val1, val1, 40, 40);
//     //  })

//     // const base64Image2 = Images2[0].toDataURL()
//    // console.log('aaa', base64Image)
//    // console.log('bbb', base64Image2)
//     // Adds the image to the pdf
//    // pdf.addImage(base64Image, 'png', 0, 0, 40, 40)
//   //  pdf.text('aquii', 10, 50)

//     // Downloads the pdf
//   //  pdf.save('QR.pdf')

// }


 const downloadQrCodePDF = () => {

    // Defines the pdf
    let pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: [210, 297]
    })


    const imagesCodes = document.querySelectorAll<HTMLCanvasElement>('.qrcode')

     if(imagesCodes.length > 0){
      for(let i = 0; i < imagesCodes.length; i++){
        const qd = imagesCodes[i].toDataURL()
        const base = i + 1;

        const val1 = base > 1 ? (base * 40) + 10: 0;
       // pdf.addImage(qd, 'png', val1, val1, 40, 40);
      }


      pdf.save('QR.pdf')


    }
  }



  const teste = () => {

    let doc = new jsPDF('p', 'pt', 'a4');

    const aaa = document.querySelector
    ('#testando') as HTMLElement;

    doc.html(aaa, {
      callback: function(pdf){

        pdf.save('myTeste.pdf')
      }
    })

  }



  return (
    <main className={styles.main}>
      <form className={styles.form}>
        <input type="text" name="qdtQr" value={qtdQr} onChange={(text) => setQtdQr(text.target.value)} />
        <button type="button" onClick={generatePDF}>Gerar QR Codes</button>
      </form>

      <div className={styles.containerQr} id='testando'>
        {codes.length > 0 && codes.map((item, index) => (
          <div className={index > 0 && (index + 1) % 5 === 0 ? styles.itemQrMais :  styles.itemQr } key={String(item.id)}>
          <QRcode style={{width: 60, height: 60}} value ={item.label} className="qrcode"/>
          <div className={styles.contentQr}>
            <h2>Nome da promoção</h2>
            <p>Nome da empresa</p>
              <p>N: {item.n}</p>
          </div>
        </div>
        ))}
      </div>
      <button onClick={teste} className={styles.btn}>Download pdf</button>

    </main>
  );
}
