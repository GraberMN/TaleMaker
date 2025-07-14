import { Link } from '@tanstack/react-router';
import './header.css';

export default function Header() {
  return (
    <header id='headerHeader'>
      <nav id='headerNav'>
        <div id='headerDiv'>
          <Link to="/" id='homeLink'>Home</Link>
          <Link to="/generate-your-tale/genre" id='generateYourTaleLink'>Generate Your Tale</Link>
        </div>
      </nav>
    </header>
  )
}
