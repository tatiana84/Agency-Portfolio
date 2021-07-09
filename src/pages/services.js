import { useState } from 'react';

//Import component
import ServicePost from '../components/servicePost';

const Services = () => {
    const [posts] = useState ([
        {
            icon: 'fas fa-shopping-cart fa-stack-1x fa-inverse',
            title: 'E-Commerce',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.' 
        },
        {
            icon: 'fas fa-laptop fa-stack-1x fa-inverse',
            title: 'Responsive Design',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.' 
        },
        {
            icon: 'fas fa-lock fa-stack-1x fa-inverse',
            title: 'Web Security',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.' 
        }
    ])
    return (
        <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Services</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row text-center">
                    {posts.map(post => (
                        <ServicePost post={post}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services;