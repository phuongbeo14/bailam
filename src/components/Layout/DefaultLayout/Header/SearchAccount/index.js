import classNames from "classnames/bind";
import styles from './SearchAccount.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'tippy.js/dist/tippy.css';
import { faMagnifyingGlass, faMoon, faUser } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { faStar, faSun } from "@fortawesome/free-regular-svg-icons";
import Tippy from "@tippyjs/react";
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
import { useState } from "react";




const cx = classNames.bind(styles)
const list = [
    {
        id: '#1',
        img: logo1,
        name: '$SWIF',
        nick_name: '$SWIF',
        number: '-8.24%',
    },
    {
        id: '#2',
        img: logo2,
        name: 'Mog',
        nick_name: 'Mog',
        number: '-14.47%',
    },
    {
        id: '#3',
        img: logo3,
        name: 'POPCAT',
        nick_name: 'POPCAT',
        number: '-3.16%',
    },
    {
        id: '#4',
        img: logo4,
        name: 'BRETT',
        nick_name: 'BRETT',
        number: '-7.53%',
    },
    {
        id: '#5',
        img: logo5,
        name: 'MUMU',
        nick_name: 'MUMU',
        number: '-14.92%',
    },
    {
        id: '#6',
        img: logo6,
        name: 'MEW',
        nick_name: 'MEW',
        number: '1.22%',
    },
    {
        id: '#7',
        img: logo7,
        name: 'BILLY',
        nick_name: 'BILLY',
        number: '-12.06%',
    },
    {
        id: '#8',
        img: logo8,
        name: 'PEPE',
        nick_name: 'PEPE',
        number: '-3.47%',
    },
    {
        id: '#9',
        img: logo9,
        name: 'PENDLE',
        nick_name: 'PENDLE',
        number: '-4.00%',
    },
    {
        id: '#10',
        img: logo10,
        name: 'MANEKI',
        nick_name: 'MANEKI',
        number: '-6.23%',
    },
    {
        id: '#11',
        img: logo11,
        name: '$michi',
        nick_name: '$michi',
        number: '-8.04%',
    },
    {
        id: '#12',
        img: logo12,
        name: 'BANANA',
        nick_name: 'BANANA',
        number: '-5.32%',
    },
    {
        id: '#13',
        img: logo13,
        name: 'POCAT',
        nick_name: 'POCAT',
        number: '41.39%',
    },
    {
        id: '#14',
        img: logo14,
        name: 'RETARDIO',
        nick_name: 'RETARDIO',
        number: '-12.45%',
    },
    {
        id: '#15',
        img: logo15,
        name: 'WOLF',
        nick_name: 'WOLF',
        number: '-17.21%',
    },
]




function Search() {
    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);
    




    return (
        <header className="container d-flex justify-content-between position-relative ">

            <Tippy
                interactive
                visible={visible}
                onClickOutside={hide}
                placement='bottom-start'
                render={(attrs) => (
                    <div className={cx('tip-result')} tabIndex='-1'{...attrs}>

                        <h6 className={cx('tip-title')}>Promote</h6>
                        {list.map((data) => (
                            <div className={cx('inform')}>
                                <FontAwesomeIcon icon={faStar} />
                                <img src={data.img} alt="" className={cx('logo')} />
                                <div className={cx('name')}>
                                    <div>{data.name}</div>
                                    <div className={cx('nick')}>{data.nick_name}</div>
                                </div>
                            </div>
                        ))}

                    </div>
                )}

            >
                <div className='container d-flex p-0 '>
                    <div className={cx('search')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <input placeholder='Search' onClick={visible ? hide : show} />
                        <button className={cx('tp')} onClick={visible ? hide : show}><span>/</span></button>
                    </div>
                </div>
            </Tippy>
            <div className='d-flex flex-nowrap justify-content-center align-items-center'>
                <div className={cx('avatar')}>
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <div className={cx('mode')}>
                    {/* <div className={cx('icon')}><FontAwesomeIcon icon={faMoon} /></div> */}
                    <div className={cx('icon')}><FontAwesomeIcon icon={faSun} /></div>
                </div>
            </div>

        </header>
    )
}
export default Search 