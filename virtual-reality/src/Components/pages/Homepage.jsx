import React from 'react';

import Header from './../common/Header';
import OurArticles from './../common/OurArticles';
import Footer from './../common/Footer';
import './../../assets/styles/index.css';
import OurService from './../common/OurService';
import HomeIntro from './../common/HomeIntro';
import TableAboutUs from './../common/TableAboutUs';
import AboutUs from './../common/AboutUs';
import ChooseUs from './../common/ChooseUs';
import GetStarted from './../common/GetStarted';
import CicleOpinions from './../common/CicleOpinions';
import OurPricing from './../common/OurPricing';
import OurPartners from './../common/OurPartners';


const Homepage  = () => {
    return (
        <section className="app">
            <Header/>
            <div className="app_content">
                <HomeIntro/>
                <TableAboutUs/>
                <AboutUs/>
                <OurService/>
                <ChooseUs/>
                <GetStarted/>
                <CicleOpinions/>
                <OurPricing/>
                <OurPartners/>
                <OurArticles/>
                <Footer/>
            </div>
        </section>
    );
};

export default Homepage;