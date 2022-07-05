export const paginationData = {
  items: [{
    text: '1',
    href: '/page=1'
  }, {
    text: '2',
    href: '/page=2',
    selected: true
  }, {
    text: '3',
    href: '/page=3'
  }, {
    type: 'dots'
  }, {
    text: '5',
    href: '/page=5'
  }],
  results: {
    count: 30,
    from: 10,
    to: 20,
    text: 'pages'
  },
  previous: {
    text: 'Previous',
    href: '/page=1'
  },
  next: {
    text: 'Next',
    href: '/page=3'
  }
};