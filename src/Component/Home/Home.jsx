import React from 'react';
import Hero from '../Hero/Hero';
import PopularCourses from '../PopularCourses/PopularCourses';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Hero/>
            <PopularCourses/>
            <Services/>
            <Testimonial/>
            <Footer/>
        </div>
    );
};

export default Home;