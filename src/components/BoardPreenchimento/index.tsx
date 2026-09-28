import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

type BadgeKind = 'novo' | 'obrigatorio' | 'condicional';

type FieldItem = {
  label: string;
  value: ReactNode;
  badges?: BadgeKind[];
};

const BADGE_LABEL: Record<BadgeKind, string> = {
  novo: 'Novo',
  obrigatorio: 'Obrigatório',
  condicional: 'Condicional',
};

function Badges({badges}: {badges?: BadgeKind[]}) {
  if (!badges?.length) {
    return null;
  }

  return (
    <span className={styles.badges}>
      {badges.map((kind) => (
        <span key={kind} className={styles[kind]}>
          {BADGE_LABEL[kind]}
        </span>
      ))}
    </span>
  );
}

function Field({label, value, badges}: FieldItem) {
  return (
    <div className={styles.field}>
      <div className={styles.fieldLabel}>
        {label}
        <Badges badges={badges} />
      </div>
      <div className={styles.fieldValue}>{value}</div>
    </div>
  );
}

function CardColumn({
  title,
  subtitle,
  status,
  fields,
  docsPath,
}: {
  title: string;
  subtitle: string;
  status: string;
  fields: FieldItem[];
  docsPath: string;
}) {
  return (
    <article className={styles.column}>
      <header className={styles.columnHeader}>
        <div>
          <p className={styles.columnKicker}>{subtitle}</p>
          <Heading as="h2" className={styles.columnTitle}>
            {title}
          </Heading>
        </div>
        <span className={styles.status}>{status}</span>
      </header>

      <div className={styles.card}>
        {fields.map((field) => (
          <Field key={field.label} {...field} />
        ))}
      </div>

      <Link className={styles.columnLink} to={docsPath}>
        Ver guia completo
      </Link>
    </article>
  );
}

const devFields: FieldItem[] = [
  {
    label: 'Resumo da implementação',
    badges: ['novo', 'obrigatorio'],
    value:
      'Ajustado o fluxo de login para validar e-mail e senha antes de redirecionar ao portal. Incluído envio de e-mail de recuperação apenas para cadastros ativos.',
  },
  {
    label: 'Como validar / reproduzir',
    badges: ['novo', 'obrigatorio'],
    value: (
      <ol>
        <li>Acesse Homologação.</li>
        <li>Entre com um usuário válido.</li>
        <li>Use Esqueci a senha.</li>
        <li>Confirme o e-mail de recuperação.</li>
      </ol>
    ),
  },
  {
    label: 'Critérios de aceite atendidos?',
    badges: ['novo', 'obrigatorio'],
    value: (
      <div className={styles.options}>
        <span>Sim</span>
        <span className={styles.optionActive}>Parcial</span>
        <span>Não</span>
      </div>
    ),
  },
  {
    label: 'Regra de negócio aplicada na validação',
    badges: ['novo', 'obrigatorio'],
    value:
      'Usuário só recupera senha se o e-mail estiver cadastrado e ativo.',
  },
  {
    label: 'Justificativa',
    badges: ['novo', 'condicional'],
    value:
      'O fluxo principal foi entregue. Falta a mensagem de erro quando o e-mail não está cadastrado.',
  },
];

export default function BoardPreenchimento(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.legend}>
          <span>
            <span className={styles.novo}>Novo</span>
            Campo novo do board
          </span>
          <span>
            <span className={styles.obrigatorio}>Obrigatório</span>
            Preencher sempre
          </span>
          <span>
            <span className={styles.condicional}>Condicional</span>
            Só se o critério for Parcial ou Não
          </span>
        </div>

        <div className={styles.board}>
          <CardColumn
            title="Card de Desenvolvimento"
            subtitle="Fechamento da implementação"
            status="Implementação concluída"
            fields={devFields}
            docsPath="/docs/card-desenvolvimento/visao-geral"
          />
        </div>

        <div className={styles.tips}>
          <Heading as="h2">Como preencher</Heading>
          <div className={styles.tipsGrid}>
            <div>
              <h3>Evite</h3>
              <ul>
                <li>Campo obrigatório em branco</li>
                <li>Texto genérico, como “feito ajuste”</li>
                <li>Critério Sim sem a entrega completa</li>
                <li>Parcial ou Não sem justificativa</li>
              </ul>
            </div>
            <div>
              <h3>Faça</h3>
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
    </section>
  );
}
