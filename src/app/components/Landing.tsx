import React from 'react';
import { ReactSVG } from 'react-svg';
import './Landing.css';

const Landing = () => {
  return (
    <>
      <section className="first">
        <div className="outer">
          <div className="inner">
            <div className="bg one">
              <h2 className="section-heading">Justin Morton</h2>
              <h3 className="section-subheading">Front End | Full Stack | Software Developer</h3>
              <div className="language-logos">
                <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
                  <ReactSVG src="/typescript.svg" className="language-logo" />
                </a>
                <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
                  <ReactSVG src="/javascript.svg" className="language-logo" />
                </a>
                <a href="https://angular.io/" target="_blank" rel="noopener noreferrer">
                  <ReactSVG src="/angular.svg" className="language-logo" />
                </a>
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                  <ReactSVG src="/react.svg" className="language-logo" />
                </a>
                <a href="https://www.java.com/" target="_blank" rel="noopener noreferrer">
                  <ReactSVG src="/java.svg" className="language-logo" />
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
                  <ReactSVG src="/css.svg" className="language-logo" />
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
                  <ReactSVG src="/html.svg" className="language-logo" />
                </a>
                <a href="https://spring.io/" target="_blank" rel="noopener noreferrer">
                  <ReactSVG src="/spring.svg" className="language-logo" />
                </a>
                <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                  <ReactSVG src="/nextjs.svg" className="language-logo" />
                </a>
                <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
                  <ReactSVG src="/python.svg" className="language-logo" />
                </a>
              </div>
              <ReactSVG src="/scroll-arrow.svg" className="scroll-arrow" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;