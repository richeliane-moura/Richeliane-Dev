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
      nome: 'Formulário Validação React',
      descricao: 'Formulário de cadastro com validação de campos e feedback de erros, mostrando lógica e UX.',
      link: 'https://richeliane-moura.github.io/tela-login-react/',
      github: 'https://github.com/richeliane-moura/tela-login-react'
    },
    {
      nome: 'Landing Page Livros',
      descricao: 'Landing page para pedido de livros com geração automática de mensagem no WhatsApp.',
      link: 'https://richeliane-moura.github.io/livros-apostolo-celson/',
      github: 'https://github.com/richeliane-moura/livros-apostolo-celson'
    },
    {
      nome: 'CRUD Contatos / Notas',
      descricao: 'Aplicação CRUD em React + Vite com armazenamento em localStorage.',
      link: 'https://richeliane-moura.github.io/CRUD-Contatos-Notas/',
      github: 'https://github.com/richeliane-moura/CRUD-Contatos-Notas'
    },
    {
      nome: 'Meu Portfólio (HTML/CSS/JS)',
      descricao: 'Portfólio online desenvolvido com HTML, CSS e JavaScript.',
      link: 'https://richeliane-moura.github.io/portfolio/',
      github: 'https://github.com/richeliane-moura/portfolio'
    },
    {
      nome: 'Quiz Jogo',
      descricao: 'Jogo de perguntas e respostas feito com HTML, CSS, JavaScript e jQuery.',
      link: 'https://richeliane-moura.github.io/quiz-jogo-/',
      github: 'https://github.com/richeliane-moura/quiz-jogo-'
    },
    {
      nome: 'Tocador de Música',
      descricao: 'Player de música com play/pause, navegação, barra de progresso e shuffle.',
      link: 'https://richeliane-moura.github.io/tocador-musica/',
      github: 'https://github.com/richeliane-moura/tocador-musica'
    },
    {
      nome: 'Richeliane Dev',
      descricao: 'Portfólio pessoal desenvolvido em React + Vite.',
      link: 'https://richeliane-moura.github.io/Richeliane-Dev/',
      github: 'https://github.com/richeliane-moura/Richeliane-Dev'
    }
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
              <a
                className="btn-small"
                href={p.link}
                target="_blank"
                rel="noreferrer"
              >
                Ver projeto
              </a>

              <a
                className="btn-small btn-github"
                href={p.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
