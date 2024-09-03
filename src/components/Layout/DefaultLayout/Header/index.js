import classNames from "classnames/bind";
import styles from './Header.module.scss'
import { autoScroll } from "./TopHeader";
import Search from "./SearchAccount";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from '~/Icons/image/tải xuống.png'
import Marquee from "react-fast-marquee";


const cx = classNames.bind(styles)


function Header() {
    return (
        <div className={cx('top-header')}>
            <div className={cx('content')}>
                <div className={cx('trend')}>
                    <img alt="" src={logo} className={cx('logo')} />
                    <span>Trending</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-selector text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300">
                        <path d="M8 9l4 -4l4 4"></path>
                        <path d="M16 15l-4 4l-4 -4"></path>
                    </svg>
                </div>
            </div>
            <Marquee pauseOnHover>
                <div className={cx('auto')}>
                    {autoScroll}
                </div>
            </Marquee>
            <hr />
            <div className={cx('search')} >
                <Search />
            </div>
            <hr />
        </div>


    );
}

export default Header;