import analytics from "./icons/analytics.png";
import bootstrap from "./icons/bootstrap.png";
import c from "./icons/c.png";
import clickhouse from "./icons/clickhouse.png";
import confluence from "./icons/confluence.png";
import cplusplus from "./icons/cplusplus.png";
import css3 from "./icons/css3.png";
import docker from "./icons/docker.png";
import echo from "./icons/echo.png";
import express from "./icons/express.png";
import figma from "./icons/figma.png";
import flask from "./icons/flask.png";
import fusion360 from "./icons/fusion360.png";
import fx from "./icons/fx.png";
import git from "./icons/git.png";
import github from "./icons/github.png";
import gitlab from "./icons/gitlab.png";
import go from "./icons/go.png";
import gorm from "./icons/gorm.png";
import grafana from "./icons/grafana.png";
import grpc from "./icons/grpc.png";
import haskell from "./icons/haskell.png";
import heroku from "./icons/heroku.png";
import honeycomb from "./icons/honeycomb.png";
import html5 from "./icons/html5.png";
import java from "./icons/java.png";
import javascript from "./icons/javascript.png";
import jenkins from "./icons/jenkins.png";
import jira from "./icons/jira.png";
import jquery from "./icons/jquery.png";
import jupyter from "./icons/jupyter.png";
import keras from "./icons/keras.png";
import kubernetes from "./icons/kubernetes.png";
import latex from "./icons/latex.png";
import linux from "./icons/linux.png";
import markdown from "./icons/markdown.png";
import materialui from "./icons/materialui.png";
import mongodb from "./icons/mongodb.png";
import mysql from "./icons/mysql.png";
import nats from "./icons/nats.png";
import nextjs from "./icons/nextjs.png";
import nodejs from "./icons/nodejs.png";
import office from "./icons/office.png";
import openai from "./icons/openai.png";
import opengl from "./icons/opengl.png";
import opentelemetry from "./icons/opentelemetry.png";
import overleaf from "./icons/overleaf.png";
import playwright from "./icons/playwright.png";
import postgresql from "./icons/postgresql.png";
import postman from "./icons/postman.png";
import prometheus from "./icons/prometheus.png";
import python from "./icons/python.png";
import rails from "./icons/rails.png";
import react from "./icons/react.png";
import reactquery from "./icons/reactquery.png";
import redis from "./icons/redis.png";
import redux from "./icons/redux.png";
import replit from "./icons/replit.png";
import ruby from "./icons/ruby.png";
import shadcn from "./icons/shadcn.png";
import slack from "./icons/slack.png";
import sql from "./icons/sql.png";
import sqlalchemy from "./icons/sqlalchemy.png";
import sqlite from "./icons/sqlite.png";
import stripe from "./icons/stripe.png";
import tailwind from "./icons/tailwind.png";
import tensorflow from "./icons/tensorflow.png";
import typescript from "./icons/typescript.png";
import unity from "./icons/unity.png";
import vercel from "./icons/vercel.png";
import vsc from "./icons/vsc.png";
import vue from "./icons/vue.png";
import xmatters from "./icons/xmatters.png";
import zustand from "./icons/zustand.png";

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
  clickhouse: {
    name: "ClickHouse",
    icon: clickhouse,
    link: "https://clickhouse.com/",
  },
  confluence: {
    name: "Confluence",
    icon: confluence,
    link: "https://www.atlassian.com/software/confluence",
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
  echo: { name: "Echo", icon: echo, link: "https://echo.labstack.com/" },
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
  fx: { name: "Fx", icon: fx, link: "https://fxdocs.dev/" },
  git: { name: "Git", icon: git, link: "https://git-scm.com/" },
  github: { name: "GitHub", icon: github, link: "https://github.com/" },
  gitlab: { name: "GitLab", icon: gitlab, link: "https://gitlab.com/" },
  go: { name: "Go", icon: go, link: "https://golang.org/" },
  analytics: {
    name: "Google Analytics",
    icon: analytics,
    link: "https://analytics.google.com/",
  },
  gorm: { name: "GORM", icon: gorm, link: "https://gorm.io/" },
  grafana: { name: "Grafana", icon: grafana, link: "https://grafana.com/" },
  grpc: { name: "gRPC", icon: grpc, link: "https://grpc.io/" },
  haskell: { name: "Haskell", icon: haskell, link: "https://www.haskell.org/" },
  heroku: { name: "Heroku", icon: heroku, link: "https://www.heroku.com/" },
  honeycomb: {
    name: "Honeycomb",
    icon: honeycomb,
    link: "https://www.honeycomb.io/",
  },
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
  jira: {
    name: "Jira",
    icon: jira,
    link: "https://www.atlassian.com/software/jira",
  },
  jquery: { name: "jQuery", icon: jquery, link: "https://jquery.com/" },
  jupyter: {
    name: "Jupyter",
    icon: jupyter,
    link: "https://jupyter.org/",
  },
  keras: { name: "Keras", icon: keras, link: "https://keras.io/" },
  kubernetes: {
    name: "Kubernetes",
    icon: kubernetes,
    link: "https://kubernetes.io/",
  },
  latex: { name: "LaTeX", icon: latex, link: "https://www.latex-project.org/" },
  linux: { name: "Linux", icon: linux, link: "https://www.linux.org/" },
  markdown: {
    name: "Markdown",
    icon: markdown,
    link: "https://www.markdownguide.org/getting-started/",
  },
  materialui: {
    name: "MaterialUI",
    icon: materialui,
    link: "https://material-ui.com/",
  },
  mongodb: { name: "MongoDB", icon: mongodb, link: "https://www.mongodb.com/" },
  mysql: { name: "MySQL", icon: mysql, link: "https://www.mysql.com/" },
  nats: { name: "NATS", icon: nats, link: "https://nats.io/" },
  nextjs: { name: "Next.js", icon: nextjs, link: "https://nextjs.org/" },
  nodejs: { name: "Node.js", icon: nodejs, link: "https://nodejs.org/" },
  office: {
    name: "Microsoft Office",
    icon: office,
    link: "https://www.microsoft.com/en/microsoft-365",
  },
  openai: { name: "OpenAI", icon: openai, link: "https://www.openai.com/" },
  opengl: { name: "OpenGL", icon: opengl, link: "https://www.opengl.org/" },
  opentelemetry: {
    name: "OpenTelemetry",
    icon: opentelemetry,
    link: "https://opentelemetry.io/",
  },
  overleaf: {
    name: "Overleaf",
    icon: overleaf,
    link: "https://www.overleaf.com/",
  },
  playwright: {
    name: "Playwright",
    icon: playwright,
    link: "https://playwright.dev/",
  },
  postgresql: {
    name: "PostgreSQL",
    icon: postgresql,
    link: "https://www.postgresql.org/",
  },
  postman: { name: "Postman", icon: postman, link: "https://www.postman.com/" },
  prometheus: {
    name: "Prometheus",
    icon: prometheus,
    link: "https://prometheus.io/",
  },
  python: { name: "Python", icon: python, link: "https://www.python.org/" },
  rails: { name: "Rails", icon: rails, link: "https://rubyonrails.org/" },
  react: { name: "React", icon: react, link: "https://reactjs.org/" },
  reactquery: {
    name: "React Query",
    icon: reactquery,
    link: "https://react-query.tanstack.com/",
  },
  redis: { name: "Redis", icon: redis, link: "https://redis.io/" },
  redux: { name: "Redux", icon: redux, link: "https://redux.js.org/" },
  replit: { name: "Replit", icon: replit, link: "https://replit.com/" },
  ruby: { name: "Ruby", icon: ruby, link: "https://www.ruby-lang.org/" },
  shadcn: { name: "Shadcn", icon: shadcn, link: "https://ui.shadcn.com/" },
  slack: { name: "Slack", icon: slack, link: "https://slack.com/" },
  sql: { name: "SQL", icon: sql, link: "https://en.wikipedia.org/wiki/SQL" },
  sqlalchemy: {
    name: "SQLAlchemy",
    icon: sqlalchemy,
    link: "https://www.sqlalchemy.org/",
  },
  sqlite: { name: "SQLite", icon: sqlite, link: "https://www.sqlite.org/" },
  stripe: { name: "Stripe", icon: stripe, link: "https://stripe.com/" },
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
  xmatters: {
    name: "xMatters",
    icon: xmatters,
    link: "https://www.xmatters.com/",
  },
  zustand: {
    name: "Zustand",
    icon: zustand,
    link: "https://zustand-demo.pmnd.rs/",
  },
};

export default technologies;
