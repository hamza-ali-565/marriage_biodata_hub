import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const metadata = {
  title: 'About Us | Marriage Biodata Hub',
  description: 'Learn about Marriage Biodata Hub, our mission to modernize traditional matrimonial biodata creation, and why thousands choose our platform for elegant, professional profiles.',
  alternates: {
    canonical: 'https://www.marriagebiodatahub.com/about-us',
  },
};

export default function AboutUs() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-slate-950 flex flex-col relative overflow-hidden font-sans pb-24">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-brand-500/10 blur-[150px] mix-blend-screen" />
          <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-rose-500/10 blur-[150px] mix-blend-screen" />
          <div className="absolute bottom-[10%] left-[20%] w-[600px] h-[600px] rounded-full bg-indigo-500/5 blur-[150px] mix-blend-screen" />

          {/* Subtle SVG Pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <main className="flex-1 w-full max-w-4xl mx-auto px-6 pt-20 sm:px-10 sm:pt-28 relative z-10">
          <div className="text-center mb-14">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-br from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight">
              About Us
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-rose-500 rounded-full mx-auto" />
          </div>

          <div className="space-y-8">
            <section className="premium-card-static p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-white mb-3">What Marriage Biodata Hub Is</h2>
              <p className="text-base text-slate-300 leading-relaxed">
                Marriage Biodata Hub is a free online tool that helps Indian families create a marriage biodata — the profile that is shared between two families when a match is being considered. In most homes, making one still means an old Word file passed from a cousin, a visit to a printing shop, or paying someone to type and format it. On this site, you fill in your details, choose a design, and download a finished biodata in a few minutes — from your phone or computer, without creating an account and without paying anything.
              </p>
            </section>

            <section className="premium-card-static p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-white mb-3">Why We Built It</h2>
              <p className="text-base text-slate-300 leading-relaxed">
                The biodata is the first introduction between two families, and it carries a lot: personal details, family background, education, work, horoscope information, and what the family is looking for. We kept seeing the same problems — incomplete formats that forgot important fields, horoscope details squeezed into a corner, spelling mistakes in a document that elders would read carefully, and families handing personal information and photographs to shops and agents just to get a page typed. We built Marriage Biodata Hub so that any family can make a complete, clean, and respectful biodata on their own, in the format their community actually uses.
              </p>
            </section>

            <section className="premium-card-static p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-white mb-3">How It Works</h2>
              <p className="text-base text-slate-300 leading-relaxed">
                Creating a biodata takes three steps. First, you enter the personal details — name, date of birth, education, occupation, and the community-specific details your tradition asks for. Second, you add family information and contact details. Third, you pick a design and download your biodata as a PDF, JPEG, or Word (.docx) file, ready to print or to share on WhatsApp in one tap. There is no login and no watermark, and you can edit and download as many times as you need, free.
              </p>
            </section>

            <section className="premium-card-static p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-white mb-3">Made for Every Community</h2>
              <p className="text-base text-slate-300 leading-relaxed">
                A Hindu biodata is not the same as a Muslim or a Marathi one, so the forms change with the community. Hindu biodatas include Gotra, Nakshatra, Rashi, and Manglik status. Muslim biodatas include Sect and Biradari. Marathi biodatas carry Kul and Kulswamini, and Tamil biodatas carry Natchathiram and Rasi. The site has dedicated formats and guides for Hindu, Muslim, Sikh, Christian, Jain, Marathi, Gujarati, Tamil, Telugu, Bengali, and Punjabi families, so the biodata you make follows your own tradition instead of a generic template.
              </p>
            </section>

            <section className="premium-card-static p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-white mb-3">Your Information Stays With You</h2>
              <p className="text-base text-slate-300 leading-relaxed">
                A marriage biodata contains some of a family&apos;s most personal information, so this site is built so that your details never leave your device. Everything you type is processed in your own browser — we do not ask you to create an account, and the details you enter are not uploaded to or stored on our servers. When you close the page, nothing about your family stays with us. Our{" "}
                <Link href="/privacy-policy" className="text-brand-400 underline underline-offset-2 hover:text-brand-300 transition-colors">
                  Privacy Policy
                </Link>{" "}
                explains this in full.
              </p>
            </section>

            <section className="premium-card-static p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-white mb-3">Guides That Help You Write It</h2>
              <p className="text-base text-slate-300 leading-relaxed">
                Knowing what to write is often harder than formatting it, so the site also carries free guides written for families: what to write in each section of a biodata, how to describe partner preferences honestly, which hobbies to include, how to write family details, and answers to common questions about things like Manglik status and Gotra. You will find them on our blog, linked from the footer.
              </p>
            </section>

            <section className="premium-card-static p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-white mb-3">Who Runs This Site</h2>
              <p className="text-base text-slate-300 leading-relaxed">
                Marriage Biodata Hub is run by a small, independent team that builds and maintains the tool itself — the templates, the forms, and the guides. We read every message that comes in. If something is not working, if your community&apos;s format is missing a field it should have, or if you have an idea for a template, write to us at{" "}
                <a href="mailto:marriagebiodatahub@gmail.com" className="text-brand-400 underline underline-offset-2 hover:text-brand-300 transition-colors">
                  marriagebiodatahub@gmail.com
                </a>{" "}
                or through the{" "}
                <Link href="/contact-us" className="text-brand-400 underline underline-offset-2 hover:text-brand-300 transition-colors">
                  Contact page
                </Link>{" "}
                — we usually reply within 24 to 48 hours.
              </p>
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
