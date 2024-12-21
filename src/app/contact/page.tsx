import Image from 'next/image';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';

function ContactPage() {
  return (
    <div className="contact-container poppins">
      <div className="form-section">
        <h1 className="header-text">Have a Sip!</h1>
        <div className="description">
          <p>We will provide you The Best.</p>
        </div>
        <div className="form-container">
          <form className="contact-form poppins">
            <div>
              <label htmlFor="fullname">Full Name</label>
              <br />
              <input type="text" name="fullname" id="fullname" />
            </div>
            <div className="input-group">
              <label htmlFor="email">E-mail</label>
              <br />
              <input type="email" name="email" id="email" />
            </div>
            <div className="input-group">
              <label htmlFor="message">Order</label>
              <br />
              <textarea name="message" id="message"></textarea>
            </div>
            <button type="submit" id="submitButton">
              Contact us
            </button>
          </form>
          <div className="contact-info">
            <div>
              <h1>Contact</h1>
              <p>akksa007@gmail.com</p>
            </div>
            <div className="info-item">
              <h1>Based in</h1>
              <p>Karachi, Pakistan</p>
            </div>
            <div className="social-links">
              <AiOutlineInstagram />
              <AiOutlineTwitter />
            </div>
          </div>
        </div>
        
      </div>
      <div className="image-section">
        <Image src="/contact.jpeg" alt="photo" width={500} height={600} />
      </div>
    </div>
  );
}

export default ContactPage;
