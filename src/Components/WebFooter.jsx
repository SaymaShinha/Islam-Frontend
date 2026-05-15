import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function WebFooter() {
    return (
        <>
            <footer className="footer footer-center bg-primary text-primary-content p-10">
                {/*<nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>*/}
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover" href="/about">About us</a>
                    <a className="link link-hover" href="/contact">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover" href="/terms-of-use">Terms of use</a>
                    <a className="link link-hover" href="/privacy-policy">Privacy policy</a>
                    <a className="link link-hover" href="/disclaimer">Disclaimer</a>
                </nav>
                <nav>
                    <h6>Social ID</h6>
                    <a href="https://github.com/SaymaShinha"><FontAwesomeIcon icon={faGithub} /></a>

                    <p>Copyright © - All right reserved by S3</p>
                </nav>

            </footer>
        </>
    );
}

export default WebFooter;