import classNames from "classnames/bind";
import styles from './Menu1.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo0 from '../../../../../Icons/image/tải xuống.png'
import logo1 from '../../../../../Icons/image/tải xuống (1).png'
import logo2 from '../../../../../Icons/image/tải xuống (2).png'
import logo3 from '../../../../../Icons/image/tải xuống (3).png'
import logo4 from '../../../../../Icons/image/tải xuống (4).png'
import logo5 from '../../../../../Icons/image/tải xuống (5).png'
import logo6 from '../../../../../Icons/image/tải xuống (6).png'

const cx = classNames.bind(styles)
const list = [
    {
        icon: logo3,
        name: 'Top Today'
    },
    {
        icon: logo6,
        name: 'Top All Time'
    },
    {
        icon: logo2,
        name: 'Presales'
    },
    {
        icon: logo5,
        name: 'New Listings'
    },
    {
        icon: logo0,
        name: 'Trending'
    },
    {
        icon: logo1,
        name: 'Gainers'
    },
    {
        icon: logo4,
        name: 'Losers'
    },

]



const menu1 = list.map((data) => {
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


export { menu1 }


