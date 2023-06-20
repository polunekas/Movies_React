function Footer() {
  return (
    <footer className="page-footer #e0f2f1 teal lighten-2">
      <div className="container">
        © {new Date().getFullYear()} Copyright Text
        <a className="grey-text text-lighten-4 right" href="#!">
          Repo
        </a>
      </div>
    </footer>
  );
}

export { Footer };
