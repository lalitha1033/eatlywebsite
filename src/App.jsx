
import React from "react";
import {
  Leaf,
  Search,
  ShoppingBasket,
  Store,
  Recycle,
  ArrowRight,
  CheckCircle2,
  Heart,
  Mail,
  Sparkles
} from "lucide-react";
import "./App.css";

const features = [
  {
    icon: <Search />,
    title: "Discover Food",
    description: "Explore food options that match your preferences and everyday needs."
  },
  {
    icon: <ShoppingBasket />,
    title: "Affordable Choices",
    description: "Discover convenient food options that make your budget go further."
  },
  {
    icon: <Store />,
    title: "Connect Businesses",
    description: "Help food businesses connect with more customers and grow."
  },
  {
    icon: <Recycle />,
    title: "Reduce Food Waste",
    description: "Encourage smarter food choices and support a sustainable food ecosystem."
  }
];

function App() {
  return (
    <div className="website">

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          <span className="logo-icon"><Leaf size={25} /></span>
          <span>Eatly<span className="logo-dot">.</span></span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#benefits">Benefits</a>
        </div>

        <a href="#contact" className="nav-button">
          Join Eatly <ArrowRight size={16} />
        </a>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="eyebrow">
            <Leaf size={15} /> A smarter way to discover food
          </div>

          <h1>
            Good Food.
            <br />
            <span>Better Choices.</span>
            <br />
            Brighter Future.
          </h1>

          <p className="hero-description">
            Discover affordable food options, connect with food businesses,
            and be part of a movement towards a more sustainable food future.
          </p>

          <div className="hero-actions">
            <a href="#features" className="primary-button">
              Explore Eatly <ArrowRight size={18} />
            </a>
            <a href="#about" className="secondary-button">
              Learn More
            </a>
          </div>

          <div className="hero-note">
            <CheckCircle2 size={17} />
            Better food choices for everyone.
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1000&q=85"
            alt="Fresh healthy food bowl"
          />
          <div className="floating-card">
            <span className="floating-icon"><Heart size={19} /></span>
            <div>
              <strong>Eat Better</strong>
              <small>Choose smarter every day</small>
            </div>
          </div>
          <div className="image-label">
            <Leaf size={15} /> Fresh choices. Sustainable future.
          </div>
        </div>
      </section>

      {/* IMPACT STRIP */}
      <section className="impact-strip">
        <div>
          <Leaf />
          <span>Food Accessibility</span>
        </div>
        <div>
          <Heart />
          <span>Better Choices</span>
        </div>
        <div>
          <Recycle />
          <span>Less Food Waste</span>
        </div>
        <div>
          <Store />
          <span>Business Connections</span>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about section" id="about">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?w=900&q=85"
            alt="Fresh ingredients and healthy food"
          />
        </div>

        <div className="about-content">
          <span className="section-tag">ABOUT EATLY</span>
          <h2>Making food more accessible, convenient and sustainable.</h2>
          <p>
            Eat﻿ly is a smart food platform focused on connecting consumers
            with suitable food options and helping food businesses reach more
            customers.
          </p>
          <p>
            We believe technology can support better food discovery, improve
            accessibility, and encourage a food ecosystem where less goes to
            waste.
          </p>

          <a href="#contact" className="text-link">
            Be part of our journey <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features section" id="features">
        <div className="section-heading">
          <span className="section-tag">WHAT WE OFFER</span>
          <h2>A smarter food experience starts here.</h2>
          <p>Simple ideas. Meaningful benefits. A better food ecosystem.</p>
        </div>

        <div className="feature-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={feature.title}>
              <div className="feature-icon">{feature.icon}</div>
              <span className="feature-number">0{index + 1}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <a href="#contact" aria-label={`Learn about ${feature.title}`}>
                Learn more <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="benefits section" id="benefits">
        <div className="benefits-content">
          <span className="section-tag">WHY EATLY?</span>
          <h2>Small choices can create a big difference.</h2>
          <p>
            Eat﻿ly aims to make food discovery easier while supporting
            consumers, food businesses, and a more sustainable future.
          </p>

          <div className="benefit-list">
            <div><CheckCircle2 /> Convenient food discovery</div>
            <div><CheckCircle2 /> Affordable food options</div>
            <div><CheckCircle2 /> Better customer connections</div>
            <div><CheckCircle2 /> Awareness of food waste reduction</div>
          </div>
        </div>

        <div className="benefits-image">
          <img
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&q=85"
            alt="Healthy fresh food on a table"
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how section">
        <div className="section-heading">
          <span className="section-tag">OUR APPROACH</span>
          <h2>Good food connections, made simpler.</h2>
        </div>

        <div className="steps">
          <div className="step">
            <span>01</span>
            <h3>Discover</h3>
            <p>Explore food choices and find options that suit your needs.</p>
          </div>
          <div className="step">
            <span>02</span>
            <h3>Connect</h3>
            <p>Bring consumers and food businesses closer together.</p>
          </div>
          <div className="step">
            <span>03</span>
            <h3>Make an Impact</h3>
            <p>Support smarter choices and a more sustainable food future.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="contact">
        <div className="cta-content">
          <Sparkles size={28} />
          <h2>Let's make food choices better, together.</h2>
          <p>
            Be part of the Eatly journey. Connect with us and help shape
            a smarter, more sustainable food ecosystem.
          </p>
          <a href="mailto:hello@eatly.in" className="cta-button">
            Join Eatly <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-brand">
          <a href="#home" className="logo">
            <span className="logo-icon"><Leaf size={23} /></span>
            <span>Eatly<span className="logo-dot">.</span></span>
          </a>
          <p>Better Food, Smarter Choices, Less Waste.</p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <a href="mailto:hello@eatly.in"><Mail size={16} /> Contact Eatly</a>
        </div>

        <div className="copyright">
          © {new Date().getFullYear()} Eatly. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

export default App;
