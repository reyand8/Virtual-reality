import '../../assets/styles/index.css';
import Vectors_bg from "../../assets/images/components/home_intro/Vectors_bg.png";
import Ellipse35 from "../../assets/images/components/home_intro/Ellipse 35.svg";
import Ellipse34 from "../../assets/images/components/home_intro/Ellipse 34.svg";
import Ellipse36 from "../../assets/images/components/home_intro/Ellipse 36.svg";
import Element from "../../assets/images/components/home_intro/Element.svg";
import Video from "../../assets/images/components/home_intro/Video.png";
import Man1 from "../../assets/images/components/home_intro/Man1.png";


const HomeIntro  = () => {
    return (
        <section className='home_intro'>
            <div className='home_intro__main'>
                <div className='home_intro__main_one'>
                    <div className='home_intro__main_info'>
                        <div className='home_intro__main_title'>
                            <h2 className='heading_1'>
                                Immerse Yourself in Virtual Reality
                            </h2>
                        </div>
                        <div className='home_intro__main_text'>
                            <p className='body_1'>
                                Experience Unforgettable Events in VR. Bring your events
                                to life like never before with our VR services
                            </p>
                        </div>
                        <div className='home_intro__button'>
                            <button>
                                discover more
                            </button>
                        </div>
                    </div>
                    <img className='home_intro__vectors_bg' src={Vectors_bg} alt="Vectors_bg"/>
                    <div>
                        <div className='home_intro__clients'>
                            <div className='home_intro__clients_img'>
                                <img src={Ellipse35} alt="Ellipse35"/>
                                <img src={Ellipse34} alt="Ellipse34"/>
                                <img src={Ellipse36} alt="Ellipse36"/>
                            </div>
                            <div className='home_intro__clients_text'>
                                <div className='home_intro__clients_text_info'>
                                    <p>32k+</p>
                                    <p>Happy Client</p>
                                </div>
                                <div className='home_intro__clients_text_info_elem'>
                                    <img src={Element} alt="Element"/>
                                </div>
                            </div>
                            <div className='home_intro__clients_video'>
                                <img src={Video} alt="Video"/>
                            </div>
                        </div>
                    </div>
                </div>
                <img className='home_intro__main_two__img' src={Man1} alt="Man1"/>
            </div>
        </section>
    )
}

export default HomeIntro;