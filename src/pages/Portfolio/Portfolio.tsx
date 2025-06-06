import "./Portfolio.css"
import Project from "../../components/Project/Project"

const projects = [
  {
    title: "Looksy: A Virtual Dressing Room",
    description: "A virtual dressing room to simplify virtual try-ons and make it easier to see how clothes fit before you buy. People's Choice Award at McHacks 12.",
    tags: ["Python", "Javascript", "Flask", "Auth0", "MediaPipe", "OpenCV", "HTML", "CSS"],
    link: "https://devpost.com/software/looksy-a-virtual-dressing-room",
    image: "/shirley-portfolio/assets/looksy.png",
    date: "01/2025"
  },
  {
    title: "Nine Lives Later",
    description: "Nine Lives Later is a completed visual novel by a group of cat lovers and beginner game developers with 100+ browser plays on itch.io. Winner of Best Art.",
    tags: ["Unity", "C#", "Visual Novel", "Game Development"],
    link: "https://starberrykiruya.itch.io/ninelives",
    image: "/shirley-portfolio/assets/nll.png",
    date: "01/2025"
  },
  {
    title: "DictAction",
    description: "Dictation tool made for Girls Who Code Hackathon. An online teacher that help students to practice their dictation and get that A. First place winner at Girls Who Hack 2024.",
    tags: ["Python", "Flask", "HTML", "CSS", "Javascript", "Web Speech API"],
    link: "https://devpost.com/software/dictaction",
    image: "/shirley-portfolio/assets/dictaction.png",
    date: "03/2024"
  },
  {
    title: "HeartMap",
    description: " Implemented logistic regression to predict heart disease likelihood based on health indicators like cholesterol, age, and blood pressure, using scikit-learn.",
    tags: ["Python", "Flask", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Figma"],
    link: "#",
    image: "/shirley-portfolio/assets/heartmap1.png",
    date: "11/2024 - 12/2024"
  }
]

const Portfolio = () => {
  return (
    <main className="portfolio">
      <section className="portfolio-content">
        <h1 className="portfolio-title">projects</h1>
        <div className="projects-section">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Portfolio