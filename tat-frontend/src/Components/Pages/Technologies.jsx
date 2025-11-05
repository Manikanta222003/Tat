import React from "react";

import html from "../assets/images/HTML-grey.png";
import css from "../assets/images/CSS-grey.png";
import javascript from "../assets/images/JS-grey.png";
import vscode from "../assets/images/visual studio-grey.png";
import java from "../assets/images/java-grey.png";
import figma from "../assets/images/Figma-grey.png";
import python from "../assets/images/python-grey.png";
import angular from "../assets/images/angular-grey.png";
import react from "../assets/images/react-grey.png";
import vue from "../assets/images/vue-grey.png";
import node from "../assets/images/NODEjs-grey.png";
import git from "../assets/images/git-grey.png";
import github from "../assets/images/GITHUB-grey.png";
import googleads from "../assets/images/googleads.png";
import mysql from "../assets/images/MYSQL-grey.png";
import mongoDB from "../assets/images/mongodb-grey.png";
import php from "../assets/images/PHP-grey.png";
import postman from "../assets/images/postman-grey.png";
import django from "../assets/images/Django-grey.png";

const techLogos = [
  { src: html, alt: "Html" },
  { src: css, alt: "Css" },
  { src: javascript, alt: "JavaScript" },
  { src: vscode, alt: "VS Code" },
  { src: java, alt: "Java" },
  { src: figma, alt: "Figma" },
  { src: python, alt: "Python" },
  { src: angular, alt: "Angular" },
  { src: react, alt: "React" },
  { src: vue, alt: "Vue.js" },
  { src: node, alt: "Node.js" },
  { src: git, alt: "Git" },
  { src: github, alt: "GitHub" },
  // { src: googleads, alt: "Google Ads" },
  { src: mysql, alt: "MySQL" },
  { src: mongoDB, alt: "MongoDB" },
  { src: php, alt: "PHP" },
  { src: postman, alt: "Postman" },
  { src: django, alt: "Django Python" }
];

const Technologies = () => (
  <div
    style={{
      background: "white",
      padding: "40px 0",
      width: "100%",
      textAlign: "center",
      
    }}
    className="technologies-section"
  >
    <h2
      className="gradient-text"
      style={{
        fontSize: 40,
        fontWeight: "bold",
        margin: 0,
        marginBottom: 20,
      }}
    >
      Technologies We Use
    </h2>
    <div
      style={{
        padding: "0px 0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          position: "relative",
          boxShadow: "0 8px 24px rgb(90 81 81 / 10%)",
          // background: "linear-gradient(120deg,rgba(205, 220, 240, 0) 0%,rgba(219, 225, 231, 0) 100%)",
        }}
      >
        <div className="tech-strip" style={{ height: 160, gap: 5
         }}>
          {[...techLogos, ...techLogos].map((logo, idx) => (
            <div key={idx} className="tech-logo-wrap">
              <img
                src={logo.src}
                alt={logo.alt}
                className="tech-logo-img"
                style={{
                  objectFit: "contain",
                  height: 60,
                  width: "auto",
                  margin: "0 14px",
                  filter: "drop-shadow(0 2px 8px rgba(30,60,114,0.10))",
                  transition: "height 0.2s, margin 0.2s"
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    <style>{`
      .gradient-text {
        background: linear-gradient(to right, var(--primary-blue), var(--primary-purple));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
        display: inline-block;
      }
      .tech-strip {
        display: flex;
        align-items: center;
        animation: tech-scroll 18s linear infinite;
        width: max-content;
      }
      .tech-logo-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      @keyframes tech-scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @media (max-width: 900px) {
        .tech-logo-img {
          height: 60px !important;
          margin: 0 14px !important;
        }
        .gradient-text {
          font-size: 26px !important;
        }
        .tech-strip {
          height: 110px !important;
        }
      }
      @media (max-width: 600px) {
        .technologies-section {
          padding: 20px 0 !important;
        }
        .tech-logo-img {
          height: 55px !important;
          margin: 0 6px !important;
        }
        .gradient-text {
          font-size: 2.2rem !important;
        }
        .tech-strip {
          height: 100px !important;
        }
        div[style*="padding: 40px 0"] {
          padding: 40px 0 !important;
        }
      }
    `}</style>
  </div>
);

export default Technologies;