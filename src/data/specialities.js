const specialities = [
  {
    number: "01", slug: "pregnancy-antenatal-care", title: "Pregnancy & Antenatal Care", subtitle: "Support Through Every Trimester",
    description: "Structured antenatal consultations focused on maternal health, pregnancy progress and clear preparation for the months ahead.",
    overview: "Antenatal care creates a consistent space to review the mother's wellbeing, understand pregnancy changes and prepare for birth with reliable clinical guidance.",
    concerns: ["Preconception and early-pregnancy questions", "Routine antenatal reviews and report discussions", "Nutrition, medicines and lifestyle guidance", "Birth preparation and postnatal planning"],
    care: ["Detailed medical and pregnancy-history review", "Discussion of scans, reports and recommended follow-up", "A care plan adapted as the pregnancy progresses"],
    image: "/5f898eac-bc01-42d1-b2da-1361636c2c0b.jpg"
  },
  {
    number: "02", slug: "normal-caesarean-delivery", title: "Normal & Caesarean Delivery", subtitle: "Informed Maternity Care",
    description: "Delivery planning discussed around individual clinical needs, maternal wellbeing and safe, respectful decision-making.",
    overview: "Birth planning considers the health of mother and baby, pregnancy progress, previous history and the patient's questions and preferences.",
    concerns: ["Understanding available delivery pathways", "Preparing for labour and hospital admission", "Questions following a previous caesarean", "Recovery and post-delivery care"],
    care: ["Individual birth-planning conversations", "Clear explanation of clinical recommendations", "Preparation and postnatal follow-up guidance"],
    image: "/2b39e03e-4927-4ff3-8f12-8298998af0c1.jpg"
  },
  {
    number: "03", slug: "high-risk-pregnancy", title: "High-Risk Pregnancy", subtitle: "Closer Clinical Attention",
    description: "Consultation and monitoring pathways for pregnancies that may need additional assessment and coordinated care.",
    overview: "A high-risk label does not define one fixed pathway. Care is individualized according to maternal health, pregnancy findings and how needs change over time.",
    concerns: ["Pre-existing medical conditions", "Previous pregnancy complications", "Multiple pregnancy or age-related risk factors", "Pregnancy findings requiring closer review"],
    care: ["Individual risk and history assessment", "A monitoring plan based on clinical need", "Coordinated referrals and delivery planning when required"],
    image: "/20007541-19c0-46a9-ae20-3c8e85301a9c.jpg"
  },
  {
    number: "04", slug: "fertility-ivf-consultation", title: "Fertility & IVF Consultation", subtitle: "A Clear Starting Point",
    description: "A thoughtful first conversation for couples seeking fertility evaluation, guidance and an appropriate referral pathway.",
    overview: "A fertility consultation begins with both partners' history where relevant, then identifies which questions or investigations may help clarify the next step.",
    concerns: ["Difficulty conceiving", "Irregular cycles or ovulation questions", "Previous fertility reports or treatment", "Understanding IVF and referral pathways"],
    care: ["Medical and reproductive-history review", "Discussion of suitable investigations", "Guidance on treatment choices or specialist referral"],
    image: "/ce28dde0-9473-43ef-bd71-e7e31da33132.jpg"
  },
  {
    number: "05", slug: "gynaecological-checkups", title: "Gynaecological Check-ups", subtitle: "Preventive Women's Health",
    description: "Routine consultations focused on screening, symptom review and maintaining gynaecological wellbeing through different life stages.",
    overview: "Preventive visits provide time to discuss menstrual, pelvic, sexual and reproductive-health questions even when there is no urgent concern.",
    concerns: ["Routine preventive review", "Changes in periods or unusual bleeding", "Pelvic pain, discharge or infection concerns", "Age- and history-appropriate screening questions"],
    care: ["Private discussion of symptoms and history", "Clinical examination when appropriate and consented", "Clear advice on tests, monitoring or follow-up"],
    image: "/91064ef1-b4ad-4200-85ba-ee2c50ac9b1a.jpg"
  },
  {
    number: "06", slug: "pcos-pcod-management", title: "PCOS / PCOD Management", subtitle: "Long-Term, Practical Support",
    description: "Individual evaluation and ongoing guidance for menstrual, hormonal and related health concerns.",
    overview: "PCOS care is shaped around the symptoms that matter to the patient, including cycles, skin or hair changes, metabolic health and pregnancy goals.",
    concerns: ["Irregular or absent periods", "Acne or unwanted hair growth", "Weight and metabolic-health concerns", "Fertility and pregnancy planning"],
    care: ["Symptom, cycle and health-history assessment", "Discussion of lifestyle and medical options", "Ongoing review based on personal goals"],
    image: "/e73e54ba-786f-4156-a1c4-73f1ac971dc9.jpg"
  },
  {
    number: "07", slug: "menopause-care", title: "Menopause Care", subtitle: "Confidence Through Change",
    description: "Consultation for peri-menopausal and menopausal concerns with care options discussed around individual symptoms and priorities.",
    overview: "Menopause care looks beyond a single symptom to understand changes in cycles, sleep, mood, comfort and longer-term health priorities.",
    concerns: ["Changing or irregular periods", "Hot flushes, sleep or mood changes", "Vaginal or urinary symptoms", "Bone, heart and general wellbeing questions"],
    care: ["Personal symptom and health-risk review", "Discussion of suitable management options", "Follow-up based on response and changing needs"],
    image: "/d1ea0e96-4bf6-4e4a-9f8c-c4ae7861251c.jpg"
  },
  {
    number: "08", slug: "laparoscopic-gynaecology", title: "Laparoscopic Gynaecology", subtitle: "Minimally Invasive Care",
    description: "Clinical assessment and counselling for gynaecological conditions where a laparoscopic approach may be considered.",
    overview: "Minimally invasive options may be discussed only after symptoms, examination findings, scans and suitable alternatives have been carefully reviewed.",
    concerns: ["Fibroids, endometriosis or ovarian cyst questions", "Persistent pelvic pain requiring assessment", "Understanding laparoscopy or hysteroscopy", "Preparation and recovery questions"],
    care: ["Review of reports, scans and previous treatment", "Explanation of benefits, limitations and alternatives", "Procedure planning and follow-up when clinically appropriate"],
    image: "/19968093-1cbd-4055-8f15-2655a0a9d7fd.jpg"
  },
  {
    number: "09", slug: "adolescent-gynaecology", title: "Adolescent Gynaecology", subtitle: "Sensitive, Age-Appropriate Guidance",
    description: "Respectful consultation for menstrual and reproductive health concerns in adolescents and young patients.",
    overview: "Adolescent consultations use clear, age-appropriate language and create a respectful setting for questions about periods, development and reproductive health.",
    concerns: ["Painful, heavy or irregular periods", "Delayed or early menstrual changes", "Hormonal symptoms and cycle education", "Questions from young patients or caregivers"],
    care: ["A sensitive and confidential conversation", "Assessment guided by symptoms and age", "Practical guidance with caregiver involvement when appropriate"],
    image: "/206ea162-e96c-4b22-8644-6fab932133ee.jpg"
  }
];

export { specialities };
