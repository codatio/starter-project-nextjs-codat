import {
  CodatLink,
  ConnectionCallbackArgs,
  ErrorCallbackArgs,
} from "https://link-sdk.codat.io";

import React, { useEffect, useState } from "react";

import styles from './CodatLink.module.css'

export interface CodatLinkProps {
  companyId: string;
  onConnection: (args: ConnectionCallbackArgs) => void;
  onError: (args: ErrorCallbackArgs) => void;
  onClose: () => void;
  onFinish: () => void;
}

const CodatLinkReact: React.FC<CodatLinkProps> = (props) => {
  const { companyId, onConnection, onError, onClose, onFinish } = props;

  const [componentMount, setComponentMount] = useState<HTMLDivElement | null>(
    null
  );

  useEffect(() => {
    const target = componentMount;
    if (target && target.children.length === 0) {
      new CodatLink({
        target,
        props: {
          companyId,
          onConnection,
          onClose,
          onFinish,
          onError,
        },
      });
    }
    // CodatLink does not support changing props after initialisation.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [componentMount]);

  return (
    <div
      className={`App ${styles.link}`}
      data-testId="test"
      ref={setComponentMount}
    ></div>
  );
};

export default CodatLinkReact