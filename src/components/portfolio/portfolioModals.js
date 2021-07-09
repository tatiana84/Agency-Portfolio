import { useState } from 'react';

//Import component
import ProjectDetails from './projectDetails';

const PortfolioModals = () => {
    const [modals] = useState([
        {
            id: 'portfolioModal1',
            nameProject: 'Project Name',
            imageSrc: 'assets/img/portfolio/1.jpg',
            title: 'Lorem ipsum dolor sit amet consectetur.',
            content: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!',
            client: 'Threads',
            category: 'Illustration'
        },
        {
            id: 'portfolioModal2',
            nameProject: 'Project Name',
            imageSrc: 'assets/img/portfolio/2.jpg',
            title: 'Lorem ipsum dolor sit amet consectetur.',
            content: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!',
            client: 'Explore',
            category: 'Graphic Design'
        },
        {
            id: 'portfolioModal3',
            nameProject: 'Project Name',
            imageSrc: 'assets/img/portfolio/3.jpg',
            title: 'Lorem ipsum dolor sit amet consectetur.',
            content: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!',
            client: 'Finish',
            category: 'Identity'
        },
        {
            id: 'portfolioModal4',
            nameProject: 'Project Name',
            imageSrc: 'assets/img/portfolio/4.jpg',
            title: 'Lorem ipsum dolor sit amet consectetur.',
            content: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!',
            client: 'Lines',
            category: 'Branding'
        },
        {
            id: 'portfolioModal5',
            nameProject: 'Project Name',
            imageSrc: 'assets/img/portfolio/5.jpg',
            title: 'Lorem ipsum dolor sit amet consectetur.',
            content: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!',
            client: 'Southwest',
            category: 'Website Design'
        },
        {
            id: 'portfolioModal6',
            nameProject: 'Project Name',
            imageSrc: 'assets/img/portfolio/6.jpg',
            title: 'Lorem ipsum dolor sit amet consectetur.',
            content: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!',
            client: 'Window',
            category: 'Photography'
        }
    ])

    return (
        <>
            {modals.map(modal => (
                <ProjectDetails modal={modal}/>
            ))}
        </>
    )
}

export default PortfolioModals; 