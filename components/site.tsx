'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { motion } from 'framer-motion';
import { ArrowRight, Check, ChevronDown, Factory, Globe2, Menu, PackageCheck, Plane, SearchCheck, ShieldCheck, Ship, Truck, Warehouse, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Counter, FadeUp, SmoothScroll } from './motion';

const services = [
  ['Sea Freight', Ship], ['Air Freight', Plane], ['Door-to-Door', Truck], ['OEM Manufacturing', Factory], ['ODM Manufacturing', PackageCheck], ['Supplier Verification', SearchCheck], ['Factory Audit', ShieldCheck], ['Product Inspection', Check], ['Warehousing', Warehouse], ['Consolidation', PackageCheck], ['Customs Clearance', Globe2], ['Trade Consultancy', ArrowRight]
];
const industries = ['Consumer Goods', 'Fashion & Textiles', 'Electronics', 'Furniture', 'Industrial Parts', 'Beauty & Packaging'];
const steps = ['Discovery & specification', 'Supplier shortlist', 'Sample and negotiation', 'Inspection and compliance', 'Freight and customs', 'Final-mile delivery'];

function Button({ children, dark=false }: { children: React.ReactNode; dark?: boolean }) {
  return <motion.a href="#contact" whileHover={{ y: -3 }} whileTap={{ scale: .98 }} className={`inline-flex h-12 items-center gap-3 rounded-full px-6 text-sm font-medium transition-shadow duration-500 luxury-ease ${dark ? 'bg-ink text-white shadow-soft hover:shadow-card' : 'bg-white text-ink ring-1 ring-black/10 hover:shadow-soft'}`}>{children}<ArrowRight size={16}/></motion.a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const nav = ['Services','Process','Industries','FAQ'];
  return <header className="sticky top-0 z-50 border-b border-black/5 bg-[#fbfaf7]/80 backdrop-blur-xl transition-all duration-500 luxury-ease">
    <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-12">
      <a className="font-display text-3xl tracking-tight" href="#">SheiDokan</a>
      <nav className="hidden gap-8 lg:flex">{nav.map(n => <a key={n} className="hover-underline text-sm uppercase tracking-[.18em] text-muted" href={`#${n.toLowerCase()}`}>{n}</a>)}</nav>
      <Button dark>Start a shipment</Button>
      <button aria-label="Open menu" className="lg:hidden" onClick={() => setOpen(true)}><Menu/></button>
    </div>
    <motion.div initial={false} animate={{ x: open ? 0 : '100%' }} transition={{ duration:.45, ease:[.22,1,.36,1] }} className="fixed inset-y-0 right-0 w-80 bg-ink p-8 text-white shadow-card lg:hidden">
      <button aria-label="Close menu" onClick={() => setOpen(false)} className="mb-12"><X/></button>{nav.map(n => <a onClick={() => setOpen(false)} className="block border-b border-white/10 py-5 text-xl" key={n} href={`#${n.toLowerCase()}`}>{n}</a>)}
    </motion.div>
  </header>
}

function Hero() { return <section className="mx-auto grid-12 max-w-[1440px] gap-6 px-6 pb-20 pt-16 lg:px-12 lg:pt-28">
  <FadeUp className="col-span-12 lg:col-span-7"><p className="mb-6 text-sm uppercase tracking-[.28em] text-muted">Global trading · China sourcing · Logistics</p><h1 className="text-6xl font-semibold tracking-[-.06em] md:text-8xl lg:text-[9rem] lg:leading-[.84]">Trade with precision. Move with grace.</h1></FadeUp>
  <FadeUp delay=.1 className="col-span-12 flex flex-col justify-end lg:col-span-5"><p className="max-w-xl text-xl leading-8 text-muted">SheiDokan orchestrates sourcing, manufacturing, freight, customs and delivery for ambitious importers who expect calm execution and measurable control.</p><div className="mt-8 flex gap-3"><Button dark>Plan your import</Button><Button>Explore services</Button></div></FadeUp>
  <FadeUp delay=.18 className="reveal-mask col-span-12 mt-10 overflow-hidden rounded-[2rem] bg-sand"><Image priority src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=2200&q=80" alt="Premium global logistics containers at port" width={2200} height={1050} className="h-[46vw] min-h-[380px] w-full object-cover transition-transform duration-700 luxury-ease hover:scale-105"/></FadeUp>
</section> }

