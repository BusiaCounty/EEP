export const APP_NAME = "End Early Pregnancies";

export type RateKind = "national" | "county" | "sub";

export type RateRow = {
  id: string;
  name: string;
  kind: RateKind;
  y2025: number;
  y2026: number;
};

/** Figures as printed in the 2026 Busia County youth handbook. */
export const rates: RateRow[] = [
  { id: "kenya", name: "Kenya", kind: "national", y2025: 16.3, y2026: 15.5 },
  { id: "busia", name: "Busia County", kind: "county", y2025: 17.4, y2026: 16.9 },
  { id: "bunyala", name: "Bunyala", kind: "sub", y2025: 19.4, y2026: 20.8 },
  { id: "butula", name: "Butula", kind: "sub", y2025: 18.4, y2026: 19.4 },
  { id: "matayos", name: "Matayos", kind: "sub", y2025: 15.1, y2026: 15.1 },
  { id: "nambale", name: "Nambale", kind: "sub", y2025: 21.1, y2026: 16.0 },
  { id: "samia", name: "Samia", kind: "sub", y2025: 20.6, y2026: 18.6 },
  { id: "teso-central", name: "Teso Central", kind: "sub", y2025: 17.3, y2026: 18.7 },
  { id: "teso-north", name: "Teso North", kind: "sub", y2025: 14.2, y2026: 13.7 },
  { id: "teso-south", name: "Teso South", kind: "sub", y2025: 14.5, y2026: 14.6 },
];

export function rateById(id: string): RateRow {
  return rates.find((row) => row.id === id) ?? rates[1]!;
}

function round1(n: number): number {
  return Math.round(n * 10) / 10;
}

function versus(value: number, benchmark: number): string {
  if (Math.abs(value - benchmark) < 0.05) return "the same as";
  return value < benchmark ? "below" : "above";
}

export function placeStory(place: RateRow): string {
  const delta = round1(place.y2026 - place.y2025);
  const move =
    delta === 0
      ? `stayed at ${place.y2026.toFixed(1)}`
      : delta < 0
        ? `fell from ${place.y2025.toFixed(1)} to ${place.y2026.toFixed(1)}`
        : `rose from ${place.y2025.toFixed(1)} to ${place.y2026.toFixed(1)}`;

  const county = rateById("busia");
  const kenya = rateById("kenya");
  const compare =
    place.kind === "sub"
      ? ` In 2026 that is ${versus(place.y2026, county.y2026)} the Busia County rate of ${county.y2026.toFixed(1)}, and ${versus(place.y2026, kenya.y2026)} the Kenya rate of ${kenya.y2026.toFixed(1)}.`
      : "";

  return `In ${place.name}, teenage pregnancy ${move} out of every 100 girls.${compare}`;
}

export const causes = [
  "Limited knowledge about sexual health and reproduction",
  "Poor decision-making skills and low self-esteem",
  "Peer pressure and influence from social media",
  "Social gatherings (disco matanga, keshas, back-to-school parties), especially without adult supervision",
  "Persuasion by older boys and men",
  "Transactional sex (sex for money or gifts)",
  "Child marriage",
  "Alcohol and drug use",
];

export const dangers = [
  "Anaemia (lack of enough blood in the body)",
  "High blood pressure in pregnancy, which can be life-threatening",
  "Difficult labour because the body is still growing: it can cause lifelong injury or even death",
  "Unsafe abortion attempts that can end in death",
  "Low birth weight and premature babies",
  "Mental and emotional distress",
  "Education stopped for a time or for good, and fewer chances for further education and work",
  "Stigma, discrimination and rejection",
];

export const healthyChoices = [
  "Practise abstinence from sex",
  "Concentrate on your education",
  "Develop personal career goals",
  "Set personal boundaries",
  "Avoid alcohol, drug and substance abuse",
  "Use social media wisely",
  "Spend time with productive friends",
  "Take part in sports and youth activities",
];

export const resistPressure = [
  "Say “No” clearly and firmly. You do not owe anyone an explanation",
  "Walk away, leave early or go with a trusted friend if you feel pressured",
  "Choose friends who respect your choices",
  "Gifts, money, lifts or promises are not love. You owe nothing in return",
  "Be careful with older boys and men who give you special attention or gifts",
  "Never accept sex in exchange for money or gifts",
  "Avoid being alone with someone who pressures you",
  "Tell a trusted adult if someone keeps pushing you",
];

export const warningSigns = [
  "Entices you to have sex",
  "Threatens you",
  "Controls your friends or your phone",
  "Demands sexual photographs",
  "Gives gifts in exchange for sex",
  "Uses alcohol or drugs to influence you",
];

