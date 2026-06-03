import Image from 'next/image'
import Link from 'next/link'
import { Globe, Mail, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src="/images/footer.jpg" alt="" fill priority className="object-cover" />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#000000A8]" />

        {/* Extra Gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/30 to-black/80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Logo & Description */}
          <div>
            <Link href="/">
              <Image
                src="/images/ideal-factory-logo.svg"
                alt="Ideal Factory"
                width={180}
                height={60}
                className="h-14 w-auto"
              />
            </Link>

            <p className="mt-8 max-w-xs text-sm leading-8 text-white/70">
              Our kitchens may not be able to whisk you away to sun kissed foreign shores, but our
              collection boasts all the quality craftsmanship and style.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-primary">Quick Links</h3>

            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-white/85 transition hover:text-primary">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/team" className="text-white/85 transition hover:text-primary">
                  Our Team
                </Link>
              </li>

              <li>
                <Link href="/testimonials" className="text-white/85 transition hover:text-primary">
                  Testimonials
                </Link>
              </li>

              <li>
                <Link href="/projects" className="text-white/85 transition hover:text-primary">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-primary">Explore</h3>

            <ul className="space-y-4">
              <li>
                <Link
                  href="/walk-in-closet"
                  className="text-white/85 transition hover:text-primary"
                >
                  Walk In Closet
                </Link>
              </li>

              <li>
                <Link href="/wardrobes" className="text-white/85 transition hover:text-primary">
                  Wardrobe Closet
                </Link>
              </li>

              <li>
                <Link
                  href="/u-shape-kitchen"
                  className="text-white/85 transition hover:text-primary"
                >
                  U-Shape Kitchen
                </Link>
              </li>

              <li>
                <Link
                  href="/pantry-kitchen"
                  className="text-white/85 transition hover:text-primary"
                >
                  Pantry Kitchen
                </Link>
              </li>

              <li>
                <Link href="/doors" className="text-white/85 transition hover:text-primary">
                  Doors
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-primary">Contact</h3>

            <ul className="space-y-6">
              <li className="flex items-center gap-3 text-white/85">
                <Globe className="h-5 w-5 text-primary" />
                <span>www.idealhome.ae</span>
              </li>

              <li className="flex items-center gap-3 text-white/85">
                <Mail className="h-5 w-5 text-primary" />
                <span>info@idealhome.com</span>
              </li>

              <li className="flex items-center gap-3 text-white/85">
                <Phone className="h-5 w-5 text-primary" />
                <span>+971-000-00-000</span>
              </li>

              <li className="pl-8 text-white/85">971 (0)50 312 2300</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-primary/30 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/70 md:flex-row">
            <p>Copyright ©2025 Iumicore all rights reserved</p>

            <div className="flex items-center gap-8">
              <Link href="/terms" className="transition hover:text-primary">
                Terms & Condition
              </Link>

              <Link href="/privacy" className="transition hover:text-primary">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
