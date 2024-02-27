import Expand_more from "../../assets/images/components/choose_us/Expand_more.svg";
import Man3 from "../../assets/images/components/choose_us/Man3.png";
import Video4 from "../../assets/images/components/choose_us/Video4.png";


const ChooseUs  = () => {
    return (
        <section className='choose_us'>
            <div className='choose_us__main'>
                <div className='choose_us__main_one'>
                    <div className='choose_us__main_info'>
                        <h5 className='caption_1'>WHY CHOOSE US</h5>
                        <p className='heading_2'>Why Choose Us for Your VR Needs</p>
                    </div>
                    <div className='choose_us__details'>
                        <div>
                            <details>
                                <summary className='heading_8'>
                                    Passionate and Experienced Team
                                    <img src={Expand_more} alt=""/>
                                </summary>
                                <p className='body_3'>
                                    We are proud of our team of VR experts who are passionate
                                    about VR and dedicated to delivering the highest quality
                                    work. Our team consists of experienced VR developers,
                                    designers, and technicians who have a proven track record
                                    of creating immersive and engaging VR experiences.</p>
                            </details>
                        </div>
                        <div>
                            <div>
                                <details>
                                    <summary className='heading_8'>
                                        Customized Solutions
                                        <img src={Expand_more} alt=""/>
                                    </summary>
                                    <p className='body_3'>
                                        We are proud of our team of VR experts who are passionate
                                        about VR and dedicated to delivering the highest quality
                                        work. Our team consists of experienced VR developers,
                                        designers, and technicians who have a proven track record
                                        of creating immersive and engaging VR experiences.</p>
                                </details>
                            </div>
                            <div>
                                <details>
                                    <summary className='heading_8'>
                                        Exceptional Customer Service
                                        <img src={Expand_more} alt=""/>
                                    </summary>
                                    <p className='body_3'>
                                        We are proud of our team of VR experts who are passionate
                                        about VR and dedicated to delivering the highest quality
                                        work. Our team consists of experienced VR developers,
                                        designers, and technicians who have a proven track record
                                        of creating immersive and engaging VR experiences.</p>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='choose_us__main_two'>
                    <div className='choose_us__bg'>

                    </div>
                    <div>
                        <img className='choose_us__img' src={Man3} alt="Man3"/>
                        <img className='choose_us__video' src={Video4} alt="Video4"/>
                    </div>
                    <div className='choose_us__bg_gradient'></div>
                </div>
            </div>
        </section>

    )
}

export default ChooseUs;