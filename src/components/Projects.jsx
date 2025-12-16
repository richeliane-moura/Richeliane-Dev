export default function Projects() {
  const projetos = [
    {
      nome: 'MinhaLoja — React Front-end',
      descricao: 'E-commerce fictício consumindo API Fake Store, com carrinho de compras e gerenciamento via localStorage.',
      link: 'https://richeliane-moura.github.io/MinhaLoja-React/',
      github: 'https://github.com/richeliane-moura/MinhaLoja-React'
    },
    {
      nome: 'Dashboard React',
      descricao: 'Dashboard administrativo com gráficos, cards, Dark Mode e responsivo, mostrando boas práticas de front-end.',
      link: 'https://richeliane-moura.github.io/dashboard-front-end/',
      github: 'https://github.com/richeliane-moura/dashboard-front-end'
    },
   {
      nome: 'Quiz React',
      descricao: 'Quiz interativo com categorias, pontuação e feedback do usuário, feito em React.',
      link: 'https://richeliane-moura.github.io/quiz-react/',
      github: 'https://github.com/richeliane-moura/quiz-react'
    },
    {
      nome: 'To-Do List React',
      descricao: 'Aplicativo de tarefas com adicionar, remover e concluir, persistindo dados no localStorage.',
      link: 'https://richeliane-moura.github.io/todoList-react/',
      github: 'https://github.com/richeliane-moura/todoList-react'
    },
    {
      nome: 'Formulário Validação react',
      descricao: 'Formulário de cadastro com validação de campos e feedback de erros, mostrando lógica e UX.',
      link: 'https://richeliane-moura.github.io/tela-login-react/',
      github: 'https://github.com/richeliane-moura/tela-login-react' 
    },
    {
      nome: 'Landing-page',
      descricao: 'Landing-page para exibição e pedido de livros do Apóstolo Celson Moura. O usuário pode selecionar os livros desejados, inserir seus dados e gerar um pedido via WhatsApp automaticamente.',
      link: 'https://richeliane-moura.github.io/livros-apostolo-celson/',
      github: 'https://github.com/richeliane-moura/livros-apostolo-celson?tab=readme-ov-file' 
    },
    {
      nome: 'CRUD Contatos/Notas',
      descricao: 'Aplicação CRUD (Criar, Ler, Atualizar e Deletar) desenvolvida em React utilizando Vite , com armazenamento local via localStorage . Permite gerenciar contatos ou notas de forma simples e intuitiva.',
      link: ' https://richeliane-moura.github.io/CRUD-Contatos-Notas/',
      github: 'https://github.com/richeliane-moura/CRUD-Contatos-Notas' 
    },
    {
      nome: 'Meu Portfólio',
      descricao: 'Portfólio online com HTML, CSS e JS, exibindo projetos, habilidades e informações pessoais.',
      link: 'https://richeliane-moura.github.io/portfolio/',
      github: 'https://github.com/richeliane-moura/portfolio'
    },
    {
      nome: 'Quiz Jogo',
      descricao: 'Um jogo simples de perguntas e respostas (Quiz) feito com HTML, CSS, JavaScript e jQuery.',
      link: 'https://richeliane-moura.github.io/quiz-jogo-/ ',
      github: 'https://github.com/richeliane-moura/quiz-jogo-' 
    },   
    {
      nome: 'Tocador-música',
      descricao: 'Um tocador de música simples feito em HTML, CSS e JavaScript, com funcionalidades de play/pause, próxima/anterior música, shuffle, repeat, barra de progresso dinâmica e botão de curtir.',
      link: 'https://richeliane-moura.github.io/tocador-musica/ ',
      github: 'https://github.com/richeliane-moura/tocador-musica'
    },
     {
      nome: 'Richeliane projetos',
      descricao: 'Um portfólio pessoal desenvolvido em React + Vite , criado para apresentar meus projetos, habilidades e informações de contato como estudante de Análise e Desenvolvimento de Sistemas e Desenvolvedora Front-End .',
      link: 'https://richeliane-moura.github.io/Richeliane-Dev/ ',
      github: 'https://github.com/richeliane-moura/Richeliane-Dev'
    },
    

  ];

  return (
    <section id="projetos" className="container">
      <h2>Projetos</h2>
      <div className="project-list">
        {projetos.map((p, i) => (
          <article className="project-card" key={i}>
            <h3>{p.nome}</h3>
            <p>{p.descricao}</p>
            <div className="project-links">
              {p.link && (
                <a className="btn-small" href={p.link} target="_blank" rel="noreferrer">
                  Ver projeto
                </a>
              )}
              {p.github && (
                <a className="btn-small btn-github" href={p.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
