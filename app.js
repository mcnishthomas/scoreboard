const title = React.createElement(
    'h1',
    { id: 'main-title', title: 'This is a title.' },
    'Hello World'
);

const desc = React.createElement(
    'p',
    null,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'
);

const header = React.createElement(
    'header',
    null,
    title,
    desc
);

ReactDOM.render(
    header,
    document.getElementById('root')
);