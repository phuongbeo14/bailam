import classNames from "classnames/bind";
import styles from './TopCoin.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import logo1 from '~/Icons/image/faptax.webp'
import logo2 from '~/Icons/image/tsuki.webp'
import logo3 from '~/Icons/image/loafcat.webp'
import logo4 from '~/Icons/image/wat.webp'
import logo5 from '~/Icons/image/lil-bub_400.webp'
import logo6 from '~/Icons/image/mutant-boys-club.webp'
import logo7 from '~/Icons/image/landwolf-2.webp'
import logo8 from '~/Icons/image/duckyduck.webp'


const cx = classNames.bind(styles)
const list = [
    {
        id: '784',
        icon: logo1,
        name: 'FAPTAX',
        nick_name: 'FAPTAX',
        logo: '/images/chains/solana.svg',
        price: '$0.00932',
        percent1h: '-9.59%',
        percent6h: '-17.72%',
        percent24h: '-28.38%',
        market: '$2.80 M',
        fdv: '$2.80 M',
        volume: '$1.81 M',
        vote: '83',
        total: '83'
    },
    {
        id: '6',
        icon: logo2,
        name: 'Tsuki',
        nick_name: 'TSUKI',
        logo: '/images/chains/solana.svg',
        price: '$0.001912',
        percent1h: '-1.00%',
        percent6h: '5.46%',
        percent24h: '12.59%',
        market: '$1.82 M',
        fdv: '$1.82 M',
        volume: '$43.191',
        vote: '62',
        total: '2.46 K'
    },
    {
        id: '256',
        icon: logo3,
        name: 'LOAFCAT',
        nick_name: 'LOAFCAT',
        logo: '/images/chains/solana.svg',
        price: '$0.00001382',
        percent1h: '-5.09%',
        percent6h: '-3.07%',
        percent24h: '-6.04%',
        market: '$1.38 M',
        fdv: '$1.38 M',
        volume: '$20.821',
        vote: '60',
        total: '234'
    },
    {
        id: '8',
        icon: logo4,
        name: 'Wat',
        nick_name: 'WAT',
        logo: '/images/chains/ethereum.svg',
        price: '$0.055269',
        percent1h: '-1,04%',
        percent6h: '2.50%',
        percent24h: '11.63%',
        market: '$2.22 M',
        fdv: '$2.22 M',
        volume: '$115.526',
        vote: '52',
        total: '2.18 K'
    },
    {
        id: '209',
        icon: logo5,
        name: 'LIL BUB',
        nick_name: 'BUB',
        logo: '/images/chains/solana.svg',
        price: '$0.008619',
        percent1h: '0.40%',
        percent6h: '0.84%',
        percent24h: '-8.79%',
        market: '$8.62 M',
        fdv: '$8.62 M',
        volume: '$766.516',
        vote: '51',
        total: '276'
    },
    {
        id: '366',
        icon: logo6,
        name: 'Mutant Boys Club',
        nick_name: 'MBC',
        logo: '/images/chains/solana.svg',
        price: '$0.0001414',
        percent1h: '-4.12%',
        percent6h: '-2.79%',
        percent24h: '-12.39%',
        market: '$140.831 M',
        fdv: '$140.831 ',
        volume: '$111.731 ',
        vote: '44',
        total: '168'
    },
    {
        id: '5',
        icon: logo7,
        name: 'LandWolf',
        nick_name: 'WOLF',
        logo: '/images/chains/solana.svg',
        price: '$0.004352',
        percent1h: '4.65%',
        percent6h: '-1.19%',
        percent24h: '-15.34%',
        market: '$43.52 M',
        fdv: '$43.52 M',
        volume: '$2.90 M',
        vote: '35',
        total: '2.73 K'
    },
    {
        id: '131',
        icon: logo8,
        name: 'DuckyDuck',
        nick_name: 'DUCKY',
        logo: '/images/chains/solana.svg',
        price: '$0.003557',
        percent1h: '1.04%',
        percent6h: '-11.52%',
        percent24h: '-43.69%',
        market: '$711.400',
        fdv: '$711.400',
        volume: '$932.711',
        vote: '33',
        total: '399'
    },
]



const topCoin = list.map((data) => {
    let style = {}
    let styled = {}
    let sty = {}
    if (parseFloat(data.percent1h) < 0) {
        style = { color: 'red' }
    } else {
        style = { color: 'green' }
    };
    if (parseFloat(data.percent6h) < 0) {
        styled = { color: 'red' }
    } else {
        styled = { color: 'green' }
    };
    if (parseFloat(data.percent24h) < 0) {
        sty = { color: 'red' }
    } else {
        sty = { color: 'green' }
    };
    return (


        <tr>
            <td className="align-middle"><FontAwesomeIcon icon={faStar} /></td>
            <td className="align-middle">{data.id}</td>
            <td>
                <div className={cx('asset')}>
                    <img src={data.icon} alt="" className={cx('icon')} />
                    <div className={cx('username')}>
                        <div className={cx('nickname')}>{data.nick_name}</div>
                        <div className={cx('name')}>{data.name}</div>
                    </div>
                </div>
            </td>
            <td className="text-end align-middle">{data.price}</td>
            <td style={style} className="text-end align-middle">{data.percent1h}</td>
            <td style={styled} className="text-end align-middle">{data.percent6h}</td>
            <td style={sty} className="text-end align-middle">{data.percent24h}</td>
            <td className="text-end align-middle">{data.market}</td>
            <td className="text-end align-middle">{data.fdv}</td>
            <td className="text-end align-middle">{data.volume}</td>
            <td>
                <div className={cx('voted')}>
                    <div className={cx('total')}>{data.total}</div>
                    <div className={cx('vote')}>{data.vote}</div>
                </div>
            </td>
        </tr>


    )
}
)




export { topCoin }