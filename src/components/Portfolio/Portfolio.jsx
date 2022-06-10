import "./portfolio.css"
import React from 'react'
import Pokered from '../../assets/Pokered.png'

const Portfolio = () => {
    return (
        <section id="portfolio">

            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio_container">
                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={Pokered} alt="pokered" />
                    </div>
                    <h3>this is a portfolio item title</h3>
                    <div className="portfolio_item-cta">
                        <a href="htts//github.com" className="btn" target="_blank">Github</a>
                        <a href="htts//github.com" className="btn btn-primary" target="_blank">Deployed</a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={Pokered} alt="pokered" />
                    </div>
                    <h3>this is a portfolio item title</h3>
                    <div className="portfolio_item-cta">
                        <a href="htts//github.com" className="btn" target="_blank">Github</a>
                        <a href="htts//github.com" className="btn btn-primary" target="_blank">Deployed</a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={Pokered} alt="pokered" />
                    </div>
                    <h3>this is a portfolio item title</h3>
                    <div className="portfolio_item-cta">
                        <a href="htts//github.com" className="btn" target="_blank">Github</a>
                        <a href="htts//github.com" className="btn btn-primary" target="_blank">Deployed</a>
                    </div>
                </article>

            </div>
        </section>
    )
}

export default Portfolio