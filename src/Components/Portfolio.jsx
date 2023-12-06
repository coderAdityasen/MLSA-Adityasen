/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/coding.jpg";

const imageAltText = "desktop with laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Live Weathe app with api 🎉",
    description:
      "i have created a live weather forecasting website that i made using weather api ",
    url: "https://github.com/coderAdityasen/Weather-App",
  },
  {
    title: "Todo APP with additional functionality",
    description:
      "i have made a simple todo app with react using and reduc tool tool kit also i have made this project with the help of my conding instructor hitesh choudhry sir .",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "E-commerce website with using MERN stack ",
    description:
      "i have created a full stack project with simple react and also made routing functionality with single page load functionality",
    url: "https://github.com/coderAdityasen/basic-e-commerce-app",
  },
  {
    title: "Image gallary react app with api",
    description:
      "i have made a proejct using react through which i use 3rd party api  ",
    url: "https://github.com/coderAdityasen/Gallary-react-app",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
