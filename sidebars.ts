import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// Sidebar da documentação de padronização de cards DEV e QA
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    'objetivo',
    'impactos-atuais',
    'exemplos-preenchimento',
    {
      type: 'category',
      label: 'Card de Desenvolvimento',
      items: [
        'card-desenvolvimento/visao-geral',
        'card-desenvolvimento/novos-campos',
        'card-desenvolvimento/exemplo',
      ],
    },
    {
      type: 'category',
      label: 'Card de QA',
      items: [
        'card-qa/visao-geral',
        'card-qa/novos-campos',
        'card-qa/exemplo',
      ],
    },
  ],
};

export default sidebars;
