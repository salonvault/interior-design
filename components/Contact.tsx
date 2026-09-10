import { Label } from "./Primitives";

export default function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="container">
        <div className="contact-top">
          <Label>Every meaningful space starts with a conversation.</Label>
          <span className="contact-star" aria-hidden="true">
            ✳
          </span>
        </div>
        <a
          className="contact-title"
          href="mailto:hello@yourstudio.com"
          data-reveal
        >
          <span>What could</span>
          <span>
            <em>your space</em> be?{" "}
            <span className="contact-arrow" aria-hidden="true">
              ↗
            </span>
          </span>
        </a>
        <div className="contact-details">
          <div>
            <Label>New beginnings</Label>
            <a href="mailto:hello@yourstudio.com">hello@yourstudio.com</a>
            <p>Available by enquiry</p>
          </div>
          <div>
            <Label>Studio presence</Label>
            <p>
              Remote and local collaborations
              <br />
              By appointment
            </p>
            <span className="contact-appointment">
              By appointment. Always personal.
            </span>
          </div>
          <div>
            <Label>Continue exploring</Label>
            <a href="#selected-work">Selected work ↗</a>
            <a href="#studio">Our studio ↗</a>
            <a href="#philosophy">Our philosophy ↗</a>
          </div>
        </div>
        <div className="footer-wordmark" aria-label="Interior">
          Interior<span>®</span>
        </div>
        <div className="footer-bottom">
          <Label>© {new Date().getFullYear()} Interior Studio</Label>
          <span>Architecture. Interiors. A sense of belonging.</span>
          <a href="#top">Back to the beginning ↑</a>
        </div>
      </div>
    </footer>
  );
}
