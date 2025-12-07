import { Fragment } from "react";

type ShowcaseItem = {
  id: string;
  kicker: string;
  title: string;
  description: string;
  insights: string[];
  Demo: () => JSX.Element;
  code: string;
};

const AuroraWaveDemo = () => (
  <div className="relative liquid-card p-10">
    <div className="aurora-ribbon">
      <span />
      <span />
      <span />
    </div>
    <div className="relative z-10 space-y-5 max-w-xl">
      <span className="section-label font-display tracking-[0.18em]">
        Aurora Wave Slide
      </span>
      <h3 className="font-display text-3xl md:text-4xl font-semibold">
        Liquid aurora sheets glide across the frame while a reflective sheen
        tracks the cursor.
      </h3>
      <p className="text-sm md:text-base text-slate-200/80 leading-relaxed">
        Powered by layered pseudo-elements and a slow conic gradient bloom, this
        card delivers a costly, atmospheric entrance effect ideal for hero
        banners with statement copy.
      </p>
      <div className="grid grid-cols-2 gap-5 text-xs text-white/70 uppercase tracking-[0.2em]">
        <span>Liquid Gradient Mesh</span>
        <span>Conic Aurora Sheen</span>
      </div>
    </div>
    <div className="grid-divider" />
  </div>
);

const GooeyButtonDemo = () => (
  <div className="glass-panel relative p-12 flex flex-col items-center gap-6 rounded-3xl">
    <GooeyFilter />
    <p className="text-sm uppercase tracking-[0.3em] text-white/60">
      Hold for flow state
    </p>
    <button className="gooey-button text-base md:text-lg shadow-xl">
      Start Immersive Mode
      <span />
      <span />
      <span />
      <span />
    </button>
    <p className="text-xs text-white/60 max-w-sm text-center leading-relaxed">
      A gooey filter fuses bubbles into a seamless stream, amplifying engagement
      cues for CTA surfaces on premium sites.
    </p>
  </div>
);

const InkRevealDemo = () => (
  <div className="ink-reveal">
    <div className="ink-reveal-content space-y-6">
      <span className="section-label font-display text-white/70">
        Immersive reveal
      </span>
      <h3 className="font-display text-4xl font-semibold leading-tight">
        Ink diffusion masks unveil high-value content with cinematic pacing.
      </h3>
      <p className="text-base text-white/70 max-w-2xl leading-relaxed">
        Animating clip-paths across a deep pigment gradient mimics analogue
        liquids spreading across a canvas. Perfect for showcasing luxury product
        drops or editorial segments that crave suspense.
      </p>
      <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
        <span className="section-label !tracking-[0.2em] !text-xs">
          Clip-Path Diffusion
        </span>
        <span className="section-label !tracking-[0.2em] !text-xs">
          Masked Glow
        </span>
        <span className="section-label !tracking-[0.2em] !text-xs">
          Cinematic Pace
        </span>
      </div>
    </div>
  </div>
);

const LiquidLoaderDemo = () => (
  <div className="glass-panel rounded-3xl p-12 flex flex-col md:flex-row items-center gap-10 justify-between">
    <div className="liquid-loader">
      <span />
      <span />
      <span />
      <span />
    </div>
    <div className="max-w-md space-y-4">
      <span className="section-label font-display">Neon Flow Loader</span>
      <h3 className="font-display text-3xl md:text-4xl font-semibold">
        A kinetic reservoir that suggests expensive rendering pipelines.
      </h3>
      <p className="text-sm md:text-base text-white/65 leading-relaxed">
        Layered conic gradients orbit in counter-phase while floating bubbles
        pulse on spline paths. Deploy it as a preloader or looped hero accent to
        imply depth and precision.
      </p>
    </div>
  </div>
);

