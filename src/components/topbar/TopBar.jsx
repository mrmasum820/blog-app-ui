import { Link } from 'react-router-dom';
import './tobar.css';

export default function TopBar() {
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook"></i>
                <i className="topIcon fa-brands fa-twitter"></i>
                <i className="topIcon fa-brands fa-instagram"></i>
                <i className="topIcon fa-brands fa-pinterest"></i>
            </div>
            <div className="topCenter">
                <ul className='topList'>
                    <li className='topListItem'>
                        <Link className='link' to="/">Home</Link>
                    </li>
                    <li className='topListItem'>
                        <Link className='link' to="/">About</Link>
                    </li>
                    <li className='topListItem'>
                        <Link className='link' to="/">Contact</Link>
                    </li>
                    <li className='topListItem'>
                        <Link className='link' to="/write">Write</Link>
                    </li>
                    <li className='topListItem'>
                        <Link className='link' to="/register">Logout</Link>
                    </li>
                </ul>
            </div>
            <div className="topRight">
                <img className='topImg' src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user photos" />
                <i className="toSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
