import React from 'react';

import '../../assets/styles/index.css';
import Table1 from '../../assets/images/components/home_intro/Table1.svg';
import Table2 from '../../assets/images/components/home_intro/Table2.svg';
import Table3 from '../../assets/images/components/home_intro/Table3.svg';


const TableAboutUs  = () => {
    return (
        <section className="about_us__table">
            <div className="about_us__table__boxes">
                <div className="about_us__table__box">
                    <div>
                        <img src={Table1} alt="Table1"/>
                    </div>
                    <div>
                        <h6 className="heading_7">
                            Expertise
                        </h6>
                    </div>
                    <div>
                        <p className="body_2">
                            Our team consists of experienced VR developers, designers,
                            and technicians who have a passion for VR and a commitment
                            to delivering quality work and give the best service
                        </p>
                    </div>
                </div>
                <div className="about_us__table__box">
                    <div>
                        <img src={Table2} alt="Table2"/>
                    </div>
                    <div>
                        <h6 className="heading_7">
                            Customization
                        </h6>
                    </div>
                    <div>
                        <p className="body_2">
                            Every client is unique, and we believe every VR experience
                            should be too. We'll work with you to create a customized
                            solution that meets your specific needs and goals</p>
                    </div>
                </div>
                <div className="about_us__table__box">
                    <div>
                        <img src={Table3} alt="Table3"/>
                    </div>
                    <div>
                        <h6 className="heading_7">
                            Service
                        </h6>
                    </div>
                    <div>
                        <p className="body_2">
                            We believe in providing exceptional customer service, from
                            initial consultation to final delivery. Our goal is to ensure
                            you're satisfied with every aspect of your VR experience.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TableAboutUs;