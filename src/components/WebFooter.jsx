import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function WebFooter() {
  return (
    <>
      <footer className="bg-primary text-primary-content px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <nav className="text-left">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-xl">
                🕌
              </span>

              <span className="text-xl font-bold">Furqan Life</span>
            </div>

            <h6 className="footer-title mb-3">FURQAN LIFE</h6>

            <p className="max-w-sm">
              Furqan Life is a digital sanctuary for Quranic study and
              reflection.
            </p>
          </nav>

          {/* Links */}
          <nav className="text-left">
            <h6 className="footer-title mb-3">Links</h6>

            <a className="link link-hover block mb-2" href="/about">
              About us
            </a>

            <a className="link link-hover block mb-2" href="/contact">
              Contact
            </a>

            <a className="link link-hover block mb-2" href="/terms-of-use">
              Terms of use
            </a>

            <a className="link link-hover block mb-2" href="/privacy-policy">
              Privacy policy
            </a>

            <a className="link link-hover block" href="/disclaimer">
              Disclaimer
            </a>
          </nav>

          {/* Social */}
          <nav className="text-left">
            <h6 className="footer-title mb-3">Social</h6>

            <div className="flex gap-4 mb-6">
              <a
                href="https://github.com/SaymaShinha"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-base-100/20 flex items-center justify-center hover:bg-base-100/30 transition"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>

              <a
                href="https://www.linkedin.com/in/sayma-shinha-ab293b298/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-base-100/20 flex items-center justify-center hover:bg-base-100/30 transition"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </a>
            </div>

            <p className="text-sm">
              Copyright © {new Date().getFullYear()} — All rights reserved by S3
            </p>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default WebFooter;
