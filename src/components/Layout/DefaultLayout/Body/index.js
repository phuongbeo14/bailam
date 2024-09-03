import classNames from "classnames/bind";
import styles from './Body.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { menu1 } from "./Menu1";
import { promote } from "./PromoteCoin";
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { menu2 } from "./Menu2";
import { topCoin } from "./TopCoin";
import logo from '~/Icons/image/banner-fgqeK_d.webp'
import Foot from "./Foot";


const cx = classNames.bind(styles)




function Body() {
    return (
        <div className="container  ">
            <div className={cx('menu1')}>
                {menu1}
            </div>
            <div className={cx('brand')}>
                <img alt="" src={logo} className={cx('logo')} />
            </div>
            <div className={cx('promote')}>
                <h4><b>Promoted Coins</b></h4>

                <Table>
                    <thead>
                        <tr>
                            <th><FontAwesomeIcon icon={faStar} /></th>
                            <th>#</th>
                            <th className="d-flex flex-start">Asset</th>
                            <th className="text-end">Price</th>
                            <th className="text-end">%1h</th>
                            <th className="text-end">%6h</th>
                            <th className="text-end">%24h</th>
                            <th className="text-end">Market Cap</th>
                            <th className="text-end">FDV</th>
                            <th className="text-end">24h Volume</th>
                            <th className="text-end">Votes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {promote}
                    </tbody>
                </Table>

            </div>
            <div className={cx('topcoin')}>
                <h4><b>Top Coins Today</b></h4>
                <p className="text-start">Discover Leading Cryptocurrencies Voted by the Community in the Last 24 Hours.</p>
                <div className={cx('menu2')}>{menu2}</div>
                <Table>
                    <thead>
                        <tr>
                            <th><FontAwesomeIcon icon={faStar} /></th>
                            <th>#</th>
                            <th className="d-flex flex-start">Asset</th>
                            <th className="text-end">Price</th>
                            <th className="text-end">%1h</th>
                            <th className="text-end">%6h</th>
                            <th className="text-end">%24h</th>
                            <th className="text-end">Market Cap</th>
                            <th className="text-end">FDV</th>
                            <th className="text-end">24h Volume</th>
                            <th className="text-end">Votes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {topCoin}
                    </tbody>
                </Table>
            </div>
            <div className={cx('pages')}>
                <Foot />
            </div>
            <div className="d-flex flex-start"><p>Find section info here. <a href="đá">Read more</a> </p></div>
            <hr />
        </div >

    );
}

export default Body;