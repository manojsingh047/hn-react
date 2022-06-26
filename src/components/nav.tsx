import { Link } from 'react-router-dom';
function Nav() {
  return (
    <header className="header">
      <nav className="inner">
        <Link to="/">
          <span><strong>HN</strong></span>
        </Link>
        <Link to="/newest">
          <span><strong>New</strong></span>
        </Link>
        <Link to="/show">
          <span><strong>Show</strong></span>
        </Link>
        <Link to="/ask">
          <span><strong>Ask</strong></span>
        </Link>
        <Link to="/jobs">
          <span><strong>Jobs</strong></span>
        </Link>
        <a className="github" href="https://nextjs.org" target="_blank" rel="noreferrer">
          Built with Next
        </a>
      </nav>
    </header>
  );
}

export default Nav;
