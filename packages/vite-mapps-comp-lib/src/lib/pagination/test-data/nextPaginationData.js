export const nextPaginationData = {
  items: [{
    text: '1',
    href: '/page=1'
  }, {
    text: '2',
    href: '/page=2'
  }, {
    type: 'dots'
  }, {
    text: '4',
    href: '/page=4'
  }, {
    text: '5',
    href: '/page=5',
    selected: true
  }],
  results: {
    count: 30,
    from: 10,
    to: 20,
    text: 'pages'
  },
  previous: {
    text: 'Previous',
    href: '/page=4'
  }
};