export default function Site() { return <><SmoothScroll/><Header/><main>
  <Hero/>
  <section className="mx-auto max-w-[1440px] px-6 py-16 lg:px-12"><FadeUp><div className="grid gap-4 border-y border-black/10 py-10 text-sm uppercase tracking-[.2em] text-muted md:grid-cols-4"><span>Trusted by importers</span><span>China factory network</span><span>Customs-ready documents</span><span>End-to-end visibility</span></div></FadeUp></section>
  <section className="mx-auto grid max-w-[1440px] gap-6 px-6 py-16 md:grid-cols-4 lg:px-12">{[[14,'yrs'],[480,'+'],[38,''],[96,'%']].map((s,i)=><FadeUp delay={i*.06} key={i} className="rounded-3xl bg-white p-8 shadow-soft"><div className="text-5xl font-semibold tracking-[-.05em]"><Counter value={s[0] as number} suffix={s[1] as string}/></div><p className="mt-3 text-muted">{['trade experience','verified suppliers','destination markets','on-time clearance'][i]}</p></FadeUp>)}</section>
  <section id="services" className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12"><FadeUp><h2 className="text-5xl font-semibold tracking-[-.05em] md:text-7xl">Services designed as one controlled supply chain.</h2></FadeUp><div className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-4">{services.map(([name,Icon],i)=><FadeUp delay={(i%4)*.05} key={name as string}><motion.article whileHover={{ y:-6 }} className="group min-h-52 rounded-3xl bg-white p-6 shadow-soft transition-shadow duration-500 hover:shadow-card"><Icon className="mb-10"/><h3 className="text-xl font-medium">{name as string}</h3><p className="mt-3 text-sm leading-6 text-muted">Premium coordination, transparent milestones, and disciplined documentation from first quote to final delivery.</p></motion.article></FadeUp>)}</div></section>
  <section id="process" className="bg-ink py-24 text-white"><div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-2 lg:px-12"><FadeUp><h2 className="text-5xl font-semibold tracking-[-.05em] md:text-7xl">How we work</h2><p className="mt-6 text-lg leading-8 text-white/60">A calm, sequenced operating model for sourcing from China and shipping globally.</p></FadeUp><div>{steps.map((step,i)=><FadeUp delay={i*.05} key={step}><div className="flex gap-6 border-t border-white/15 py-6"><span className="text-white/40">0{i+1}</span><h3 className="text-2xl">{step}</h3></div></FadeUp>)}</div></div></section>
  <section id="industries" className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12"><FadeUp><h2 className="text-5xl font-semibold tracking-[-.05em]">Industries</h2></FadeUp><div className="mt-10 grid gap-4 md:grid-cols-3">{industries.map((x,i)=><FadeUp delay={i*.05} key={x}><div className="rounded-3xl border border-black/10 p-8 text-2xl transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-soft">{x}</div></FadeUp>)}</div></section>
  <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12"><FadeUp><div className="rounded-[2rem] bg-white p-8 shadow-soft lg:p-14"><p className="text-sm uppercase tracking-[.22em] text-muted">Customer testimonial</p><blockquote className="mt-6 max-w-5xl text-4xl font-medium tracking-[-.04em] lg:text-6xl">“SheiDokan turned a complex multi-supplier China program into a predictable weekly operating rhythm.”</blockquote><p className="mt-8 text-muted">Director of Operations, European consumer brand</p></div></FadeUp></section>
  <section id="faq" className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12"><FadeUp><h2 className="mb-10 text-5xl font-semibold tracking-[-.05em]">FAQ</h2></FadeUp><Accordion.Root type="single" collapsible>{['Can you verify suppliers before payment?','Do you manage OEM and ODM projects?','Can you ship door-to-door?'].map((q,i)=><FadeUp delay={i*.05} key={q}><Accordion.Item value={q} className="border-t border-black/10"><Accordion.Trigger className="flex w-full items-center justify-between py-7 text-left text-2xl">{q}<ChevronDown/></Accordion.Trigger><Accordion.Content className="overflow-hidden pb-7 text-muted data-[state=open]:animate-none">Yes. We combine factory checks, documentation review, production inspection, customs preparation and freight coordination into one managed workflow.</Accordion.Content></Accordion.Item></FadeUp>)}</Accordion.Root></section>
  <section id="contact" className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12"><FadeUp><div className="rounded-[2.5rem] bg-porcelain p-10 text-center ring-1 ring-black/5 lg:p-20"><h2 className="text-5xl font-semibold tracking-[-.05em] md:text-7xl">Ready to source and ship beautifully?</h2><p className="mx-auto mt-6 max-w-2xl text-lg text-muted">Send your product brief, target market and timeline. We will map the smartest route from supplier to door.</p><div className="mt-8"><Button dark>Start with SheiDokan</Button></div></div></FadeUp></section>
</main><footer className="mx-auto grid max-w-[1440px] gap-10 border-t border-black/10 px-6 py-12 text-sm text-muted md:grid-cols-4 lg:px-12"><div><h2 className="font-display text-3xl text-ink">SheiDokan</h2><p className="mt-4">Premium global trading, sourcing and logistics.</p></div><div>Services<br/>Freight<br/>Sourcing</div><div>Company<br/>Process<br/>Industries</div><div>© 2026 SheiDokan. Built for global commerce.</div></footer></> }
