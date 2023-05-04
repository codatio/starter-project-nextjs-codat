"use client"

import { useState } from 'react';

import styles from './AuthFlow.module.css'

import dynamic from 'next/dynamic'; // Use dynamic imports instead for NextJS
import '@codat/link-sdk/index.css';

const CodatLink = dynamic(
  () => import('@codat/link-sdk').then((mod) => mod.CodatLink),
  { ssr: false }
);

const AuthFlow = ({ companyId }) => {
  const [open, setOpen] = useState(false);
  const [complete, setComplete] = useState(false)
  const [connections, setConnections] = useState([])

  const reset = () => {
    setOpen(false);
    setConnections([]);
  }

  return (
    <>
      <button onClick={() => setOpen(true)}>Connect</button>

      {
        connections.length >= 1
        ? connections.map((id, i)=><div key={i}>{id}</div>)
        : <div><i>No connections</i></div>
      }

      {
        open && <div className={styles.modal}>
            <CodatLink
              companyId={companyId}
              onConnection={(newConnectionId) => setConnections([...connections, newConnectionId.connectionId])}
              onFinish={() => {
                setComplete();
                setOpen(false);
              }}
              onClose={() => reset()}
              onError={(error) => {
                setOpen(false);
                alert(error);
              }}
            />
          </div>
      }
    </>
  );
};

export default AuthFlow