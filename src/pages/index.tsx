import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader(): ReactNode {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Padronização de Cards
        </Heading>
        <p className="hero__subtitle">
          Como Desenvolvimento e QA preenchem os cards no fluxo DEV → QA.
        </p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Padronização de Cards"
      description="Resumo da padronização dos cards de Desenvolvimento e QA.">
      <HomepageHeader />
      <main>
        <section className={styles.resumo}>
          <div className="container">
            <p>
              Os campos atuais continuam. No fechamento do desenvolvimento
              entram campos novos para registrar o que foi feito, como
              reproduzir e se os critérios de aceite foram atendidos. Na
              validação, o QA registra o ambiente, a versão e o resultado dos
              critérios. Quando a resposta for Parcial ou Não, a justificativa
              é obrigatória.
            </p>
            <p>
              O objetivo é aumentar a rastreabilidade, reduzir retrabalho e
              alinhar PO, Desenvolvimento e Qualidade. O card passa a ser a
              fonte do que foi entregue, de como validar e do que ficou
              pendente.
            </p>
            <div className={styles.atalhos}>
              <Link className={styles.atalho} to="/equipe-dev">
                <strong>Equipe de Dev</strong>
                <span>
                  Preenchimento do chamado e do card de desenvolvimento.
                </span>
              </Link>
              <Link className={styles.atalho} to="/equipe-qa">
                <strong>Equipe QA</strong>
                <span>
                  Preenchimento do card de validação, com os campos novos.
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
