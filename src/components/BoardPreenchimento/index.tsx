import type {ReactNode} from 'react';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

const campos = [
  {
    title: 'Resumo da Implementação',
    text: 'Descreva o que foi feito, passo a passo das principais alterações e informações relevantes.',
  },
  {
    title: 'Como executar / Reproduzir o comportamento',
    text: 'Descreva o passo a passo para executar a funcionalidade desenvolvida.',
  },
  {
    title: 'Critérios de Aceite atendidos?',
    text: 'Selecione Sim, Parcial ou Não.',
  },
  {
    title: 'Regra de negócio aplicada na validação',
    text: 'Descreva a regra considerada para validar a implementação.',
  },
  {
    title: 'Justificativa',
    text: 'Obrigatória se a opção for Parcial ou Não. Explique a não conformidade ou o que ficou pendente.',
  },
];

export default function BoardPreenchimento(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.board}>
          <div className={styles.prototype}>
            <img
              src="/img/exemplo-card-dev.png"
              alt="Exemplo do card de Desenvolvimento com os novos campos obrigatórios"
            />
          </div>

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
                  <li>Campo obrigatório em branco</li>
                  <li>Texto genérico, como “feito ajuste”</li>
                  <li>Critério Sim sem a entrega completa</li>
                  <li>Parcial ou Não sem justificativa</li>
                </ul>
              </div>
              <div>
                <h3>Depois</h3>
                <ul>
                  <li>Descreva o que mudou de forma objetiva</li>
                  <li>Inclua o passo a passo para reproduzir o comportamento</li>
                  <li>Marque Sim, Parcial ou Não com alinhamento à entrega</li>
                  <li>Registre a regra de negócio usada na validação</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
