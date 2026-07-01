import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contato — Estúdio Brancalion',
}

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-cream pt-20">
      {/* Hero */}
      <section className="py-20 px-6 border-b border-gray-mist">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-orange block mb-3">
            Fale conosco
          </span>
          <h1 className="font-display text-ink leading-none"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            Contato
          </h1>
        </div>
      </section>

      {/* Grid contato + formulário */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

          {/* Informações */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl text-ink mb-4">Informações</h2>
              <ul className="space-y-4 font-body text-gray-mid">
                <li>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-orange block mb-1">E-mail</span>
                  <a href="mailto:estudiobrancalion@gmail.com"
                    className="hover:text-orange transition-colors">
                    estudiobrancalion@gmail.com
                  </a>
                </li>
                <li>
                  {/* Substitua pelo endereço real */}
                  <span className="font-mono text-[10px] tracking-widest uppercase text-orange block mb-1">Endereço</span>
                  Garopaba, Santa Catarina — SC<br />Brasil
                </li>
                <li>
                  {/* Substitua pelo telefone/WhatsApp real */}
                  <span className="font-mono text-[10px] tracking-widest uppercase text-orange block mb-1">WhatsApp</span>
                  +55 (48) 9 9999-9999
                </li>
              </ul>
            </div>

            {/* Redes sociais */}
            <div>
              <h3 className="font-mono text-[10px] tracking-widest uppercase text-gray-mid mb-4">Redes Sociais</h3>
              <ul className="space-y-2 font-body text-gray-mid text-sm">
                <li><a href="https://instagram.com/estudiobrancalion" target="_blank" rel="noopener noreferrer" className="hover:text-orange transition-colors">Instagram</a></li>
                <li><a href="https://youtube.com/@estudiobrancalion" target="_blank" rel="noopener noreferrer" className="hover:text-orange transition-colors">YouTube</a></li>
                <li><a href="https://vimeo.com/estudiobrancalion" target="_blank" rel="noopener noreferrer" className="hover:text-orange transition-colors">Vimeo</a></li>
              </ul>
            </div>
          </div>

          {/* Formulário — placeholder (implemente backend/Formspree/etc. conforme necessidade) */}
          <div>
            <h2 className="font-display text-2xl text-ink mb-6">Envie uma mensagem</h2>
            <form className="space-y-5" action="mailto:estudiobrancalion@gmail.com" method="post" encType="text/plain">
              <div>
                <label className="font-mono text-[10px] tracking-widest uppercase text-gray-mid block mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  name="nome"
                  placeholder="Seu nome"
                  className="w-full border border-gray-mist bg-transparent px-4 py-3 font-body text-sm text-ink placeholder:text-gray-light focus:outline-none focus:border-orange transition-colors"
                  required
                />
              </div>
              <div>
                <label className="font-mono text-[10px] tracking-widest uppercase text-gray-mid block mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="seu@email.com"
                  className="w-full border border-gray-mist bg-transparent px-4 py-3 font-body text-sm text-ink placeholder:text-gray-light focus:outline-none focus:border-orange transition-colors"
                  required
                />
              </div>
              <div>
                <label className="font-mono text-[10px] tracking-widest uppercase text-gray-mid block mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  name="assunto"
                  placeholder="Sobre o que você quer falar?"
                  className="w-full border border-gray-mist bg-transparent px-4 py-3 font-body text-sm text-ink placeholder:text-gray-light focus:outline-none focus:border-orange transition-colors"
                />
              </div>
              <div>
                <label className="font-mono text-[10px] tracking-widest uppercase text-gray-mid block mb-2">
                  Mensagem
                </label>
                <textarea
                  name="mensagem"
                  placeholder="Escreva sua mensagem aqui..."
                  rows={5}
                  className="w-full border border-gray-mist bg-transparent px-4 py-3 font-body text-sm text-ink placeholder:text-gray-light focus:outline-none focus:border-orange transition-colors resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange text-white font-mono text-[11px] tracking-widest uppercase py-4 hover:bg-ink transition-colors"
              >
                Enviar mensagem
              </button>
              <p className="font-mono text-[10px] text-gray-light">
                * Formulário básico — integre com Formspree, Resend, ou outro serviço de e-mail para produção.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
