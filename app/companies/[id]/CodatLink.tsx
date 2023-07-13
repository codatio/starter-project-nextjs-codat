import type {
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
      // webpackIgnore is a magic comment that prevents webpack from
      //   parsing this dynamic import. The build will fail otherwise.
      // See https://webpack.js.org/api/module-methods/#magic-comments
      import(/* webpackIgnore: true */ "https://link-sdk.codat.io").then(
        ({ CodatLink }) => {
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
      )
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