import React from 'react';
import PortfolioItem from "./PortfolioItem";


const projects = [
    {
        id: 1,
        title: "Loula Beauty",
        image: "/images/loulabeauty.png",
        link: "https://loulabeautyny.com"
    },
    {
        id: 2,
        title: "Desert Darlin Lashes",
        image: "/images/desertdarlinlashes.png",
        link: "https://desertdarlinlashes.com"
    },
    {
        id: 3,
        title: "Southern Chic Lash",
        image: "/images/southernchiclash.png",
        link: "https://southernchiclash.com"
    },

        {
        id: 4,
        title: "glow and grace",
        image: "/images/glow_and_grace.png",
        link: "/templates/salon1/index.html"
    },
    { 
        id: 5,
        title: "Digital Dimensions",
        image: "/images/digital_dimensions.png",
        link: "/templates/Digital_Dimensions/index.html"
    },
    
    {
        id: 6,
        title: "Southern  Western Style",
        image: "/images/Western_style.png",
        link: "/templates/Western_Style/index.html"
    }

];

const photoProjects = [
    {
        id: 101,
        title: "Photo1",
        image: "/images/photo1.jpg"
    },
    {
        id: 102,
        title: "Photo2",
        image: "/images/photo2.jpg"
    },
    {
        id: 103,
        title: "Photo3",
        image: "/images/photo3.jpg"
    },
    {
        id: 104,
        title: "Photo4",
        image: "/images/photo4.jpg"
    },
    {
        id: 105,
        title: "Photo2",
        image: "/images/photo5.jpg"
    },
    {
        id: 106,
        title: "Photo3",
        image: "/images/photo6.jpg"
    },
    {
        id: 107,
        title: "Photo1",
        image: "/images/photo7.jpg"
    },
    {
        id: 108,
        title: "Photo2",
        image: "/images/photo8.jpg"
    },
    {
        id: 109,
        title: "Photo3",
        image: "/images/photo9.jpg"
    },
    {
        id: 110,
        title: "Photo1",
        image: "/images/photo10.jpg"
    },
    {
        id: 111,
        title: "Photo2",
        image: "/images/photo11.jpg"
    },
    {
        id: 112,
        title: "Photo12",
        image: "/images/photo12.JPG"
    }
];

const Portfolio = () => {
    return (
        <section id='portfolio' className="container py-5">
            <h2 className="text-center mb-4">Examples</h2>
            <div className="row">
                {projects.map((project) => (
                    <PortfolioItem key={project.id} {...project} />
                ))}
            </div>
            <hr className="my-5" />
            <h2 className="text-center mb-4">Branding Photo shoots</h2>
            <div className="row">
                {photoProjects.map((project) => (
                    <PortfolioItem key={project.id}{...project} type="photo"/>
            ))}
            </div>
        </section>

    );
};



export default Portfolio;