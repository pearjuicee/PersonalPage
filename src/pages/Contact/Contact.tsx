import "./Contact.css";

const Contact = () => {
  return (
    <main className='contact'>
      <section className='contact-content'>
        <h1 className='contact-greeting'>let's connect!</h1>

        <div className='contact-methods'>
          <div className='contact-item'>
            <h2 className='contact-title'>email</h2>
            <a 
              href="shirley.ding17@gmail.com"
              className='contact-link'
              >
                shirley.ding17
            </a>
          </div>

          <div className='contact-item'>
            <h2 className='contact-title'>linkedin</h2>
            <a 
              href="https://www.linkedin.com/in/shirleydg/"
              target='_blank'
              rel='noopener noreferrer'
              className='contact-link'
              >
                shirleydg
            </a>
          </div>

          <div className='contact-item'>
            <h2 className='contact-title'>github</h2>
            <a 
              href="https://github.com/pearjuicee"
              target='_blank'
              rel='noopener noreferrer'
              className='contact-link'
              >
                pearjuicee
            </a>
          </div>

        </div>
      </section>
    </main>
  )
}

export default Contact