import '../../assets/styles/index.css';
import Logo4 from '../../assets/images/components/our_partners/Logo4.svg';
import Logo3 from '../../assets/images/components/our_partners/Logo3.svg';
import Logo5 from '../../assets/images/components/our_partners/Logo5.svg';
import Logo2 from '../../assets/images/components/our_partners/Logo2.svg';
import Logo6 from '../../assets/images/components/our_partners/Logo6.svg';
import Logo1 from '../../assets/images/components/our_partners/Logo1.svg';
import Logo7 from '../../assets/images/components/our_partners/Logo7.svg';
import Man_partners from '../../assets/images/components/our_partners/Man_partners.svg';


const OurPartners  = () => {
    return (
        <section className="our_partners">
            <div className="our_partners__main">
                <div className="our_partners__main_info">
                    <h5 className="caption_1">
                        Our Trusted Partners
                    </h5>
                    <p className="heading_2">
                        Discover the Companies We Work With
                    </p>
                </div>
                <div className="our_partners__partners">
                    <div className="our_partners__one">
                        <div className="our_partners__partners_bg">
                            <img src={Logo4} alt="Logo4"/>
                        </div>
                    </div>
                    <div className="our_partners__two">
                        <div className="our_partners__partners_bg">
                            <img src={Logo3} alt="Logo3"/>
                        </div>
                        <div className="our_partners__partners_bg">
                            <img src={Logo5} alt="Logo5"/>
                        </div>
                    </div>
                    <div className="our_partners__three">
                        <div className="our_partners__partners_bg">
                            <img src={Logo2} alt="Logo2"/>
                        </div>
                        <div className="our_partners__partners_bg">
                            <img src={Logo6} alt="Logo6"/>
                        </div>
                    </div>
                    <div className="our_partners__four">
                        <div className="our_partners__partners_bg">
                            <img src={Logo1} alt="Logo1"/>
                        </div>
                        <div className="our_partners__partners_bg">
                            <img src={Logo7} alt="Logo7"/>
                        </div>

                    </div>
                </div>
                <div className="our_partners__cicle">
                    <div className="cicle_partners our_partners__cicle_one">


                        <div className="cicle_partners our_partners__cicle_two">
                            <div className="cicle_partners our_partners__cicle_three">
                                <div className="cicle_partners our_partners__cicle_four">
                                    <div className="our_partners__big_img">
                                        <img src={Man_partners} alt="Man_partners"/>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="our_partners__bg_style"></div>
            </div>

        </section>
    );
};

export default OurPartners;