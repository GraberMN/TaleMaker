import { Link } from '@tanstack/react-router';
import './header.css';

export default function Header() {
  return (
    <header id='headerHeader'>
      <nav id='headerNav'>
        <div id='headerDiv'>
          <Link to="/">Home</Link>
        </div>
      </nav>
    </header>
  )
}
