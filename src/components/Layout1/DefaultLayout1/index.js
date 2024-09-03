import classNames from "classnames/bind";
import styles from './DefaultLayout1.module.scss'
import Header from "~/components/Layout/DefaultLayout/Header";
import Sidebar from "~/components/Layout/DefaultLayout/Sidebar";
import Footer from "~/components/Layout/DefaultLayout/Footer";
import Body1 from "./Body1";


const cx = classNames.bind(styles)



function DefaultLayout1({ children1, children2, children3 }) {
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
                    <Body1 />
                    <div className={cx('text')}>{children3}</div>
                </div>
                <div className={cx('footer')}>
                    <Footer />

                </div>
            </div>
        </div>
    );
}

export default DefaultLayout1























