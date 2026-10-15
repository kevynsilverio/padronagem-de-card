import type {ReactNode} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import BoardPreenchimento from '@site/src/components/BoardPreenchimento';

import styles from './index.module.css';

function Header(): ReactNode {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Exemplo do novo card de QA
        </Heading>
        <p className="hero__subtitle">
          Protótipo da proposta, com os campos novos destacados.
        </p>
      </div>
    </header>
  );
}

export default function EquipeQa(): ReactNode {
  return (
    <Layout
      title="Exemplo do novo card de QA"
      description="Protótipo do card de QA, com os campos novos destacados para o preenchimento da equipe.">
      <Header />
      <main>
        <BoardPreenchimento />
      </main>
    </Layout>
  );
}
