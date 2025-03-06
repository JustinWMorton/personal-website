import Image from 'next/image';
import { ReactSVG } from 'react-svg';
import './Career.css';

const Career = () => {
  return (
    <>
      <section className="third">
        <div className="outer">
          <div className="inner">
            <div className="bg">
              <h2 className="section-heading" id="career-header">Career</h2>
              <div className="career-modals-wrapper">
                <div className="career-modal modal">
                  <div className="career-header-wrapper">
                    <div className="career-logo-wrapper">
                      <Image src="/nox-logo.webp" alt="Nox Health" width={350} height={60} className="career-logo"/>
                    </div>
                    <div className="career-header-text-wrapper">
                      <h3 className="career-header-text section-subheading">
                        Front End Developer
                      </h3>
                      <p className="career-time-text section-subheading">
                        April 2023 - January 2025
                      </p>
                    </div>
                  </div>
                  <div className="career-text-wrapper">
                    <ul className="career-text">
                      <li>Designed and implemented responsive front-end features for Nox Health&apos;s sleep health platform using Angular and TypeScript. Retrofitted existing site components for ADA and WCAG compliance, enhancing accessibility for diverse user needs.</li>
                      <li>Simultaneously contributed to multiple projects across different teams and platforms, enhancing user engagement, patient record management, and data security while adapting to diverse project requirements. Consistently maintained HIPAA compliance throughout all projects, ensuring the protection and privacy of sensitive patient information.</li>
                      <li>Collaborated with UX/UI designers, back-end developers, and stakeholders across multiple countries, including Iceland and Portugal, to improve user interfaces, translating wireframes into functional web pages and enhancing efficiency of the user experience by 26% compared to legacy systems.</li>
                    </ul>
                  </div>
                </div>
                <div className="career-modal modal">
                  <div className="career-header-wrapper">
                    <div className="career-logo-wrapper">
                      <Image src="/iheart-logo.png" alt="Nox Health" width={350} height={90} className="career-logo"/>
                    </div>
                    <div className="career-header-text-wrapper">
                      <h3 className="career-header-text section-subheading">
                        Software Engineer
                      </h3>
                      <p className="career-time-text section-subheading">
                        March 2021 - March 2023
                      </p>
                    </div>
                  </div>
                  <div className="career-text-wrapper">
                    <ul className="career-text">
                      <li>Developed an online customer platform for the nation&apos;s biggest radio and podcast provider using Java, Angular, and RESTful web services that consolidated multiple legacy systems into a unified, user-friendly interface. The platform streamlined advertising processes improving productivity by 25% and reducing system-related incidents by 30%.</li>
                      <li>Voluntarily overhauled company onboarding for Windows developers, transitioning from WSL to pure Windows development. This reduced local webpage launch time from 30 to 5 minutes and enabled auto-refresh of changes without relaunching, significantly decreasing team downtime.</li>
                      <li>Developed functionality for clients to create multi-district advertising opportunities efficiently. Collaborated with interns to implement zip code to market district conversion using JavaScript and Angular, saving up to 20+ man-hours per large opportunity and potentially multiple days for complex cases.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <ReactSVG src="/scroll-arrow.svg" className="scroll-arrow" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Career;