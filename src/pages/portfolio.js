import { useState } from 'react';

//Import component
import Item from '../components/portfolio/item';

const Portfolio = () => {
    const [items] = useState([
        {
            href: '#portfolioModal1',
            imageSrc: 'assets/img/portfolio/1.jpg',
            heading: 'Threads',
            subheading: 'Illustration'
        },
        {
            href: '#portfolioModal2',
            imageSrc: 'assets/img/portfolio/2.jpg',
            heading: 'Explore',
            subheading: 'Graphic Design'
        },
        {
            href: '#portfolioModal3',
            imageSrc: 'assets/img/portfolio/3.jpg',
            heading: 'Finish',
            subheading: 'Identity'
        },
        {
            href: '#portfolioModal4',
            imageSrc: 'assets/img/portfolio/4.jpg',
            heading: 'Lines',
            subheading: 'Branding'
        },
        {
            href: '#portfolioModal5',
            imageSrc: 'assets/img/portfolio/5.jpg',
            heading: 'Southwest',
            subheading: 'Website Design'
        },
        {
            href: '#portfolioModal6',
            imageSrc: 'assets/img/portfolio/6.jpg',
            heading: 'Window',
            subheading: 'Photography'
        }
    ])
    return (
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6 mb-4">
                       {items.map(item => (
                           <Item item={item}/>
                       ))}                   
                    </div>                   
                </div>
            </div>
        </section>
    )
}

export default Portfolio;