import React from 'react';

import Icon_cloud from '../../assets/images/components/our_pricing/Icon_cloud.png';


const OurPricing  = () => {
    return (
        <section className="our_pricing">
            <div className="our_pricing__main">
                <div className="our_pricing__main_info">
                    <h5 className="caption_1">our pricing</h5>
                    <p className="heading_2 our_pricing__main_info_title">
                        Affordable VR Services for Everyone
                    </p>
                    <p className="body_1 our_pricing__main_info_text">
                        At VRNas, we believe that everyone should have
                        access to the benefits of VR. That's why we offer
                        a range of pricing options to meet the needs of
                        any budget.
                    </p>
                </div>
                <div className="our_pricing__table">
                    <div className="our_pricing__table_main">
                        <div className="our_pricing__table_info">
                            <div>
                                <img src={Icon_cloud} alt="Icon"/>
                            </div>
                            <div>
                                <h6 className="heading_9">
                                    Customizable Packages
                                </h6>
                                <p className="body_3">
                                    We understand that each project is unique, so we
                                    offer customizable packages to ensure that you get
                                    the services you need at a price that works for you.
                                    Our team will work with you to create a package that
                                    meets your specific goals and budget.
                                </p>
                            </div>
                        </div>
                        <div className="our_pricing__table_info">
                            <div>
                                <img src={Icon_cloud} alt="Icon"/>
                            </div>
                            <div>
                                <h6 className="heading_9">
                                    Flexible Payment Options
                                </h6>
                                <p className="body_3">
                                    We offer flexible payment options to make it easy for
                                    you to get started with our services. We accept various
                                    payment methods, including credit cards, bank transfers,
                                    and PayPal, and we can also work with you to create a
                                    payment plan that suits your needs.
                                </p>
                            </div>
                        </div>
                        <div className="our_pricing__table_info">
                            <div>
                                <img src={Icon_cloud} alt="Icon"/>
                            </div>
                            <div>
                                <h6 className="heading_9">
                                    Satisfaction Guarantee
                                </h6>
                                <p className="body_3">
                                    We stand behind our services and are committed to ensuring
                                    that you are completely satisfied with the final product.
                                    If for any reason you are not happy with our services, we
                                    will work with you to make it right or provide a full refund.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="our_pricing__table_line"></div>
                    <div className="our_pricing__offer">
                        <p className="caption_2 our_pricing__offer_title">Start from</p>
                        <p className="our_pricing__offer_price">$99</p>
                        <button className="our_pricing__offer_button">get started</button>
                        <p className="body_4 our_pricing__offer_details">
                            30 Days Moneyback Guarantee
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default OurPricing;