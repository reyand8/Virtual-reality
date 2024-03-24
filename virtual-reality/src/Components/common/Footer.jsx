
import '../../assets/styles/index.css';
import Footer_banner_message from '../../assets/images/components/footer/Footer_banner_message.svg';
import Footer_banner_send from '../../assets/images/components/footer/Footer_banner_send.svg';
import Main_Logo from '../../assets/images/components/footer/Main_Logo.svg';
import Logo_facebook from '../../assets/images/components/footer/Logo_facebook.svg';
import Logo_instagram from '../../assets/images/components/footer/Logo_instagram.svg';
import Logo_github from '../../assets/images/components/footer/Logo_github.svg';
import Logo_twitter from '../../assets/images/components/footer/Logo_twitter.svg';

import Icon_calling from '../../assets/images/components/footer/Icon_calling.svg';
import Icon_location from '../../assets/images/components/footer/Icon_location.svg';
import Icon_message from '../../assets/images/components/footer/Icon_message.svg';


const Footer  = () => {
    return (
        <section className="footer">
            <div className="footer__banner">
                <div className="footer__subscribe_banner">
                    <p className="heading_3">Subscribe to our newsletter for latest updates</p>
                </div>
                <div className="footer__subscribe_input">
                    <div className="footer__subscribe_input_main">
                        <img src={Footer_banner_message} alt="Footer_banner_message"/>
                        <input type="text" className="" placeholder="Enter your email"/>
                    </div>
                    <button className="footer__subscribe_button" type="submit">
                        <img src={Footer_banner_send} alt=""/>
                    </button>
                </div>
            </div>

            <div className="footer__main">
                <div className="footer__main_info">
                    <div className="footer__main_info__icons">
                        <div>
                            <img src={Main_Logo} alt="Main_Logo"/>
                        </div>
                        <div className="footer__main_info__icons_group">
                            <div>
                                <img src={Logo_twitter} alt="Logo_twitter"/>
                            </div>
                            <div>
                                <img src={Logo_facebook} alt="Logo_facebook"/>
                            </div>
                            <div>
                                <img src={Logo_instagram} alt="Logo_instagram"/>
                            </div>
                            <div>
                                <img src={Logo_github} alt="Logo_github"/>
                            </div>
                        </div>
                    </div>
                    <div className="footer__main_info footer__main_info__two_links">
                        <div className="footer__main_info__links">
                            <p className="heading_10 footer__main_info__links_title">Quicklinks</p>
                            <a href="/virtual-reality/public">Home</a>
                            <a href="/virtual-reality/public">Pricing Plan</a>
                            <a href="/virtual-reality/public">Service</a>
                            <a href="/virtual-reality/public">Blog</a>
                            <a href="/virtual-reality/public">Our Team</a>
                        </div>
                        <div className="footer__main_info__links">
                            <p className="heading_10 footer__main_info__links_title">Support</p>
                            <a href="/virtual-reality/public">About us</a>
                            <a href="/virtual-reality/public">Contact us</a>
                            <a href="/virtual-reality/public">FAQ</a>
                            <a href="/virtual-reality/public">Tems & Conditions</a>
                            <a href="/virtual-reality/public">Privacy Policy</a>
                        </div>
                    </div>
                    <div className="footer__main_info__help footer__main_info__links">
                        <p className=" heading_10 footer__main_info__links_title">
                            Need Help?
                        </p>
                        <a href="/virtual-reality/public">
                            <img src={Icon_location} alt=""/>
                            Tanjung Sari Street no.48, Pontianak City
                        </a>
                        <a href="/virtual-reality/public">
                            <img src={Icon_message} alt=""/>
                            Support@VRNas.com
                        </a>
                        <a href="/virtual-reality/public">
                            <img src={Icon_calling} alt=""/>
                            +123 456 7890
                        </a>
                    </div>
                </div>

                <div className="footer__copyright">
                    <p className="body_1">© Copyright 2023, All Rights Reserved</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;