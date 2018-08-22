const html = 0;
const js = 1;
const backend = 2;
const zipline = 3;
const frontEndProject = 3;
const backEndProject = 4;
const bonfire = 5;
const modern = 6;
const step = 7;
const quiz = 8;
const invalid = 9;
const python = 10;

// individual exports
exports.backend = backend;
exports.frontEndProject = frontEndProject;

exports.challengeTypes = {
  html,
  js,
  backend,
  zipline,
  frontEndProject,
  backEndProject,
  bonfire,
  modern,
  step,
  quiz,
  invalid,
  python
};

// turn challengeType to file ext
exports.pathsMap = {
  [html]: 'html',
  [js]: 'js',
  [bonfire]: 'js',
  [python]: 'py'
};
// determine the component to view for each challenge
exports.viewTypes = {
  [html]: 'classic',
  [js]: 'classic',
  [bonfire]: 'classic',
  [frontEndProject]: 'project',
  [backEndProject]: 'project',
  [modern]: 'modern',
  [step]: 'step',
  [quiz]: 'quiz',
  [backend]: 'backend',
  [python]: 'classic'
};

// determine the type of submit function to use for the challenge on completion
exports.submitTypes = {
  [html]: 'tests',
  [js]: 'tests',
  [bonfire]: 'tests',
  // requires just a single url
  // like codepen.com/my-project
  [frontEndProject]: 'project.frontEnd',
  // requires two urls
  // a hosted URL where the app is running live
  // project code url like GitHub
  [backEndProject]: 'project.backEnd',

  [step]: 'step',
  [quiz]: 'quiz',
  [backend]: 'backend',
  [modern]: 'tests',
  [python]: 'python-tests'
};
