import "./portfolio.css"
import React from 'react'
import portfolioData from '../../assets/portfolio.json'
import Carousel from "react-elastic-carousel"


const Portfolio = () => {

    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio_container">
                <Carousel className="carousel">

                    {
                        portfolioData.map(element => {
                            return (
                                < article className="portfolio_item" key={element.id}>
                                    <div className="portfolio_item-image">
                                        <img src={require(`../../assets/${element.image}`)} alt={element.title} />
                                    </div>
                                    <h3>{element.title}</h3>
                                    <div className="portfolio_item-cta">
                                        <a href={element.github} className="btn" target="_blank" rel="noopener noreferrer">Github</a>
                                        <a href={element.demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Deployed</a>
                                    </div>
                                </article>
                            )
                        })
                    }

                </Carousel>

            </div>
        </section >
    )
}

export default Portfolio