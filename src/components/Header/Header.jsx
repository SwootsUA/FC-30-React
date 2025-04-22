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
                    {movieTites.map((title, index) => (
                        <li
                            key={index}
                            className={
                                index == selected
                                    ? 'selected movie-title'
                                    : 'movie-title'
                            }
                            onClick={() => changeSelected(index)}
                        >
                            {title}
                        </li>
                    ))}
                </ul>
            </header>
        );
    }
}

export default Header;
