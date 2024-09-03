import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './Foot.module.scss'






const cx = classNames.bind(styles)




function Foot() {
    
    return (
        <div className={cx('box')}>
            <div className='d-flex align-items-center gap-4 '>
                {/* <FontAwesomeIcon icon={faChevronLeft} /> */}
                <p className={cx('number', 'active')}>1</p>
                <p className={cx('number')}>2</p>
                <p className={cx('number')}>3</p>
                <p className={cx('number')}>4</p>
                <p className={cx('number')}>...</p>
                <p className={cx('number')}>40</p>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
            <div className={cx('total-user')}>
                <p className="d-flex align-items-center justify-content-center m-0">Showing 1 to 20 of 792</p>
            </div>
        </div>
    );
}

export default Foot;