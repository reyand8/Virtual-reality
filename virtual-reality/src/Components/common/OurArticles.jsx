import React from 'react';
import {Carousel} from 'antd';

import '../../assets/styles/index.css';
import Scroll_Item1 from '../../assets/images/components/our_articles/Scroll_Item1.png';
import Scroll_Item2 from '../../assets/images/components/our_articles/Scroll_Item2.png';
import Scroll_Item3 from '../../assets/images/components/our_articles/Scroll_Item3.png';
import Next_icon from '../../assets/images/components/our_articles/Next_icon.svg';
const OurArticles  = () => {

    function CustomArrow(props) {
        const { onClick } = props;
        return (
            <button type="button" className="our_articles__carousel_arrow" onClick={onClick}>
                <img src={Next_icon} alt="Next_icon"/>
            </button>
        );
    }

    const settings =  {
        arrows: true,
        nextArrow: <CustomArrow/>,
    };

    return (
        <section className="our_articles">
            <div className="our_articles__main_one">
               <div className="our_articles__main_info">
                   <h5 className="caption_1">
                       OUR ARTICLES
                   </h5>
                   <p className="heading_2">
                       Stay Up-to-Date with Our VR Insights
                   </p>
               </div>
               <div className="our_articles__main_button">
                   <button>see all</button>
               </div>
           </div>
           <div className="our_articles__main_two">
                <div className="our_articles__main_carousel">
                    <h6 className="heading_6">Popular Article</h6>
                    <Carousel { ...settings } >
                        <div>
                            <div className="our_articles__carousel_content">
                                <div className="our_articles__carousel_content_title">
                                    <p className="caption_2">VR Games</p>
                                </div>
                                <div className="our_articles__carousel_content_text">
                                    <p className="heading_5">
                                        Entertainment Goes Virtual:
                                        The Rise of VR Gaming
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="our_articles__carousel_content">
                                <div className="our_articles__carousel_content_title">
                                    <p className="caption_2">VR Games</p>
                                </div>
                                <div className="our_articles__carousel_content_text">
                                    <p className="heading_5">
                                        Entertainment Goes Virtual:
                                        The Rise of VR Gaming
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="our_articles__carousel_content">
                                <div className="our_articles__carousel_content_title">
                                    <p className="caption_2">VR Games</p>
                                </div>
                                <div className="our_articles__carousel_content_text">
                                    <p className="heading_5">
                                        Entertainment Goes Virtual:
                                        The Rise of VR Gaming
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="our_articles__carousel_content">
                                <div className="our_articles__carousel_content_title">
                                    <p className="caption_2">VR Games</p>
                                </div>
                                <div className="our_articles__carousel_content_text">
                                    <p className="heading_5">
                                        Entertainment Goes Virtual:
                                        The Rise of VR Gaming
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>


               <div className="our_articles__scroll">
                   <div className="our_articles__scroll_main">
                       <h6 className="heading_6 our_articles__scroll_title">
                           Recent Article
                       </h6>
                       <div className="our_articles__scroll_list">
                           <div className="our_articles__scroll_item">
                               <div className="our_articles__scroll_img">
                                   <img src={Scroll_Item1} alt="Scroll_Item1"/>
                               </div>
                               <div className="our_articles__scroll_info">
                                   <p className="caption_2">VR Education</p>
                                   <p className="heading_9">
                                       The Future of Education: How
                                       VR is Revolutionizing the Classroom
                                   </p>
                               </div>
                               <div className="our_articles__scroll_btn">
                                   <button type="button">
                                       <img src={Next_icon} alt="Next_icon"/>
                                   </button>
                               </div>
                           </div>
                           <div className="our_articles__scroll_item">
                               <div className="our_articles__scroll_img">
                                   <img src={Scroll_Item2} alt="Scroll_Item2"/>
                               </div>
                               <div className="our_articles__scroll_info">
                                   <p className="caption_2">VR Architecture</p>
                                   <p className="heading_9">
                                       Bringing Designs to Life:
                                       How VR is Changing Architecture
                                   </p>
                               </div>
                               <div className="our_articles__scroll_btn">
                                   <button type="button">
                                       <img src={Next_icon} alt="Next_icon"/>
                                   </button>
                               </div>
                           </div>

                           <div className="our_articles__scroll_item">
                               <div className="our_articles__scroll_img">
                                   <img src={Scroll_Item3} alt="Scroll_Item3"/>
                               </div>
                               <div className="our_articles__scroll_info">
                                   <p className="caption_2">VR Entertainment </p>
                                   <p className="heading_9">
                                       Making Events Memorable: The Power
                                       of VR for Corporate and Special Occasions
                                   </p>
                               </div>
                               <div className="our_articles__scroll_btn">
                                   <button type="button">
                                       <img src={Next_icon} alt="Next_icon"/>
                                   </button>
                               </div>
                           </div>

                           <div className="our_articles__scroll_item">
                               <div className="our_articles__scroll_img">
                                   <img src={Scroll_Item1} alt="Scroll_Item4"/>
                               </div>
                               <div className="our_articles__scroll_info">
                                   <p className="caption_2">VR Event</p>
                                   <p className="heading_9">
                                       Exploring New Worlds:
                                       The Benefits of VR Travel
                                   </p>
                               </div>
                               <div className="our_articles__scroll_btn">
                                   <button type="button">
                                       <img src={Next_icon} alt="Next_icon"/>
                                   </button>
                               </div>
                           </div>
                           <div className="our_articles__scroll_item">
                               <div className="our_articles__scroll_img">
                                   <img src={Scroll_Item1} alt="Scroll_Item1"/>
                               </div>
                               <div className="our_articles__scroll_info">
                                   <p className="caption_2">VR Education</p>
                                   <p className="heading_9">
                                       The Future of Education: How
                                       VR is Revolutionizing the Classroom
                                   </p>
                               </div>
                               <div className="our_articles__scroll_btn">
                                   <button type="button">
                                       <img src={Next_icon} alt="Next_icon"/>
                                   </button>
                               </div>
                           </div>
                           <div className="our_articles__scroll_item">
                               <div className="our_articles__scroll_img">
                                   <img src={Scroll_Item2} alt="Scroll_Item2"/>
                               </div>
                               <div className="our_articles__scroll_info">
                                   <p className="caption_2">VR Architecture</p>
                                   <p className="heading_9">
                                       Bringing Designs to Life:
                                       How VR is Changing Architecture
                                   </p>
                               </div>
                               <div className="our_articles__scroll_btn">
                                   <button type="button">
                                       <img src={Next_icon} alt="Next_icon"/>
                                   </button>
                               </div>
                           </div>

                           <div className="our_articles__scroll_item">
                               <div className="our_articles__scroll_img">
                                   <img src={Scroll_Item3} alt="Scroll_Item3"/>
                               </div>
                               <div className="our_articles__scroll_info">
                                   <p className="caption_2">VR Entertainment </p>
                                   <p className="heading_9">
                                       Making Events Memorable: The Power
                                       of VR for Corporate and Special Occasions
                                   </p>
                               </div>
                               <div className="our_articles__scroll_btn">
                                   <button type="button">
                                       <img src={Next_icon} alt="Next_icon"/>
                                   </button>
                               </div>
                           </div>

                           <div className="our_articles__scroll_item">
                               <div className="our_articles__scroll_img">
                                   <img src={Scroll_Item1} alt="Scroll_Item4"/>
                               </div>
                               <div className="our_articles__scroll_info">
                                   <p className="caption_2">VR Event</p>
                                   <p className="heading_9">
                                       Exploring New Worlds:
                                       The Benefits of VR Travel
                                   </p>
                               </div>
                               <div className="our_articles__scroll_btn">
                                   <button type="button">
                                       <img src={Next_icon} alt="Next_icon"/>
                                   </button>
                               </div>
                           </div>
                       </div>

                   </div>
               </div>
           </div>

        </section>

    );
};

export default OurArticles;