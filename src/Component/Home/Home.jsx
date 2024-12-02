import React from 'react';
import Hero from '../Hero/Hero';
import PopularCourses from '../PopularCourses/PopularCourses';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Hero/>
            <PopularCourses/>
            <Services/>
        </div>
    );
};

export default Home;