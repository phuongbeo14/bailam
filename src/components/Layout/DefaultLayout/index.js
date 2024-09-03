import Header from "./Header";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
import classNames from "classnames/bind";
import styles from './DefaultLayout.module.scss'


const cx = classNames.bind(styles)


function DefaultLayout({ children1, children2, children3 }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('sidebar')}>
                <Sidebar />
                <div className={cx('menu')}>{children1}</div>
            </div>
            <div className={cx('parent')}>
                <div className={cx('header')}>
                    <Header />
                    <div className={cx('content')}>{children2}</div>

                </div>
                <div className={cx('body')}>
                    <Body />
                    <div className={cx('text')}>{children3}</div>
                </div>
                <div className={cx('footer')}>
                    <Footer />

                </div>
            </div>
        </div>
    );
}

export default DefaultLayout
