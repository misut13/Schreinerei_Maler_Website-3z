"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Cookie } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Nur im Browser ausführen
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  // Nicht rendern wenn nicht sichtbar (verhindert Hydration-Mismatch)
  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md">
      <Card className="bg-white shadow-lg border-2 border-[#2e4e1e]">
        <CardContent className="p-6">
          <div className="flex items-start space-x-3">
            <Cookie className="w-6 h-6 text-[#2e4e1e] flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">Cookie-Hinweis</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Diese Website verwendet Cookies, um Ihnen die bestmögliche Nutzererfahrung zu bieten. Durch die weitere
                Nutzung stimmen Sie der Verwendung von Cookies zu.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  onClick={acceptCookies}
                  className="bg-[#2e4e1e] hover:bg-[#1e3014] text-white text-sm px-4 py-2"
                >
                  Akzeptieren
                </Button>
                <Button
                  onClick={declineCookies}
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 text-sm px-4 py-2"
                >
                  Ablehnen
                </Button>
              </div>
            </div>
            <button onClick={declineCookies} className="text-gray-400 hover:text-gray-600 flex-shrink-0">
              <X className="w-5 h-5" />
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
