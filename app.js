const players = [
    {
        name: "Tom",
        score: 50
    },
    {
        name: "Treasure",
        score: 85
    },
    {
        name: "Ashley",
        score: 95
    },
    {
        name: "James",
        score: 80
    },
    {
        name: "Tiffany",
        score: 55
    }
]

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    );
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                {props.name}
            </span>
            <Counter score={props.score} />
        </div>
    );
}

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

const App = (props) => {
    return (
        <div className="scoreboard">
            <Header
                title="My Scoreboard"
                totalPlayers={props.initialPlayers.length}
            />

            {/* Player List */}
            {props.initialPlayers.map(player =>
                <Player
                    name={player.name}
                    score={player.score}
                />
            )}
        </div>
    );
}

ReactDOM.render(
    <App initialPlayers={players} />,
    document.getElementById('root')
);