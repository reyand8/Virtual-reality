import '../../assets/styles/index.css';
import Man2 from '../../assets/images/components/about_us/Man2.png';
import Light_bg2 from '../../assets/images/components/about_us/Light_bg2.png';
import Clip_video from '../../assets/images/components/about_us/Clip_video.png';
import Check_box from '../../assets/images/components/about_us/Check_box.svg';


const AboutUs  = () => {
    return (
        <section className="about_us">
            <div className="about_us__main">
                <div className="about_us__main__one">
                    <div className="about_us__bg">
                    </div>
                    <div className="about_us__bg_elem">
                        <img className="about_us__img" src={Man2} alt="Man2"/>
                        <img className="about_us__bg_light" src={Light_bg2} alt="Light_bg2"/>
                    </div>
                    <div className="about_us__video">
                        <img src={Clip_video} alt="Clip_video"/>
                    </div>
                </div>
                <div className="about_us__main__two">
                    <div className="about_us__main_info">
                        <h5 className="caption_1">ABOUT US</h5>
                        <p className="heading_2 about_us__main_info_title">
                            Bring your events to life like never before with our VR services.
                        </p>
                        <p className="body_1 about_us__main_info_text">
                            VRNas is a leading provider of VR services for education, entertainment,
                            architecture, and events. Our mission is to bring the power of virtual
                            reality to everyone, allowing them to explore new worlds, learn in new
                            ways, and experience events in a whole new light.
                        </p>
                    </div>
                    <div>
                        <div className="about_us__all_points">
                            <div className="about_us__point">
                                <img src={Check_box} alt="Check_box"/>
                                <p className="body_3">
                                    Cutting-Edge Technology
                                </p>
                            </div>
                            <div className="about_us__point">
                                <img src={Check_box} alt="Check_box"/>
                                <p className="body_3">
                                    Versatile Applications
                                </p>
                            </div>
                            <div className="about_us__point">
                                <img src={Check_box} alt="Check_box"/>
                                <p className="body_3">
                                    Affordable and Accessible
                                </p>
                            </div>
                        </div>
                        <div>
                            <button className="about_us__button">read more</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;