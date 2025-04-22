import {Component} from 'react';
import './Main.css'

export class Main extends Component {
    render() {
        const actors = this.props.actors;
        const general = this.props.general;
        const plots = this.props.plots;
        let selected = this.props.selected;

        
        return (
            <main>
                <section className="general-list">
                    <div className="genre-list general-item">
                        {general[selected].genres.map((e, i) => (
                            <div key={i} className="genre-item">
                                {e}
                            </div>
                        ))}
                    </div>
                    <div className="studio-list general-item">
                        {general[selected].studios.map((e, i) => (
                            <div key={i} className="studio-item">
                                {e}
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
                        {actors[selected].map((e, i, a) =>
                            i + 1 < a.length ? e + ', ' : e
                        )}
                    </span>
                </section>
            </main>
        );
    }
}

export default Main;
