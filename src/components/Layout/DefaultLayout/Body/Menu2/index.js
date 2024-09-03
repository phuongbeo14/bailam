import classNames from "classnames/bind";
import styles from './Menu2.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// eslint-disable-next-line no-unused-vars
import logo from '../../../../../Icons/image/tải xuống.png'



const cx = classNames.bind(styles)
const list = [
    {
        icon: logo,
        name: 'Categories'
    },
    {
        icon: logo,
        name: 'Telegram Bots'
    },
    {
        icon: logo,
        name: 'Solona Ecosystem'
    },
    {
        icon: logo,
        name: 'Ethereum Ecosystem'
    },
    {
        icon: logo,
        name: 'Memes'
    },
    {
        icon: logo,
        name: 'Polygon Ecosystem'
    },
]



const menu2 = list.map((data) => {
    return (
        <div className={cx('top')}>
            <img src={data.icon} alt="" className={cx('logo')} />
            <div className={cx('menu')}>
                <p className={cx('text')}> {data.name}</p>
            </div>
        </div>
    )
}
)


export { menu2 }