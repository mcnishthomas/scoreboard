const title = 'Hello World';
const desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris';
const mainTitleId = 'main-title';
const name = 'Tom';

const header = (
    <header>
        <h1 id={mainTitleId}>{name}'s React Element</h1>
        <p>{desc}</p>
    </header>
);

ReactDOM.render(
    header,
    document.getElementById('root')
);