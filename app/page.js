import Script from "next/script";
import Link from "next/link";
import dynamic from 'next/dynamic';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { HowToCreateBiodata } from "../components/HowToCreateBiodata";
import { IntersectionObserverWrapper } from "../components/IntersectionObserverWrapper";
import { AutoScrollTrigger } from "../components/AutoScrollTrigger";

import { BiodataFormatExplanation } from "../components/BiodataFormatExplanation";
import { EditableBiodataArticle } from "../components/EditableBiodataArticle";
import { MarriageBiodataProblemsArticle } from "../components/MarriageBiodataProblemsArticle";
import { FeatureBanner } from "../components/FeatureBanner";
import { WhyNeedBiodata } from "../components/WhyNeedBiodata";
import { BenefitsSection } from "../components/BenefitsSection";
import { WhyPeopleLoveUs } from "../components/WhyPeopleLoveUs";
import { HowToShareBiodata } from "../components/HowToShareBiodata";
import { DesignTips } from "../components/DesignTips";
import { CTASection } from "../components/CTASection";
import { FAQ } from "../components/FAQ";

// High-value interactive sections (kept dynamically imported)
import { TemplateCarousel, BiodataForm } from "../components/DynamicHomeComponents";

export const metadata = {
  alternates: {
    canonical: "https://www.marriagebiodatahub.com",
  },
};

const sectionPlaceholder = (
  <div className="w-full h-64 md:h-96 my-8 animate-pulse bg-slate-900/50 rounded-3xl" aria-hidden="true" />
);

