$(document).ready(function() {
  'use strict';

  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));

  var tool = new Tool();
  var c = Shape.Circle(200, 200, 50);
  c.fillColor = 'black';
  var text = new PointText(200, 200);
  text.justification = 'center';
  text.fillColor = 'white';
  text.fontSize = 15;
  text.content = 'Hello, world!';
  tool.onMouseDown = function(event) {
    var c = Shape.Circle(event.point.x, event.point.y, 20);
    c.fillColor = 'green';
  }
  paper.view.draw();
  console.log('main.js loaded');
});
