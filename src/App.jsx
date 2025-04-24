import {Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

class App extends Component {
    state = {
        selected: 1,
        studio: {
            address: 'Ukraine, Beresteiskyi Ave, 44, Kyiv',
            email: 'swoots@dev.co',
            phone: '+380981231231',
            copyright: '2025',
        },
        movies: [
            {
                title: 'The Martian',
                plot: 'After a fierce storm forces his crew to evacuate Mars, astronaut Mark Watney is presumed dead and left behind. Alone on the hostile planet, he must rely on his ingenuity and spirit to survive while NASA and a team of international scientists work tirelessly to bring him home.',
                actors: [
                    'Matt Damon',
                    'Jessica Chastain',
                    'Chiwetel Ejiofor',
                    'Jeff Daniels',
                    'Michael Peña',
                ],
                general: {
                    country: 'United States',
                    studios: ['20th Century Fox'],
                    genres: ['Science Fiction', 'Adventure', 'Drama'],
                    year: '2015',
                },
            },
            {
                title: 'Interstellar',
                plot: 'In a future where Earth is becoming uninhabitable, former NASA pilot Cooper joins a daring mission through a wormhole to find a new home for humanity. As he ventures into the unknown, Cooper grapples with the complexities of time, space, and love, especially his bond with his daughter, Murphy.',
                actors: [
                    'Matthew McConaughey',
                    'Anne Hathaway',
                    'Jessica Chastain',
                    'Michael Caine',
                    'Matt Damon',
                ],
                general: {
                    country: 'United States',
                    studios: ['Paramount Pictures', 'Warner Bros.'],
                    genres: ['Science Fiction', 'Adventure', 'Drama'],
                    year: '2014',
                },
            },
            {
                title: 'Pacific Rim',
                plot: 'When colossal sea monsters known as Kaiju emerge from a portal in the Pacific Ocean, humanity responds by creating massive robots called Jaegers, piloted by pairs of humans. As the Kaiju attacks intensify, a washed-up pilot and an untested trainee are teamed up to drive a legendary but obsolete Jaeger in a last-ditch effort to save the world.',
                actors: [
                    'Charlie Hunnam',
                    'Idris Elba',
                    'Rinko Kikuchi',
                    'Charlie Day',
                    'Ron Perlman',
                ],
                general: {
                    country: 'United States',
                    studios: ['Legendary Pictures', 'Warner Bros.'],
                    genres: ['Science Fiction', 'Adventure', 'Action'],
                    year: '2013',
                },
            },
        ],
    };

    changeSelected = (index) => {
        this.setState({selected: index});
    }

    render() {
        return (
            <>
                <Header
                    selected={this.state.selected}
                    titles={this.state.movies.map(e => e.title)}
                    changeSelected={this.changeSelected}
                />
                <Main
                    selected={this.state.selected}
                    plots={this.state.movies.map(e => e.plot)}
                    actors={this.state.movies.map(e => e.actors)}
                    general={this.state.movies.map(e => e.general)}
                >
                </Main>
                <Footer studio={this.state.studio} />
            </>
        );
    }
}

export default App;
