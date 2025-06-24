"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"
import { CookieBanner } from "@/components/cookie-banner"
import { Menu, X, Phone, Mail, MapPin, Clock, Hammer, Home, DoorOpen, Wrench, Palette } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 100 // Header-Höhe berücksichtigen
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      <CookieBanner />

      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center p-2">
                <img
                  src="/images/hobel-logo-clean.png"
                  alt="Schreinerei Maier Logo - Traditioneller Hobel"
                  className="w-24 h-24 object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#2e4e1e]">Schreinerei Maier</h1>
                <p className="text-xs text-gray-600">GmbH</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("start")}
                className="text-gray-700 hover:text-[#2e4e1e] transition-colors"
              >
                Start
              </button>
              <button
                onClick={() => scrollToSection("ueber-uns")}
                className="text-gray-700 hover:text-[#2e4e1e] transition-colors"
              >
                Über uns
              </button>
              <button
                onClick={() => scrollToSection("leistungen")}
                className="text-gray-700 hover:text-[#2e4e1e] transition-colors"
              >
                Leistungen
              </button>
              <button
                onClick={() => scrollToSection("referenzen")}
                className="text-gray-700 hover:text-[#2e4e1e] transition-colors"
              >
                Referenzen
              </button>
              <button
                onClick={() => scrollToSection("kontakt")}
                className="text-gray-700 hover:text-[#2e4e1e] transition-colors"
              >
                Kontakt
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4">
                <button
                  onClick={() => scrollToSection("start")}
                  className="text-left text-gray-700 hover:text-[#2e4e1e] transition-colors"
                >
                  Start
                </button>
                <button
                  onClick={() => scrollToSection("ueber-uns")}
                  className="text-left text-gray-700 hover:text-[#2e4e1e] transition-colors"
                >
                  Über uns
                </button>
                <button
                  onClick={() => scrollToSection("leistungen")}
                  className="text-left text-gray-700 hover:text-[#2e4e1e] transition-colors"
                >
                  Leistungen
                </button>
                <button
                  onClick={() => scrollToSection("referenzen")}
                  className="text-left text-gray-700 hover:text-[#2e4e1e] transition-colors"
                >
                  Referenzen
                </button>
                <button
                  onClick={() => scrollToSection("kontakt")}
                  className="text-left text-gray-700 hover:text-[#2e4e1e] transition-colors"
                >
                  Kontakt
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="start" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-[#f5f0e1] to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-[#2e4e1e] text-white mb-4">Seit 1984 in Haar bei München</Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Möbel mit Charakter.
                  <span className="text-[#2e4e1e]"> Aus Meisterhand.</span>
                </h1>
                <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                  Individuelle Möbel, hochwertiger Innenausbau und fachgerechte Restauration – mit über 40 Jahren
                  Erfahrung verwirklichen wir Ihre Wohnträume.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#2e4e1e] hover:bg-[#1e3014] text-white px-8 py-3"
                  onClick={() => scrollToSection("kontakt")}
                >
                  Kontakt aufnehmen
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#2e4e1e] text-[#2e4e1e] hover:bg-[#2e4e1e] hover:text-white px-8 py-3"
                  onClick={() => scrollToSection("leistungen")}
                >
                  Unsere Leistungen
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/werkstatt-hero-new.png"
                alt="Traditionelle Schreinerwerkstatt der Schreinerei Maier mit großen Sprossenfenstern, massivem Arbeitstisch und handwerklichen Werkzeugen"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              {/* Mobile Version - kleiner und anders positioniert */}
              <div className="absolute -bottom-3 -right-3 bg-white p-3 rounded-lg shadow-lg sm:hidden">
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2">
                    <img
                      src="/images/hobel-logo-clean.png"
                      alt="Traditioneller Hobel"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">40+ Jahre</p>
                    <p className="text-xs text-gray-600">Erfahrung</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg hidden sm:block">
                <div className="flex items-center space-x-4">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-4">
                    <img
                      src="/images/hobel-logo-clean.png"
                      alt="Traditioneller Hobel"
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">40+ Jahre</p>
                    <p className="text-sm text-gray-600">Erfahrung</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Über uns Section */}
      <section id="ueber-uns" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Tradition trifft Innovation</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Seit der Gründung 1984 steht die Schreinerei Maier GmbH für höchste Qualität und handwerkliche
                  Perfektion. Was als kleiner Familienbetrieb in Haar bei München begann, ist heute ein etabliertes
                  Unternehmen mit fünf erfahrenen Mitarbeitern.
                </p>
                <p>
                  Unser Meisterbetrieb verbindet traditionelle Handwerkskunst mit modernster Technik. Jedes Projekt wird
                  individuell geplant und mit größter Sorgfalt umgesetzt – von der ersten Beratung bis zur finalen
                  Montage.
                </p>
                <p>
                  Ob Privatkunden oder Architekten – wir verstehen uns als Partner, der Ihre Visionen in hochwertige
                  Holzarbeiten verwandelt. Nachhaltigkeit und regionale Verbundenheit sind dabei unsere Leitprinzipien.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2e4e1e]">40+</div>
                  <div className="text-sm text-gray-600">Jahre Erfahrung</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2e4e1e]">5</div>
                  <div className="text-sm text-gray-600">Mitarbeiter</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2e4e1e]">1000+</div>
                  <div className="text-sm text-gray-600">Projekte</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/moebel-showcase.png"
                alt="Hochwertiges Holzmöbel der Schreinerei Maier - modernes Sideboard mit Regal aus hellem Holz"
                className="rounded-lg shadow-xl w-full h-auto"
              />
              {/* Mobile Version - kleiner */}
              <div className="absolute bottom-3 right-3 bg-[#f5f0e1] p-2 rounded-lg sm:hidden">
                <p className="text-xs font-semibold text-[#2e4e1e]">Meisterbetrieb</p>
                <p className="text-xs text-gray-600">Seit 1984</p>
              </div>
              {/* Desktop Version - größer */}
              <div className="absolute bottom-6 right-6 bg-[#f5f0e1] p-6 rounded-lg hidden sm:block">
                <p className="text-lg font-semibold text-[#2e4e1e]">Meisterbetrieb</p>
                <p className="text-sm text-gray-600">Seit 1984</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen Section */}
      <section id="leistungen" className="py-20 bg-[#f5f0e1]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Unsere Leistungen</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Von der Planung bis zur Montage – wir bieten Ihnen das komplette Spektrum hochwertiger Schreinerarbeiten.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#2e4e1e] rounded-lg flex items-center justify-center mb-6">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Küchen nach Maß</h3>
                <p className="text-gray-600 leading-relaxed">
                  Individuelle Küchenplanung und -fertigung. Von der klassischen Landhausküche bis zur modernen
                  Designküche – alles aus einer Hand.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#2e4e1e] rounded-lg flex items-center justify-center mb-6">
                  <DoorOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Einbauschränke</h3>
                <p className="text-gray-600 leading-relaxed">
                  Maßgeschneiderte Schranklösungen für jeden Raum. Optimale Raumnutzung durch perfekt angepasste Möbel.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#2e4e1e] rounded-lg flex items-center justify-center mb-6">
                  <Hammer className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Türen & Fenster</h3>
                <p className="text-gray-600 leading-relaxed">
                  Hochwertige Innentüren, Haustüren und Fenster. Sowohl Neufertigung als auch Reparatur und Wartung.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#2e4e1e] rounded-lg flex items-center justify-center mb-6">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Innenausbau</h3>
                <p className="text-gray-600 leading-relaxed">
                  Kompletter Innenausbau für Wohn- und Geschäftsräume. Treppen, Wandverkleidungen und individuelle
                  Raumlösungen.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#2e4e1e] rounded-lg flex items-center justify-center mb-6">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Restauration</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fachgerechte Restauration antiker Möbel und historischer Holzelemente. Werterhaltung mit
                  traditionellen Techniken.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#2e4e1e] rounded-lg flex items-center justify-center mb-6">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Möbelbau</h3>
                <p className="text-gray-600 leading-relaxed">
                  Individuelle Möbelstücke nach Ihren Wünschen. Vom Einzelstück bis zur kompletten Wohnungseinrichtung.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Referenzen Section */}
      <section id="referenzen" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Unsere Referenzen</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Einblicke in unsere Arbeit – jedes Projekt ist einzigartig und wird mit höchster Präzision umgesetzt.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <img
                  src="/images/moderne-kueche.png"
                  alt="Moderne Küche mit weißen Hochglanzfronten und Holzelementen der Schreinerei Maier"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Moderne Küche</h3>
                <p className="text-sm text-gray-600">
                  Elegante Designküche mit weißen Hochglanzfronten und warmen Holzakzenten für ein modernes Zuhause in
                  München.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <img
                  src="/images/einbauschrank.png"
                  alt="Maßgeschneiderter Einbauschrank aus Holz mit LED-Beleuchtung und optimaler Raumaufteilung der Schreinerei Maier"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Einbauschrank</h3>
                <p className="text-sm text-gray-600">
                  Maßgeschneiderter begehbarer Kleiderschrank mit integrierter LED-Beleuchtung und optimaler
                  Raumaufteilung für maximalen Stauraum.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <img
                  src="/images/restauration-kommode.png"
                  alt="Fachgerecht restaurierte antike Kommode mit aufwendigen Schnitzereien und Messingbeschlägen der Schreinerei Maier"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Restauration</h3>
                <p className="text-sm text-gray-600">
                  Fachgerechte Restauration einer antiken Kommode aus dem 19. Jahrhundert mit aufwendigen Schnitzereien
                  und originalen Messingbeschlägen.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <img
                  src="/images/holztreppe-innenausbau.webp"
                  alt="Elegante geschwungene Holztreppe mit handgefertigtem Geländer und klassischen Sprossen der Schreinerei Maier"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Innenausbau</h3>
                <p className="text-sm text-gray-600">
                  Maßgeschneiderte geschwungene Holztreppe aus Eiche mit traditionellem Sprossengeländer und perfekt
                  abgerundeten Handläufen für ein modernes Wohnhaus.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section id="kontakt" className="py-20 bg-[#f5f0e1]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kontakt</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Haben Sie Fragen oder möchten Sie ein unverbindliches Angebot? Wir freuen uns auf Ihre Nachricht.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Kontaktformular */}
            <div>
              <ContactForm />
            </div>

            {/* Kontaktinformationen */}
            <div className="space-y-8">
              <Card className="bg-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Kontaktdaten</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <MapPin className="w-5 h-5 text-[#2e4e1e]" />
                      <div>
                        <p className="font-medium text-gray-900">Schreinerei Maier GmbH</p>
                        <p className="text-gray-600">Musterstraße 123</p>
                        <p className="text-gray-600">85540 Haar bei München</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Phone className="w-5 h-5 text-[#2e4e1e]" />
                      <div>
                        <p className="text-gray-900">+49 89 123456789</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Mail className="w-5 h-5 text-[#2e4e1e]" />
                      <div>
                        <p className="text-gray-900">info@schreinerei-maier.de</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Clock className="w-5 h-5 text-[#2e4e1e]" />
                      <div>
                        <p className="font-medium text-gray-900">Öffnungszeiten:</p>
                        <p className="text-gray-600">Mo-Fr: 7:00 - 17:00 Uhr</p>
                        <p className="text-gray-600">Sa: 8:00 - 12:00 Uhr</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Google Maps Embed */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.5234567890123!2d11.7234567890123!3d48.1234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDA3JzI0LjQiTiAxMcKwNDMnMjQuNCJF!5e0!3m2!1sde!2sde!4v1234567890123!5m2!1sde!2sde"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Standort Schreinerei Maier GmbH"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2e4e1e] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2">
                  <img
                    src="/images/hobel-logo-clean.png"
                    alt="Schreinerei Maier Logo"
                    className="w-18 h-18 object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold">Schreinerei Maier</h3>
                  <p className="text-sm opacity-80">GmbH</p>
                </div>
              </div>
              <p className="text-sm opacity-80 leading-relaxed">
                Ihr Partner für hochwertigen Möbelbau, Innenausbau und Restauration in Haar bei München seit 1984.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <div className="space-y-2 text-sm opacity-80">
                <p>Musterstraße 123</p>
                <p>85540 Haar bei München</p>
                <p>Tel: +49 89 123456789</p>
                <p>E-Mail: info@schreinerei-maier.de</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Rechtliches</h4>
              <div className="space-y-2 text-sm">
                <Link href="/impressum" className="opacity-80 hover:opacity-100 transition-opacity block">
                  Impressum
                </Link>
                <Link href="/datenschutz" className="opacity-80 hover:opacity-100 transition-opacity block">
                  Datenschutz
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-sm opacity-80">© 2024 Schreinerei Maier GmbH. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
