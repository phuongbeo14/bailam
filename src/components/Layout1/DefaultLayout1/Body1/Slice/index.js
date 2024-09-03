import classNames from "classnames/bind";
import styles from './Slice.module.scss'
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { SwiperSlide } from "swiper/react";

const cx = classNames.bind(styles)
const list = [
    {
        id: '#1',
        img: logo1,
        name: '$SWIF',
        nickname: '$SWIF',
        th: '1',
        number: '-8.24%',
        total: '$0.00312'

    },
    {
        id: '#2',
        img: logo2,
        name: 'Mog',
        nickname: 'Mog',
        th: '2',
        number: '-14.47%',
        total: '$0.0523'
    },
    {
        id: '#3',
        img: logo3,
        name: 'POPCAT',
        nickname: 'POPCAT',
        th: '3',
        number: '-3.16%',
        total: '$0.05456'
    },
    {
        id: '#4',
        img: logo4,
        name: 'BRETT',
        nickname: 'BRETT',
        th: '4',
        number: '-7.53%',
        total: '$0.06847'
    },
    {
        id: '#5',
        img: logo5,
        name: 'MUMU',
        nickname: 'MUMU',
        th: '5',
        number: '-14.92%',
        total: '$0.0539'
    },
    {
        id: '#6',
        img: logo6,
        name: 'MEW',
        nickname: 'MEW',
        th: '6',
        number: '1.22%',
        total: '$0.096784'
    },
    {
        id: '#7',
        img: logo7,
        name: 'BILLY',
        nickname: 'BILLY',
        th: '7',
        number: '-12.06%',
        total: '$0.04764'
    },
    {
        id: '#8',
        img: logo8,
        name: 'PEPE',
        nickname: 'PEPE',
        th: '8',
        number: '-3.47%',
        total: '$0.6853'
    },
    {
        id: '#9',
        img: logo9,
        name: 'PENDLE',
        nickname: 'PENDLE',
        th: '9',
        number: '-4.00%',
        total: '$0.08674'
    },
    {
        id: '#10',
        img: logo10,
        name: 'MANEKI',
        nickname: 'MANEKI',
        th: '10',
        number: '-6.23%',
        total: '$0.00694'
    },
    {
        id: '#11',
        img: logo11,
        name: '$michi',
        nickname: '$michi',
        th: '11',
        number: '-8.04%',
        total: '$0.0654'
    },
    {
        id: '#12',
        img: logo12,
        name: 'BANANA',
        nickname: 'BANANA',
        th: '12',
        number: '-5.32%',
        total: '$0.0658'
    },
    {
        id: '#13',
        img: logo13,
        name: 'POCAT',
        nickname: 'POCAT',
        th: '13',
        number: '41.39%',
        total: '$0.0684'
    },
    {
        id: '#14',
        img: logo14,
        name: 'RETARDIO',
        nickname: 'RETARDIO',
        th: '14',
        number: '-12.45%',
        total: '$0.0875'
    },
    {
        id: '#15',
        img: logo15,
        name: 'WOLF',
        nickname: 'WOLF',
        th: '15',
        number: '-17.21%',
        total: '$0.09564'
    },
]
const style1 = {
    width: '250px',
}
const autoScroll1 = list.map((data, index) => {
    let style = {}
    if (parseFloat(data.number) < 0) {
        style = { color: 'red' }
    } else {
        style = { color: 'green' }
    };

    return (
        <div className='gap-1 ms-3 border rounded p-3' style={style1}>
           <SwiperSlide className='ms-3 p-3 border rounded'>
                <div className="d-flex justify-content-between mb-3" >
                    <div><img src={data.img} alt="" className={cx('logo')} /> </div>
                    <div><FontAwesomeIcon icon={faStar} /></div>
                </div>
                <div className="d-flex align-items-center">
                    <span className="me-1">{data.name}</span>
                    <span className="me-1">{data.nickname}</span>
                    <div className={cx('box')}>
                        <span>{data.th}</span>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center" >
                    <div><span style={style}>{data.number}</span></div>
                    <div><spam>{data.total}</spam></div>
                </div>
           </SwiperSlide>
        </div>

    )

}
)
export { autoScroll1 }


