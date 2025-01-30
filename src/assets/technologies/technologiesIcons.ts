import bootstrap from "./icons/bootstrap.png";
import c from "./icons/c.png";
import cplusplus from "./icons/cplusplus.png";
import css3 from "./icons/css3.png";
import docker from "./icons/docker.png";
import express from "./icons/express.png";
import figma from "./icons/figma.png";
import flask from "./icons/flask.png";
import fusion360 from "./icons/fusion360.png";
import git from "./icons/git.png";
import github from "./icons/github.png";
import go from "./icons/go.png";
import haskell from "./icons/haskell.png";
import heroku from "./icons/heroku.png";
import html5 from "./icons/html5.png";
import java from "./icons/java.png";
import javascript from "./icons/javascript.png";
import jenkins from "./icons/jenkins.png";
import jquery from "./icons/jquery.png";
import jupyter from "./icons/jupyter.png";
import keras from "./icons/keras.png";
import linux from "./icons/linux.png";
import materialui from "./icons/materialui.png";
import mongodb from "./icons/mongodb.png";
import mysql from "./icons/mysql.png";
import nextjs from "./icons/nextjs.png";
import nodejs from "./icons/nodejs.png";
import opengl from "./icons/opengl.png";
import postgresql from "./icons/postgresql.png";
import postman from "./icons/postman.png";
import python from "./icons/python.png";
import rails from "./icons/rails.png";
import react from "./icons/react.png";
import redux from "./icons/redux.png";
import ruby from "./icons/ruby.png";
import sqlite from "./icons/sqlite.png";
import tailwind from "./icons/tailwind.png";
import tensorflow from "./icons/tensorflow.png";
import typescript from "./icons/typescript.png";
import unity from "./icons/unity.png";
import vercel from "./icons/vercel.png";
import vsc from "./icons/vsc.png";
import vue from "./icons/vue.png";

export type TechIcon = {
  name: string;
  icon: string;
  link: string;
};

const technologies: { [key: string]: TechIcon } = {
  bootstrap: {
    name: "Bootstrap",
    icon: bootstrap,
    link: "https://getbootstrap.com/",
  },
  c: {
    name: "C",
    icon: c,
    link: "https://en.wikipedia.org/wiki/C_(programming_language)",
  },
  cplusplus: {
    name: "C++",
    icon: cplusplus,
    link: "https://en.wikipedia.org/wiki/C%2B%2B",
  },
  css3: {
    name: "CSS3",
    icon: css3,
    link: "https://www.w3.org/Style/CSS/Overview.en.html",
  },
  docker: { name: "Docker", icon: docker, link: "https://www.docker.com/" },
  express: { name: "Express", icon: express, link: "https://expressjs.com/" },
  figma: { name: "Figma", icon: figma, link: "https://www.figma.com/" },
  flask: {
    name: "Flask",
    icon: flask,
    link: "https://flask.palletsprojects.com/",
  },
  fusion360: {
    name: "Fusion360",
    icon: fusion360,
    link: "https://www.autodesk.com/products/fusion-360/overview",
  },
  git: { name: "Git", icon: git, link: "https://git-scm.com/" },
  github: { name: "GitHub", icon: github, link: "https://github.com/" },
  go: { name: "Go", icon: go, link: "https://golang.org/" },
  haskell: { name: "Haskell", icon: haskell, link: "https://www.haskell.org/" },
  heroku: { name: "Heroku", icon: heroku, link: "https://www.heroku.com/" },
  html5: {
    name: "HTML5",
    icon: html5,
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
  },
  java: { name: "Java", icon: java, link: "https://www.java.com/" },
  javascript: {
    name: "JavaScript",
    icon: javascript,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  jenkins: { name: "Jenkins", icon: jenkins, link: "https://www.jenkins.io/" },
  jquery: { name: "jQuery", icon: jquery, link: "https://jquery.com/" },
  jupyter: {
    name: "Jupyter",
    icon: jupyter,
    link: "https://jupyter.org/",
  },
  keras: { name: "Keras", icon: keras, link: "https://keras.io/" },
  linux: { name: "Linux", icon: linux, link: "https://www.linux.org/" },
  materialui: {
    name: "MaterialUI",
    icon: materialui,
    link: "https://material-ui.com/",
  },
  mongodb: { name: "MongoDB", icon: mongodb, link: "https://www.mongodb.com/" },
  mysql: { name: "MySQL", icon: mysql, link: "https://www.mysql.com/" },
  nextjs: { name: "Next.js", icon: nextjs, link: "https://nextjs.org/" },
  nodejs: { name: "Node.js", icon: nodejs, link: "https://nodejs.org/" },
  opengl: { name: "OpenGL", icon: opengl, link: "https://www.opengl.org/" },
  postgresql: {
    name: "PostgreSQL",
    icon: postgresql,
    link: "https://www.postgresql.org/",
  },
  postman: { name: "Postman", icon: postman, link: "https://www.postman.com/" },
  python: { name: "Python", icon: python, link: "https://www.python.org/" },
  rails: { name: "Rails", icon: rails, link: "https://rubyonrails.org/" },
  react: { name: "React", icon: react, link: "https://reactjs.org/" },
  redux: { name: "Redux", icon: redux, link: "https://redux.js.org/" },
  ruby: { name: "Ruby", icon: ruby, link: "https://www.ruby-lang.org/" },
  sqlite: { name: "SQLite", icon: sqlite, link: "https://www.sqlite.org/" },
  tailwind: {
    name: "Tailwind",
    icon: tailwind,
    link: "https://tailwindcss.com/",
  },
  tensorflow: {
    name: "TensorFlow",
    icon: tensorflow,
    link: "https://www.tensorflow.org/",
  },
  typescript: {
    name: "TypeScript",
    icon: typescript,
    link: "https://www.typescriptlang.org/",
  },
  unity: { name: "Unity", icon: unity, link: "https://unity.com/" },
  vercel: { name: "Vercel", icon: vercel, link: "https://vercel.com/" },
  vsc: {
    name: "VS Code",
    icon: vsc,
    link: "https://code.visualstudio.com/",
  },
  vue: { name: "Vue", icon: vue, link: "https://vuejs.org/" },
};

export default technologies;
