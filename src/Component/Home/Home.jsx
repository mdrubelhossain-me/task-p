import React from 'react';
import Hero from '../Hero/Hero';
import PopularCourses from '../PopularCourses/PopularCourses';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Hero/>
            <PopularCourses/>
            <Services/>
            <Testimonial/>
        </div>
    );
};

export default Home;