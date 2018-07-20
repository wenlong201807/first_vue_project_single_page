import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';

function compoent() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['hello', 'webpack'], '');
  element.classList.add('hello');

  //将图像添加到我们现有的div
  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(compoent());