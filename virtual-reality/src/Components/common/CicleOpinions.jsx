import Person1 from "../../assets/images/components/cicle_opinions/Person1.svg";
import Person2 from "../../assets/images/components/cicle_opinions/Person2.svg";
import Person3 from "../../assets/images/components/cicle_opinions/Person3.svg";
import Person4 from "../../assets/images/components/cicle_opinions/Person4.svg";
import Person5 from "../../assets/images/components/cicle_opinions/Person5.svg";
import Person6 from "../../assets/images/components/cicle_opinions/Person6.svg";
import Man4 from "../../assets/images/components/cicle_opinions/Man4.png";

import '../../assets/styles/index.css'


const CicleOpinions  = () => {
    return (
        <section className='cicle_opinions'>
            <div className='cicle_opinions__main'>
                <div className='cicle_opinions__main_info'>
                    <h5 className='caption_1'>
                        TESTIMONIAL
                    </h5>
                    <p className='heading_2'>
                        What Our Clients Are Saying
                    </p>
                </div>
                <div>
                    <div className='cicle_one cicle_opinions__cicle_one'>
                        <div className='person_elem cicle_opinions__person_one'>
                            <div className='cicle_opinions__person'>
                                <img src={Person1} alt="Person1"/>
                            </div>
                            <div className='cicle_opinions__person_main_info'>
                                <div className='cicle_opinions__person_info'>
                                    <p className='body_4 cicle_opinions__person_text'>
                                        The team was professional, responsive, and
                                        a pleasure to work with. We highly recommend
                                        VRNas for any VR needs.
                                    </p>
                                    <div className='cicle_opinions__person_details'>
                                        <p className='cicle_opinions__person_name'>Robert Fox</p>
                                        <p className='cicle_opinions__person_job'> - CEO Anono</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='person_elem cicle_opinions__person_two'>
                            <div className='cicle_opinions__person'>
                                <img src={Person2} alt="Person2"/>
                            </div>
                            <div className='cicle_opinions__person_main_info'>
                                <div className='cicle_opinions__person_info'>
                                    <p className='body_4 cicle_opinions__person_text'>
                                        The team was professional, responsive, and
                                        a pleasure to work with. We highly recommend
                                        VRNas for any VR needs.
                                    </p>
                                    <div className='cicle_opinions__person_details'>
                                        <p className='cicle_opinions__person_name'>Robert Fox</p>
                                        <p className='cicle_opinions__person_job'> - CEO Anono</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='cicle_one cicle_opinions__cicle_two'>
                            <div className='person_elem cicle_opinions__person_three'>
                                <div className='cicle_opinions__person'>
                                    <img src={Person3} alt="Person3"/>
                                </div>
                                <div className='cicle_opinions__person_main_info'>
                                    <div className='cicle_opinions__person_info'>
                                        <p className='body_4 cicle_opinions__person_text'>
                                            The team was professional, responsive, and
                                            a pleasure to work with. We highly recommend
                                            VRNas for any VR needs.
                                        </p>
                                        <div className='cicle_opinions__person_details'>
                                            <p className='cicle_opinions__person_name'>Robert Fox</p>
                                            <p className='cicle_opinions__person_job'> - CEO Anono</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='cicle_one cicle_opinions__cicle_three'>
                                <div className='person_elem cicle_opinions__person_four'>
                                    <div className='cicle_opinions__person'>
                                        <img src={Person4} alt="Person4"/>
                                    </div>
                                    <div className='cicle_opinions__person_main_info'>
                                        <div className='cicle_opinions__person_info'>
                                            <p className='body_4 cicle_opinions__person_text'>
                                                The team was professional, responsive, and
                                                a pleasure to work with. We highly recommend
                                                VRNas for any VR needs.
                                            </p>
                                            <div className='cicle_opinions__person_details'>
                                                <p className='cicle_opinions__person_name'>Robert Fox</p>
                                                <p className='cicle_opinions__person_job'> - CEO Anono</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='cicle_one cicle_opinions__cicle_four'>
                                    <div className='person_elem cicle_opinions__person_five'>
                                        <div className='cicle_opinions__person'>
                                            <img src={Person5} alt="Person5"/>
                                        </div>
                                        <div className='cicle_opinions__person_main_info'>
                                            <div className='cicle_opinions__person_info'>
                                                <p className='body_4 cicle_opinions__person_text'>
                                                    The team was professional, responsive, and
                                                    a pleasure to work with. We highly recommend
                                                    VRNas for any VR needs.
                                                </p>
                                                <div className='cicle_opinions__person_details'>
                                                    <p className='cicle_opinions__person_name'>Robert Fox</p>
                                                    <p className='cicle_opinions__person_job'> - CEO Anono</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='cicle_one cicle_opinions__cicle_five'>
                                        <div className='person_elem cicle_opinions__person_six'>
                                            <div className='cicle_opinions__person'>
                                                <img src={Person6} alt="Person6"/>
                                            </div>
                                            <div className='cicle_opinions__person_main_info'>
                                                <div className='cicle_opinions__person_info'>
                                                    <p className='body_4 cicle_opinions__person_text'>
                                                        The team was professional, responsive, and
                                                        a pleasure to work with. We highly recommend
                                                        VRNas for any VR needs.
                                                    </p>
                                                    <div className='cicle_opinions__person_details'>
                                                        <p className='cicle_opinions__person_name'>Robert Fox</p>
                                                        <p className='cicle_opinions__person_job'> - CEO Anono</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='cicle_one cicle_opinions__cicle_six'>
                                            <div className='cicle_opinions__big_img'>
                                                <img src={Man4} alt="Man4"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </section>
    )
}

export default CicleOpinions;
