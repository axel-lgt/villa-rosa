import './Contact.scss';

const Contact = () => {
    return (
        <div className="contact-container" id="contact">
            <div className="contact-text">
                <h1>Contact</h1>
                <p>Here are all the information you need to contact us.</p>
            </div>
            <div className="contact-info-container">
                <div className="contact-info">
                    <h2>Opening hours</h2>
                    <p><em>Monday - Friday:</em> 11:30am - 2:30pm | 6:30pm - 11pm</p>
                    <p><em>Saturday:</em> 11:30am - 11pm</p>
                    <h2>Telephone</h2>
                    <p>01632 960765</p>
                    <h2>Email</h2>
                    <p>booking@villarosa.uk</p>
                    <h2>Facebook</h2>
                    <p>Villa Rosa</p>
                </div>
            </div>
        </div>
    )
};

export default Contact;