const showcaseItems: ShowcaseItem[] = [
  {
    id: "aurora-wave",
    kicker: "Signature Entrance",
    title: "Aurora Wave Slide",
    description:
      "Layered aurora ribbons and reflective sheens create a liquid card hover with premium depth.",
    insights: [
      "Two pseudo-elements deliver the gradient bloom and sheen",
      "Conic gradients provide multi-tone liquidity without GPU-heavy shaders",
      "Blend modes and transform timing craft a couture hover response"
    ],
    Demo: AuroraWaveDemo,
    code: `<!-- Aurora Wave Slide Markup -->
<div class="liquid-card">
  <div class="aurora-ribbon">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div class="content">
    <!-- hero copy -->
  </div>
</div>

/* Core CSS */
.liquid-card {
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  background: linear-gradient(145deg, rgba(19,20,60,.9), rgba(12,11,34,.85));
}
.liquid-card::before {
  content: "";
  position: absolute;
  inset: -40%;
  background: conic-gradient(
    from 120deg,
    rgba(30,227,207,.6),
    rgba(255,126,212,.35),
    rgba(128,94,255,.6)
  );
  filter: blur(12px);
  transition: transform 2.2s cubic-bezier(.26,.54,.32,.99);
}
.liquid-card:hover::before {
  transform: translate3d(20%,10%,0) scale(1.05) rotate(12deg);
}
.aurora-ribbon span {
  position: absolute;
  width: 120%;
  height: 200%;
  top: -50%;
  background: radial-gradient(circle, rgba(30,227,207,.18), transparent 55%);
  animation: ribbon-flow 8s ease-in-out infinite;
  mix-blend-mode: screen;
}
@keyframes ribbon-flow {
  0%,100% {
    transform: translate3d(-30%,-20%,0) rotate(18deg);
  }
  50% {
    transform: translate3d(25%,15%,0) rotate(-12deg);
  }
}`
  },
  {
    id: "gooey-button",
    kicker: "CTA Delight",
    title: "Gooey Flow CTA",
    description:
      "SVG filters fuse micro-bubbles into a liquid button that bursts with motion cues.",
    insights: [
      "SVG filter forms the gooey merge without JavaScript",
      "Offset animations per bubble add organic cadence",
      "Gradient body + hover shadow sell the premium finish"
    ],
    Demo: GooeyButtonDemo,
    code: `<!-- SVG filter placed once -->
<svg width="0" height="0">
  <defs>
    <filter id="gooey-filter">
      <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
      <feColorMatrix in="blur" mode="matrix"
        values="1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 25 -10" result="gooey" />
      <feBlend in="SourceGraphic" in2="gooey" />
    </filter>
  </defs>
</svg>

<button class="gooey-button">
  Start Immersive Mode
  <span></span><span></span><span></span><span></span>
</button>

.gooey-button {
  position: relative;
  padding: 0.9rem 2.8rem;
  border-radius: 999px;
  background: linear-gradient(140deg,#53f1e5,#8e6dff 55%,#ff7ed4);
  filter: url(#gooey-filter);
  overflow: hidden;
  transition: transform .4s ease, box-shadow .4s ease;
}
.gooey-button span {
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(255,255,255,.9);
  opacity: .6;
  animation: gooey-bubble 4s ease-in-out infinite;
}
.gooey-button span:nth-child(2) { animation-delay: 1s; }
.gooey-button span:nth-child(3) { animation-delay: 2s; }
.gooey-button span:nth-child(4) { animation-delay: 3s; }
@keyframes gooey-bubble {
  0%,100% { transform: translate3d(0,0,0) scale(.9); opacity: .4; }
  50% { transform: translate3d(10px,-16px,0) scale(1.35); opacity: .8; }
}`
  },
  {
    id: "ink-reveal",
    kicker: "Editorial Reveal",
    title: "Ink Diffusion Mask",
    description:
      "Animated clip-paths emulate ink soaking through paper to unveil editorial storytelling.",
    insights: [
      "Clip-path transitions across gradients deliver a tactile reveal",
      "Synchronized glow layer adds parallax depth",
      "High-radius container maintains glassy premium grit"
    ],
    Demo: InkRevealDemo,
    code: `<section class="ink-reveal">
  <div class="ink-reveal-content">
    <!-- luxury content -->
  </div>
</section>

.ink-reveal {
  position: relative;
  overflow: hidden;
  border-radius: 32px;
  background: linear-gradient(120deg, rgba(30,227,207,.18), transparent 40%);
}
.ink-reveal::before {
  content: "";
  position: absolute;
  inset: -25%;
  background: radial-gradient(circle, rgba(18,16,42,.95), rgba(9,7,28,.92));
  clip-path: circle(18% at 10% 15%);
  animation: ink-pulse 14s ease-in-out infinite;
}
.ink-reveal::after {
  content: "";
  position: absolute;
  inset: -30%;
  background: radial-gradient(circle, rgba(83,241,229,.15), transparent 55%);
  mix-blend-mode: screen;
  animation: ink-glow 10s ease infinite;
}
@keyframes ink-pulse {
  0%,100% { clip-path: circle(20% at 20% 25%); }
  35% { clip-path: circle(35% at 75% 30%); }
  70% { clip-path: ellipse(45% 30% at 35% 75%); }
}`
  },
  {
    id: "liquid-loader",
    kicker: "Motion Accent",
    title: "Neon Reservoir Loader",
    description:
      "Floating conic gradients suggest a volumetric fluid core for suspenseful preload states.",
    insights: [
      "Dual pseudo-elements orchestrate opposing rotation",
      "Bubbles animate on offset bezier loops for organic drift",
      "Use as hero accent or full-screen preloader overlay"
    ],
    Demo: LiquidLoaderDemo,
    code: `<div class="liquid-loader">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>

.liquid-loader {
  position: relative;
  width: 220px;
  height: 220px;
  display: grid;
  place-items: center;
}
.liquid-loader::before,
.liquid-loader::after {
  content: "";
  position: absolute;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  filter: blur(4px);
  background: conic-gradient(
    from 90deg,
    rgba(83,241,229,.65),
    rgba(158,116,255,.7),
    rgba(255,126,212,.65)
  );
  animation: liquid-swell 7s ease-in-out infinite;
}
.liquid-loader::after {
  width: 120px;
  height: 120px;
  animation-delay: -3.2s;
}
.liquid-loader span {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(140deg, rgba(255,255,255,.85), rgba(83,241,229,.4));
  animation: bubble-drift 6s ease-in-out infinite;
}
.liquid-loader span:nth-child(2) { animation-delay: -1.8s; }
.liquid-loader span:nth-child(3) { animation-delay: -3.4s; }
.liquid-loader span:nth-child(4) { animation-delay: -4.9s; }`
  }
];

