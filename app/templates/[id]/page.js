import { notFound, redirect } from "next/navigation";
import { TEMPLATE_DEFINITIONS } from "../../../components/templatesConfig";
import { TemplateDetailClient } from "../../../components/TemplateDetailClient";

const KEEP_INDEXED_SLUGS = new Set([
  "pavitra-patrika",
  "lagna-patrika",
  "noor-nikah",
  "konkan-kiran",
  "guru-nanak",
  "vivah-varta",
  "sanskaar-saathi",
  "akhand-jodi",
  "kanakambar",
  "prabhaat",
]);

const ABOUT_DESIGN_BY_SLUG = {
  "pavitra-patrika":
    "Pavitra Patrika takes its visual cues from a traditional saffron lagna patrika, pairing ceremonial Indian motifs with a structured one-page biodata layout. At the heart of the header sits an auspicious Kalash emblem alongside a lotus-framed portrait that places the candidate's photograph prominently without crowding personal details. Built in a traditional style with maroon as its default accent colour, the template keeps sections clear while preserving a celebratory, ceremonial warmth. It is crafted specifically for traditional Hindu families across Rajasthan, Madhya Pradesh, Gujarat, and Uttar Pradesh who want their matrimonial introduction to carry the grace and respect of a printed wedding invitation. A family typically chooses Pavitra Patrika when sharing a son's or daughter's profile with elders, community networks, or pandits who appreciate classic Hindu symbolism over plain modern layouts. Using the customisation bar above, you can adjust heading and body fonts or switch accent shades before saving your copy.",
  "lagna-patrika":
    "Lagna Patrika draws on Maharashtrian wedding stationery traditions with a saffron-and-green dual border framing the entire sheet. Its traditional layout pairs bilingual headings in Marathi and English so both elders and younger relatives can scan every section effortlessly, while a dedicated Kul field gives prominent space to ancestral clan details alongside personal, family, and horoscope information. Designed with maroon as its default theme colour, the visual balance keeps traditional borders crisp while ensuring text stays readable across every section. Lagna Patrika is crafted for Marathi families across all communities in Maharashtra, whether sharing a profile in Pune, Mumbai, Nagpur, or smaller towns. Families usually pick this design when exchanging a lagnacha biodata through family networks, community mandals, or local matchmakers where Marathi terminology and traditional framing immediately signal cultural alignment. You can also fine-tune the typography and accent palette in the preview controls before exporting.",
  "noor-nikah":
    "Noor Nikah opens with Bismillah rendered in Nastaliq script and frames the candidate's portrait inside a distinctive hexagonal cutout surrounded by Islamic geometric star motifs. Rooted in classic Urdu print craftsmanship and Hyderabadi tile artistry, its traditional layout brings visual richness and symmetry while maintaining clear spacing across personal, family, and background sections. Teal serves as the default accent colour, complementing the geometric linework with a calm, dignified register. This template is created for Muslim families looking for a thoughtful, culturally grounded alternative to a generic rishta biodata—suited to households across Hyderabad, Delhi, Lucknow, and Mumbai alike. A family selects Noor Nikah when they want an introduction that honours Islamic artistic heritage and looks formal enough for both respected elders and close relatives. Using the controls above the preview, you can also adjust the serif or sans-serif font pairing and accent colour to suit your preference.",
  "konkan-kiran":
    "Konkan Kiran pairs a clean cross header with an azulejo blue aesthetic and an oval portrait frame, giving the layout a calm coastal elegance inspired by heritage tilework. Styled in a traditional category with navy as its default theme, it organises personal background, family roots, education, and partner notes with uncluttered margins and gentle visual contrast. As a dedicated Indian Christian biodata template, Konkan Kiran is suited specifically for Goan Catholic, Kerala Christian, Mangalorean, and Anglo-Indian families who rarely see their traditions reflected in standard matrimonial formats. Families choose this design when they want a dignified, community-appropriate presentation without unrelated Hindu or generic motifs—ideal for circulating through parish networks, family friends, or overseas relatives. Before downloading your finished sheet, you can switch between font pairings or pick another accent shade in the customisation panel above to match your household's taste.",
  "guru-nanak":
    "Guru Nanak begins with an Ik Onkar invocation and brings together Nishan Sahib saffron and royal blue tones in a respectful traditional composition. Gurmukhi bilingual headings appear alongside English labels so elders and younger family members alike can navigate personal, career, and family details naturally, while subtle Khanda dividers separate each section cleanly. Built specifically for Sikh families in Punjab as well as the wider Sikh diaspora in Canada, the UK, Australia, and the US, this template reflects Sikh identity with restraint and dignity. A family typically chooses Guru Nanak when sharing a match profile within Gurudwara circles, extended relatives, or overseas Punjabi networks where bilingual headings and authentic Sikh symbols make an immediate, welcoming impression. The preview controls above let you adjust the heading font, body font, and accent tone while keeping the underlying layout intact before downloading.",
  "vivah-varta":
    "Vivah Varta uses a crisp modern structure tailored around cross-border profiles, incorporating a country badge, subtle globe watermark, dedicated visa and income fields, and dual-currency support. Styled in a modern category with navy as its default accent, its clean grid presents international education, overseas work history, and family roots in India on a single balanced page without clutter. Vivah Varta is built for NRI and diaspora families who regularly share profiles between relatives in India and matches settled abroad in North America, Europe, the Middle East, or Asia-Pacific. Families pick this template when residency status, overseas location, and transparent compensation in both local currency and INR need to be understood at a glance—avoiding follow-up confusion on the first call. Before exporting, you can adjust the typography and colour accent using the preview bar above to match your preferred presentation.",
  "sanskaar-saathi":
    "Sanskaar Saathi reverses the usual individual-first hierarchy by placing a khandaan crest, lineage strip, and dedicated family heritage section ahead of personal details. Finished in a traditional style with maroon as its default accent palette, the layout highlights parents, extended family roots, and ancestral standing right at the top before moving smoothly into education, profession, and personal profile fields. It is crafted for joint families across Uttar Pradesh, Bihar, Rajasthan, and Gujarat where the family's background, values, and reputation carry as much weight in an arranged match as the individual candidate's credentials. A household chooses Sanskaar Saathi when introducing a bride or groom through elder relatives, samaj directories, or traditional family networks where knowing the khandaan comes first. You can still personalise the heading and body fonts or switch accent shades above the preview before downloading your copy.",
  "akhand-jodi":
    "Akhand Jodi is built around a side-by-side dual biodata layout that presents two candidates from the same household—such as a brother and sister—on one unified sheet under a shared family header. Styled in a traditional category with gold as its default theme colour, it uses custom fields for the second candidate so both individuals' personal, educational, and career particulars sit neatly in parallel columns beneath common parent and family background details. Families across India choose Akhand Jodi when parents are actively seeking matches for two unmarried siblings at the same time and want relatives or community matchmakers to view both profiles together without juggling two separate documents. Its single-page dual structure keeps shared family information concise while giving each candidate equal visual space. As with the rest of the preview tool, heading fonts, body typography, and accent colours can be customised above before export.",
  "kanakambar":
    "Kanakambar features a repeating Kanakambar flower diamond band across the top and bottom borders paired with an ornate corner-bracket photo frame that draws attention cleanly to the candidate's portrait. Designed in a traditional style with gold as its default accent tone, the template balances festive ornamentation around the edges with clear, well-spaced typography across the central personal, family, and career blocks. It is tailored for Gujarati, Marwari, and Rajasthani families who favour warm, celebratory aesthetics that mirror traditional festive stationery without making the text hard to scan on a phone or printed page. A family chooses Kanakambar during active wedding seasons, community sammelans, or festival introductions when they want a polished, joyful presentation that stands out respectfully from plain documents. Using the controls above the live preview, you can also test different fonts and accent colours before saving.",
  "prabhaat":
    "Prabhaat centres the candidate's circular portrait inside a detailed 12-petal lotus mandala ring and allocates structured space to a Jathagam section with Rasi and Natchathiram fields. Crafted in a traditional style with maroon as its default accent colour, the design pairs classical South Indian motif framing with neat, legible columns for personal background, family lineage, education, and career. It is created specifically for South Indian Hindu and Brahmin families—across Tamil, Telugu, Kannada, and Malayalam households—where birth star and moon sign details are checked right away alongside family particulars. Families choose Prabhaat when sending a profile to relatives, family priests, or community elders who expect Jathagam details presented clearly alongside a graceful traditional border. Before downloading, you can adjust the heading font, body font, and accent shade directly in the preview bar above.",
};

