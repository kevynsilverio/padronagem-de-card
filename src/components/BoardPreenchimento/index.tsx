import type {ReactNode} from 'react';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

const campos = [
  {
    title: 'Ambiente / Versão validada',
    text: 'Registre o ambiente e a versão validados. Exemplo: Homologação | Portal 4.9.0.0.',
  },
  {
    title: 'Critérios de aceite validados?',
    text: 'Selecione Sim, Parcial ou Não.',
  },
  {
    title: 'Justificativa',
    text: 'Obrigatória se a opção for Parcial ou Não. Explique a divergência ou o que não pôde ser concluído.',
  },
];

export default function BoardPreenchimento(): ReactNode {
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
                  <li>Campo obrigatório em branco</li>
                  <li>Ambiente e versão sem registro</li>
                  <li>Critério Sim sem a validação completa</li>
                  <li>Parcial ou Não sem justificativa</li>
                </ul>
              </div>
              <div>
                <h3>Depois</h3>
                <ul>
                  <li>Registre o ambiente e a versão validados</li>
                  <li>Marque Sim, Parcial ou Não alinhado ao que foi testado</li>
                  <li>Justifique quando for Parcial ou Não</li>
                  <li>Use o mesmo nome na evidência e no cenário de teste</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={`${styles.prototype} ${styles.prototypeEnd}`}>
            <img
              src="/img/exemplo-card-qa.png"
              alt="Exemplo do card de QA com os novos campos obrigatórios"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