export const keyMessages = [
  "Protect your future: delay sexual activity until you are ready and able to make responsible decisions.",
  "Your body belongs to you. You have the right to set boundaries and say NO.",
  "No one should force you into sexual activity. This is sexual harassment. Report anyone who sexually harasses you.",
  "Talk to a trusted adult or qualified health worker when you have questions about sexual and reproductive health.",
  "Avoid alcohol and drugs that can impair your judgement and increase vulnerability.",
  "A healthy relationship is based on respect, consent, trust and responsibility.",
  "Pregnant adolescents need support, not stigma.",
];

export const myths: { myth: string; fact: string }[] = [
  {
    myth: "A girl cannot become pregnant the first time she has sex.",
    fact: "Pregnancy can occur even on the first time.",
  },
  {
    myth: "A girl cannot become pregnant if she has not started regular periods.",
    fact: "Ovulation can occur before a first or regular period.",
  },
  {
    myth: "You cannot get pregnant during your period.",
    fact: "Pregnancy is still possible because cycles vary and sperm can survive for several days.",
  },
  {
    myth: "Sex is safe as long as a girl does not get pregnant.",
    fact: "Sex at a young age is risky even without pregnancy: it can bring HIV and other infections, pressure, violence, fear and emotional hurt.",
  },
  {
    myth: "Talking to adolescents about sex encourages sex.",
    fact: "Accurate, age-appropriate information helps young people make informed decisions.",
  },
  {
    myth: "Only girls are responsible for teenage pregnancy prevention.",
    fact: "Pregnancy prevention is a shared responsibility between boys and girls.",
  },
  {
    myth: "A pregnant adolescent should be rejected.",
    fact: "She needs health care, protection, support and opportunities to continue her life.",
  },
  {
    myth: "Sexual violence is the victim’s fault.",
    fact: "Sexual violence is the responsibility of the perpetrator.",
  },
];

export type QuizItem = {
  prompt: string;
  answer: boolean;
  why: string;
};

export const quiz: QuizItem[] = [
  {
    prompt: "Pregnancy can happen the first time a girl has sex.",
    answer: true,
    why: "Pregnancy can occur even on the first time.",
  },
  {
    prompt: "A girl cannot become pregnant before her periods are regular.",
    answer: false,
    why: "Ovulation can occur before a first or regular period.",
  },
  {
    prompt: "You cannot get pregnant during your period.",
    answer: false,
    why: "Cycles vary, and sperm can survive for several days.",
  },
  {
    prompt: "Accurate information helps young people make safer decisions.",
    answer: true,
    why: "Talking honestly does not push adolescents into sex. Facts help them choose.",
  },
  {
    prompt: "Only girls are responsible for preventing pregnancy.",
    answer: false,
    why: "Prevention is a shared responsibility between boys and girls.",
  },
  {
    prompt: "Sex with a child under 18 is a crime in Kenya.",
    answer: true,
    why: "It is defilement. It is never the girl’s fault.",
  },
  {
    prompt: "Gifts or money mean you owe someone sex.",
    answer: false,
    why: "Gifts, money, lifts or promises are not love. You owe nothing in return.",
  },
  {
    prompt: "A pregnant adolescent should be supported, not rejected.",
    answer: true,
    why: "She needs health care, protection, support and a chance to continue her life.",
  },
];

export const helpSteps = [
  {
    title: "Talk",
    text: "Tell one adult you trust: a parent, teacher, counsellor or health worker.",
  },
  {
    title: "Say NO to pressure",
    text: "You decide when you are ready. Nobody can force you.",
  },
  {
    title: "Get true information",
    text: "Ask at a youth-friendly clinic. Do not depend on rumours.",
  },
  {
    title: "Go early",
    text: "Think you may be pregnant? Go to the clinic quickly. You will not be laughed at.",
  },
  {
    title: "Stay in school",
    text: "Pregnancy is not the end of learning. Ask your school how to continue.",
  },
];

export type Topic = {
  title: string;
  text: string;
  to: "/" | "/facts" | "/learn" | "/myths" | "/help";
  hash?: string;
  group: string;
};

