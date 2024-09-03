/* eslint-disable jsx-a11y/iframe-has-title */
import classNames from "classnames/bind";
import styles from './Body1.module.scss'
import logo from '~/Icons/image/banner-fgqeK_d.webp'
import logo1 from '~/Icons/image/faptax.webp'
import logo2 from '~/Icons/image/solana.svg'
import logo3 from '~/Icons/image/coingecko.svg'
import logo4 from '~/Icons/image/dexscreener.webp'
import logo5 from '~/Icons/image/dextools.webp'
import logo6 from '~/Icons/image/tải xuống (7).png'
import logo7 from '~/Icons/image/tải xuống (1).png'
import { menu1 } from "~/components/Layout/DefaultLayout/Body/Menu1";
import { autoScroll1 } from "./Slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClone, faComment, faFlag, faHeart, faPaperPlane, faStar } from "@fortawesome/free-regular-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { faChevronRight, faCircleInfo, faGlobe, faPlay, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { Popover, OverlayTrigger } from "react-bootstrap";
import { useState } from "react";
import { Collapse } from "reactstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle'
import { Autoplay } from 'swiper/modules'



const cx = classNames.bind(styles)
const style = {
    height: '134px',
    width: "444px"
}
const style1 = {
    backgroundColor: '#4338ca',
    color: 'white'
}
const style2 = {
    width: '444px',
}
const style3 = {
    backgroundColor: '#f3f4f6'
}
const style4 = {
    width: '204px',
    backgroundColor: '#f3f4f6'
}
const style5 = {
    width: '855px',
}
const style6 = {
    maxHeight: '500px',
    width: "460px",
    overflowY: "scroll",
    overflowX: 'hidden'

}
const popoverTop = (
    <Popover id="popover-positioned-top" title="Popover top" className={cx('pop')}>
        <p className="m-0">Regular member can vote once every 24 hours.</p>
        <p className="m-0">Premium member are allowed one vote every 6 hours</p>
    </Popover>
);

function Body1() {

    const [isOpen, setIsOpen] = useState({})
    const [spinState, setSpinState] = useState({})



    const handleClick = (id) => {
        setIsOpen(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
        setSpinState(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));


    }
    const getClassName = (id) => cx({
        spin: spinState[id],
        respin: !spinState[id],
    })
    return (
        <div className="container d-grid gap-4  ">
            <div className={cx('menu1')}>
                {menu1}
            </div>
            <div className={cx('brand')}>
                <img alt="" src={logo} className={cx('logo')} />
            </div>
            <div className="row">
                <div className="d-flex flex-column col-8 ">
                    <div className="col-12 d-flex justify-content-between">
                        <div className=" d-flex  align-items-center">
                            <div>
                                <img src={logo1} alt="" className={cx('icon')} />
                            </div>
                            <div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <h4 className="mb-0 me-1"><b>FAPTAX</b></h4>
                                    <FontAwesomeIcon icon={faStar} className="me-1" />
                                    <span>82</span>
                                </div>
                                <div className="d-flex align-items-center text-start">
                                    <h6 className="me-1 mb-0">FAPTAX</h6>
                                    <img src={logo2} alt="" className={cx('logan')} />
                                    <span className="ms-1">#335</span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <div>
                                <div className=" d-flex justify-content-end align-items-center">
                                    <span className={cx('num')}>-1.11%</span>
                                    <h4 className="mb-0 ms-3"><b>$0.005983</b></h4>
                                </div>
                                <div className="text-end">
                                    <span  >Vol <b>$171.585</b></span>
                                    <span className="ms-3">MC <b>$1,77 M</b></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 d-flex  justify-content-between mt-4">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className={cx('link')}>
                                <img src={logo2} alt="" className={cx('logan')} />
                                <span className="ms-2 me-2">BDcid...cTwX2</span>
                                <span className={cx('co')}><FontAwesomeIcon icon={faClone} className={cx('copy')} /></span>
                            </div>
                            <div className={cx('sol')}>
                                <img src={logo2} alt="" className={cx('image')} />
                                <span className="ms-2">solscan.io</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <div className="me-2">
                                <button className={cx('ton')}><FontAwesomeIcon icon={faFlag} className={cx('contact')} /></button>
                            </div>
                            <div className="ms-2">
                                <button className={cx('ton')}><FontAwesomeIcon icon={faShareNodes} className={cx('contact')} /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-between mt-4">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className={cx('box')}>
                                <button className={cx('but1')}><FontAwesomeIcon icon={faGlobe} className={cx('sup')} /></button>
                            </div>
                            <div className={cx('box')}>
                                <button className={cx('but2')}><FontAwesomeIcon icon={faXTwitter} className={cx('sup')} /></button>
                            </div>
                            <div className={cx('box')}>
                                <button className={cx('but3')}><FontAwesomeIcon icon={faPaperPlane} className={cx('sup')} /></button>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className={cx('box1')}>
                                <img src={logo3} alt="" className={cx('img')} />
                            </div>
                            <div className={cx('box1')}>
                                <img src={logo4} alt="" className={cx('img')} />
                            </div>
                            <div className={cx('box1')}>
                                <img src={logo5} alt="" className={cx('img')} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" row col-3 border rounded ms-2 p-2" style={style}>
                    <div className="col-6 d-flex flex-column align-items-center ">
                        <h4><b>212</b></h4>
                        <span>Votes</span>
                    </div>
                    <div className="col-6 d-flex flex-column align-items-center">
                        <h4><b>16</b></h4>
                        <div className="d-flex align-items-center justify-content-center">
                            <span>
                                <OverlayTrigger trigger='hover' placement="top" overlay={popoverTop}>
                                    <img src={logo6} alt="" className={cx('i')} />
                                </OverlayTrigger>
                                24h
                            </span>
                        </div>
                    </div>
                    <div className="col-12 d-flex align-items-center justify-content-center rounded" style={style1}>
                        <p className="m-0">
                            <img src={logo7} alt="" className={cx('im')} />
                            <b className="ms-3">Vote for FAPTAX</b>
                        </p>
                    </div>
                </div>
            </div>
            <Row>
                <Col sm={8}>
                    <div>
                        <div>
                            <iframe src="https://dexscreener.com/solana/BCp7fbnu39DkTzPazSrzsbumx1V6YcuazD9RqUtbBgUA?embed=1&theme=dark&trades=0&info=0" className={cx('chart')} />
                        </div>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className=" border rounded ms-2 p-2" style={style2}>
                        <div className="d-flex">
                            <div className=" d-flex flex-column align-items-center rounded me-1 mb-1 p-0 " style={style4}>
                                <h5>$1.98 M</h5>
                                <span>Market Cap</span>
                            </div>
                            <div className=" d-flex flex-column align-items-center rounded ms-1 mb-1 p-0" style={style4}>
                                <h5>$1.98 M</h5>
                                <span>FDV</span>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className=" d-flex flex-column align-items-center rounded me-1 mb-1 mt-1 p-0" style={style4}>
                                <h5>1.84%</h5>
                                <span>1h Change</span>
                            </div>
                            <div className=" d-flex flex-column align-items-center rounded ms-1 mb-1 mt-1 p-0" style={style4}>
                                <h5>1.29%</h5>
                                <span>6h Change</span>
                            </div>
                        </div>
                        <div className="col-12 flex-column d-flex align-items-center rounded mt-1 p-0" style={style3}>
                            <h5>-7.55%</h5>
                            <span>24h Change</span>
                        </div>
                        <div className="col-12 d-flex justify-content-between align-items-center p-0">
                            <div>
                                <span>Total Supply</span>
                            </div>
                            <div>
                                <h5><b>299.99 M</b></h5>
                            </div>
                        </div>
                        <div className={cx('slice')}></div>
                        <div className="col-12 text-start align-items-center p-0 ">
                            <span className={cx('te')}>Circ. Supply 100.00%</span>
                            <h5 className={cx('te')}>299.99 M</h5>
                        </div>
                        <hr />
                        <div className="col-12 d-flex justify-content-between align-items-center p-0">
                            <div><span>24h Volume</span></div>
                            <div><h5><b>$96.361</b></h5></div>
                        </div>
                        <hr />
                        <div className="col-12 d-flex justify-content-between align-items-center p-0">
                            <div><span>Volume / MC</span></div>
                            <div><h5><b>0.05</b></h5></div>
                        </div>
                        <hr />
                        <div className="col-12 d-flex justify-content-between align-items-center p-0">
                            <div><span>Total Liquidity</span></div>
                            <div><h5><b>$402,839</b></h5></div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={8}>
                    <div className=" d-flex flex-column" style={style5}>
                        <div className="text-start">
                            <h5>Description</h5>
                            <p>FAPTAX - Pay tax on each fap. Stop fapping! The only tax you pay.</p>
                            <h5>FAPTAX Live Updates</h5>
                            <p>Today's live data for FAPTAX (FAPTAX) on the Solana blockchain is as follows:</p>
                            <p>The current price is approximately $0.007071 USD. It has a 24-hour trading volume of $61,441.51 USD. The current market cap is $2,121,236.868 USD. The current fully diluted valuation is $2,121,236.868 USD. The total supply is 299,991,071.763 FAPTAX tokens. FAPTAX price has increased by 1.62% in the last hour. FAPTAX price has decreased by 2.09% in the last 6 hours. FAPTAX price has increased by 12.02% in the last 24 hours. The volume to market cap ratio is 0.029.</p>
                            <p>Currently ranked #312 on CoinMun (based on total community votes), FAPTAX has accumulated a total of 212 votes and received 0 votes in the last 24 hours.</p>
                            <p>FAPTAX is listed on CoinGecko but not listed yet on CoinMarketCap.</p>
                            <p>Find more information about FAPTAX (FAPTAX) by checking the official website, socials, and other relevant links provided on this page.</p>
                            <h5>Categories</h5>
                            <div className="d-flex align-items-center">
                                <p className={cx('text')}>Solana Ecosystem</p>
                                <p className={cx('text')}>Memes</p>
                            </div>
                            <h5>FAPTAX Live Price & FAQs</h5>
                            <div className={cx('collap')}>
                                <FontAwesomeIcon icon={faChevronRight} className={getClassName(1)} onClick={() => handleClick(1)} />
                                <p className={cx('text1')} onClick={() => handleClick(1)}><b>What is the current price of 1 FAPTAX token?</b></p>
                                <Collapse isOpen={isOpen[1]}>
                                    <p>The current price of 1 FAPTAX token is $0.006479 USD.</p>
                                </Collapse>
                            </div>
                            <div className={cx('collap')}>
                                <FontAwesomeIcon icon={faChevronRight} className={getClassName(2)} onClick={() => handleClick(2)} />
                                <p className={cx('text1')} onClick={() => handleClick(2)}><b>How much FAPTAX tokens can I purchase with $100 USD?</b></p>
                                <Collapse isOpen={isOpen[2]}>
                                    <p>You can purchase approximately 15,434.48 FAPTAX tokens with $100 USD.</p>
                                </Collapse>
                            </div>
                            <div className={cx('collap')}>
                                <FontAwesomeIcon icon={faChevronRight} className={getClassName(3)} onClick={() => handleClick(3)} />
                                <p className={cx('text1')} onClick={() => handleClick(3)}><b>What is the market cap of FAPTAX coin?</b></p>
                                <Collapse isOpen={isOpen[3]}>
                                    <p>The market cap of FAPTAX coin is $1.94 M USD.</p>
                                </Collapse>
                            </div>
                            <div className={cx('collap')}>
                                <FontAwesomeIcon icon={faChevronRight} className={getClassName(4)} onClick={() => handleClick(4)} />
                                <p className={cx('text1')} onClick={() => handleClick(4)}><b>What is the contract address for FAPTAX (FAPTAX) on Solana?</b></p>
                                <Collapse isOpen={isOpen[4]}>
                                    <p>The contract address for FAPTAX (FAPTAX) on Solana is BDciduUgepb9DehoJ1CDK1gqNkUUKusQP7PwHr9cTwX2.</p>
                                </Collapse>
                            </div>
                            <div className={cx('collap')}>
                                <FontAwesomeIcon icon={faChevronRight} className={getClassName(5)} onClick={() => handleClick(5)} />
                                <p className={cx('text1')} onClick={() => handleClick(5)}><b>What is the liquidity of FAPTAX?</b></p>
                                <Collapse isOpen={isOpen[5]}>
                                    <p>The liquidity of FAPTAX is $405.8 K USD.</p>
                                </Collapse>
                            </div>
                            <dic className={cx('collap')}>
                                <FontAwesomeIcon icon={faChevronRight} className={getClassName(6)} onClick={() => handleClick(6)} />
                                <p className={cx('text1')} onClick={() => handleClick(6)}><b>How do I buy FAPTAX tokens?</b></p>
                                <Collapse isOpen={isOpen[6]}>
                                    <p>You can buy FAPTAX tokens on a decentralized exchange (DEX) such as Raydium or Orca. Use the contract address for FAPTAX token on Solana: BDciduUgepb9DehoJ1CDK1gqNkUUKusQP7PwHr9cTwX2.</p>
                                </Collapse>
                            </dic>
                            <p className={cx('note')}>Notice: If you encounter any information on this page that appears to be incorrect or outdated, we encourage you to contact our support team or use the flag option on this page to report it.</p>
                        </div>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className=" border rounded p-3" style={style6}>
                        <div className="col-12 d-flex justify-content-between mb-4">
                            <div><h5><b>Posts from @FaptaxSOL</b></h5></div>
                            <div className={cx('follow')}><span>Follow</span></div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex">
                                <img src={logo1} alt="" className={cx('ava')} />
                                <div className={cx('content')}>
                                    <div className="  d-flex justify-content-between">
                                        <div>
                                            <p className="m-0"><b>Faptax</b> @FaptaxSOL</p>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faXTwitter} className={cx('acc')} />
                                        </div>
                                    </div>
                                    <span>You thought $FAPTAX is a joke ?</span>
                                    <img src="https://pbs.twimg.com/ext_tw_video_thumb/1823781404905283584/pu/img/KYc6rFekMcOIZ1Rv.jpg" alt="" className={cx('video')} />
                                    <div className="d-flex justify-content-between mt-2">
                                        <div>
                                            <FontAwesomeIcon icon={faComment} className="me-2" />
                                            <span>25</span>
                                            <FontAwesomeIcon icon={faHeart} className="ms-2 me-2" />
                                            <span>138</span>
                                        </div>
                                        <div className={cx('info')}>
                                            <FontAwesomeIcon icon={faCircleInfo} />
                                        </div>
                                    </div>
                                    <div className={cx('pl')}><FontAwesomeIcon icon={faPlay} className={cx('play')} /></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex">
                                <img src={logo1} alt="" className={cx('ava')} />
                                <div className={cx('content')}>
                                    <div className="  d-flex justify-content-between">
                                        <div>
                                            <p className="m-0"><b>Faptax</b> @FaptaxSOL</p>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faXTwitter} className={cx('acc')} />
                                        </div>
                                    </div>
                                    <span>You thought $FAPTAX is a joke ?</span>
                                    <img src="https://pbs.twimg.com/ext_tw_video_thumb/1823781404905283584/pu/img/KYc6rFekMcOIZ1Rv.jpg" alt="" className={cx('video')} />
                                    <div className="d-flex justify-content-between mt-2">
                                        <div>
                                            <FontAwesomeIcon icon={faComment} className="me-2" />
                                            <span>25</span>
                                            <FontAwesomeIcon icon={faHeart} className="ms-2 me-2" />
                                            <span>138</span>
                                        </div>
                                        <div className={cx('info')}>
                                            <FontAwesomeIcon icon={faCircleInfo} />
                                        </div>
                                    </div>
                                    <div className={cx('pl')}><FontAwesomeIcon icon={faPlay} className={cx('play')} /></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex">
                                <img src={logo1} alt="" className={cx('ava')} />
                                <div className={cx('content')}>
                                    <div className="  d-flex justify-content-between">
                                        <div>
                                            <p className="m-0"><b>Faptax</b> @FaptaxSOL</p>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faXTwitter} className={cx('acc')} />
                                        </div>
                                    </div>
                                    <span>You thought $FAPTAX is a joke ?</span>
                                    <img src="https://pbs.twimg.com/ext_tw_video_thumb/1823781404905283584/pu/img/KYc6rFekMcOIZ1Rv.jpg" alt="" className={cx('video')} />
                                    <div className="d-flex justify-content-between mt-2">
                                        <div>
                                            <FontAwesomeIcon icon={faComment} className="me-2" />
                                            <span>25</span>
                                            <FontAwesomeIcon icon={faHeart} className="ms-2 me-2" />
                                            <span>138</span>
                                        </div>
                                        <div className={cx('info')}>
                                            <FontAwesomeIcon icon={faCircleInfo} />
                                        </div>
                                    </div>
                                    <div className={cx('pl')}><FontAwesomeIcon icon={faPlay} className={cx('play')} /></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex">
                                <img src={logo1} alt="" className={cx('ava')} />
                                <div className={cx('content')}>
                                    <div className="  d-flex justify-content-between">
                                        <div>
                                            <p className="m-0"><b>Faptax</b> @FaptaxSOL</p>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faXTwitter} className={cx('acc')} />
                                        </div>
                                    </div>
                                    <span>You thought $FAPTAX is a joke ?</span>
                                    <img src="https://pbs.twimg.com/ext_tw_video_thumb/1823781404905283584/pu/img/KYc6rFekMcOIZ1Rv.jpg" alt="" className={cx('video')} />
                                    <div className="d-flex justify-content-between mt-2">
                                        <div>
                                            <FontAwesomeIcon icon={faComment} className="me-2" />
                                            <span>25</span>
                                            <FontAwesomeIcon icon={faHeart} className="ms-2 me-2" />
                                            <span>138</span>
                                        </div>
                                        <div className={cx('info')}>
                                            <FontAwesomeIcon icon={faCircleInfo} />
                                        </div>
                                    </div>
                                    <div className={cx('pl')}><FontAwesomeIcon icon={faPlay} className={cx('play')} /></div>
                                </div>
                            </div>
                        </div>


                    </div>
                </Col>
            </Row>
            <h5 className="text-start"><b>Promoted Coins</b></h5>
            <Swiper
                className={cx('swi')}
                loop={true}
                modules={[Autoplay]}
                slidesPerView={5}
                autoplay={{
                    delay: 4000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false
                }}
            >
                {autoScroll1}
            </Swiper>
            <hr />
        </div >
    );

}

export default Body1;






