import {Component} from 'react';
import './Main.css';

export class Main extends Component {
    render() {
        const actors = this.props.actors;
        const general = this.props.general;
        const plots = this.props.plots;
        const selected = this.props.selected;

        return (
            <main>
                <section className="general-list">
                    <div className="genre-list general-item">
                        {general[selected].genres.map((genre, index) => (
                            <div key={index} className="genre-item">
                                {genre}
                            </div>
                        ))}
                    </div>
                    <div className="studio-list general-item">
                        {general[selected].studios.map((studio, index) => (
                            <div key={index} className="studio-item">
                                {studio}
                            </div>
                        ))}
                    </div>
                    <div className="country general-item">
                        {general[selected].country}
                    </div>
                </section>
                <section className="plot">{plots[selected]}</section>
                <section className="actors">
                    Featuring:{' '}
                    <span className="actors-list">
                        {actors[selected].map((actor, index, actors) =>
                            index + 1 < actors.length ? actor + ', ' : actor
                        )}
                    </span>
                </section>
            </main>
        );
    }
}

export default Main;
