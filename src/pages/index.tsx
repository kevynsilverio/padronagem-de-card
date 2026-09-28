import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import BoardPreenchimento from '@site/src/components/BoardPreenchimento';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <p className={styles.kicker}>Página inicial</p>
        <Heading as="h1" className="hero__title">
          Preenchimento do Board
        </Heading>
        <p className="hero__subtitle">
          Modelo preenchido do card de Desenvolvimento. Use este quadro como
          referência ao fechar a implementação no board.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/exemplos-preenchimento">
            Ver regras de preenchimento
          </Link>
          <Link
            className={clsx('button button--outline button--lg', styles.docButton)}
            to="/docs/intro">
            {siteConfig.title}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Preenchimento do Board"
      description="Como preencher o board: modelo do card de Desenvolvimento, com campos novos, obrigatórios e justificativa condicional.">
      <HomepageHeader />
      <main>
        <BoardPreenchimento />
      </main>
    </Layout>
  );
}
