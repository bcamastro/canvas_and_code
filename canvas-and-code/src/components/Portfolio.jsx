import React from 'react';
import PortfolioItem from "./PortfolioItem";


const projects = [
    { 
        id: 1,
        title: "Digital Dimensions",
        image: "/images/digital_dimensions.png",
        link: "/templates/Digital_Dimensions/index.html"
    },
    {
        id: 2,
        title: "glow and grace",
        image: "/images/glow_and_grace.png",
        link: "/templates/salon1/index.html"
    },
    {
        id: 3,
        title: "Artsy template 1",
        image: "/images/artsy_template.png",
        link: "/templates/artsy/index.html"
    }

];

const photoProjects = [
    {
        id: 101,
        title: "Photo1",
        image: "https://placehold.co/350",
    },
    {
        id: 102,
        title: "Photo2",
        image: "https://placehold.co/350",
    },
    {
        id: 103,
        title: "Photo3",
        image: "https://placehold.co/350"
    }
];

const Portfolio = () => {
    return (
        <section id='portfolio' className="container py-5">
            <h2 className="text-center mb-4">Templates</h2>
            <div className="row">
                {projects.map((project) => (
                    <PortfolioItem key={project.id} {...project} />
                ))}
            </div>
            <hr className="my-5" />
            <h2 className="text-center mb-4">Photography Portfolio</h2>
            <div className="row">
                {photoProjects.map((project) => (
                    <PortfolioItem key={project.id}{...project} type="photo"/>
            ))}
            </div>
        </section>

    );
};



export default Portfolio;