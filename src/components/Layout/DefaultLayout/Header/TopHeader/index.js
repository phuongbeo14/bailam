import classNames from "classnames/bind";
import styles from './TopHeader.module.scss'
import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo1 from '~/Icons/image/swif.webp'
import logo2 from '~/Icons/image/mog-coin.webp'
import logo3 from '~/Icons/image/popcat.webp'
import logo4 from '~/Icons/image/brett-1.webp'
import logo5 from '~/Icons/image/mumu-the-bull.webp'
import logo6 from '~/Icons/image/cat-in-a-dogs-world.webp'
import logo7 from '~/Icons/image/billy.webp'
import logo8 from '~/Icons/image/pepe.webp'
import logo9 from '~/Icons/image/pendle.webp'
import logo10 from '~/Icons/image/maneki.webp'
import logo11 from '~/Icons/image/michi.webp'
import logo12 from '~/Icons/image/banana.webp'
import logo13 from '~/Icons/image/polite-cat.webp'
import logo14 from '~/Icons/image/retardio.webp'
import logo15 from '~/Icons/image/landwolf-2.webp'

const cx = classNames.bind(styles)
const list = [
    {
        id: '#1',
        img: logo1,
        name: '$SWIF',
        number: '-8.24%',
    },
    {
        id: '#2',
        img: logo2,
        name: 'Mog',
        number: '-14.47%',
    },
    {
        id: '#3',
        img: logo3,
        name: 'POPCAT',
        number: '-3.16%',
    },
    {
        id: '#4',
        img: logo4,
        name: 'BRETT',
        number: '-7.53%',
    },
    {
        id: '#5',
        img: logo5,
        name: 'MUMU',
        number: '-14.92%',
    },
    {
        id: '#6',
        img: logo6,
        name: 'MEW',
        number: '1.22%',
    },
    {
        id: '#7',
        img: logo7,
        name: 'BILLY',
        number: '-12.06%',
    },
    {
        id: '#8',
        img: logo8,
        name: 'PEPE',
        number: '-3.47%',
    },
    {
        id: '#9',
        img: logo9,
        name: 'PENDLE',
        number: '-4.00%',
    },
    {
        id: '#10',
        img: logo10,
        name: 'MANEKI',
        number: '-6.23%',
    },
    {
        id: '#11',
        img: logo11,
        name: '$michi',
        number: '-8.04%',
    },
    {
        id: '#12',
        img: logo12,
        name: 'BANANA',
        number: '-5.32%',
    },
    {
        id: '#13',
        img: logo13,
        name: 'POCAT',
        number: '41.39%',
    },
    {
        id: '#14',
        img: logo14,
        name: 'RETARDIO',
        number: '-12.45%',
    },
    {
        id: '#15',
        img: logo15,
        name: 'WOLF',
        number: '-17.21%',
    },
]
const autoScroll = list.map((data, index) => {
        let style = {}
    if (parseFloat(data.number) < 0) {
        style = { color: 'red' }
    } else {
        style = { color: 'green' }
    };
    return (
        <div className='d-flex align-items-center gap-1 ms-3'>
            <span>{data.id}</span>
            <img src={data.img} alt="" className={cx('logo')} />
            <span className="m-1">{data.name}</span>
            <span style={style} className={cx('num')}>{data.number}</span>
        </div>

    )

}
)
export { autoScroll }


