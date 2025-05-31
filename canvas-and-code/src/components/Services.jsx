import React from 'react';
import ServicePackage from './ServicePackage';

const Services = () => (
    <section id="services" className="py-5 bg-white">
        <div className="container text-center">
        <h1 className="mb-4">Services</h1>
        <div className="row">
            {/* Web Development */}
            <div className="col-md-4 service-box">
            <h4>Web Development</h4>
            <p>Responsive, modern websites that perform beautifully on all devices.</p>
            <hr className="my-4" />

            <ServicePackage title="Starter Site" price="$500+">
                <p>1-page scroll site, mobile-friendly, basic info & contact</p>
                <p>Great for small businesses, freelancers, creatives, or a personal website</p>
            </ServicePackage>

            <ServicePackage title="Business Builder" price="$1000+">
                <p>3–5 pages, custom design, contact form, SEO</p>
                <p>Great for new or growing businesses, larger salons, or anyone in need of a larger site</p>
            </ServicePackage>

            <ServicePackage title="Premium Presence (coming soon)" price="$2000+">
                <p>Full custom build front and backend, database, animations, customer logins, API integrations and more!</p>
                <p>Great for a larger high end company, clinics, event venues</p>
            </ServicePackage>
            </div>

            {/* Branding & Design */}
            <div className="col-md-4 service-box">
            <h4>Branding & Design</h4>
            <p>Visual identity that speaks your brand’s voice and engages your audience.</p>
            <hr className="my-4" />

            <ServicePackage title="Launch Pack" price="$700+">
                <p>Starter site + 30-min photo session (10–15 edits)</p>
            </ServicePackage>

            <ServicePackage title="Growth Pack" price="$1350+">
                <p>Business Builder website + full brand shoot</p>
            </ServicePackage>

            <ServicePackage title="All in One Branding (coming soon)" price="$1750">
                <p>Premium site + visual brand story (photo + short video)</p>
            </ServicePackage>
            </div>

            {/* Photography */}
            <div className="col-md-4 service-box">
            <h4>Photography</h4>
            <p>Professional imagery that enhances your brand, product, or service.</p>
            <hr className="my-4" />

            <ServicePackage title="Essentials Session" price="$250+">
                <p>30–45 min session, 10–15 edited photos</p>
                <p>Great for solo professionals, influencers, quick promo shots</p>
            </ServicePackage>

            <ServicePackage title="Brand Builder" price="$500+">
                <p>1.5-hour session, 25+ edits, lifestyle & product content</p>
                <p>Great for local businesses, personal brands, stylists, artists</p>
            </ServicePackage>

            <ServicePackage title="Business Visual Suite" price="$1000+">
                <p>Full-day shoot, photos + video snippets, BTS content</p>
                <p>Great for established businesses, rebrands, agency-level needs</p>
            </ServicePackage>
            </div>
        </div>
        </div>
    </section>
);

export default Services;