const GooeyFilter = () => (
  <svg className="absolute h-0 w-0">
    <defs>
      <filter id="gooey-filter">
        <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 25 -10"
          result="gooey"
        />
        <feBlend in="SourceGraphic" in2="gooey" />
      </filter>
    </defs>
  </svg>
);

export default function Page() {
  return (
    <main className="relative z-0 px-6 pb-32 pt-24 md:px-16 lg:px-24">
      <div className="hero-orb" />
      <section className="max-w-6xl mx-auto space-y-14">
        <div className="space-y-6">
          <span className="section-label font-display text-white/70">
            Liquid Luxury Toolkit
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-semibold max-w-3xl leading-tight">
            Top-tier fluid transitions to make brand experiences feel
            impossibly expensive.
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-white/65 leading-relaxed">
            Deploy these liquid motion recipes across hero sections, CTA zones,
            and preloaders to radiate polish. Each module ships with a live demo
            and the exact markup &amp; CSS you need to drop into a Vercel-ready
            stack.
          </p>
        </div>

        <div className="grid gap-16">
          {showcaseItems.map((item) => (
            <article
              key={item.id}
              className="space-y-8 border border-white/5 rounded-[32px] bg-white/[0.02] p-10 md:p-14 shadow-[0_40px_120px_rgba(9,7,27,0.45)]"
            >
              <header className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-3 max-w-3xl">
                  <p className="section-label font-display text-[0.65rem] tracking-[0.28em] text-white/75">
                    {item.kicker}
                  </p>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold">
                    {item.title}
                  </h2>
                  <p className="text-sm md:text-base text-white/65 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <ul className="grid gap-2 text-xs uppercase text-white/45 tracking-[0.25em] md:text-right">
                  {item.insights.map((insight) => (
                    <li key={insight}>{insight}</li>
                  ))}
                </ul>
              </header>

              <div className="rounded-[28px] border border-white/5 bg-midnight/60 p-6 md:p-10">
                <item.Demo />
              </div>

              <pre
                className="code-block"
                data-title="Markup + CSS"
              >
                <code>{item.code}</code>
              </pre>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
