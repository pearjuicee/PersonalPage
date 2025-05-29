import "./About.css"

const About = () => {
  return (
    <main className="about">
      <section className="about-content">
        <h1 className="about-greeting">hi!</h1>
        <h2 className="about-subtitle">I'm a CS student <span className="highlight">@ </span>McGill University</h2>
        <div className="about-experiences">
          <h3>experiences:</h3>
          <ul>
            <li>sde intern @ Dayforce</li>
            <li>swe @ hack4impact</li>
            <li>vp sponsorships @ Women In Tech McGill</li>
          </ul>
        </div>
        <a
          href="https://drive.google.com/file/d/1xDHxLbk3xZ2pooBfV2qMOQnxyrowgCk1/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link"
        >
          📄resume
        </a>
      </section>
    </main>
  );
}

export default About