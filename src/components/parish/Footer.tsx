import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-zinc-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-rose-900 flex items-center justify-center">
                <span className="text-white font-bold">✝</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">SS Peter & Paul</h3>
                <p className="text-zinc-400 text-sm">Catholic Church</p>
              </div>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              A vibrant Catholic parish in Shomolu, dedicated to worship,
              community, and service. All are welcome in our family of faith.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-rose-900 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-rose-900 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-rose-900 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-zinc-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>
                  church street,
                  <br />
                  Shomolu, Lagos State, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span>+234 (0) 812 345 6789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span>info@sspeterpaulshomolu.org</span>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="font-bold text-lg mb-4">Office Hours</h4>
            <ul className="space-y-2 text-zinc-400 text-sm">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-500" />
                <span className="font-medium text-white">Monday - Friday</span>
              </li>
              <li className="pl-6">9:00 AM - 5:00 PM</li>
              <li className="flex items-center gap-2 mt-3">
                <Clock className="w-4 h-4 text-amber-500" />
                <span className="font-medium text-white">Saturday</span>
              </li>
              <li className="pl-6">10:00 AM - 2:00 PM</li>
              <li className="flex items-center gap-2 mt-3">
                <Clock className="w-4 h-4 text-amber-500" />
                <span className="font-medium text-white">Sunday</span>
              </li>
              <li className="pl-6">After Masses only</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-zinc-400 text-sm">
              {[
                { label: "Mass Times", href: "#hero" },
                { label: "Today's Readings", href: "#readings" },
                { label: "Prayer Request", href: "#prayer" },
                { label: "Donate", href: "#donate" },
                { label: "Join a Ministry", href: "#ministries" },
                { label: "Upcoming Events", href: "#events" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Map Embed */}
        <div className="mt-12 rounded-xl overflow-hidden h-64 bg-zinc-800">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3892847574366!2d3.3872083!3d6.5355028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c58a63d1ebf%3A0x2e3f3c7c7a7e8e0a!2sShomolu%2C%20Lagos!5e0!3m2!1sen!2sng!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SS Peter & Paul Catholic Church Location"
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
            <p>
              © {currentYear} SS Peter & Paul Catholic Church, Shomolu. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-rose-500" /> for the glory of God
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
