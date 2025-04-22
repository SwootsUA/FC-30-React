import {Component} from 'react';
import './Footer.css';

export class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="contact">
                    Contact Us
                    <p>
                        In mail:{' '}
                        <a href="mailto:swoots@dev.co">swoots@dev.co</a>
                    </p>
                    <p>
                        At phone: <a href="tel:+380951231231">+380951231231</a>
                    </p>
                </div>
                <span className="copyright">2025©</span>
                <div>
                    Where to find Us
                    <address>Ukraine, Beresteiskyi Ave, 44, Kyiv</address>
                </div>
            </footer>
        );
    }
}

export default Footer;
