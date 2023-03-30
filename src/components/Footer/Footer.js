import "./footer.css"
import { FaTypo3, FaFacebook, FaInstagram, FaYoutube, FaTwitterSquare, FaLinkedin } from "react-icons/fa"
import Button from "../Button/Button"

const Footer = () => {
    return (
        <footer className="footer-container">
            <article className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter href recieve our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                        <Button buthrefnStyle="btn-outline">Subscribe</Button>
                    </form>
                </div>
            </article>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                <div class='footer-link-items'>
                    <h2>About Us</h2>
                    <a href='/sign-up'>How it works</a>
                    <a href='/'>Testimonials</a>
                    <a href='/'>Careers</a>
                    <a href='/'>Investors</a>
                    <a href='/'>Terms of Service</a>
                </div>
                <div class='footer-link-items'>
                    <h2>Contact Us</h2>
                    <a href='/'>Contact</a>
                    <a href='/'>Support</a>
                    <a href='/'>Destinations</a>
                    <a href='/'>Sponsorships</a>
                </div>
                </div>
                <div className='footer-link-wrapper'>
                <div class='footer-link-items'>
                    <h2>Videos</h2>
                    <a href='/'>Submit Video</a>
                    <a href='/'>Ambassadors</a>
                    <a href='/'>Agency</a>
                    <a href='/'>Influencer</a>
                </div>
                <div class='footer-link-items'>
                    <h2>Social Media</h2>
                    <a href='/'>Instagram</a>
                    <a href='/'>Facebook</a>
                    <a href='/'>Youtube</a>
                    <a href='/'>Twitter</a>
                </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <a href='/' className='social-logo'>
                        TRVL
                        <FaTypo3 />
                        </a>
                    </div>
                    <small class='website-rights'>TRVL © 2020</small>
                    <div class='social-icons'>
                        <a
                        class='social-icon-link facebook'
                        href='/'
                        target='_blank'
                        aria-label='Facebook'
                        >
                        <FaFacebook />
                        </a>
                        <a
                        class='social-icon-link instagram'
                        href='/'
                        target='_blank'
                        aria-label='Instagram'
                        >
                        <FaInstagram />
                        </a>
                        <a
                        class='social-icon-link youtube'
                        href='/'
                        target='_blank'
                        aria-label='Youtube'
                        >
                        <FaYoutube />
                        </a>
                        <a
                        class='social-icon-link twitter'
                        href='/'
                        target='_blank'
                        aria-label='Twitter'
                        >
                        <FaTwitterSquare />
                        </a>
                        <a
                        class='social-icon-link twitter'
                        href='/'
                        target='_blank'
                        aria-label='LinkedIn'
                        >
                        <FaLinkedin />
                        </a>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer