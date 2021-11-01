# SFEIR School Cypress

<p align="center">
 <img style="display:block" width="20%" height="20%" src="./docs/assets/images/sfeir-school-logo.png" alt="SFEIR School logo">
</p>

<br/>

[Discover the SFEIR Schools](https://www.sfeir.com/fr/contenus-dexperts/sfeir-school)

<br/>

## Slides

You can view the slides [here](https://sfeir-open-source.github.io/sfeir-school-cypress/).

<br/>

## Develop

To run docs locally, go in directory `docs` and run `npm run serve` of if you don't have node, you can use docker `docker-compose up`, and open slides on http://localhost:5000/.

<br/>

## Workshop

Workshops are in directory `exercice/steps` :

- two directories per workshop :
  - one with a README.md with workshop steps and source file to complete
  - a second directory suffixed with `-solution` which contains source file with solutions.

<br/>

## Culture

The `steps` folder is a mono repo which contains three applications:

- react-solution
- react-solution-e2e
- nest-server

This mono repos was bootstrapped with the nrwl technologies and especially the `@nrwl/react` and `@nrwl/nest` technologies

For more information visit the following [website](https://nx.dev/)

<br/>

## Installation workshop and play with it

In the folder `exercices/steps`
<br/>

### Installation

```bash
npm install || npm ci
```

<br/>

### Launch the react-solution project:

```bash
npm run start-react-solution
```

<br/>

### Launch the react-solution-e2e project

```bash
npm run start-react-solution-e2e
```

<br/>

### Launch the nest-server project

```bash
npm run start-nest-server
```

## Visual studio code user

If you use Vscode, this repo will automatically install the necessary extension if you accept the proposal.
<br/>
All the necessary tasks are already created and you can launch this task out of the boxe
</br>

## Contributing

### Contributing Guidelines

Read through our [contributing guidelines][contributing] to learn about our submission process, coding rules and more.

### Want to Help?

Want to file a bug, contribute some code, or improve documentation? Excellent! Read up on our guidelines for [contributing][contributing] and then check out one of our issues labeled as <kbd>help wanted</kbd> or <kbd>good first issue</kbd>.

### Code of Conduct

Help us keep Angular open and inclusive. Please read and follow our [Code of Conduct][codeofconduct].

[contributing]: CONTRIBUTING.md
[codeofconduct]: https://github.com/sfeir-open-source/code-of-conduct/blob/master/CODE_OF_CONDUCT.md
