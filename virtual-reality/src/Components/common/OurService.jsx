import React from 'react';

import '../../assets/styles/index.css';

import Software from '../../assets/images/components/our_service/software.svg';
import Video_console from '../../assets/images/components/our_service/video-console.svg';
import Design from '../../assets/images/components/our_service/design.svg';
import Party from '../../assets/images/components/our_service/party.svg';
import Review from '../../assets/images/components/our_service/review.svg';
import Theatre from '../../assets/images/components/our_service/theatre.svg';


const OurService  = () => {
    return (
        <section className="our_service">
            <div className="our_service__main">
                <div className="our_service__main_info">
                    <h5 className="caption_1">OUR SERVICE</h5>
                    <p className="heading_2">OUR SERVICE</p>
                </div>
                <div className="our_service__main_text">
                    <p className="body_1">
                        We use the latest VR hardware and software to create
                        high-quality VR experiences that are accessible and
                        affordable. Our goal is to provide exceptional customer
                        service and support, and our team is always available
                        to answer any questions and address any concerns you may
                        have.
                    </p>
                </div>
            </div>
            <div className="our_service__table">
                <div className="our_service__table_left">
                    <div className="our_service__table_section our_service__table_left_one">
                        <div className="our_service__table_content">
                            <img src={Software} alt="Software"/>
                            <h6 className="heading_7">VR Development</h6>
                            <p className="body_2">
                                From concept to creation, our team of VR
                                developers will bring your vision to life.
                            </p>
                            <div className="shadow">
                                <button className="our_service__table_btn">LEARN MORE</button>
                            </div>
                        </div>
                    </div>
                    <div className="our_service__table_section our_service__table_left_two">
                        <div className="our_service__table_content">
                            <img src={Video_console} alt="Video_console"/>
                            <h6 className="heading_7">VR Development</h6>
                            <p className="body_2">
                                We offer a wide selection of VR games that
                                are suitable for players of all ages and
                                skill levels.
                            </p>
                            <div className="shadow">
                                <button className="our_service__table_btn">LEARN MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="our_service__table_center">
                    <div className="our_service__table_section our_service__table_center_one">
                        <div className="our_service__table_content">
                            <img src={Design} alt="Design"/>
                            <h6 className="heading_7">VR Design</h6>
                            <p className="body_2">
                                Our talented VR designers will create immersive
                                and engaging environments that will captivate
                                your audience.
                            </p>
                            <div className="shadow">
                                <button className="our_service__table_btn">LEARN MORE</button>
                            </div>
                        </div>
                    </div>
                    <div className="our_service__table_section our_service__center_two">
                        <div className="our_service__table_content">
                            <img src={Party} alt="Party"/>
                            <h6 className="heading_7">VR Events</h6>
                            <p className="body_2">
                                Make your next event unforgettable with
                                our VR event services.
                            </p>
                            <div className="shadow">
                                <button className="our_service__table_btn">LEARN MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="our_service__table_right">
                    <div className="our_service__table_section our_service__table_right_one">
                        <div className="our_service__table_content">
                            <img src={Review} alt="Review"/>
                            <h6 className="heading_7">VR Consulting</h6>
                            <p className="body_2">
                                Our VR consultants will work with you to ensure
                                that your VR experience meets your goals and
                                exceeds your expectations.
                            </p>
                            <div className="shadow">
                                <button className="our_service__table_btn">LEARN MORE</button>
                            </div>
                        </div>
                    </div>
                    <div className="our_service__table_section our_service__right_two">
                        <div className="our_service__table_content">
                            <img src={Theatre} alt="Theatre"/>
                            <h6 className="heading_7">VR Entertainment</h6>
                            <p className="body_2">
                                Create a VR escape room, or offer VR experiences at
                                a theme park, we have the expertise and experience to
                                make it happen.
                            </p>
                            <div className="shadow">
                                <button className="our_service__table_btn">LEARN MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default OurService;