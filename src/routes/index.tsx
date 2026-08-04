import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Snowflake, Wrench, Zap, Award, CheckCircle2, ShieldCheck, Clock,
  PlayCircle, Star, ArrowRight, Flame, Gauge, GraduationCap, MessageCircle,
  DollarSign, TrendingUp, Lock, Smartphone
} from "lucide-react";
import heroTank from "@/assets/hero-tank.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Curso Manutenção em Tanque de Leite — Vire Especialista e Lucre no Agro" },
      { name: "description", content: "Aprenda manutenção em tanque de leite 100% online. Aulas práticas, certificado e suporte. Ganhe a partir de R$300 por chamado no campo." },
      { property: "og:title", content: "Curso Manutenção em Tanque de Leite — 100% Online" },
      { property: "og:description", content: "Domine a manutenção de tanques de resfriamento e atenda fazendas com serviço de alto valor. Acesso imediato." },
    ],
  }),
  component: Landing,
});

const CHECKOUT = "https://pay.hotmart.com/Y66506605X?off=480volt9&bid=1770743954874";
const WHATS = "https://w.app/recursosderefrigeracao";

function CTA({ children, large = false }: { children: React.ReactNode; large?: boolean }) {
  return (
    <a
      href={CHECKOUT}
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-cta font-bold text-primary-foreground shadow-gold transition-all hover:scale-[1.03] hover:brightness-110 active:scale-100 ${
        large ? "px-8 py-5 text-lg sm:text-xl" : "px-6 py-3 text-base"
      }`}
    >
      {children}
      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function Landing() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-gold grid place-items-center">
              <Snowflake className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl tracking-wide">R&amp;E <span className="text-primary">CURSOS</span></span>
          </div>
          <a href={CHECKOUT} className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground hover:brightness-110">
            Quero Entrar <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-28 pb-20 bg-gradient-hero grain overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider">
              <Flame className="h-3.5 w-3.5" /> Profissão em alta no agro
            </div>
            <h1 className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] uppercase">
              Vire o técnico que <span className="text-gradient-gold">salva fazendas</span> de prejuízo
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Aprenda manutenção em <strong className="text-foreground">tanque de resfriamento de leite</strong> 100% online —
              do zero ao primeiro chamado pago. Mesmo que você nunca tenha encostado no equipamento.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <CTA large>QUERO ME TORNAR ESPECIALISTA</CTA>
            </div>

            <div className="mt-6 inline-flex items-center gap-4 rounded-2xl border-2 border-primary bg-card/90 backdrop-blur px-5 py-3 shadow-gold animate-pulse-glow">
              <div className="text-left">
                <div className="text-xs text-muted-foreground line-through">de R$ 459,90</div>
                <div className="font-display text-2xl sm:text-3xl text-gradient-gold leading-none">12x R$ 33,29</div>
                <div className="text-xs text-muted-foreground">ou <strong className="text-foreground">R$ 321,93</strong> à vista</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div className="text-center">
                <div className="font-display text-xl text-primary leading-none">30% OFF</div>
                <div className="text-[10px] uppercase font-bold text-success">Oferta do Dia dos Pais</div>
              </div>
            </div>


            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><Smartphone className="h-4 w-4 text-secondary" /> Acesso imediato</span>
              <span className="flex items-center gap-2"><PlayCircle className="h-4 w-4 text-secondary" /> Aulas reais em campo</span>
              <span className="flex items-center gap-2"><Award className="h-4 w-4 text-secondary" /> Certificado</span>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-gold rounded-3xl blur-3xl opacity-20" />
            <img
              src={heroTank}
              alt="Técnico realizando manutenção em tanque de leite"
              width={1920}
              height={1080}
              className="relative rounded-2xl shadow-card border border-border"
            />
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-card max-w-[220px]">
              <div className="flex items-center gap-2 text-primary font-bold text-2xl font-display">
                R$ 300+
              </div>
              <p className="text-xs text-muted-foreground mt-1">por chamado médio em propriedades rurais</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OFERTA DO DIA DOS PAIS */}
      <section className="py-14 bg-gradient-hero border-b border-border">
        <div className="mx-auto max-w-4xl px-4">
          <div className="bg-card border-[3px] border-primary rounded-3xl p-6 sm:p-10 shadow-gold animate-pulse-glow relative overflow-hidden text-center">
            <div className="absolute -top-1 -right-1 bg-gradient-gold text-primary-foreground px-7 py-2.5 text-sm font-bold uppercase tracking-wider rounded-bl-2xl shadow-lg">
              30% OFF
            </div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold animate-shimmer opacity-60" style={{ backgroundSize: '200% 100%' }} />
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider">
              <Flame className="h-3.5 w-3.5" /> Oferta do Dia dos Pais
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl uppercase">
              Presenteie com a <span className="text-gradient-gold">profissão do futuro no agro</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Condição exclusiva de Dia dos Pais para quem quer virar técnico de tanque de leite. Aproveite o desconto especial e comece a cobrar pelos seus chamados ainda este mês.
            </p>
            <div className="mt-6 flex flex-col items-center gap-1">
              <span className="text-muted-foreground line-through text-lg">de R$ 459,90</span>
              <div className="font-display text-6xl sm:text-7xl text-gradient-gold leading-none">12x R$ 33,29</div>
              <div className="text-muted-foreground text-lg">ou <strong className="text-foreground">R$ 321,93</strong> à vista</div>
            </div>
            <div className="mt-8">
              <CTA large>GARANTIR MEU DESCONTO DE DIA DOS PAIS</CTA>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Oferta válida por tempo limitado. Pode sair do ar a qualquer momento.
            </p>
          </div>
        </div>
      </section>


      {/* SOCIAL PROOF BAR */}
      <section className="border-y border-border bg-card/50">
        <div className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n: "Muitos", l: "alunos formados" },
            { n: "9 módulos", l: "passo a passo" },
            { n: "4,5 ★", l: "avaliação média" },
            { n: "100%", l: "online" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl text-gradient-gold">{s.n}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="font-display text-4xl sm:text-5xl uppercase">
            Tanque parado é <span className="text-destructive">leite jogado fora</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            Toda fazenda leiteira depende de um tanque funcionando. Quando ele quebra, o produtor perde milhares de reais por dia
            — e procura desesperadamente alguém que <strong className="text-foreground">resolva rápido</strong>. Esse alguém pode ser você.
          </p>
          <div className="mt-12 grid sm:grid-cols-3 gap-6 text-left">
            {[
              { i: TrendingUp, t: "Mercado em alta", d: "Brasil tem mais de 1 milhão de propriedades leiteiras. Técnicos qualificados são raros." },
              { i: DollarSign, t: "Ticket alto", d: "Chamados pagam de R$300 a R$1.500. Trabalhos completos chegam a R$5.000." },
              { i: Lock, t: "Concorrência baixa", d: "Pouquíssimos profissionais dominam refrigeração industrial leiteira no interior." },
            ].map(({ i: Icon, t, d }) => (
              <div key={t} className="bg-card border border-border rounded-2xl p-6 shadow-card">
                <Icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-display text-xl uppercase">{t}</h3>
                <p className="text-muted-foreground text-sm mt-2">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE VAI APRENDER */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary uppercase text-sm font-bold tracking-widest">Conteúdo do Curso</span>
            <h2 className="font-display text-4xl sm:text-5xl uppercase mt-3">O que você vai dominar</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { i: Gauge, t: "Entendimento Completo do Tanque", d: "Função, funcionamento e estrutura completa." },
              { i: Snowflake, t: "Princípio da Refrigeração", d: "Ciclo completo explicado de forma simples e prática." },
              { i: Wrench, t: "Componentes do Sistema", d: "Controlador, visor, filtro secador, válvulas, evaporador, pressostato, contatora, agitador." },
              { i: Flame, t: "Ferramentas na Prática", d: "Manifold, bomba de vácuo, maçarico, multímetro, capacímetro e termômetro." },
              { i: Zap, t: "Defeitos Elétricos", d: "Compressor, agitador, pressostato, contatora e configuração de controlador." },
              { i: ShieldCheck, t: "Defeitos Mecânicos", d: "Brasagem, válvula de expansão, recolhimento, superaquecimento, congelamento." },
            ].map(({ i: Icon, t, d }, idx) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group bg-background border border-border rounded-2xl p-6 hover:border-primary/50 transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 grid place-items-center mb-4 group-hover:bg-gradient-gold transition-all">
                  <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition" />
                </div>
                <h3 className="font-display text-xl uppercase">{t}</h3>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTEÚDO PROGRAMÁTICO */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-14">
            <span className="text-primary uppercase text-sm font-bold tracking-widest">9 Módulos</span>
            <h2 className="font-display text-4xl sm:text-5xl uppercase mt-3">Conteúdo programático</h2>
          </div>
          <div className="space-y-4">
            {[
              { n: "01–02", t: "Boas-vindas e o Aparelho", d: "Função do tanque • Como o resfriador funciona • Quantidades de ordenhas." },
              { n: "03–04", t: "Componentes e Refrigeração", d: "Princípios da refrigeração • Controladores, filtro secador e visor • Válvula rotalock • Agitador e evaporador • Válvula de expansão." },
              { n: "05–06", t: "Ferramentas e Estoque", d: "Manifold, maçarico, bomba de vácuo • Multímetro e capacímetro • Termômetro • Peças essenciais para pronta entrega." },
              { n: "07", t: "Mão na Massa: Defeitos Elétricos", d: "Instalação e calibragem do controlador • Testes de compressor e capacitor • Diagnóstico de agitador • Pressostato, contatora e sonda." },
              { n: "08", t: "Mão na Massa: Defeitos Mecânicos", d: "Brasagem e isolamento • Regulagem de pressostato • Superaquecimento e sub-resfriamento • Troca de válvula de expansão." },
              { n: "09", t: "BÔNUS: Segredos do Dia a Dia", d: "Principais defeitos em campo • Nivelamento correto • Vazamento no evaporador • Melhor local de instalação." },
            ].map((m) => (
              <div key={m.n} className="bg-card border border-border rounded-xl p-6 flex gap-5 hover:border-primary/40 transition">
                <div className="font-display text-3xl text-gradient-gold shrink-0 w-20">{m.n}</div>
                <div>
                  <h3 className="font-display text-xl uppercase">{m.t}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{m.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="font-display text-4xl sm:text-5xl uppercase">Como funciona</h2>
          <div className="mt-12 grid sm:grid-cols-4 gap-6">
            {[
              { i: CheckCircle2, t: "Você se inscreve" },
              { i: Smartphone, t: "Recebe acesso imediato" },
              { i: PlayCircle, t: "Assiste quando quiser" },
              { i: GraduationCap, t: "Recebe certificado" },
            ].map(({ i: Icon, t }, idx) => (
              <div key={t} className="relative">
                <div className="bg-background border border-border rounded-2xl p-6">
                  <div className="font-display text-5xl text-primary/30">{idx + 1}</div>
                  <Icon className="h-8 w-8 text-primary mt-2" />
                  <p className="font-bold mt-3">{t}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl sm:text-5xl uppercase">Quem fez, recomenda</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "José Carlos", c: "MG — Refrigerista", t: "Fiz o curso e em 2 meses já estava atendendo 4 fazendas da região. Pagou o investimento na primeira semana." },
              { n: "Marcelo Lima", c: "GO — Técnico", t: "Conteúdo direto, sem enrolação. As aulas práticas mostram exatamente o que aparece no campo." },
              { n: "Anderson R.", c: "PR — Eletricista", t: "Eu já mexia com refrigeração doméstica. Esse curso me abriu um mercado que paga MUITO melhor." },
            ].map((d) => (
              <div key={d.n} className="bg-card border border-border rounded-2xl p-6 shadow-card">
                <div className="flex gap-1 text-primary mb-3">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-sm text-foreground/90 leading-relaxed">"{d.t}"</p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="font-bold">{d.n}</p>
                  <p className="text-xs text-muted-foreground">{d.c}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="py-24 bg-gradient-hero grain relative">
        <div className="mx-auto max-w-3xl px-4">
          <div className="bg-card border-[3px] border-primary rounded-3xl p-8 sm:p-12 shadow-gold animate-pulse-glow relative overflow-hidden">
            <div className="absolute -top-1 -right-1 bg-gradient-gold text-primary-foreground px-7 py-2.5 text-sm font-bold uppercase tracking-wider rounded-bl-2xl shadow-lg">
              30% OFF
            </div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold animate-shimmer opacity-60" style={{ backgroundSize: '200% 100%' }} />
            <div className="text-center">
              <span className="text-primary uppercase text-xs font-bold tracking-widest">Oferta do Dia dos Pais</span>
              <h2 className="font-display text-4xl sm:text-5xl uppercase mt-3">Manutenção em Tanque de Leite</h2>

              <div className="mt-8 flex flex-col items-center gap-2">
                <span className="text-muted-foreground line-through text-lg">de R$ 459,90</span>
                <div className="font-display text-2xl">por apenas</div>
                <div className="font-display text-7xl sm:text-8xl text-gradient-gold leading-none">12x R$ 33,29</div>
                <div className="text-muted-foreground text-lg">ou <strong className="text-foreground">R$ 321,93</strong> à vista</div>
                <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-success/15 px-4 py-1.5 text-sm font-bold text-success">
                  <CheckCircle2 className="h-4 w-4" /> Você economiza R$ 138,00
                </div>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-3 text-left max-w-md mx-auto">
                {[
                  "9 módulos completos",
                  "Bônus: segredos do dia a dia",
                  "Certificado de conclusão",
                  "Acesso por 2 anos",
                ].map((b) => (
                  <div key={b} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-success shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <CTA large>GARANTIR MEU PRESENTE DE DIA DOS PAIS</CTA>
                <p className="text-xs text-muted-foreground mt-4 flex items-center justify-center gap-2">
                  <Lock className="h-3 w-3" /> Pagamento 100% seguro via Hotmart
                </p>
              </div>
            </div>
          </div>


          {/* GARANTIA */}
          <div className="mt-10 bg-card border border-border rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="h-20 w-20 rounded-full bg-success/15 grid place-items-center shrink-0">
              <ShieldCheck className="h-10 w-10 text-success" />
            </div>
            <div>
              <h3 className="font-display text-2xl uppercase">Garantia de 7 dias</h3>
              <p className="text-muted-foreground text-sm mt-1">
                Teste o curso por 7 dias. Se não gostar por qualquer motivo, devolvemos 100% do seu dinheiro.
                Sem perguntas, sem burocracia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-display text-4xl sm:text-5xl uppercase text-center">Perguntas Frequentes</h2>
          <div className="mt-12 space-y-4">
            {[
              { q: "Preciso ter experiência em refrigeração?", a: "Não. O curso começa do absoluto zero, explicando o ciclo de refrigeração e cada componente. Quem já tem base avança ainda mais rápido." },
              { q: "Por quanto tempo tenho acesso?", a: "Acesso por 2 anos. Estude no seu ritmo, reveja as aulas quantas vezes precisar." },
              { q: "Recebo certificado?", a: "Sim, certificado de conclusão emitido após terminar todos os módulos." },
              { q: "Funciona no celular?", a: "Sim. Aulas otimizadas para celular, tablet e computador." },
              
              { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia incondicional. Pede o reembolso e devolvemos 100%." },
            ].map((f) => (
              <details key={f.q} className="group bg-card border border-border rounded-xl p-5 cursor-pointer">
                <summary className="flex justify-between items-center font-bold list-none">
                  {f.q}
                  <ArrowRight className="h-5 w-5 text-primary transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-3 text-muted-foreground text-sm">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-hero grain text-center">
        <div className="mx-auto max-w-3xl px-4">
          <Clock className="h-12 w-12 text-primary mx-auto" />
          <h2 className="font-display text-4xl sm:text-5xl uppercase mt-4">
            Enquanto você decide, <span className="text-gradient-gold">outro técnico atende a fazenda</span>
          </h2>
          <p className="text-muted-foreground mt-6 text-lg">
            O agro não espera. Aprenda hoje a profissão que paga bem amanhã.
          </p>
          <div className="mt-8">
            <CTA large>COMEÇAR AGORA POR 12X R$ 33,29</CTA>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} R&amp;E Cursos · Manutenção em Tanque de Leite</p>
        <a href={WHATS} className="inline-flex items-center gap-2 text-primary mt-3 hover:underline">
          <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
        </a>
      </footer>

      {/* Sticky WhatsApp */}
      <a
        href={WHATS}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-success grid place-items-center shadow-gold hover:scale-110 transition"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-success-foreground" />
      </a>
    </main>
  );
}
