// import _ from 'lodash'
// import './styles.css'
// import Icon from './icon.png'
require('./styles.css')
const Icon = require('./icon.png')

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.innerHTML = 'Hello webpack';
  element.classList.add('hello');

  // Add the image to our existing div.
  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
