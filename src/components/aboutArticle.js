const AboutArticle = ({article}) => {
    return (
        <li>
            <div className="timeline-image"><img className="rounded-circle img-fluid" src={article.imageSrc} alt="..." /></div>
                <div className="timeline-panel">
                    <div className="timeline-heading">
                        <h4>{article.date}</h4>
                        <h4 className="subheading">{article.subheading}</h4>
                    </div>
                <div className="timeline-body"><p className="text-muted">{article.text}</p></div>
            </div>
        </li>
    )
}

export default AboutArticle;