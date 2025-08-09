import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';

import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';


const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];



const Sidebar = () => {
   //  const { color } = props;
	const { theme, toggleTheme } = useTheme();
    const [isOpened, setIsOpened] = useState(false);
    const containerClassnames = classnames('sidebar', { opened: isOpened });

    const goToRoute = (path) => {
        console.log(`going to "${path}"`);
    };

    const toggleSidebar = () => {
        setIsOpened(v => !v);
    };

    return (
        <div className={ containerClassnames }>
            <div className='logo-head'>
                <img className='logo' src={ logo } alt="TensorFlow logo"/>
                <span className='logo__descr'>TensorFlow</span>
                <div className='arr-size' onClick={ toggleSidebar }>
                    <FontAwesomeIcon icon={ isOpened ? 'angle-right' : 'angle-left' }/>
                </div>
            </div>
            <div className='side-list'>
                {
                    routes.map(route => (
                        <div  className='side-list__item'
                            key={ route.title }
                            onClick={() => {
                                goToRoute(route.path);
                            }}
                        >
                            <FontAwesomeIcon className='side-list__icon' icon={ route.icon }/>
                            <span className='side-list__text'>{ route.title }</span>
                        </div>
                    ))
                }
            </div>
            <div className='side-list side-list__sec'>
                {
                    bottomRoutes.map(route => (
                        <div className='side-list__item'
                            key={ route.title }
                            onClick={() => {
                                goToRoute(route.path);
                            }}
                        >
                            <FontAwesomeIcon className='side-list__icon' icon={ route.icon }/>
                            <span className='side-list__text'>{ route.title }</span>
                        </div>
                    ))
                }
            </div>

				<div className='theme-btn side-list__item' onClick={toggleTheme}>
                    <FontAwesomeIcon className='side-list__icon' icon={theme === 'dark' ? 'sun' : 'moon'} />
                    <span className='side-list__text'>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                </div>
        </div>
    );
};

Sidebar.propTypes = {
    color: PropTypes.string,
};

export default Sidebar;
