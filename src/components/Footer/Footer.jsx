import {Component} from 'react';
import './Footer.css';

export class Footer extends Component {
    render() {
        const {phone, email, address, copyright} = this.props.studio;

        return (
            <footer>
                <div className="contact">
                    Contact Us
                    <p>
                        In mail:{' '}
                        <a href={`mailto:${email}`}>{email}</a>
                    </p>
                    <p>
                        At phone: <a href={`tel:${phone}`}>{phone}</a>
                    </p>
                </div>
                <span className="copyright">{copyright}©</span>
                <div>
                    Where to find Us
                    <address>{address}</address>
                </div>
            </footer>
        );
    }
}

export default Footer;
