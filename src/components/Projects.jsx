export default function Projects() {
  const projetos = [
    {
      nome: 'Quiz-React',
      descricao: 'Um quiz interativo feito em React, onde você pode escolher categorias, responder perguntas e acompanhar sua pontuação.',
      link: 'https://richeliane-moura.github.io/quiz-react/'
    },
    {
      nome: 'Lista de tarefas React',
      descricao: 'Aplicativo de tarefas feito com React e localStorage',
      link: 'https://richeliane-moura.github.io/todoList-react/'
    },
    {
      nome: 'Meu Portfolio',
      descricao: 'Bem-vindo ao meu portfólio online! Aqui você encontra meus projetos, habilidades e informações sobre minha formação. Este projeto foi desenvolvido utilizando HTML5 , CSS3 e JavaScript .',
      link: 'https://richeliane-moura.github.io/portfolio/'
    },
     {
      nome: 'Richeliane Dev',
      descricao: 'Website para apresentar projetos e contato',
      link: 'https://richeliane-moura.github.io/Richeliane-Dev/'
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
            <a className="btn-small" href={p.link} target="_blank" rel="noreferrer">Ver projeto</a>
          </article>
        ))}
      </div>
    </section>
  );
}
