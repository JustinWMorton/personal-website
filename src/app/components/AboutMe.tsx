import Image from 'next/image';
import { ReactSVG } from 'react-svg';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <>
      <section className="second">
        <div className="outer">
          <div className="inner">
            <div className="bg">
              <h2 className="section-heading" id="about-me-header">About Me</h2>
              <div className="about-me-modal modal">
                <div className="about-me-prof-wrapper">
                  <h3 className="about-me-prof-header-text section-subheading">
                    Professional Details
                  </h3>
                  <p className="about-me-prof-text body-text">
                    I am a software developer based in Denver, CO with four years of experience in both full stack and front end development. I started my career <br />
                    as an intern at iHeartmedia, the advertising arm of iHeartradio, where I was hired on as a Software Engineer after graduating from University of <br />
                    Texas - San Antonio. I spent two years gaining skills building and maintaining RESTful web services with Java and Spring, as well as  <br />
                    implementing front end designs using Angular and TypeScript. <br />
                    I then went on to work for Nox Health, an at home sleep health monitoring company, as a Front End Developer for two years where I was part  <br />
                    of a team that developed front end components using Angular and TypeScript for the provider facing sleep monitoring platform.<br />
                    <br />
                    I am currently seeking a new opportunity in Front End, Back End, or Full Stack Development to further my career.
                  </p>
                </div>
                <div className="about-me-personal-wrapper">
                  <h3 className="about-me-prof-header-text section-subheading">
                    Personal Details
                  </h3>
                  <p className="about-me-personal-text body-text">
                    Outside of work if I am not spending time with my partner of fourteen years and our three cats, I enjoy hiking and taking pictures of the<br />
                    beautiful scenery around me (all the pictures on this site were taken by me). I also enjoy playing guitar, reading, eating, and watching reality tv<br />
                    with my partner. My current literary fixation is the Stormlight Archives series by Brandon Sanderson, but I am starting to read Kurt Vonnegut<br />
                    now that the series is on hiatus.
                  </p>
                </div>
                <div className="about-me-image-wrapper">
                  <Image src="/Wally.jpg" alt="Wally" className="about-me-image" width={250} height={150} />
                  <Image src="/Peach.jpg" alt="Wally" className="about-me-image" width={250} height={150} />
                  <Image src="/Milo.jpg" alt="Wally" className="about-me-image" width={250} height={150} />
                </div>
              </div>
              <ReactSVG src="/scroll-arrow.svg" className="scroll-arrow" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;