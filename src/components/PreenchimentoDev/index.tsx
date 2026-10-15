import type {ReactNode} from 'react';
import Heading from '@theme/Heading';

import styles from '../BoardPreenchimento/styles.module.css';

const campos = [
  {
    title: 'Título da demanda',
    text: 'Deve conter a equipe responsável e um breve resumo da alteração. Exemplo: Teste Kevyn - Não Mexer [Portal web] - [Alteração\\correção breve].',
  },
  {
    title: 'Data de Mudança de Etapa',
    text: 'É gerada automaticamente pelo sistema.',
  },
  {
    title: 'Título',
    text: 'Número interno do chamado e o título principal da demanda.',
  },
  {
    title: 'Tipo de Chamado',
    text: 'Categoria da demanda, como melhoria, bug ou tarefa.',
  },
  {
    title: 'Nova Funcionalidade ou Melhoria',
    text: 'Se é uma nova funcionalidade ou uma melhoria no sistema.',
  },
  {
    title: 'Produto Mobilimed',
    text: 'Produto ou sistema relacionado à demanda.',
  },
  {
    title: 'Ambiente',
    text: 'Ambiente em que a alteração será realizada, como produção ou homologação.',
  },
  {
    title: 'Sugestão, motivo e impacto',
    text: 'Descreva a sugestão, o motivo e o impacto esperado, como performance, usabilidade ou segurança.',
  },
  {
    title: 'Observações da Triagem de Qualidade',
    text: 'Campo da equipe de Núcleo de Qualidade, e não do QA.',
  },
];

export default function PreenchimentoDev(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.board}>
          <div className={styles.campos}>
            <Heading as="h2">Campos do exemplo</Heading>
            <ol>
              {campos.map((campo) => (
                <li key={campo.title}>
                  <strong>{campo.title}</strong> — {campo.text}
                </li>
              ))}
            </ol>
          </div>

          <div className={styles.tips}>
            <Heading as="h2">Como preencher</Heading>
            <div className={styles.tipsGrid}>
              <div>
                <h3>Antes</h3>
                <ul>
                  <li>Título sem a equipe e sem o resumo da alteração</li>
                  <li>Campo vazio quando a informação existe</li>
                  <li>Texto genérico, como “Teste”</li>
                  <li>Data de etapa preenchida manualmente</li>
                </ul>
              </div>
              <div>
                <h3>Depois</h3>
                <ul>
                  <li>Título com equipe, resumo, sistema e tipo da alteração</li>
                  <li>Categoria, produto e ambiente informados</li>
                  <li>Sugestão, motivo e impacto descritos de verdade</li>
                  <li>Data de etapa deixada para o sistema</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={`${styles.prototype} ${styles.prototypeEnd}`}>
            <img
              src="/img/wireframe-portal-chamados.jpg"
              alt="Wireframe anotado do portal de chamados, com o exemplo de preenchimento da aba Geral"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