export const topics: Topic[] = [
  {
    group: "Learn",
    title: "What teenage pregnancy is",
    text: "Pregnancy during adolescence, generally among girls aged 10–19.",
    to: "/learn",
    hash: "what",
  },
  {
    group: "Learn",
    title: "It can happen early",
    text: "A girl can become pregnant once ovulation begins, even soon after menstruation starts.",
    to: "/learn",
    hash: "early",
  },
  {
    group: "Learn",
    title: "Why it happens",
    text: "Peer pressure, gatherings, gifts, child marriage, alcohol, older boys and men.",
    to: "/learn",
    hash: "causes",
  },
  {
    group: "Learn",
    title: "Dangers to a girl",
    text: "Anaemia, high blood pressure, difficult labour, school leaving, stigma.",
    to: "/learn",
    hash: "dangers",
  },
  {
    group: "Learn",
    title: "HIV, violence and the law",
    text: "Sex under 18 is defilement. It is never the girl’s fault.",
    to: "/learn",
    hash: "risk",
  },
  {
    group: "Learn",
    title: "How to protect yourself",
    text: "Abstinence, school, boundaries, sports, friends who respect you.",
    to: "/learn",
    hash: "protect",
  },
  {
    group: "Learn",
    title: "Pressure is not love",
    text: "Say no. Gifts and money do not mean you owe anyone.",
    to: "/learn",
    hash: "pressure",
  },
  {
    group: "Facts",
    title: "Sub-county numbers",
    text: "Bunyala Butula Matayos Nambale Samia Teso North Teso South Teso Central 2025 2026.",
    to: "/facts",
  },
  {
    group: "Myths",
    title: "Myths and facts",
    text: "First time, periods, whose responsibility, rejection, violence.",
    to: "/myths",
  },
  {
    group: "Myths",
    title: "Check what you know",
    text: "Eight true or false questions from the handbook.",
    to: "/myths",
    hash: "check",
  },
  {
    group: "Help",
    title: "Childline 116 and GBV 1195",
    text: "Free calls. County phone +254 700 106 517. info@busiacounty.go.ke.",
    to: "/help",
    hash: "lines",
  },
  {
    group: "Help",
    title: "Adults I can talk to",
    text: "Save a parent, teacher or clinic on this phone only.",
    to: "/help",
    hash: "adults",
  },
  {
    group: "Help",
    title: "If someone forces you",
    text: "Get to a safe place. Tell a trusted adult. Report it.",
    to: "/help",
    hash: "emergency",
  },
];

export function searchTopics(query: string): Topic[] {
  const needle = query.trim().toLowerCase();
  if (needle.length < 2) return [];
  const words = needle.split(/\s+/).filter((word) => word.length > 1);

  const scored = searchCorpus()
    .map((topic) => {
      const title = topic.title.toLowerCase();
      const blob = `${title} ${topic.text} ${topic.group}`.toLowerCase();
      let score = 0;
      if (title === needle) score += 12;
      if (title.includes(needle)) score += 6;
      if (blob.includes(needle)) score += 4;
      for (const word of words) {
        if (title.includes(word)) score += 3;
        else if (blob.includes(word)) score += 1;
        else score -= 2;
      }
      return { topic, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  const seen = new Set<string>();
  const hits: Topic[] = [];
  for (const item of scored) {
    const key = `${item.topic.to}#${item.topic.hash ?? ""}|${item.topic.title}`;
    if (seen.has(key)) continue;
    seen.add(key);
    hits.push(item.topic);
    if (hits.length === 8) break;
  }
  return hits;
}

function searchCorpus(): Topic[] {
  const places: Topic[] = rates
    .filter((row) => row.kind !== "national")
    .map((row) => ({
      group: "Facts",
      title: row.name,
      text: placeStory(row),
      to: "/facts",
      hash: row.id,
    }));

  const fromList = (
    items: string[],
    group: string,
    to: Topic["to"],
    hash: string,
    label: string,
  ): Topic[] =>
    items.map((item) => ({
      group,
      title: item.replace(/\.$/, ""),
      text: label,
      to,
      hash,
    }));

  return [
    ...topics,
    ...places,
    ...fromList(causes, "Learn", "/learn", "causes", "Why early pregnancy happens"),
    ...fromList(dangers, "Learn", "/learn", "dangers", "Dangers of early pregnancy"),
    ...fromList(healthyChoices, "Learn", "/learn", "protect", "How to protect yourself"),
    ...fromList(resistPressure, "Learn", "/learn", "pressure", "Pressure is not love"),
    ...fromList(warningSigns, "Learn", "/learn", "warnings", "Be careful when someone does this"),
    ...fromList(keyMessages, "Learn", "/learn", "messages", "Key message for adolescent girls"),
    ...myths.flatMap((item) => [
      {
        group: "Myths",
        title: item.myth.replace(/\.$/, ""),
        text: `Myth. Fact: ${item.fact}`,
        to: "/myths" as const,
      },
    ]),
    ...helpSteps.map((step) => ({
      group: "Help",
      title: step.title,
      text: step.text,
      to: "/help" as const,
      hash: "steps",
    })),
  ];
}