export default function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Marriage Biodata Hub",
      "@id": "https://www.marriagebiodatahub.com/#app",
      url: "https://www.marriagebiodatahub.com",
      applicationCategory: "LifestyleApplication",
      operatingSystem: "Web Browser, Android, iOS",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
      description: "Free online marriage biodata maker with 40+ templates for Hindu, Muslim, Sikh, Christian, Jain, Marathi, and all Indian communities. No login required. Your data stays in your browser.",
      inLanguage: "en-IN",
      publisher: {
        "@type": "Organization",
        name: "Marriage Biodata Hub",
        url: "https://www.marriagebiodatahub.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.marriagebiodatahub.com/images/Logo-of-marriage-biodata-hub.webp",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Create a Marriage Biodata",
      description: "Create and download a free marriage biodata in 3 steps. Most families finish in under 5 minutes.",
      totalTime: "PT5M",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Personal Info",
          text: "Enter your basic details, identity, and physical traits — name, date of birth, height, religion, caste, horoscope details, hobbies, and partner expectations.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Family Info",
          text: "Add details about your parents' names and occupations, number and marital status of siblings, family type (joint or nuclear), and native place.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Contact Info",
          text: "Add the contact number (typically a parent's number), address, and WhatsApp number so interested families can reach you directly.",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a marriage biodata?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A marriage biodata is a structured one-page document used in Indian arranged marriages. It introduces a bride or groom to a potential match's family, covering personal details, family background, education, career, horoscope information (for Hindu families), and partner preferences. It works like a resume but for the marriage process — and is typically shared via WhatsApp with relatives or uploaded to matrimonial sites like Shaadi.com and BharatMatrimony.",
          },
        },
        {
          "@type": "Question",
          name: "Is Marriage Biodata Hub completely free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You can create your full biodata, choose any template, preview it, and download the PDF completely free — no login, no email, no credit card. Your data is processed in your browser and never stored on our servers.",
          },
        },
        {
          "@type": "Question",
          name: "Can I edit my biodata after downloading?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, always. Return to marriagebiodatahub.com on the same device and your information will be restored from your browser's local storage. Update any field and re-download your updated PDF anytime.",
          },
        },
        {
          "@type": "Question",
          name: "How do I share my marriage biodata on WhatsApp?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "After downloading your PDF, tap the WhatsApp share button on the download screen. This opens WhatsApp with your biodata PDF attached and a ready-to-send message. You can also share the private link we generate — it opens your biodata beautifully on any phone without needing to download a file.",
          },
        },
        {
          "@type": "Question",
          name: "Which Indian communities does Marriage Biodata Hub support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We have dedicated templates and fields for Hindu, Muslim, Sikh, Christian, Jain, Marathi, Gujarati, Tamil, Telugu, Bengali, and Punjabi communities. Each template includes the community-specific fields that families actually check — Gotra, Rashi, and Manglik for Hindu families; Sect and Biradari for Muslim families; Kul and Kulswamini for Marathi families; Natchathiram and Rasi for Tamil families.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to include a photo in my biodata?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, if possible. A biodata with a photo receives significantly more responses than one without. Use a recent photo taken in the last 6 months, with a plain or light background, natural lighting, and a clear face. Avoid filters.",
          },
        },
        {
          "@type": "Question",
          name: "How can I make a biodata for marriage for free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use the free maker on this page. Fill in your personal, family and contact details, choose from 40+ templates, and download your biodata as a PDF, JPEG or Word file. It is completely free — no login, no watermark, and your details never leave your device.",
          },
        },
        {
          "@type": "Question",
          name: "Can I make a biodata for marriage on my mobile phone?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The maker works in your phone's browser — no app to install. Fill in the same three steps, preview your biodata, download it and share it on WhatsApp right from your phone.",
          },
        },
        {
          "@type": "Question",
          name: "Can I make a biodata for marriage without a photo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, the photo is optional. Many families prefer to share the photograph separately later. Every template on this page adjusts cleanly when no photo is added.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <AutoScrollTrigger />
      <main className="flex-1">
        <Hero />
        <HowToCreateBiodata />

        <section
          aria-labelledby="what-is-biodata-for-marriage-heading"
          className="relative mt-14 w-full overflow-hidden"
        >
          <div className="premium-frame">
            <div aria-hidden className="premium-frame-glow" />
            <div className="premium-panel">
              <div aria-hidden className="premium-panel-overlay" />
              <div className="relative z-10 mx-auto max-w-3xl px-5 py-12 text-center sm:px-10 sm:py-14">
                <h2
                  id="what-is-biodata-for-marriage-heading"
                  className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl"
                >
                  What Is a Biodata for Marriage?
                </h2>
                <div className="mx-auto mt-5 flex justify-center" aria-hidden>
                  <div className="h-1 w-16 rounded-full bg-gradient-to-r from-brand-500 to-rose-500" />
                </div>
                <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
                  A biodata for marriage is a one-page profile that families exchange when looking for a match. It covers your personal details, family background, education, work and the kind of partner you are looking for. It is also called a marriage biodata, matrimonial biodata, shaadi biodata or rishta biodata — different names for the same document.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
                  New to this? Read our full guide on{" "}
                  <Link
                    href="/what-is-marriage-biodata"
                    className="text-brand-400 underline underline-offset-2 transition-colors hover:text-brand-300"
                  >
                    what a marriage biodata is
                  </Link>{" "}
                  — what goes in it, and what families look for first.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="how-to-make-biodata-for-marriage-heading"
          className="relative mt-14 w-full overflow-hidden"
        >
          <div className="premium-frame">
            <div aria-hidden className="premium-frame-glow" />
            <div className="premium-panel">
              <div aria-hidden className="premium-panel-overlay" />
              <div className="relative z-10 mx-auto max-w-3xl px-5 py-12 sm:px-10 sm:py-14">
                <h2
                  id="how-to-make-biodata-for-marriage-heading"
                  className="text-center text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl"
                >
                  How to Make a Biodata for Marriage
                </h2>
                <div className="mx-auto mt-5 flex justify-center" aria-hidden>
                  <div className="h-1 w-16 rounded-full bg-gradient-to-r from-brand-500 to-rose-500" />
                </div>
                <p className="mt-6 text-center text-base leading-relaxed text-slate-300 sm:text-lg">
                  With the free maker on this page, your biodata is ready in about five minutes:
                </p>
                <ol className="mt-6 space-y-4 text-left text-base leading-relaxed text-slate-300">
                  <li className="premium-card-static flex gap-4 p-5">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-sm font-bold text-brand-400">
                      1
                    </span>
                    <span>
                      Fill in your details — personal information, family details and contact information, in three short steps.
                    </span>
                  </li>
                  <li className="premium-card-static flex gap-4 p-5">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-sm font-bold text-brand-400">
                      2
                    </span>
                    <span>
                      Pick a design — choose from 40+ templates made for Hindu, Muslim, Sikh, Christian, Jain and other Indian communities, and see your biodata update live.
                    </span>
                  </li>
                  <li className="premium-card-static flex gap-4 p-5">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-sm font-bold text-brand-400">
                      3
                    </span>
                    <span>
                      Download and share — save it as a PDF, JPEG or Word file, or send it straight to family on WhatsApp. No login, no watermark.
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        
        <IntersectionObserverWrapper fallback={sectionPlaceholder} rootMargin="400px">
          <TemplateCarousel />
        </IntersectionObserverWrapper>

        <IntersectionObserverWrapper id="biodata-form-wrapper" fallback={sectionPlaceholder} rootMargin="400px">
          <BiodataForm />
        </IntersectionObserverWrapper>

        <BiodataFormatExplanation />
        <EditableBiodataArticle />
        <MarriageBiodataProblemsArticle />
        <FeatureBanner />
        <WhyNeedBiodata />
        <BenefitsSection />
        <HowToShareBiodata />
        <WhyPeopleLoveUs />
        <DesignTips />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
