import type {ReactNode} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import PreenchimentoDev from '@site/src/components/PreenchimentoDev';

import styles from './index.module.css';

function Header(): ReactNode {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Exemplo do novo card de Desenvolvimento
        </Heading>
        <p className="hero__subtitle">
          Protótipo da proposta, com os campos novos destacados.
        </p>
      </div>
    </header>
  );
}

export default function EquipeDev(): ReactNode {
  return (
    <Layout
      title="Exemplo do novo card de Desenvolvimento"
      description="Protótipo do card de Desenvolvimento, com os campos novos destacados.">
      <Header />
      <main>
        <PreenchimentoDev />
      </main>
    </Layout>
  );
}
