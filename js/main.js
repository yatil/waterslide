var keys = {
  tab:     9,
  enter:  13,
  esc:    27,
  space:  32,
  left:   37,
  up:     38,
  right:  39,
  down:   40,
  pgUp:   33,
  pgDwn:  34,
};

function next() {
  var nextels = document.querySelectorAll('.next:not(.played)');
  if(!nextels.length) {
    window.location.href = document.querySelector('#nextbtn').getAttribute('href');
  } else {
    nextels[0].classList.add('played');
    var instep = document.querySelectorAll('.next[data-step="' + nextels[0].getAttribute('data-step') + '"]');
    if(instep.length) {
      for (var i = instep.length - 1; i >= 0; i--) {
        instep[i].classList.add('played');
      }
    }
  }
}

function prev() {
  var prevels = document.querySelectorAll('.played');
  if(!prevels.length) {
    window.location.href = document.querySelector('#prevbtn').getAttribute('href');
  } else {
    prevels[prevels.length-1].classList.remove('played');
    var instep = document.querySelectorAll('.next[data-step="' + prevels[prevels.length-1].getAttribute('data-step') + '"]');
    if(instep.length) {
      for (var i = instep.length - 1; i >= 0; i--) {
        instep[i].classList.remove('played');
      }
    }
  }
}

document.querySelector('body').addEventListener("keydown", function(event) {
  if (!event.target.getAttribute('contenteditable')) {
    switch (event.keyCode) {
      case keys.right:
      case keys.pgDwn:
        next();
        event.preventDefault();
        event.stopPropagation();
        return false;
        break;
      case keys.left:
      case keys.pgUp:
        prev();
        event.preventDefault();
        event.stopPropagation();
        return false;
        break;
    }
  }
});

var more = document.querySelector('.more-info');

if (more) {
  more.addEventListener("click", function(event) {
    document.querySelector('#content').scrollIntoView({ behavior: 'smooth' });
  });
}

var links = document.querySelectorAll('#content a, .slide a');
for (var i = links.length - 1; i >= 0; i--) {
  links[i].setAttribute('target', '_blank');
}