export function generateStaticParams() {
  return [
    ...TEMPLATE_DEFINITIONS.map((template) => ({
      id: template.slug,
    })),
    ...TEMPLATE_DEFINITIONS.map((template) => ({
      id: template.id,
    }))
  ];
}

export async function generateMetadata({ params }) {
  const { id: templateId } = await params;
  let template = TEMPLATE_DEFINITIONS.find((t) => t.slug === templateId);
  if (!template) {
    template = TEMPLATE_DEFINITIONS.find((t) => t.id === templateId);
  }

  const safeName = template ? template.name : "Marriage Biodata Template";
  const safeDescription = template?.description || "Premium marriage biodata template with modern, customisable design.";
  // Always use the canonical slug URL
  const canonicalId = template ? template.slug : templateId;
  const url = `https://www.marriagebiodatahub.com/templates/${canonicalId}`;
  const shouldNoindex = !KEEP_INDEXED_SLUGS.has(canonicalId);

  return {
    title: `${safeName} | Marriage Biodata Hub`,
    description: safeDescription,
    ...(shouldNoindex ? { robots: { index: false, follow: true } } : {}),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${safeName} | Marriage Biodata Hub`,
      description: safeDescription,
      url: url,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${safeName} | Marriage Biodata Hub`,
      description: safeDescription,
    },
  };
}

export default async function TemplateDetailPage({ params }) {
  const { id: templateId } = await params;

  let template = TEMPLATE_DEFINITIONS.find((t) => t.slug === templateId);
  if (!template) {
    template = TEMPLATE_DEFINITIONS.find((t) => t.id === templateId);
    if (template) {
      redirect(`/templates/${template.slug}`);
    }
  }

  if (!template) {
    notFound();
  }
  const aboutDesign = KEEP_INDEXED_SLUGS.has(template.slug)
    ? ABOUT_DESIGN_BY_SLUG[template.slug] || null
    : null;

  return <TemplateDetailClient templateId={template.id} aboutDesign={aboutDesign} />;
}
