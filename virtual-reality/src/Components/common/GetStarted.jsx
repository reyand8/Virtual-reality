import React from 'react';

import Video5 from '../../assets/images/components/get_started/Video5.png';
import '../../assets/styles/index.css';


const GetStarted  = () => {
    return (
        <section className="get_started">
            <div className="get_started__main">
                <div>
                    <div className="get_started__main_info">
                        <h5 className="caption_1">HOW TO GET STARTED</h5>
                        <p className="heading_2">
                            Bringing Your Virtual Reality Dreams to Life
                        </p>
                    </div>
                </div>
                <div className="get_started__main_video">
                    <div className="get_started__bg_gradient"></div>
                    <img src={Video5} alt="Video5"/>
                </div>
                <div>
                    <button className="get_started__button">GET STARTED</button>
                </div>
            </div>
        </section>
    );
};

export default GetStarted;
