import { unstable_setRequestLocale } from "next-intl/server";

import { LocaleProps } from "@/types";

import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export const metadata = {
  title: 'Portfolio | Vu Ngo',
  description: 'Professional portfolio showcasing my work as a software developer with experience in web development, mobile apps, and more.',
  keywords: ['developer', 'portfolio', 'software engineer', 'web development', 'Vu Ngo', 'Ngô Anh Vũ', 'Ngô Anh Vu', 'Anh Vu Ngô', 'Anh Vu Ngô Anh Vũ'],
};

  export default function Home({ params: { locale }}: LocaleProps) {

  unstable_setRequestLocale(locale);

  return (
    <main className="flex flex-col items-center px-4">
      <header>
        <Intro locale={locale}/>
      </header>
      <SectionDivider />
      <section id="about">
        <About locale={locale}/>
      </section>
      <section id="projects">
        <Projects locale={locale}/>
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experience locale={locale}/>
      </section>
      <section id="contact">
        <Contact locale={locale}/>
      </section>
    </main>
  );
}
