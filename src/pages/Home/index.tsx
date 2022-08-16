
import { useState } from 'react';
import styles from './styles.module.css'
import { QrReader, OnResultFunction } from 'react-qr-reader';
export function Home() {
  const [data, setData] = useState('No result');
  const [type, setType] = useState<'user' | 'environment'>('user');

  return (
    <main className={styles.main}>
      <h1>Home</h1>
        <QrReader
        key={type}
        constraints={{ facingMode: type }}
        scanDelay={300}
        onResult={(result: any, error)  => {

          if (result !== undefined) {
            setData(result?.text || 'nada');
          }

          if (!!error) {
           console.log('caiu no erro', error);
          }
        }}
        className={styles.qr}
      />


      <p>{data}</p>
      <button
        type="button"
        onClick={() => setType(prev => prev === 'user' ? 'environment': 'user')}
      >
        {type === 'user' ? 'Câmera front': 'Câmera back'}
      </button>
    </main>
  );
}
