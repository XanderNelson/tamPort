// const anime = require('../anime/lib/animejs');

anime({
  targets: '#initials path',
  strokeDashoffset: [anime.setDashoffset, 0],
  // easing: 'easeInOutQuad',
  easing: 'linear',
  duration: 15000,
  direction: 'alternate',
  // endDelay: 200,
  loop: true
})
