import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/" className="inline-flex items-center text-[#2e4e1e] hover:underline mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Zurück zur Startseite
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Datenschutz auf einen Blick</h2>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Allgemeine Hinweise</h3>
          <p className="mb-6">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
            passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
            identifiziert werden können.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Datenerfassung auf dieser Website</h3>
          <p className="mb-4">
            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
          </p>
          <p className="mb-6">
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie
            dem Impressum dieser Website entnehmen.
          </p>

          <p className="mb-4">
            <strong>Wie erfassen wir Ihre Daten?</strong>
          </p>
          <p className="mb-6">
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um
            Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer
            Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Hosting</h2>
          <p className="mb-6">
            Wir hosten die Inhalte unserer Website bei folgendem Anbieter: Vercel Inc., 340 S Lemon Ave #4133, Walnut,
            CA 91789, USA. Details entnehmen Sie der Datenschutzerklärung von Vercel:
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2e4e1e] hover:underline ml-1"
            >
              https://vercel.com/legal/privacy-policy
            </a>
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Datenschutz</h3>
          <p className="mb-6">
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
            personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
            Datenschutzerklärung.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Hinweis zur verantwortlichen Stelle</h3>
          <div className="mb-6">
            <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <p className="mt-2">
              <strong>Schreinerei Maier GmbH</strong>
              <br />
              Max Maier
              <br />
              Musterstraße 123
              <br />
              85540 Haar bei München
              <br />
              Deutschland
              <br />
              Telefon: +49 89 123456789
              <br />
              E-Mail: info@schreinerei-maier.de
            </p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Speicherdauer</h3>
          <p className="mb-6">
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre
            personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Datenerfassung auf dieser Website</h2>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Cookies</h3>
          <p className="mb-6">
            Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Textdateien und richten auf Ihrem
            Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies)
            oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Server-Log-Dateien</h3>
          <p className="mb-6">
            Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien,
            die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes
            Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Kontaktformular</h3>
          <p className="mb-6">
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
            inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
            Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Ihre Rechte</h2>
          <p className="mb-6">
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten
            personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser
            Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese
            Einwilligung jederzeit für die Zukunft widerrufen.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Analyse-Tools und Werbung</h2>
          <p className="mb-6">Diese Website verwendet keine Analyse-Tools oder Werbung von Drittanbietern.</p>

          <p className="text-sm text-gray-600 mt-8">Stand: Januar 2024</p>
        </div>
      </div>
    </div>
  )
}
