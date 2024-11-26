import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Phantom Wrap</h3>
            <p className="text-muted-foreground">
              Premier vehicle wrapping services in Nairobi, Kenya.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/services" className="hover:underline">Services</Link></li>
              <li><Link href="/gallery" className="hover:underline">Gallery</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <p>One Padmore Place</p>
            <p>Nairobi, Kenya</p>
            <p>Phone: 0110 044 479</p>
            <p>Email: info@phantomwrap.com</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Phantom Wrap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

