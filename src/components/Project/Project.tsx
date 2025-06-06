import "./Project.css"
import { Link } from "react-router-dom";

interface ProjectProps {
  title: string;
  date: string;
  description?: string;
  tags?: string[];
  link?: string;
  image?: string;
}

const Project = ({ title, date, description, tags, link, image}: ProjectProps) => {
  return (
    <Link to={link || "#"} className="project-card" target="_blank" rel="noopener noreferrer">
      <div className="image-container">
        <img src={image} alt={title} className="project-image" />
        <div className="overlay">
          <p className="description">{description}</p>
          {tags && (
            <div className="tags">
              {tags.map((tag: string, index: number) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="project-info">
        <h3 className="project-subtitle">{title}</h3>
        <span className="project-date">{date}</span>
      </div>
    </Link>
  )
}

export default Project