import {Component} from 'react';
import './Header.css';

export class Header extends Component {
    render() {
        const {titles, selected, changeSelected} = this.props;

        return (
            <header>
                <ul className="movie-list">
                    {titles.map((title, index) => (
                        <li
                            key={index}
                            className={
                                'movie-title ' +
                                (index == selected ? 'selected ' : '')
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
