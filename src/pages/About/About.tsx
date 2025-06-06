import "./About.css"

const About = () => {
  return (
    <main className="about">
      <section className="about-content">
        <h1 className="about-greeting">hi!</h1>
        <h2 className="about-subtitle">i'm a CS student <span className="highlight">@ </span>McGill University</h2>
        <div className="about-experiences">
          <h3>experiences:</h3>
          <ul>
            <li>sde intern @ Dayforce</li>
            <li>swe @ hack4impact</li>
            <li>vp sponsorships @ Women In Tech McGill</li>
          </ul>
        </div>
        <a
          href="https://drive.google.com/file/d/1GrojRfyhZnz39TNvAew7EJspyk84HCPK/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 34" fill="none" className="resume-icon">
            <path d="M18.75 12.9167L25 19.375M25 19.375L18.75 25.8334M25 19.375H10C8.67392 19.375 7.40215 18.8307 6.46447 17.8617C5.52678 16.8928 5 15.5786 5 14.2084V5.16669" stroke="#828282" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>resume</span>
        </a>
      </section>
    </main>
  );
}

export default About