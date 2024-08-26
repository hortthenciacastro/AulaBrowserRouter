import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <header className="header">
            <nav>
                <ul className="nav-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/ofertas">Ofertas</Link></li>
                    <li><Link to="/produtos">Produtos</Link></li>
                </ul>
            </nav>
        </header>
    );
}