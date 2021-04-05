import {Link} from 'react-router-dom';
import Winkelwagen from './components/Winkelwagen';

const Nav = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Frituur</Link></li>
                    <li><Link to="/menu">Ons menu</Link></li>
                    <li><Link to="/over">Over ons</Link></li>
                </ul>
            </nav>
            <Winkelwagen />
        </div>
    )
}

export default Nav