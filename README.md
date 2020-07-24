# About

Template repository for Sfeir School, this template could be use to start a school with revealJS and sfeir school theme

Don't forget to replace all xxx by your techno

## Files to changes

- `docs/scss/slides.scss` you could put here all your custom styles
- `docs/scripts/slides.js` you will reference all the markdown here. Don't forget to have 1 function per chapter (module).
- `docs/index.html` you should reference the correct technology in header

# Content of README

The text below is the template you could use for your readme

# XXX

A [SFEIR School](https://www.sfeir.com/formation/school/)

![logo](https://www.sfeir.com/img/school/formations/xxx.png)

[Planning, trainers and other details](https://www.sfeir.com/formation/school/xxx/)

# Slides

You can view the slides [here](https://sfeir-open-source.github.io/sfeir-school-xxx/).

## Develop

To run docs locally, go in directory `docs` and run `npx serve` of if you don't have node, you can use docker `docker-compose up`, and open slides on http://localhost:5000/.

## Workshop

Workshops are in directory `steps` : 
* two directories per workshop :
  * one with a README.md with workshop steps and source file to complete
  * a second directory suffixed with `-solution` which contains source file with solutions.
