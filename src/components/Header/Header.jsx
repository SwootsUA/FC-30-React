import {Component} from 'react';
import './Header.css';

export class Header extends Component {
    render() {
        const movieTites = this.props.titles;
        const selected = this.props.selected;
        const changeSelected = this.props.changeSelected;

        return (
            <header>
                <ul className="movie-list">
                    {movieTites.map((e, i) => (
                        <li
                            key={i}
                            className={
                                i == selected
                                    ? 'selected movie-title'
                                    : 'movie-title'
                            }
                            onClick={() => changeSelected(i)}
                        >
                            {e}
                        </li>
                    ))}
                </ul>
            </header>
        );
    }
}

export default Header;
