import Image from 'next/image'
import Link from 'next/link';

import styles from './page.module.css'

import { CodatCommon } from '@codat/common';
import { GetCompanyResponse } from '@codat/common/dist/sdk/models/operations';
import { Company } from '@codat/common/dist/sdk/models/shared/company';

import AuthFlow from './AuthFlow';

const common = new CodatCommon({
  security: {
    authHeader: process.env.CODAT_AUTH_HEADER!,
  },
});

const getData = async (id: Company["id"]) => {
  const res = await common.companies
    .get({
      companyId: id,
    })
    .then((res: GetCompanyResponse) => {
      if (res.statusCode == 200) {
        return res
      }
      
      throw new Error("Company not found")
    });

  return res.company;
}

const CompanyPage = async ({
  params,
}: {
  params: { id: string };
}) => {
  const company = await getData(params.id);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/companies/[id]/page.tsx</code>
        </p>
        <div>
          <a
            href="https://github.com/codatio/starter-project-nextjs-codat"
            target="_blank"
            rel="noopener noreferrer"
          >
            starter-project-nextjs-codat
          </a>
        </div>
      </div>

      <div className={styles.grid}>
        <Link key={company?.id} href={`/`} className={styles.card}>
          <p>← Back to Home</p>
        </Link>

        <div className={styles.card}>
          <h2>{company?.name}</h2>
          <p><i>{company?.id}</i></p>
          <p><b>Connections:</b> {company?.platform}</p>
          <p><b>Last pull:</b> {company?.lastSync}</p>
          <p><b>Created:</b> {company?.created}</p>
        </div>

        <div className={styles.card}>
          <h2>View in the Portal</h2>
          <a href={`https://app.codat.io/companies/${company?.id}`} target="_blank" rel="noreferrer">
            Explore {company?.name} in the Portal →
          </a>
        </div>

        <div className={styles.card}>
          <h2>Connect data</h2>
          
          { 
            company?.id
            && <AuthFlow companyId={company?.id!}/>
          }
        </div>
      </div>
    </main>
  )
}

export default CompanyPage;