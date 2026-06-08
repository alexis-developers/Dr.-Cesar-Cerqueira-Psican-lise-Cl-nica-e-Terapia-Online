import { MapPin } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="bg-slate-950 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Lado Esquerdo — Informações de Endereço */}
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <MapPin
              className="mt-1 shrink-0 text-amber-600"
              size={28}
              strokeWidth={2}
            />
            <div className="flex flex-col gap-1">
              <p className="text-white font-semibold text-xl leading-snug">
                R. Debret, 23 &bull; Gps 103 a 105
              </p>
              <p className="text-gray-300 text-base">
                Castelo &ndash; Rio de Janeiro/RJ
              </p>
              <p className="text-gray-400 text-sm italic">
                Próximo ao Edifício Garagem Menezes Côrtes
              </p>
            </div>
          </div>
        </div>

        {/* Lado Direito — Mapa */}
        <div
          className="
            w-full rounded-2xl overflow-hidden
            shadow-[0_0_20px_rgba(255,255,255,0.12)]
            border border-white/10
          "
        >
          <iframe
            title="Localização Dr. Cesar Cerqueira"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.0899999999997!2d-43.1787!3d-22.9028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5e0000000001%3A0x1!2sRua+Debret%2C+23+-+Centro%2C+Rio+de+Janeiro+-+RJ!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
            className="w-full min-h-[250px] md:min-h-[340px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  );
}
