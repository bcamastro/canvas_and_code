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

const Portfolio = () => {
    return (
        <section id='portfolio' className="container py-5">
            <h2 className="text-center mb-4">Templates</h2>
            <div className="row">
                {projects.map((project) => (
                    <PortfolioItem key={project.id} {...project} />
                ))}
            </div>
        </section>
    );
};



export default Portfolio;