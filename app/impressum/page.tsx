"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ImpressumPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white pt-24 pb-12 scroll-mt-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/" className="inline-flex items-center text-[#2e4e1e] hover:underline mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Zurück zur Startseite
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Impressum</h1>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Angaben gemäß § 5 TMG</h2>
          <div className="mb-6">
            <p>
              <strong>Schreinerei Maier GmbH</strong>
            </p>
            <p>
              Musterstraße 123
              <br />
              85540 Haar bei München
              <br />
              Deutschland
            </p>
          </div>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">Vertreten durch</h2>
          <p className="mb-6">Geschäftsführer: Max Maier</p>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">Kontakt</h2>
          <div className="mb-6">
            <p>
              Telefon: +49 89 123456789
              <br />
              E-Mail: info@schreinerei-maier.de
            </p>
          </div>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">Registereintrag</h2>
          <div className="mb-6">
            <p>
              Eintragung im Handelsregister
              <br />
              Registergericht: Amtsgericht München
              <br />
              Registernummer: HRB 123456
            </p>
          </div>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">Umsatzsteuer-ID</h2>
          <p className="mb-6">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            <br />
            DE123456789
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Berufsbezeichnung und berufsrechtliche Regelungen
          </h2>
          <div className="mb-6">
            <p>
              Berufsbezeichnung: Schreinermeister
              <br />
              Zuständige Kammer: Handwerkskammer für München und Oberbayern
              <br />
              Verliehen in: Deutschland
            </p>
          </div>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">Redaktionell verantwortlich</h2>
          <div className="mb-6">
            <p>
              Max Maier
              <br />
              Musterstraße 123
              <br />
              85540 Haar bei München
            </p>
          </div>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">EU-Streitschlichtung</h2>
          <p className="mb-6">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2e4e1e] hover:underline ml-1"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            <br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Verbraucherstreitbeilegung/Universalschlichtungsstelle
          </h2>
          <p className="mb-6">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">Haftung für Inhalte</h2>
          <p className="mb-6">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
            Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der
            Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
            forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">Haftung für Links</h2>
          <p className="mb-6">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
            Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">Urheberrecht</h2>
          <p className="mb-6">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </div>
      </div>
    </div>
  )
}
