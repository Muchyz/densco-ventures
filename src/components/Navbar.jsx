import { useState, useRef, useLayoutEffect } from 'react';
import { FacebookIcon, WhatsAppIcon, TikTokIcon, InstagramIcon } from './SocialIcons.jsx';
import { Link, NavLink } from 'react-router-dom';
import {
  Home as HomeIcon,
  Info,
  ShieldCheck,
  Images,
  MessageSquareQuote,
  Award,
  UserRound,
  PhoneCall,
  Menu,
  X,
} from 'lucide-react';
import { company } from '../data/content.js';

const pageLinks = [
  { label: 'Home', to: '/', icon: HomeIcon },
  { label: 'About Us', to: '/about', icon: Info },
  { label: 'Our Services', to: '/our-services', icon: ShieldCheck },
  { label: 'Gallery', to: '/gallery', icon: Images },
  { label: 'Certifications', to: '/certifications', icon: ShieldCheck },
  { label: 'Testimonials', to: '/testimonials', icon: MessageSquareQuote },
];

const hashLinks = [
  { label: 'Why Choose Us', to: '/#why-choose-us', icon: Award },
  { label: "Director's Message", to: '/#director-message', icon: UserRound },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const headerRef = useRef(null);

  useLayoutEffect(() => {
    const setNavH = () => {
      if (headerRef.current) {
        document.documentElement.style.setProperty(
          '--nav-h',
          `${headerRef.current.offsetHeight}px`
        );
      }
    };
    setNavH();
    window.addEventListener('resize', setNavH);
    return () => window.removeEventListener('resize', setNavH);
  }, []);

  return (
    <header className="navbar" ref={headerRef}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand" onClick={close}>
          <img
            className="navbar__logo"
            src="/logo.png"
            alt="Densco Ventures Limited circular badge logo"
          />
        </Link>

        {/* Desktop nav — unchanged behaviour, just icons added */}
        <nav className="navbar__links navbar__links--desktop">
          {pageLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <item.icon size={16} strokeWidth={2} />
              <span>{item.label}</span>
            </NavLink>
          ))}
          {hashLinks.map((item) => (
            <Link key={item.to} to={item.to}>
              <item.icon size={16} strokeWidth={2} />
              <span>{item.label}</span>
            </Link>
          ))}
          <Link to="/contact">
            <PhoneCall size={16} strokeWidth={2} />
            <span>Contact Us</span>
          </Link>
        </nav>

        <button
          className="navbar__toggle"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <Menu size={26} />
        </button>
      </div>

      {/* Mobile drawer + overlay */}
      <div className={`navbar__overlay${open ? ' open' : ''}`} onClick={close} />
      <aside className={`navbar__drawer${open ? ' open' : ''}`}>
        <div className="navbar__drawer-head">
          <img className="navbar__drawer-logo" src="/logo.png" alt="Densco Ventures badge" />
          <button className="navbar__drawer-close" aria-label="Close menu" onClick={close}>
            <X size={22} />
          </button>
        </div>

        <nav className="navbar__drawer-links">
          {pageLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={close}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <item.icon size={20} strokeWidth={2} />
              <span>{item.label}</span>
            </NavLink>
          ))}
          {hashLinks.map((item) => (
            <Link key={item.to} to={item.to} onClick={close}>
              <item.icon size={20} strokeWidth={2} />
              <span>{item.label}</span>
            </Link>
          ))}
          <Link to="/contact" onClick={close} className="navbar__drawer-cta">
            <PhoneCall size={20} strokeWidth={2} />
            <span>Contact Us</span>
          </Link>

          <p className="navbar__drawer-social-label">Follow Us on</p>
          <div className="navbar__drawer-social">
            <a href="https://www.facebook.com/profile.php?id=61569605530931" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookIcon /></a>
            <a href="https://wa.me/254718539540" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><WhatsAppIcon /></a>
            <a href="https://vm.tiktok.com/ZS9k18PwgrBKu-gOcbD/" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><TikTokIcon /></a>
            <a href="https://www.instagram.com/apronsecurityservices" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></a>
          </div>
        </nav>
      </aside>
    </header>
  );
}
