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
  image: "/6c1f39c9-60ee-4a6d-8afe-b844475b521d.jpg",
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
  ["Pregnancy & Antenatal Care", "Routine and high-risk pregnancy monitoring, antenatal check-ups and delivery care.", "Mother & Baby"],
  ["Normal & Caesarean Delivery", "Safe, supervised delivery care with a focus on maternal and neonatal well-being.", "Maternity"],
  ["High-Risk Pregnancy Management", "Specialised monitoring and care for pregnancies needing closer clinical attention.", "Mother & Baby"],
  ["Infertility & IVF Consultation", "Evaluation and guidance for couples facing difficulty conceiving, including an IVF referral pathway.", "Fertility"],
  ["Gynaecological Health Check-ups", "Routine screening, PAP smear and preventive gynaecological consultations.", "Women's Health"],
  ["PCOS / PCOD Management", "Diagnosis and long-term management of hormonal and menstrual disorders.", "Women's Health"],
  ["Menopause Care", "Consultation and management of peri-menopausal and menopausal symptoms.", "Women's Health"],
  ["Laparoscopic Gynaecological Surgery", "Minimally invasive surgical procedures for gynaecological conditions.", "Surgical Care"],
  ["Adolescent Gynaecology", "Consultation for menstrual and reproductive health concerns in young patients.", "Women's Health"]
].map(([title, description, category], index) => ({ id: `treatment-${index + 1}`, title, description, category }));

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
  ["What should I bring to my first visit?", "Bring a valid ID, current prescriptions, previous reports and scans, and a brief note of your symptoms or questions."]
];

export { affiliations, blogPosts, company, doctor, faqs, gallery, treatments };
