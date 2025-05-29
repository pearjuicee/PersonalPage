import "./Home.css"

const Home = () => {
  return (
    <main className="home">
      <section className="hero">
        <h1 className="hero-title">
          Hey, I'm <span className="highlight">Shirley</span>.
        </h1>
        <h2 className="hero-subtitle">Currently: SDE Intern @{" "}
        <a
          href="https://www.dayforce.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="company-link"
        >
          Dayforce
        </a></h2>
      </section>
    </main>
  );
};

export default Home;
