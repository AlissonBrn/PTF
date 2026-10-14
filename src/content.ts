// DADOS DO PERFIL
// Edite os valores entre aspas. Mantenha as vírgulas ao final das linhas.
// Para ocultar e-mail, GitHub ou LinkedIn, deixe o campo vazio: ''.
export const profile = {
  // Nome exibido no cabeçalho e no rodapé.
  name: 'Adicione seu nome aqui',

  // Texto da marca no cabeçalho. Use iniciais para um formato compacto.
  initials: 'Iniciais',

  // Título profissional. Disponível para uso nos componentes do site.
  role: 'Desenvolvedor Web',

  // Endereço de e-mail, sem o prefixo mailto:.
  email: 'emaildecontato@seuemail.com',

  // Links completos, sempre começando com https://.
  github: 'https://github.com/AlissonBrn',
  linkedin: '',
};

// ESTUDOS DE CASO
// short: nome do projeto na página inicial.
// title: título da página individual.
// category: categoria exibida acima do título.
// scope: sua participação no projeto.
// intro: resumo de abertura; context: contexto do trabalho.
// work: lista de atividades realizadas.
// tech: somente tecnologias confirmadas e que possam ser divulgadas.
// boundary: observações sobre o escopo e a apresentação do projeto.
// Mantenha slug e kind para preservar os endereços e as ilustrações atuais.
// Não inclua nomes de clientes, URLs originais, dados reais ou código confidencial.
export const projects = [
  {
    slug: 'manutencao-web',
    title: 'Continuidade para uma operação web.',
    short: 'Manutenção web',
    category: 'Manutenção · WordPress',
    scope: 'Correções e ajustes',
    kind: 'maintenance',
    intro: 'Correções de erros e ajustes em WordPress e banco de dados para manter um site existente funcional.',
    context: 'Um site existente precisava de intervenções para continuar funcional. A participação se concentrou em manutenção, sem desenvolvimento integral da plataforma.',
    work: ['Correções de erros no site existente.', 'Ajustes no WordPress.', 'Alterações no banco de dados relacionadas à continuidade do site.'],
    boundary: 'A participação foi restrita às correções e aos ajustes informados. Versões, plugins, motor de banco de dados e métricas de desempenho não foram divulgados.',
    tech: 'WordPress e banco de dados (motor não informado).'
  },
  {
    slug: 'plataforma-comercial',
    title: 'Uma nova presença comercial na web.',
    short: 'Plataforma web comercial',
    category: 'Desenvolvimento · Web',
    scope: 'Desenvolvimento completo',
    kind: 'platform',
    intro: 'Desenvolvimento completo de uma nova plataforma web comercial, apresentado aqui sem identidade ou conteúdo do cliente.',
    context: 'O projeto consistiu na criação de uma nova plataforma web comercial. A responsabilidade informada abrange o desenvolvimento completo.',
    work: ['Desenvolvimento completo da nova plataforma web comercial.'],
    boundary: 'Arquitetura, integrações, funcionalidades específicas e resultados quantitativos não foram confirmados e não são atribuídos ao projeto.',
    tech: 'Stack do projeto não divulgada.'
  },
  {
    slug: 'gerador-orcamentos',
    title: 'Software para a elaboração de orçamentos.',
    short: 'Gerador de orçamentos',
    category: 'Desenvolvimento · Ferramenta',
    scope: 'Desenvolvimento completo',
    kind: 'quotes',
    intro: 'Desenvolvimento completo de um gerador de orçamentos para uso comercial.',
    context: 'Uma ferramenta dedicada à geração de orçamentos. A participação confirmada foi o desenvolvimento completo do sistema.',
    work: ['Desenvolvimento completo do gerador de orçamentos.'],
    boundary: 'Regras comerciais, formatos de exportação, integrações e ganhos de produtividade não foram confirmados. A interface apresentada é apenas uma composição ilustrativa.',
    tech: 'Stack do projeto não divulgada.'
  },
  {
    slug: 'dashboard-comercial',
    title: 'Vendas e informações comerciais em foco.',
    short: 'Dashboard comercial',
    category: 'Desenvolvimento · Dashboard',
    scope: 'Desenvolvimento completo',
    kind: 'dashboard',
    intro: 'Desenvolvimento completo de um dashboard de vendas e informações comerciais.',
    context: 'O projeto é um dashboard voltado a vendas e informações comerciais. A responsabilidade informada abrange seu desenvolvimento completo.',
    work: ['Desenvolvimento completo do dashboard de vendas e informações comerciais.'],
    boundary: 'Fontes de dados, indicadores específicos, frequência de atualização e resultados de negócio não foram confirmados. Os gráficos ilustrativos não representam dados reais.',
    tech: 'Stack do projeto não divulgada.'
  },
] as const;
