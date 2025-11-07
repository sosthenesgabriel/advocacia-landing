"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Mail, ShieldCheck, MapPin } from "lucide-react";

const WHATS = "5599988887777";
const WHATS_LINK = `https://wa.me/${WHATS}?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.`;
const EMAIL = "contato@advimperatriz.com.br";

export default function Page() {
  const [nome, setNome] = useState("");
  const [tel, setTel] = useState("");
  const [msg, setMsg] = useState("");

  return (
    <main>
      {/* NAV */}
      <header className="border-b border-neutral-800/80">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-6 text-emerald-400" />
            <span className="font-semibold">Advocacia Imperatriz &amp; Associados</span>
          </div>
          <nav className="hidden sm:flex items-center gap-4">
            <a href="#areas" className="text-sm text-neutral-300 hover:text-white">Áreas</a>
            <a href="#contato" className="text-sm text-neutral-300 hover:text-white">Contato</a>
            <a href="#faq" className="text-sm text-neutral-300 hover:text-white">FAQ</a>
            <a href={WHATS_LINK} target="_blank" className="btn">Agendar consulta</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="py-16 sm:py-24">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <h1 className="h1">
              Defesa jurídica estratégica, <span className="text-emerald-400">com resultados.</span>
            </h1>
            <p className="mt-6 text-neutral-300 max-w-2xl">
              Escritório boutique com 15+ anos em Direito Cível, Trabalhista, Família e Empresarial.
              Atendimento humano, técnica apurada e total transparência.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a className="btn" href={WHATS_LINK} target="_blank">
                <Phone className="mr-2 size-4" /> Falar no WhatsApp
              </a>
              <a
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium border border-neutral-800 hover:bg-neutral-900"
                href={`mailto:${EMAIL}`}
              >
                <Mail className="mr-2 size-4" /> Enviar e-mail
              </a>
            </div>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                ["15+", "Anos de atuação"],
                ["1.200+", "Casos conduzidos"],
                ["98%", "Índice de satisfação"],
                ["< 2h", "Tempo médio de resposta"],
              ].map(([n, t]) => (
                <Card key={t} className="card p-4 text-center">
                  <div className="text-2xl font-bold">{n}</div>
                  <div className="text-xs text-neutral-400">{t}</div>
                </Card>
              ))}
            </div>
          </div>

          {/* FORM */}
          <Card id="contato" className="card p-6">
            <h2 className="text-xl font-semibold">Agende uma consulta estratégica</h2>
            <p className="text-sm text-neutral-400 mt-1">Resposta em até 2 horas úteis.</p>
            <CardContent className="p-0 mt-6">
              <form
                action={`https://formsubmit.co/${EMAIL}`}
                method="POST"
                className="grid gap-4"
              >
                <input type="hidden" name="_subject" value="Novo contato do site — Advocacia Imperatriz" />
                <input type="hidden" name="_captcha" value="false" />
                <Input placeholder="Seu nome" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                <Input placeholder="Seu e-mail" type="email" name="email" />
                <Input placeholder="Telefone/WhatsApp" name="telefone" value={tel} onChange={(e) => setTel(e.target.value)} />
                <Textarea placeholder="Resumo do caso (opcional)" name="mensagem" value={msg} onChange={(e) => setMsg(e.target.value)} />
                <Button type="submit" className="btn w-full">Solicitar contato</Button>
                <p className="text-[12px] text-neutral-500">
                  Ao enviar, você concorda com nossa Política de Privacidade.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ÁREAS */}
      <section id="areas" className="py-10">
        <div className="container">
          <h3 className="text-2xl font-semibold mb-6">Áreas de atuação</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Cível", "Trabalhista", "Família", "Empresarial"].map((a) => (
              <Card key={a} className="card p-5">
                <div className="text-lg font-semibold">{a}</div>
                <p className="text-sm text-neutral-400 mt-2">
                  Consultoria, contencioso e soluções sob medida.
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12">
        <div className="container">
          <h3 className="text-2xl font-semibold mb-4">Perguntas frequentes</h3>
          <Accordion type="single" collapsible className="max-w-3xl">
            <AccordionItem value="1">
              <AccordionTrigger>Como funciona a consulta?</AccordionTrigger>
              <AccordionContent>
                Você descreve o caso, avaliamos viabilidade e próximos passos. Se houver demanda, apresentamos proposta e cronograma.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="2">
              <AccordionTrigger>Atendem online?</AccordionTrigger>
              <AccordionContent>
                Sim. Atendemos presencialmente em Imperatriz–MA e por videochamada para todo o Brasil.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="3">
              <AccordionTrigger>Qual o prazo de retorno?</AccordionTrigger>
              <AccordionContent>Respondemos em até 2 horas úteis.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800/80">
        <div className="container py-8 text-sm text-neutral-400 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="size-4" />
            Av. Getúlio Vargas, Imperatriz – MA
          </div>
          <div className="flex gap-4">
            <a href={`mailto:${EMAIL}`} className="hover:text-white"><Mail className="inline size-4 mr-1"/> {EMAIL}</a>
            <a href={WHATS_LINK} target="_blank" className="hover:text-white"><Phone className="inline size-4 mr-1"/> (99) 9 8888-7777</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
