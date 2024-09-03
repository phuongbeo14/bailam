import classNames from "classnames/bind";
import styles from './Sidebar.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCoins, faList, faPlus, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane, faStar } from "@fortawesome/free-regular-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { Collapse } from "reactstrap";




const cx = classNames.bind(styles)



function Sidebar() {
    const [spin, setSpin] = useState(false)
    const [isOpen, setIsOpen] = useState(false)



    const handleClick = () => {
        setIsOpen(!isOpen)
        if (spin === false) {
            setSpin(true)

        } else {
            setSpin(false)

        }
    }
    const className = cx({
        spin: spin,

    })
    return (
        <div className={cx('logo')}>
            <div className={cx('top')}>
                <img src="https://coinmun.com/logo/light-logo.svg" alt="" className={cx('icon')} />
                <h5 className={cx('text')}>CoinMun</h5>
            </div>
            <div className={cx('object')}>
                <div className={cx('coin')}>
                    <FontAwesomeIcon icon={faCoins} className={cx('obj')} />
                    <div className={cx('collap')}>
                        <p className={cx('text')}>Coins</p>
                        <FontAwesomeIcon icon={faChevronRight} className={className} onClick={handleClick} />
                        <Collapse isOpen={isOpen}>
                            <p className="text-start ms-5 ps-1">Top Today</p>
                            <p className="text-start ms-5 ps-1">Top All Time</p>
                            <p className="text-start ms-5 ps-1">Presales</p>
                            <p className="text-start ms-5 ps-1">New</p>
                            <p className="text-start ms-5 ps-1">Trending</p>
                            <p className="text-start ms-5 ps-1">Gainers</p>
                            <p className="text-start ms-5 ps-1">Losers</p>
                        </Collapse>
                    </div>
                </div>
                <div className={cx('watchlist')} >
                    <FontAwesomeIcon icon={faStar} className={cx('obj')} />
                    <p className={cx('text')}>Watchlist</p>
                </div>
                <div className={cx('categories')}>
                    <FontAwesomeIcon icon={faList} className={cx('obj')} />
                    <p className={cx('text')}>Categories</p>
                </div>
                <div className={cx('add')}>
                    <FontAwesomeIcon icon={faPlus} className={cx('obj')} />
                    <p className={cx('text')}>Add Coin</p>
                </div>
                <div className={cx('advertise')}>
                    <FontAwesomeIcon icon={faWandMagicSparkles} className={cx('obj')} />
                    <p className={cx('text')}>Advertise</p>
                </div>
                <hr />
                <div className={cx('webx')}>
                    <FontAwesomeIcon icon={faXTwitter} className={cx('obj')} />
                    <p className={cx('text')}>Follow us on X</p>
                </div>
                <div className={cx('webtele')}>
                    <FontAwesomeIcon icon={faPaperPlane} className={cx('obj')} />
                    <p className={cx('text')}>Join telegran</p>
                </div>
            </div>

        </div>
    );
}

export default Sidebar;