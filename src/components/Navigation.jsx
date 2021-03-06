import { Link, NavLink } from 'react-router-dom'


import routes from '../routes'


export function Navigation() {
    return (
        <nav className='flex space-between align-center full'>
            <div className='logo-container'>
                <span>Logo Here</span>
            </div>
            <ul className='clean-list flex'>
                {routes.map(route => <li key={route.path} ><NavLink to={route.path}>{route.label}</NavLink></li>)}
            </ul>
        </nav>
    );
}
