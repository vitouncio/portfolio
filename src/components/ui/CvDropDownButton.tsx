import { useState } from "react"
import { Download } from "lucide-react"

export function CvDropdownButton() {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
        type="button"
      >
        Baixar CV
        <Download className="ml-2 h-5 w-5" />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-20 mt-2 w-40 rounded-xl border border-white/10 bg-black/90 py-2 shadow-lg">
          <a
            href="/assets/cv/pt_cv_Vitor_Pereira.pdf"
            download
            className="block px-4 py-2 text-sm text-white hover:bg-white/10"
          >
            PT
          </a>
          <a
            href="/assets/cv/en_cv_Vitor_Pereira.pdf"
            download
            className="block px-4 py-2 text-sm text-white hover:bg-white/10"
          >
            EN
          </a>
          <a
            href="/assets/cv/cv-linkedin.pdf"
           download
            className="block px-4 py-2 text-sm text-white hover:bg-white/10"
          >
            Linkedin
          </a>
        </div>
      )}
    </div>
  )
}