export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>© {new Date().getFullYear()} — Richeliane Moura.</p>

        <p>
          <a
            href="https://github.com/richeliane-moura"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          {" | "}
          <a
            href="https://www.linkedin.com/in/richeliane-moura"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  )
}
