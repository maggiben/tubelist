const categories = ['Comedy', 'Crime', 'Drama', 'Factual', 'New Zeland', 'Reality', 'Sci-fi/Fantasy', 'Kids'];

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let items = categories.map((category, idx) => {
            return (<li key={idx}><a>{category}</a></li>);
        });
        return (<ul className="nav nav-pills center-pills">
            {items}
        </ul>);
    }

}

ReactDOM.render(
    <Menu />,
    document.getElementById('menu')
);
