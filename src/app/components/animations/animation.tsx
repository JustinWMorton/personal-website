/* eslint-disable  prefer-const */
'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { Observer } from 'gsap/Observer'
import { SplitText } from 'gsap/SplitText'
import Landing from '@/components/Landing'
import AboutMe from '@/components/AboutMe'
import Career from '@/components/Career'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import '@/app/globals.css'
import './animation.css'



const Animation = () => {
  gsap.registerPlugin(Observer, SplitText);

  useEffect(() => {
    let sections = document.querySelectorAll("section"),
      headerLinks = document.querySelectorAll(".header-link"),
      images = document.querySelectorAll(".bg"),
      languages = document.querySelectorAll(".language-logo"),
      headings = gsap.utils.toArray(".section-heading"),
      subheadings = gsap.utils.toArray(".section-subheading"),
      outerWrappers = gsap.utils.toArray(".outer"),
      innerWrappers = gsap.utils.toArray(".inner"),
      splitHeadings = headings.map(heading => new SplitText(heading as HTMLElement, { type: "chars,words,lines", linesClass: "clip-text" })),
      splitSubheadings = subheadings.map(subheading => new SplitText(subheading as HTMLElement, { type: "chars,words,lines", linesClass: "clip-text" })),
      currentIndex = -1,
      wrap = gsap.utils.wrap(0, sections.length),
      animating: boolean = false;
    const scrollArrows = document.querySelectorAll(".scroll-arrow");
    const modals = document.querySelectorAll(".modal"); 

  
    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });

    //Animate header links only on page load
    const headerLinksTimeline = gsap.timeline({ defaults: { duration: 1, ease: "power2" } });
    headerLinksTimeline.fromTo(headerLinks, { autoAlpha: 0, yPercent: -100 }, 
      {
        delay: 0.5,
        duration: 1,
        autoAlpha: 1, 
        yPercent: 0, 
        stagger: 0.2 
      }
    );

    function gotoSection(index: number, direction: number) {
      index = wrap(index); // make sure it's valid
      animating = true;
      let fromTop = direction === -1,
          dFactor = fromTop ? -1 : 1,
          tl = gsap.timeline({
            defaults: { duration: 1.25, ease: "power1.inOut" },
            onComplete: () => { animating = false; }
          });
      if (currentIndex >= 0) {
        // The first time this function runs, current is -1
        gsap.set(sections[currentIndex], { zIndex: 0 });
        tl.to(images[currentIndex], { yPercent: -15 * dFactor })
          .set(sections[currentIndex], { autoAlpha: 0 });
      }
      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });

      // Common animations for all sections
      tl.fromTo([outerWrappers[index], innerWrappers[index]], { 
        yPercent: i => i ? -100 * dFactor : 100 * dFactor
      }, { 
        yPercent: 0 
      }, 0)
      .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)

      .fromTo(splitHeadings[index].chars, { 
        autoAlpha: 0, 
        yPercent: 150 * dFactor
      }, {
        autoAlpha: 1,
        yPercent: 0,
        duration: 1,
        ease: "power2",
        stagger: {
          each: 0.02,
          from: "random"
        }
      }, 0.2);

      // Specific animations based on section
      if (index === 0) { // Landing page
        tl.fromTo(splitSubheadings[index].chars, { 
          autoAlpha: 0, 
          yPercent: 150 * dFactor
        }, {
          autoAlpha: 1,
          yPercent: 0,
          duration: 1,
          ease: "power2",
          stagger: {
            each: 0.02,
            from: "random"
          }
        }, 0.2);
        if (scrollArrows[index]) {
          tl.fromTo(scrollArrows![index], { yPercent: 50 * dFactor }, { yPercent: 0, duration: 1}, 0.2);
        }
        languages.forEach((language, i) => {
          tl.fromTo(language, { yPercent: 900 * dFactor }, { yPercent: 0, duration: 1, ease: "power2" }, 0.2 + i * 0.1);
        });
      } else if (index === 1) { // About Me page
        const aboutMeModal = modals[0]; // Assuming About Me is the first modal
        if (aboutMeModal) {
          tl.fromTo(aboutMeModal, { yPercent: 900 * dFactor }, { yPercent: 0, duration: 1.4, ease: "power2" }, 0.2)
            .fromTo(aboutMeModal.querySelectorAll('.about-me-prof-wrapper, .about-me-personal-wrapper, .about-me-image-wrapper'), 
              { autoAlpha: 0, yPercent: 50 }, 
              { autoAlpha: 1, yPercent: 0, duration: 1, ease: "power2", stagger: 0.2 }, 0.4)
              .fromTo(scrollArrows![index], { yPercent: 50 * dFactor }, { yPercent: 0, duration: 1}, 0.2);

          aboutMeModal.querySelectorAll('.section-subheading').forEach((subheading, i) => {
            const splitSubheading = new SplitText(subheading as HTMLElement, { type: "chars,words,lines", linesClass: "clip-text" });
            tl.fromTo(splitSubheading.chars, { 
              autoAlpha: 0, 
              yPercent: 150 * dFactor
            }, {
              delay: 0.6,
              autoAlpha: 1,
              yPercent: 0,
              duration: 1,
              ease: "power2",
              stagger: {
                each: 0.02,
                from: "random"
              }
            }, 0.2 + i * 0.2);
          });
        }
      } else if (index === 2) { //Career page
        const careerModals = sections[index].querySelectorAll('.career-modal'); // Assuming Career is the second modal
        if (careerModals) {
          careerModals.forEach((careerModal) => {
            tl.fromTo(careerModal, { yPercent: 900 * dFactor }, { yPercent: 0, duration: 1.4, ease: "power2" }, 0.2)
              .fromTo(careerModal.querySelectorAll('.career-modal'), 
                { autoAlpha: 0, yPercent: 50 }, 
                { autoAlpha: 1, yPercent: 0, duration: 1, ease: "power2", stagger: 0.2 }, 0.4)
                .fromTo(scrollArrows![index], { yPercent: 50 * dFactor }, { yPercent: 0, duration: 1}, 0.2);

            careerModal.querySelectorAll('.section-subheading').forEach((subheading, j) => {
              const splitSubheading = new SplitText(subheading as HTMLElement, { type: "chars,words,lines", linesClass: "clip-text" });
              tl.fromTo(splitSubheading.chars, { 
                autoAlpha: 0, 
                yPercent: 150 * dFactor
              }, {
                delay: 0.6,
                autoAlpha: 1,
                yPercent: 0,
                duration: 1,
                ease: "power2",
                stagger: {
                  each: 0.02,
                  from: "random"
                }
              }, 0.2 + j * 0.2);
            });
          });
        }
      } else if (index === 3) { // Contact page
        const contactMeModal = modals[3]; // Assuming About Me is the first modal
        if (contactMeModal) {
          tl.fromTo(contactMeModal, { yPercent: 900 * dFactor }, { yPercent: 0, duration: 1.4, ease: "power2" }, 0.2)
            .fromTo(contactMeModal.querySelectorAll('.contact-form'), 
              { autoAlpha: 0, yPercent: 50 }, 
              { autoAlpha: 1, yPercent: 0, duration: 1, ease: "power2", stagger: 0.2 }, 0.4);

          contactMeModal.querySelectorAll('.section-subheading').forEach((subheading, i) => {
            const splitSubheading = new SplitText(subheading as HTMLElement, { type: "chars,words,lines", linesClass: "clip-text" });
            tl.fromTo(splitSubheading.chars, { 
              autoAlpha: 0, 
              yPercent: 150 * dFactor
            }, {
              delay: 0.6,
              autoAlpha: 1,
              yPercent: 0,
              duration: 1,
              ease: "power2",
              stagger: {
                each: 0.02,
                from: "random"
              }
            }, 0.2 + i * 0.2);
          });
        }
      }
      currentIndex = index;
    }

    Observer.create({
      type: "wheel,touch",
      wheelSpeed: -1,
      onDown: () => !animating && gotoSection(currentIndex - 1, -1),
      onUp: () => !animating && gotoSection(currentIndex + 1, 1),
      tolerance: 10,
      preventDefault: true,
      ignore: ".contact-form, .contact-me-modal input, .contact-me-modal textarea, .about-me-modal"
    });
    
    gotoSection(0, 1);
  }, [])

  return (
    <>
      <Header />
      <Landing />
      <AboutMe />
      <Career />
      {/* <section className="fourth">
        <div className="outer">
          <div className="inner">
            <div className="bg">
              <h2 className="section-heading">Personal Projects</h2>
            </div>
          </div>
        </div>
      </section> */}
      <Contact />
    </>
  );


}

export default Animation
