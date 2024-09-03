import classNames from "classnames/bind";
import styles from './Footer.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import React from 'react';
import { useState } from "react";
import { Popover, OverlayTrigger } from "react-bootstrap";






const cx = classNames.bind(styles)
const list = [
    {
        name: 'Terms of Service'
    },
    {
        name: 'Privacy Policy'
    },
    {
        name: 'Disclaimer'
    }
]
function Footer() {

    const [isPopoverOpen, setIsPopoverOpen] = useState(false)
    const [spin, setSpin] = useState(false)
    const [respin, setRespin] = useState(false)
    const handleClick = () => {
        if (spin === false) {
            setSpin(true)
            setRespin(false)
            setIsPopoverOpen(true)
        } else {
            setSpin(false)
            setRespin(true)
            setIsPopoverOpen(false)
        }
    }
    const className = cx({
        spin: spin,
        respin: respin
    })
    const popoverTop = (
        <Popover id="popover-positioned-top" title="Popover top" className={cx('pop')}>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Disclaimer</p>
        </Popover>
    );

    return (
        <div className="container">
            <div className={cx('inform')}>
                <div className={cx('creator')}>
                    <p className="mb-0">© 2024 CoinMun</p>
                </div>
                <div className={cx('support')}>
                    <p className="ms-3 mb-0">Advertise</p>
                    <p className="ms-3 mb-0">Listing</p>
                    <p className="ms-3 mb-0">Support</p>
                    <p className="ms-3 me-3 mb-0">Legal</p>
                    <OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>
                        <button className={cx('nut')}>< FontAwesomeIcon icon={faChevronDown} className={className} onClick={handleClick} /></button>
                    </OverlayTrigger>
                </div>
                <div className={cx('contact')}>
                    <FontAwesomeIcon icon={faPaperPlane} className="ms-4" />
                    <FontAwesomeIcon icon={faXTwitter} className="ms-4" />
                </div>
            </div>
        </div>
    );
}


export default Footer;


