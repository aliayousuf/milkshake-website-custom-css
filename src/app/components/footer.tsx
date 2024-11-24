import "./footer.css";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <h1>Milkshake Factory</h1>
                </div>
                <nav className="footer-links">
                    <ul>
                        <li><Link href="#about">About Us</Link></li>
                        <li><Link href="/menu">Menu</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="#faq">FAQ</Link></li>
                    </ul>
                </nav>
                <div className="footer-socials">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></Link>
                        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></Link>
                        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></Link>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Milkshake Heaven. All Rights Reserved.</p>
            </div>
        </footer>
    );
}