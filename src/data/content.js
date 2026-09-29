const company = {
  legalName: "MEDDLEAFF HEALTHCARE PVT LTD",
  established: "September 2026",
  tagline: "Compassionate Care. Advanced Healthcare. Better Lives.",
  shortIntro: "Meddleaff Healthcare Pvt Ltd is a healthcare organization committed to providing quality, accessible and patient-centric healthcare services. We aim to combine medical expertise, modern infrastructure and compassionate care to create a trusted healthcare experience for every patient.",
  about: [
    "Meddleaff Healthcare Pvt Ltd is established with a vision to build a trusted and patient-focused healthcare organization that delivers quality medical services with compassion and professionalism. Our team brings together experienced medical professionals, healthcare entrepreneurs and management expertise to create an integrated healthcare ecosystem.",
    "We are committed to maintaining high standards of patient care, ethical medical practices, modern healthcare infrastructure and continuous improvement. Our approach focuses not only on treatment but also on patient safety, comfort, transparency and overall well-being."
  ],
  mission: "To provide quality, ethical and patient-centric healthcare services through medical excellence, modern technology and compassionate care.",
  vision: "To build a trusted and accessible healthcare network recognized for clinical excellence, patient safety, innovation and compassionate service.",
  founders: ["Dr. Aaliya Amreen", "Rameez Raja", "Ujjwal Chandak", "Abid Rizvi", "Tushar Bhelave"],
  values: [
    ["Patient First", "Every decision begins with the patient's well-being."],
    ["Compassion", "Treating every patient with dignity, empathy and respect."],
    ["Medical Excellence", "Maintaining high standards of clinical care."],
    ["Integrity & Ethics", "Conducting our services with honesty and transparency."],
    ["Patient Safety", "Making safety an essential part of every healthcare process."],
    ["Innovation", "Adopting modern technology and improving healthcare practices."],
    ["Teamwork", "Working together across medical and administrative teams."],
    ["Accessibility", "Striving to make quality healthcare more accessible to the community."],
    ["Continuous Improvement", "Learning, measuring and improving our services continuously."]
  ]
};

const doctor = {
  name: "Dr. Aaliya Amreen",
  title: "Consultant Obstetrician & Gynaecologist",
  hero: "Dr. Aaliya Amreen, your trusted consultant obstetrician & gynaecologist for comprehensive care.",
  image: "/IMG_5977.PNG",
  expertise: [
    "Alumni of the prestigious Indira Gandhi Government Medical College, Nagpur — completed MBBS from IGGMC with flying colours.",
    "Completed Post-Graduation from the esteemed Saifee Hospital, Mumbai, in the speciality of Obstetrics & Gynaecology.",
    "Diploma in IVF & Reproductive Medicine from Kiels University, Germany.",
    "Vast experience across major cities in India and abroad."
  ]
};

const affiliations = [
  { name: "Saifee Hospital", location: "Mumbai", code: "SH" },
  { name: "Ozone Hospital", location: "Mumbai", code: "OH" },
  { name: "KIMS Kingsway Hospital", location: "Nagpur", code: "KK" },
  { name: "Muscat Hospital", location: "Oman", code: "MH" }
];

const treatments = [
  ["Pregnancy & Antenatal Care", "Consultations that support maternal wellbeing, pregnancy progress and preparation from the early weeks through postnatal follow-up.", "Mother & Baby", ["Preconception and early-pregnancy guidance", "Antenatal reviews and report discussions", "Birth preparation and postnatal guidance"]],
  ["Normal & Caesarean Delivery", "Individual birth planning that considers clinical findings, maternal preferences and the wellbeing of mother and baby.", "Maternity", ["Discussion of delivery options", "Preparation for labour or a planned caesarean", "Recovery and post-delivery guidance"]],
  ["High-Risk Pregnancy Management", "Closer assessment and an individualized monitoring plan for pregnancies that may need additional clinical attention.", "Mother & Baby", ["Review of maternal and pregnancy risk factors", "A monitoring plan based on clinical need", "Clear discussion of referrals and next steps"]],
  ["Infertility & IVF Consultation", "A structured first consultation for couples seeking fertility evaluation, clarity on investigations and guidance on the next suitable pathway.", "Fertility", ["Medical and reproductive history review", "Discussion of appropriate investigations", "Guidance on treatment or referral pathways"]],
  ["Gynaecological Health Check-ups", "Preventive and symptom-led consultations across menstrual, pelvic and reproductive health concerns.", "Women's Health", ["Routine gynaecological review", "Menstrual, pelvic pain or infection concerns", "Screening discussions based on age and history"]],
  ["PCOS / PCOD Management", "Long-term, practical care for cycle changes, hormonal symptoms and reproductive health concerns associated with PCOS or PCOD.", "Women's Health", ["Cycle and symptom assessment", "Lifestyle and medical option discussions", "Ongoing review based on personal goals"]],
  ["Menopause Care", "Support through perimenopause and menopause, with attention to symptoms, quality of life and longer-term health conversations.", "Women's Health", ["Menstrual and symptom review", "Bone, heart and general wellbeing discussions", "Personalized symptom-management options"]],
  ["Laparoscopic Gynaecology", "Assessment and counselling for gynaecological conditions where minimally invasive evaluation or treatment may be clinically appropriate.", "Surgical Care", ["Review of scans, reports and symptoms", "Discussion of laparoscopy or hysteroscopy when relevant", "Preparation, recovery and follow-up guidance"]],
  ["Adolescent Gynaecology", "Private, respectful and age-appropriate support for menstrual and reproductive health concerns in adolescents and young patients.", "Women's Health", ["Period concerns and cycle education", "Support for common hormonal symptoms", "Clear guidance for patients and caregivers"]]
].map(([title, description, category, details], index) => ({ id: `treatment-${index + 1}`, title, description, category, details }));

