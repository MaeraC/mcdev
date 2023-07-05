import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function Portfolio() {
    const [projects, setProjects] = useState([])
    const figuresRef = useRef([])

    useEffect(() => {
        fetchProjects()

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const fetchProjects = async () => {
        try {
            const response = await fetch('portfolio.json')
            const data = await response.json()
            setProjects(data)
        } 
        catch (error) {
            console.error('Error fetching projects:', error)
        }
    }

    const handleScroll = () => {
        const scrolledFromTop = window.pageYOffset + window.innerHeight;

        figuresRef.current.forEach((figure) => {
        const distanceFromTop = figure.offsetTop;

        if (scrolledFromTop >= distanceFromTop + 50) {
            const delaiAnim = figure.getAttribute('data-delai');
            setTimeout(() => {
            figure.style.top = '0';
            figure.style.opacity = '1';
            }, delaiAnim);
        }
        })
    }

    return (
        <section className='portfolio' id="realisations">
            <div className='titles'>
                <h1>Mes réalisations</h1>
                <h2>Un apreçu de mes derniers projets</h2>
                <span></span>
            </div>
            <div className="gallery">
                {projects.map((project, index) => (
                    <figure className='box-shadow fade-in' key={index} ref={(ref) => (figuresRef.current[index] = ref)}  data-delai={index * 200}>
                        <Link to={project.link} target="_blank"><img src={project.image} alt={project.title} /></Link>
                    </figure>
                ))}
            </div>
            
        </section>
    )
}

export default Portfolio