const careStages = [
  ["Adolescence", "Age-appropriate guidance for periods, cycle changes and common hormonal concerns."],
  ["Reproductive Years", "Preventive check-ups, menstrual health, family-planning conversations and fertility guidance."],
  ["Pregnancy & Postnatal", "Support from preconception and antenatal care through birth planning and postnatal review."],
  ["Perimenopause & Menopause", "Personalized discussion of changing cycles, symptoms and long-term wellbeing."]
];

const gallery = [
  ["/97f56d2e-21fb-41ca-b98c-9ce9f76d7896.jpg", "Clinic & Facility", "Welcoming patient spaces"],
  ["/c69548f5-2001-4af7-8be6-86387ea9f2ef.jpg", "Patient Care", "Thoughtful consultations"],
  ["/1df8b57d-2e09-4d94-9387-5f2e50ee529e.jpg", "Clinic & Facility", "Modern diagnostic support"],
  ["/16aa1c22-ef26-409e-9c2b-d841f5ef0773.jpg", "Patient Care", "Compassion at every step"],
  ["/e9d4b42a-d4db-417b-a168-2db3195baed5.jpg", "Clinic & Facility", "Advanced clinical infrastructure"],
  ["/7db208ff-0eb4-4cef-a07d-4f1ce9aac64f.jpg", "Clinic & Facility", "Comfortable consultation rooms"],
  ["/eb01b7dd-fdd5-48ad-93e2-a9d553ab3d5e.jpg", "Patient Care", "Care centred around families"],
  ["/3f76a529-568e-47ba-b38b-a0e8f557f0f5.jpg", "Clinic & Facility", "Prepared care environments"]
].map(([image, category, caption], index) => ({ image, category, caption, id: index + 1 }));

const blogPosts = [
  { category: "Pregnancy", title: "A calm guide to your first antenatal visit", excerpt: "What to note, what to carry and the questions that can help you feel prepared for your first consultation.", readTime: "5 min read", date: "Meddleaff Guide", image: "/5f2a3d41-5c55-47de-85c6-c00620ee48a5.jpg" },
  { category: "Women's Health", title: "Understanding your menstrual health", excerpt: "A practical overview of cycle changes and when it may be helpful to speak with a clinician.", readTime: "6 min read", date: "Meddleaff Guide", image: "/a218c231-1421-4a13-ae52-f03f35a8cd0f.jpg" },
  { category: "Fertility", title: "Preparing for a fertility consultation", excerpt: "A simple checklist for couples beginning a conversation about fertility and reproductive care.", readTime: "4 min read", date: "Meddleaff Guide", image: "/bf383dc9-9a55-411e-bc43-b606674a8186.jpg" }
];

const faqs = [
  ["How do I book an appointment?", "Use the appointment request form on the Contact page. The care team will review your details and confirm the next available step."],
  ["Do you handle high-risk pregnancies?", "High-risk pregnancy consultation is included in the care categories. The monitoring and care plan is determined after an individual clinical assessment."],
  ["Is IVF consultation available at the clinic?", "Infertility and IVF consultation is included in the care categories. The appropriate evaluation and referral pathway is discussed during consultation."],
  ["What should I bring to my first visit?", "Bring a valid ID, current prescriptions, previous reports and scans, and a brief note of your symptoms or questions."],
  ["When should I schedule a gynaecological consultation?", "Consider booking when symptoms are persistent, unusual or affecting daily life, or when you need preventive, reproductive or menopause-related guidance. Urgent symptoms should be assessed through appropriate emergency services."],
  ["Does every high-risk pregnancy need a procedure or caesarean delivery?", "No. Care is planned individually after clinical assessment. Monitoring, referrals and delivery decisions depend on the mother's health, pregnancy findings and changing clinical needs."],
  ["Can family planning be discussed during a routine visit?", "Yes. A consultation can include pregnancy planning, contraception questions and reproductive-health goals so suitable options can be discussed in context."]
];

export { affiliations, blogPosts, careStages, company, doctor, faqs, gallery, treatments };
