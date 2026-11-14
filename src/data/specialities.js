import specialityHero1 from "../assessts/Specialities/Department of Obstetrics & Gynaecology.png";
import specialityHero2 from "../assessts/Specialities/Department of Paediatrics.png";
import specialityHero3 from "../assessts/Specialities/Department of General Surgery.png";
import specialityHero4 from "../assessts/Specialities/Department of Medicine.png";
import specialityHero5 from "../assessts/Specialities/Department of Cosmetology.png";
import specialityHero6 from "../assessts/Specialities/Department of Endocrinology.png";
import specialityHero7 from "../assessts/Specialities/Department of Preventive Health Care.png";
import specialityHero8 from "../assessts/Specialities/Department of Pathology.png";
import specialityHero9 from "../assessts/Specialities/Department of Radiology.png";

const legacySpecialities = [
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



const specialities = [
  {
    "number": "01",
    "slug": "womens-health-reproductive-medicine",
    "title": "Department of Obstetrics & Gynaecology",
    "subtitle": "Complete women's health care",
    "description": "Comprehensive care for pregnancy, reproductive health, gynaecological conditions and menopause at every stage of life.",
    "overview": "At Meddleaff Healthcare, the Department of Obstetrics & Gynaecology supports women through different stages of life, from family planning and pregnancy to reproductive health and menopause. Care begins with understanding your concerns, reviewing your medical history and discussing a personalised plan with clear guidance at every step.",
    "concerns": [
      "Pregnancy and antenatal consultations",
      "Menstrual and gynaecological concerns",
      "Reproductive health questions",
      "Menopause-related concerns"
    ],
    "care": [
      "Discussion of your needs and relevant medical history",
      "Review of available reports and recommended next steps",
      "Guidance on preparation and follow-up"
    ],
    "services": [
      { "title": "Prenatal Care and Childbirth", "description": "Care from preconception counselling through pregnancy, delivery planning and postnatal follow-up, with attention to the wellbeing of mother and baby." },
      { "title": "Gynaecological Services", "description": "Routine screening, assessment and treatment planning for menstrual disorders, pelvic pain, infections and other gynaecological concerns." },
      { "title": "Minimally Invasive Surgery", "description": "Assessment for laparoscopy and hysteroscopy for conditions such as fibroids, endometriosis and ovarian cysts. Suitability, alternatives and recovery are discussed individually." },
      { "title": "Family Planning and Contraception", "description": "Personalised contraception guidance, reproductive health counselling and family planning support shaped around your health and preferences." },
      { "title": "Menopause Management", "description": "Individual support for menopausal symptoms, including lifestyle guidance and discussion of treatment options such as hormone therapy when appropriate." }
    ],
    "highlights": [
      { "title": "Individualised Care", "description": "Care plans shaped around your symptoms, medical history and stage of life." },
      { "title": "Clear Clinical Guidance", "description": "Understand recommended assessments, treatment choices and preparation for your care." },
      { "title": "Informed Decisions", "description": "Time to discuss your questions and preferences before deciding on the next step." },
      { "title": "Coordinated Care", "description": "Coordination with other departments, including paediatrics and endocrinology, when needed." }
    ],
    "faqs": [
      { "question": "What services does the Obstetrics & Gynaecology department cover?", "answer": "Care includes prenatal and postnatal consultations, assessment of high-risk pregnancies, gynaecological concerns, family planning, menopause management and assessment for laparoscopy or hysteroscopy. Your consultation helps determine the appropriate care pathway." },
      { "question": "How can I confirm consultation charges?", "answer": "Contact the Meddleaff care team through our contact page for current consultation charges and appointment details." },
      { "question": "How can I confirm emergency obstetric care arrangements?", "answer": "Ask the Meddleaff care team about emergency obstetric care arrangements and the appropriate care location. If you are experiencing a medical emergency, seek immediate care at the nearest emergency department." },
      { "question": "Can I discuss fertility concerns?", "answer": "You can discuss reproductive health, pregnancy planning and difficulty conceiving during a consultation. The care team can advise on evaluation, treatment options and referral pathways according to your needs." },
      { "question": "What does postnatal care include?", "answer": "Postnatal consultations provide an opportunity to discuss recovery after delivery, maternal wellbeing, feeding-related questions and family planning. Follow-up is tailored to your delivery and individual needs." }
    ],
    "image": specialityHero1,
    "imageAlt": "Department of Obstetrics & Gynaecology care"
  },
  {
    "number": "02",
    "slug": "paediatrics",
    "title": "Paediatrics & Paediatric Surgery",
    "subtitle": "Compassionate care through every stage of childhood",
    "description": "Child-focused healthcare for infants, children and adolescents, with guidance on growth, development, preventive care and surgical assessment when needed.",
    "overview": "At Meddleaff Healthcare, paediatric care considers the physical, developmental and emotional needs of growing children. Our approach brings together preventive health guidance, age-appropriate assessment and clear communication with parents and caregivers. Specialist consultations, surgical procedures and care locations are confirmed individually with the care team.",
    "concerns": [
      "Routine child health reviews and vaccination questions",
      "Growth, development and childhood health concerns",
      "Review of symptoms, previous reports and ongoing conditions",
      "Conditions that may require paediatric surgical assessment",
      "Questions from parents and caregivers about follow-up"
    ],
    "care": [
      "Review of symptoms, growth, development and relevant medical history",
      "Discussion of suitable assessments and care options with parents or caregivers",
      "Clear preparation, specialist referral and follow-up guidance when needed"
    ],
    "serviceGroups": [
      {
        "eyebrow": "Paediatric Services",
        "title": "Support for growing children.",
        "description": "Discuss your child's needs with the care team to confirm suitable consultations and current service arrangements.",
        "services": [
          {
            "title": "Well-Child Care",
            "description": "Regular health check-ups, growth and developmental assessments, immunizations, and preventive healthcare guidance to support a child's physical and emotional well-being."
          },
          {
            "title": "Paediatric Surgery",
            "description": "Surgical evaluation and treatment for a range of childhood conditions, including congenital abnormalities, hernias, appendicitis, and other disorders requiring operative management."
          },
          {
            "title": "Specialized Paediatric Clinics",
            "description": "Focused assessment of childhood concerns involving growth, the heart, the nervous system and other organ systems, with specialist coordination according to need and availability."
          },
          {
            "title": "Urgent Paediatric Care Guidance",
            "description": "Contact the care team to confirm urgent paediatric assessment arrangements and the appropriate care location. For a medical emergency, seek immediate care at the nearest emergency department."
          }
        ]
      },
      {
        "eyebrow": "Paediatric Surgical Care",
        "title": "Understand childhood surgical procedures.",
        "description": "The procedures below describe conditions that may require surgical assessment. Treatment depends on age, clinical findings and individual needs. Specialist availability, procedure arrangements and the appropriate care location must be confirmed during consultation.",
        "services": [
          {
            "title": "Circumcision",
            "description": "Surgical removal of the foreskin of the penis, performed for selected medical indications or other appropriate reasons."
          },
          {
            "title": "Hernia Repair",
            "description": "Surgical correction of hernias, including inguinal hernias, that may occur in infants and children."
          },
          {
            "title": "Tonsillectomy & Adenoidectomy",
            "description": "Removal of the tonsils or adenoids to manage selected cases of recurrent infections or obstructive sleep-related breathing problems."
          },
          {
            "title": "Ear Tube Placement (Myringotomy)",
            "description": "Placement of small ventilation tubes in the eardrum to manage persistent middle-ear fluid or recurrent ear infections."
          },
          {
            "title": "Appendectomy",
            "description": "Surgical removal of an inflamed appendix to treat appendicitis and reduce the risk of complications."
          },
          {
            "title": "Cleft Lip & Palate Repair",
            "description": "Corrective surgery for congenital cleft lip and cleft palate to support feeding, speech development, and facial function."
          },
          {
            "title": "Hypospadias Repair",
            "description": "Surgical correction of a congenital condition in which the urethral opening is located away from its usual position."
          },
          {
            "title": "Orchiopexy (Undescended Testicle Repair)",
            "description": "A procedure to reposition an undescended testicle into the scrotum."
          },
          {
            "title": "Paediatric Orthopaedic Surgery",
            "description": "Surgical treatment of selected bone, joint, and musculoskeletal conditions, including deformities, fractures, and congenital abnormalities."
          },
          {
            "title": "Pyloromyotomy",
            "description": "A surgical procedure to treat pyloric stenosis, a condition that obstructs the passage of food from the stomach."
          },
          {
            "title": "Gastrostomy Tube Placement",
            "description": "Placement of a feeding tube directly into the stomach when a child requires longer-term nutritional support."
          },
          {
            "title": "Excision of Birthmarks & Skin Lesions",
            "description": "Surgical removal of selected skin growths, lesions, moles, or birthmarks when clinically indicated."
          },
          {
            "title": "Umbilical Hernia Repair",
            "description": "Surgical correction of a persistent or symptomatic hernia near the belly button when repair is appropriate."
          },
          {
            "title": "Laparoscopic Paediatric Surgery",
            "description": "Minimally invasive surgical procedures performed through small incisions for suitable childhood conditions."
          },
          {
            "title": "Paediatric Neurosurgical Procedures",
            "description": "Specialized surgical treatment for selected brain and nervous system conditions, including hydrocephalus and certain tumors."
          }
        ]
      }
    ],
    "highlights": [
      {
        "title": "Child-Centred Care",
        "description": "Care considers each child's physical, developmental and emotional needs."
      },
      {
        "title": "Infancy to Adolescence",
        "description": "Health guidance and medical assessment reflect the child's age and stage of development."
      },
      {
        "title": "Family Involvement",
        "description": "Parents and caregivers take part in care discussions and treatment planning."
      },
      {
        "title": "Patient Safety",
        "description": "Careful assessment and individual treatment decisions guide the next steps."
      }
    ],
    "faqs": [
      {
        "question": "What does Paediatrics & Paediatric Surgery cover?",
        "answer": "Care includes routine child health reviews, vaccination guidance, growth and development monitoring, assessment of childhood illnesses and evaluation of conditions that may require surgery. Service availability is confirmed with the care team."
      },
      {
        "question": "Can I book a consultation about growth or development?",
        "answer": "You can discuss growth, developmental milestones and other childhood health concerns during a consultation. Bring available health records, vaccination details and previous reports to help the assessment."
      },
      {
        "question": "What surgical procedures may children require?",
        "answer": "The appropriate procedure depends on the condition and individual assessment. Examples include hernia repair, appendectomy and selected corrective procedures. The care team can confirm the relevant specialist and care arrangements."
      },
      {
        "question": "How is a decision about umbilical hernia repair made?",
        "answer": "An individual assessment helps determine whether observation, follow-up or repair is appropriate. The care team will explain the recommendation for your child."
      },
      {
        "question": "Can I discuss my child's vaccinations?",
        "answer": "Bring your child's vaccination record to the consultation to review immunisation history and discuss the next steps. Confirm vaccine availability and appointment arrangements with the care team."
      },
      {
        "question": "How can I confirm neonatal intensive care arrangements?",
        "answer": "Contact the Meddleaff care team directly to confirm neonatal care facilities, specialist availability and the appropriate care location. NICU availability should be confirmed before making admission arrangements."
      },
      {
        "question": "How can I confirm emergency paediatric care arrangements?",
        "answer": "Ask the care team about urgent assessment arrangements and the appropriate location. If your child is experiencing a medical emergency, seek immediate care at the nearest emergency department."
      }
    ],
    "ctaTitle": "Support every milestone of your child's health.",
    "ctaCopy": "Discuss your child's health, development and consultation needs with the Meddleaff care team.",
    "metaTitle": "Paediatrics & Paediatric Surgery | Meddleaff Healthcare",
    "metaDescription": "Explore paediatric healthcare at Meddleaff Healthcare, including vaccination guidance, growth monitoring, childhood health concerns and paediatric surgical assessment.",
    "image": specialityHero2,
    "imageAlt": "Paediatrics and child healthcare"
  },
  {
    "number": "03",
    "slug": "general-laparoscopic-surgery",
    "title": "General & Laparoscopic Surgery",
    "subtitle": "Surgical care with precision, safety and compassion",
    "description": "Personalised general and laparoscopic surgical care, with a focus on patient safety, clear guidance and support throughout recovery.",
    "overview": "At Meddleaff Healthcare, surgical care begins with understanding your condition, overall health and individual preferences. Our approach combines modern surgical techniques, individualised treatment planning and compassionate support before and after surgery. The care team will confirm procedure availability and the appropriate care location during consultation.",
    "concerns": [
      "Appendix, gallbladder and hernia concerns",
      "Breast, thyroid and soft tissue lumps",
      "Stomach, bowel and colorectal conditions",
      "Understanding open and minimally invasive treatment options"
    ],
    "care": [
      "Review of symptoms, medical history, scans and reports",
      "Discussion of suitable procedures, alternatives and possible risks",
      "Individual preparation, recovery and follow-up planning"
    ],
    "serviceGroups": [
      {
        "eyebrow": "General Surgery",
        "title": "Our general surgery services.",
        "services": [
          {
            "title": "Appendectomy",
            "description": "Surgical removal of the appendix, commonly performed to treat appendicitis and prevent complications."
          },
          {
            "title": "Cholecystectomy",
            "description": "Surgical removal of the gallbladder to treat gallstones, inflammation, and certain gallbladder-related conditions."
          },
          {
            "title": "Hernia Repair",
            "description": "Surgical treatment of different types of hernias to repair weakened abdominal tissues and relieve discomfort."
          },
          {
            "title": "Colectomy",
            "description": "Surgical removal of part or all of the colon to manage certain colorectal diseases, including cancer and inflammatory bowel conditions."
          },
          {
            "title": "Thyroidectomy",
            "description": "Surgical removal of part or all of the thyroid gland to treat selected thyroid disorders, nodules, or cancer."
          },
          {
            "title": "Breast Surgery",
            "description": "Surgical procedures such as lumpectomy and mastectomy for appropriate breast-related conditions."
          },
          {
            "title": "Gastrectomy",
            "description": "Removal of part or all of the stomach for certain conditions, including stomach cancer and selected severe gastric diseases."
          },
          {
            "title": "Hemorrhoidectomy",
            "description": "Surgical removal of hemorrhoids in cases where other treatments are ineffective or unsuitable."
          },
          {
            "title": "Parathyroidectomy",
            "description": "Removal of one or more parathyroid glands to treat conditions such as hyperparathyroidism."
          },
          {
            "title": "Soft Tissue Mass Excision",
            "description": "Surgical removal of abnormal soft tissue growths, including selected lumps, cysts, and tumors."
          }
        ]
      },
      {
        "eyebrow": "Minimally Invasive Care",
        "title": "Our laparoscopic surgery services.",
        "description": "Laparoscopic surgery uses specialised instruments and a small camera through small incisions. For suitable patients, this approach may reduce postoperative discomfort, scarring and recovery time. The appropriate technique depends on the procedure and individual clinical assessment.",
        "services": [
          {
            "title": "Laparoscopic surgery uses specialized instruments and a small camera inserted through tiny incisions. For suitable patients, this minimally invasive approach may help reduce postoperative pain, scarring, and recovery time.",
            "description": "Laparoscopic Cholecystectomy"
          },
          {
            "title": "Laparoscopic Appendectomy",
            "description": "Removal of the appendix using minimally invasive surgical techniques."
          },
          {
            "title": "Laparoscopic Hernia Repair",
            "description": "Repair of abdominal wall hernias using laparoscopic instruments."
          },
          {
            "title": "Laparoscopic Colectomy",
            "description": "Removal of a portion or all of the colon through minimally invasive surgery."
          },
          {
            "title": "Laparoscopic Nissen Fundoplication",
            "description": "A surgical procedure used to treat selected cases of gastroesophageal reflux disease (GERD)."
          },
          {
            "title": "Laparoscopic Hysterectomy",
            "description": "Minimally invasive surgical removal of the uterus when medically indicated."
          },
          {
            "title": "Laparoscopic Splenectomy",
            "description": "Surgical removal of the spleen through small incisions."
          },
          {
            "title": "Laparoscopic Adrenalectomy",
            "description": "Removal of one or both adrenal glands using laparoscopic techniques."
          },
          {
            "title": "Laparoscopic Ovarian Cystectomy",
            "description": "Removal of selected ovarian cysts while preserving ovarian tissue when possible."
          },
          {
            "title": "Laparoscopic Inguinal Hernia Repair",
            "description": "Minimally invasive repair of hernias occurring in the groin region."
          }
        ]
      }
    ],
    "highlights": [
      {
        "title": "Individualised Treatment Plans",
        "description": "Surgical planning considers your medical condition, overall health and personal preferences."
      },
      {
        "title": "Preoperative Counselling",
        "description": "Clear explanations help you understand the recommended procedure, possible risks and expected recovery."
      }
    ],
    "faqs": [
      {
        "question": "What is the difference between general surgery and laparoscopic surgery?",
        "answer": "General surgery covers a broad range of operations performed through open or minimally invasive approaches. Laparoscopic surgery uses small incisions, specialised instruments and a camera to perform suitable procedures."
      },
      {
        "question": "What are the benefits of laparoscopic surgery?",
        "answer": "For suitable patients, laparoscopic surgery may reduce postoperative discomfort, scarring and recovery time. The potential benefits and limitations depend on your condition and procedure."
      },
      {
        "question": "Is laparoscopic surgery suitable for everyone?",
        "answer": "The appropriate surgical approach is decided after reviewing your condition, medical history and overall health. Your consultation includes a discussion of suitability, possible risks and alternatives."
      },
      {
        "question": "How long does recovery take after surgery?",
        "answer": "Recovery varies with the procedure, surgical approach and individual health. Your care team will discuss the expected recovery period and follow-up plan for your treatment."
      },
      {
        "question": "How should I prepare for general or laparoscopic surgery?",
        "answer": "Share your medical history, current medicines and available reports during consultation. Your care team will provide instructions for tests, medicines, fasting and admission as appropriate to your procedure. Follow the individual instructions you receive."
      }
    ],
    "ctaTitle": "Your health deserves expert surgical care.",
    "ctaCopy": "Take the next step with personalised surgical guidance and compassionate care at Meddleaff Healthcare.",
    "metaTitle": "General & Laparoscopic Surgery | Meddleaff Healthcare",
    "metaDescription": "Explore general and laparoscopic surgery information at Meddleaff Healthcare, including surgical procedures, minimally invasive techniques, and patient-centred care.",
    "image": specialityHero3,
    "imageAlt": "General and laparoscopic surgery care"
  },
  {
    "number": "04",
    "slug": "diabetology-rheumatology-internal-medicine",
    "aliases": [
      "internal-medicine"
    ],
    "title": "Diabetology, Rheumatology & Internal Medicine",
    "subtitle": "Comprehensive medical care for a healthier life",
    "description": "Personalised adult healthcare for acute illnesses, diabetes, chronic conditions and autoimmune concerns, with preventive guidance and ongoing support.",
    "overview": "At Meddleaff Healthcare, adult medical care brings together prevention, diagnosis and treatment planning for common illnesses and complex conditions. Consultations consider your history, symptoms, existing treatment and long-term health priorities. Individual care plans, monitoring and coordination with relevant specialties support continuity of care. Confirm specific services and appointment arrangements with the care team.",
    "concerns": [
      "Acute illnesses and persistent medical symptoms",
      "Diabetes, hypertension and ongoing health conditions",
      "Joint, inflammatory or autoimmune concerns",
      "Digestive, respiratory and metabolic health questions",
      "Preventive health reviews and older adult care"
    ],
    "care": [
      "Review of your symptoms, medical history, medicines and previous reports",
      "Discussion of suitable investigations, treatment options and specialist coordination",
      "An individual monitoring, lifestyle and follow-up plan"
    ],
    "serviceGroups": [
      {
        "eyebrow": "Our Services",
        "title": "Adult healthcare shaped around you.",
        "services": [
          {
            "title": "Diagnosis & Treatment",
            "description": "Comprehensive medical evaluation and treatment planning for acute illnesses, common health concerns and complex adult medical conditions."
          },
          {
            "title": "Preventive Healthcare",
            "description": "Health reviews, screening and immunisation guidance to identify risks and support prevention."
          },
          {
            "title": "Chronic Disease Management",
            "description": "Ongoing assessment and care planning for diabetes, hypertension, cardiovascular conditions and other long-term illnesses."
          },
          {
            "title": "Geriatric Care",
            "description": "Age-appropriate reviews for older adults, with attention to chronic conditions, functional independence and wellbeing."
          },
          {
            "title": "Medical Consultations",
            "description": "Individual clinical assessments, treatment recommendations and follow-up guidance based on your needs."
          },
          {
            "title": "Patient Education",
            "description": "Guidance on disease prevention, medicines, healthy lifestyles and informed medical decisions."
          }
        ]
      },
      {
        "eyebrow": "Areas of Care",
        "title": "Support for a wide range of medical concerns.",
        "description": "Assessment and care pathways depend on your clinical needs. Relevant specialist services and availability are confirmed individually.",
        "services": [
          {
            "title": "Hypertension & Cardiovascular Diseases",
            "description": "Assessment of blood pressure, cardiovascular risks and associated medical concerns."
          },
          {
            "title": "Diabetes Management",
            "description": "Individual care planning, monitoring and lifestyle discussions for people living with diabetes."
          },
          {
            "title": "Respiratory Disorders (Asthma & COPD)",
            "description": "Assessment and medical guidance for respiratory symptoms and ongoing breathing conditions."
          },
          {
            "title": "Gastrointestinal Disorders",
            "description": "Evaluation of digestive symptoms and conditions affecting the gastrointestinal system."
          },
          {
            "title": "Infectious Diseases",
            "description": "Medical assessment and treatment planning for infections affecting adults."
          },
          {
            "title": "Kidney & Liver Diseases",
            "description": "Review of relevant symptoms, reports and ongoing care needs, with specialist coordination when appropriate."
          },
          {
            "title": "Rheumatologic & Autoimmune Disorders",
            "description": "Assessment of inflammatory and autoimmune concerns, with coordinated specialist care according to need."
          },
          {
            "title": "Preventive Medicine & Health Screenings",
            "description": "Health reviews and screening discussions shaped around age, history and individual risk."
          },
          {
            "title": "Geriatric Medicine",
            "description": "Care for older adults considering long-term conditions, medicines and overall wellbeing."
          },
          {
            "title": "Endocrine Disorders",
            "description": "Assessment of thyroid and other hormonal concerns with endocrinology coordination when needed."
          },
          {
            "title": "Weight Management & Metabolic Health",
            "description": "Review of weight-related health concerns, metabolic risks and practical lifestyle priorities."
          },
          {
            "title": "Allergy & Immunology",
            "description": "Evaluation of allergy and immune-related concerns and appropriate further assessment."
          }
        ]
      },
      {
        "eyebrow": "Comprehensive Adult Care",
        "title": "Care that connects each stage of your health.",
        "services": [
          {
            "title": "Preventive Care",
            "description": "Screening, vaccination guidance and wellness reviews to support prevention and early assessment."
          },
          {
            "title": "Chronic Disease Management",
            "description": "Individualised treatment planning, monitoring and lifestyle discussions for long-term conditions."
          },
          {
            "title": "Acute Medical Care",
            "description": "Assessment and medical management of infections, sudden illnesses and other acute concerns."
          },
          {
            "title": "Multidisciplinary Care",
            "description": "Coordination across relevant specialties for patients with complex medical needs."
          },
          {
            "title": "Geriatric Care",
            "description": "Attention to multiple health conditions, independence and quality of life in older adults."
          },
          {
            "title": "Patient Education",
            "description": "Clear explanations of health conditions, medicines, treatment options and prevention."
          }
        ]
      }
    ],
    "highlights": [
      {
        "title": "Personalised Medical Care",
        "description": "An individual approach to assessment, treatment and health management."
      },
      {
        "title": "Continuity of Care",
        "description": "Follow-up, ongoing monitoring and support for long-term conditions."
      },
      {
        "title": "Preventive Approach",
        "description": "Attention to early assessment, screening and health education."
      },
      {
        "title": "Comprehensive Assessment",
        "description": "Review of both common illnesses and complex adult medical concerns."
      },
      {
        "title": "Whole-Person Wellbeing",
        "description": "Care considers physical health, lifestyle and overall wellbeing."
      }
    ],
    "faqs": [
      {
        "question": "What conditions are covered under Internal Medicine?",
        "answer": "Internal Medicine covers adult illnesses including diabetes, hypertension, respiratory conditions, infections, digestive concerns, kidney and liver conditions, and autoimmune disorders. Assessment helps determine the appropriate treatment or specialist pathway."
      },
      {
        "question": "How are chronic diseases managed?",
        "answer": "Care planning considers your condition, current treatment, health goals and relevant reports. Ongoing monitoring, lifestyle guidance and follow-up are tailored to your needs."
      },
      {
        "question": "What preventive healthcare services can I discuss?",
        "answer": "Your consultation can include health reviews, screening needs, vaccination history and lifestyle priorities. Recommendations depend on your age, medical history and individual risk."
      },
      {
        "question": "What is geriatric care?",
        "answer": "Geriatric care focuses on older adults, considering age-related needs, multiple medical conditions, medicines, independence and quality of life."
      },
      {
        "question": "What does metabolic and weight management include?",
        "answer": "A consultation reviews weight-related concerns, health history and relevant reports, then discusses lifestyle priorities and any appropriate medical assessment or follow-up."
      }
    ],
    "ctaTitle": "Your health, our priority.",
    "ctaCopy": "Take a proactive step with preventive care, personalised medical guidance and adult healthcare at Meddleaff Healthcare.",
    "metaTitle": "Diabetology, Rheumatology & Internal Medicine | Meddleaff Healthcare",
    "metaDescription": "Learn about adult medicine, diabetes management, rheumatological disorders, chronic disease care and preventive healthcare at Meddleaff Healthcare.",
    "image": specialityHero4,
    "imageAlt": "Adult internal medicine care"
  },
  {
    "number": "05",
    "slug": "cosmetology",
    "title": "Department of Cosmetology",
    "subtitle": "Personalised aesthetic and reconstructive care",
    "description": "Explore care for appearance, confidence and function, with individual guidance on aesthetic concerns and plastic and reconstructive surgery options.",
    "overview": "At Meddleaff Healthcare, care starts with understanding your concerns, medical needs and personal goals. Aesthetic and reconstructive treatment planning considers both appearance and function, with attention to patient safety, informed decisions and realistic expectations. Procedure availability, specialist assessment and the appropriate care location are confirmed during consultation.",
    "concerns": [
      "Cosmetic concerns and changes in appearance",
      "Scars or changes following injury, burns or surgery",
      "Breast, facial and body contour concerns",
      "Reconstructive needs affecting movement or function"
    ],
    "care": [
      "Discussion of your concerns, medical history and treatment goals",
      "Assessment of suitable options, alternatives and possible risks",
      "Personalised preparation, recovery guidance and follow-up planning"
    ],
    "serviceGroups": [
      {
        "eyebrow": "Plastic & Reconstructive Surgery",
        "title": "Explore aesthetic and reconstructive procedures.",
        "description": "Plastic and reconstructive surgery includes procedures to restore, reconstruct or enhance the appearance and function of different parts of the body. The options below are discussed according to individual needs; suitability and availability are confirmed with the care team.",
        "services": [
          {
            "title": "Breast Reconstruction",
            "description": "Surgical procedures to restore breast shape and appearance following mastectomy or other conditions affecting breast tissue."
          },
          {
            "title": "Rhinoplasty (Nose Surgery)",
            "description": "Reshaping the nose to improve its appearance, structure, or certain functional concerns."
          },
          {
            "title": "Abdominoplasty (Tummy Tuck)",
            "description": "Removal of excess abdominal skin and fat, sometimes combined with muscle repair, to improve abdominal contour."
          },
          {
            "title": "Liposuction",
            "description": "Surgical removal of localized fat deposits to improve body contours and proportions."
          },
          {
            "title": "Facelift (Rhytidectomy)",
            "description": "Surgical lifting and repositioning of facial and neck tissues to address visible signs of aging."
          },
          {
            "title": "Blepharoplasty (Eyelid Surgery)",
            "description": "Correction of excess eyelid skin or fat to improve eyelid appearance and, in some cases, visual obstruction."
          },
          {
            "title": "Otoplasty (Ear Surgery)",
            "description": "Surgical correction of prominent, asymmetrical, or irregularly shaped ears."
          },
          {
            "title": "Breast Augmentation",
            "description": "Enhancement of breast size and shape using implants or fat transfer techniques."
          },
          {
            "title": "Breast Reduction",
            "description": "Reduction of excess breast tissue to relieve physical discomfort and improve body proportions."
          },
          {
            "title": "Lip Augmentation",
            "description": "Procedures to enhance lip volume or definition using suitable injectable or surgical techniques."
          },
          {
            "title": "Gynecomastia Surgery",
            "description": "Surgical correction of enlarged male breast tissue through gland removal, liposuction, or both."
          },
          {
            "title": "Burn Reconstruction",
            "description": "Reconstructive treatment to improve function, mobility, and appearance of tissues affected by burn injuries."
          },
          {
            "title": "Scar Revision",
            "description": "Surgical or nonsurgical techniques to reduce the visibility or functional impact of scars."
          },
          {
            "title": "Cleft Lip & Palate Repair",
            "description": "Corrective surgical procedures for congenital openings in the upper lip or roof of the mouth."
          },
          {
            "title": "Hand Surgery",
            "description": "Surgical management of hand injuries, congenital differences, and conditions affecting hand movement and function."
          },
          {
            "title": "Gender-Affirming Surgery",
            "description": "Individualized surgical procedures that align certain physical characteristics with a person's gender identity."
          },
          {
            "title": "Microsurgery",
            "description": "Highly specialized procedures using magnification and precise instruments for tissue reconstruction, transplantation, and nerve or vessel repair."
          }
        ]
      }
    ],
    "highlights": [
      {
        "title": "Personalised Care",
        "description": "Treatment planning considers your medical needs, expectations and desired outcomes."
      },
      {
        "title": "Patient Safety",
        "description": "Careful assessment, informed consent and discussion of possible risks guide treatment decisions."
      },
      {
        "title": "Aesthetic & Functional Goals",
        "description": "Care considers physical appearance alongside restoration of function."
      },
      {
        "title": "Recovery Guidance",
        "description": "Individual postoperative instructions, wound care guidance and follow-up planning support recovery."
      }
    ],
    "faqs": [
      {
        "question": "What is plastic and reconstructive surgery?",
        "answer": "Plastic and reconstructive surgery includes procedures that restore or improve appearance and function. It can address congenital differences, injuries, burns, changes after cancer treatment and cosmetic concerns."
      },
      {
        "question": "How are safety and suitability assessed?",
        "answer": "Your consultation includes a review of your medical history, health and treatment goals. The recommended approach, possible risks and alternatives are discussed before you decide on treatment."
      },
      {
        "question": "How long does recovery take after surgery?",
        "answer": "Recovery depends on the procedure and individual health. The care team will explain the expected recovery period, wound care instructions and follow-up plan for your treatment."
      },
      {
        "question": "How can I check insurance coverage?",
        "answer": "Ask your insurer and the care team to confirm coverage, documentation and any approval requirements for the proposed procedure before making arrangements."
      },
      {
        "question": "Are non-surgical cosmetic treatments available?",
        "answer": "Contact the Meddleaff care team to confirm current non-surgical treatment options. A consultation can help clarify which options may be suitable for your concerns and goals."
      }
    ],
    "ctaTitle": "Explore personalised aesthetic and reconstructive care.",
    "ctaCopy": "Discuss your goals for appearance, function and confidence with the Meddleaff care team.",
    "metaTitle": "Cosmetology & Reconstructive Care | Meddleaff Healthcare",
    "metaDescription": "Explore cosmetology and plastic and reconstructive surgery information at Meddleaff Healthcare, including breast reconstruction, rhinoplasty, scar revision and burn reconstruction.",
    "image": specialityHero5,
    "imageAlt": "Department of Cosmetology care"
  },
  {
    "number": "06",
    "slug": "endocrinology",
    "aliases": [
      "endocrinology-diabetology"
    ],
    "title": "Endocrinology & Diabetology",
    "subtitle": "Personalised hormonal, diabetes and metabolic care",
    "description": "Care for diabetes, thyroid disorders, hormonal imbalances and metabolic health, with individual treatment planning, education and long-term follow-up.",
    "overview": "At Meddleaff Healthcare, endocrine care focuses on understanding your symptoms, medical history and the factors affecting hormonal and metabolic health. Our approach brings together appropriate assessment, personalised treatment planning, preventive care and regular monitoring. Care pathways and relevant specialist services are confirmed according to individual needs.",
    "concerns": [
      "Type 1, Type 2 or pregnancy-related diabetes",
      "Thyroid symptoms and existing thyroid conditions",
      "Weight, insulin resistance and metabolic health concerns",
      "PCOS, menopause and other hormonal concerns",
      "Adrenal, pituitary or growth-related assessment needs"
    ],
    "care": [
      "Review of symptoms, current medicines, glucose records and relevant reports",
      "Discussion of appropriate investigations and individual treatment options",
      "Practical self-care guidance, monitoring and follow-up planning"
    ],
    "serviceGroups": [
      {
        "eyebrow": "Endocrine Services",
        "title": "Care for hormonal and metabolic health.",
        "description": "Assessment and treatment options are shaped around individual clinical needs. Confirm the required specialist consultation and service availability with the care team.",
        "services": [
          {
            "title": "Diabetes Management",
            "description": "Comprehensive evaluation and management of Type 1 and Type 2 diabetes through personalized treatment plans, blood glucose monitoring, medication management, nutritional guidance, and lifestyle modifications."
          },
          {
            "title": "Thyroid Disorders",
            "description": "Diagnosis and management of hypothyroidism, hyperthyroidism, thyroid nodules, and thyroid-related conditions. Medical evaluation may include thyroid function tests, ultrasound imaging, and other investigations when clinically indicated."
          },
          {
            "title": "Obesity & Metabolic Syndrome",
            "description": "Assessment and management of obesity, insulin resistance, and metabolic syndrome through dietary counseling, physical activity guidance, medication when appropriate, and ongoing monitoring."
          },
          {
            "title": "Adrenal & Pituitary Disorders",
            "description": "Evaluation and treatment of hormonal conditions involving the adrenal and pituitary glands, including Cushing's syndrome, Addison's disease, pituitary tumors, and other hormone-related disorders."
          },
          {
            "title": "Polycystic Ovary Syndrome (PCOS)",
            "description": "Individualized care for women experiencing PCOS-related symptoms such as irregular menstrual cycles, excessive hair growth, hormonal imbalance, and insulin resistance. Management may include lifestyle changes, hormonal treatment, and reproductive health guidance."
          },
          {
            "title": "Menopause & Hormonal Imbalances",
            "description": "Assessment and management of menopause-related symptoms, including hot flashes, mood changes, sleep disturbances, and bone health concerns. Treatment may include lifestyle guidance and hormone therapy when clinically appropriate."
          },
          {
            "title": "Growth Disorders",
            "description": "Evaluation and management of growth-related hormonal disorders in children and adolescents, including growth hormone deficiency and other conditions affecting normal physical development."
          }
        ]
      },
      {
        "eyebrow": "Comprehensive Diabetes Care",
        "title": "Personalised support for living with diabetes.",
        "description": "Diabetes care brings together monitoring, nutrition, physical activity, appropriate medication, education and screening for complications. Device options and related services are discussed according to suitability and availability.",
        "services": [
          {
            "title": "Gestational Diabetes Management",
            "description": "Medical management of diabetes diagnosed during pregnancy, focusing on blood glucose control, nutritional guidance, and coordinated maternal and fetal monitoring to support a healthy pregnancy."
          },
          {
            "title": "Diabetes Education & Support",
            "description": "Patient education covering blood glucose monitoring, healthy nutrition, physical activity, medication adherence, and everyday diabetes self-management."
          },
          {
            "title": "Insulin Therapy & Medication Management",
            "description": "Individualized diabetes treatment using oral medications, injectable therapies, and insulin when indicated. Continuous glucose monitoring and insulin pump technology may be considered for suitable patients where available."
          },
          {
            "title": "Diabetes Complications Screening",
            "description": "Screening and medical assessment for diabetes-related complications affecting the eyes, kidneys, nerves, heart, and blood vessels. Early detection can help guide timely intervention and ongoing care."
          }
        ]
      }
    ],
    "highlights": [
      {
        "title": "Comprehensive Assessment",
        "description": "Review of hormonal concerns, diabetes and metabolic health in the context of your overall wellbeing."
      },
      {
        "title": "Coordinated Care",
        "description": "Coordination with relevant medical specialties when your needs span more than one department."
      },
      {
        "title": "Purposeful Investigations",
        "description": "Clinical assessment and appropriate investigations help guide treatment planning and monitoring."
      },
      {
        "title": "Personalised Guidance",
        "description": "Care considers your symptoms, medical history, treatment needs and lifestyle."
      },
      {
        "title": "Preventive Focus",
        "description": "Attention to risk factors and appropriate monitoring for diabetes-related and hormonal complications."
      },
      {
        "title": "Patient Education",
        "description": "Clear discussions about your condition, medicines, nutrition and everyday self-care."
      }
    ],
    "faqs": [
      {
        "question": "What conditions are covered under Endocrinology & Diabetology?",
        "answer": "This speciality covers diabetes, thyroid disorders, obesity and metabolic syndrome, adrenal and pituitary concerns, PCOS, menopause-related hormonal changes and growth disorders. Your consultation helps identify the appropriate care pathway."
      },
      {
        "question": "What does diabetes care involve?",
        "answer": "Care may include glucose monitoring, individual medication planning, nutrition and physical activity guidance, patient education and screening for complications. Treatment and follow-up are tailored to your needs."
      },
      {
        "question": "What thyroid concerns can I discuss?",
        "answer": "Consultations can address hypothyroidism, hyperthyroidism, thyroid nodules and related concerns. The care team reviews your symptoms and available reports before discussing appropriate investigations or follow-up."
      },
      {
        "question": "What does obesity and metabolic health care include?",
        "answer": "An assessment considers weight-related concerns, insulin resistance, health history and lifestyle. Care planning may include nutrition and activity guidance, monitoring and medication when clinically appropriate."
      },
      {
        "question": "What are adrenal and pituitary disorders?",
        "answer": "These are conditions involving hormone production or function in the adrenal or pituitary glands. Assessment may address conditions such as Cushing's syndrome, Addison's disease or pituitary tumours, with investigations and specialist care according to individual findings."
      }
    ],
    "ctaTitle": "Take the next step in hormonal and metabolic care.",
    "ctaCopy": "Discuss diabetes, thyroid concerns and hormonal health with the Meddleaff care team to plan your consultation.",
    "metaTitle": "Endocrinology & Diabetology | Meddleaff Healthcare",
    "metaDescription": "Explore endocrinology and diabetology care at Meddleaff Healthcare, including diabetes, thyroid disorders, PCOS, obesity, metabolic syndrome and hormonal health.",
    "image": specialityHero6,
    "imageAlt": "Endocrinology and diabetes care"
  },
  {
    "number": "07",
    "slug": "preventive-health-care",
    "title": "Department of Preventive Health Care",
    "subtitle": "Prevention, early detection and long-term wellbeing",
    "description": "Personalised health reviews, screening guidance and lifestyle support to help adults understand health risks and plan ongoing care.",
    "overview": "At Meddleaff Healthcare, preventive care focuses on understanding your health before concerns become more complex. Reviews consider age, personal and family history, current symptoms and existing conditions. Individual guidance brings together appropriate screening, lifestyle discussions and follow-up, with coordination across medical specialties when further assessment or treatment is needed.",
    "concerns": [
      "Routine health assessments and screening questions",
      "Family history of diabetes, hypertension or other chronic conditions",
      "Weight, metabolic health and lifestyle concerns",
      "Age-related health changes and medication reviews",
      "Planning ongoing monitoring for existing conditions"
    ],
    "care": [
      "Review of medical history, family history, medicines and available reports",
      "Discussion of appropriate screenings, vaccination needs and lifestyle priorities",
      "A personalised follow-up plan and specialist coordination when needed"
    ],
    "serviceGroups": [
      {
        "eyebrow": "Preventive Care Services",
        "title": "Build a plan around your health.",
        "services": [
          {
            "title": "Health Assessments & Early Detection",
            "description": "Individual health reviews and discussion of appropriate investigations to identify concerns and guide the next step."
          },
          {
            "title": "Screening & Vaccination Guidance",
            "description": "Review of screening and immunisation needs based on age, medical history and individual risk. The care team can confirm available services."
          },
          {
            "title": "Chronic Health Monitoring",
            "description": "Follow-up planning for people living with diabetes, hypertension and other long-term conditions, coordinated with the treating team."
          },
          {
            "title": "Older Adult Health Reviews",
            "description": "Attention to age-related concerns, multiple health conditions, medicines, independence and overall wellbeing."
          },
          {
            "title": "Personalised Medical Consultations",
            "description": "A conversation about symptoms, health priorities, available reports and whether further medical assessment is needed."
          },
          {
            "title": "Patient Education & Lifestyle Support",
            "description": "Clear guidance on prevention, medicines, lifestyle changes and informed health decisions."
          }
        ]
      },
      {
        "eyebrow": "Health Review Areas",
        "title": "Understand the risks that matter to you.",
        "description": "Your review helps identify which areas need attention. Screening, tests and specialist referrals are discussed according to individual history and findings.",
        "services": [
          {
            "title": "Blood Pressure & Cardiovascular Health",
            "description": "Review of blood pressure, cardiovascular risk factors and the need for further medical assessment."
          },
          {
            "title": "Diabetes Risk & Monitoring",
            "description": "Discussion of family history, existing diabetes, blood glucose reports and ongoing monitoring needs."
          },
          {
            "title": "Respiratory Health",
            "description": "Review of breathing concerns, asthma or COPD history and appropriate follow-up with the treating team."
          },
          {
            "title": "Digestive Health",
            "description": "Discussion of persistent digestive concerns and whether medical evaluation or further investigation is appropriate."
          },
          {
            "title": "Infection Prevention",
            "description": "Review of vaccination needs, prevention questions and symptoms that may require medical assessment."
          },
          {
            "title": "Kidney & Liver Health",
            "description": "Review of relevant history, available reports and monitoring needs with appropriate medical coordination."
          },
          {
            "title": "Joint & Autoimmune Concerns",
            "description": "Discussion of joint symptoms or existing autoimmune conditions and referral for specialist assessment when needed."
          },
          {
            "title": "Preventive Screening Plans",
            "description": "Individual screening discussions shaped around age, health history and personal risk factors."
          },
          {
            "title": "Healthy Ageing",
            "description": "Health reviews focused on medicines, long-term conditions, independence and quality of life."
          },
          {
            "title": "Thyroid & Hormonal Health",
            "description": "Review of relevant symptoms, existing diagnoses and reports, with endocrinology coordination when appropriate."
          },
          {
            "title": "Weight & Metabolic Health",
            "description": "Discussion of weight-related concerns, metabolic risk and practical lifestyle priorities."
          },
          {
            "title": "Allergy & Immune Health",
            "description": "Review of allergy history or immune-related concerns and the need for further medical advice."
          }
        ]
      }
    ],
    "highlights": [
      {
        "title": "Comprehensive Health Reviews",
        "description": "Consider personal history, current concerns and long-term health priorities together."
      },
      {
        "title": "Personalised Guidance",
        "description": "Care discussions reflect your age, health needs, preferences and goals."
      },
      {
        "title": "Continuity of Care",
        "description": "Follow-up planning supports ongoing monitoring and review of changing needs."
      },
      {
        "title": "Purposeful Assessments",
        "description": "Recommended investigations are discussed in the context of your history and clinical findings."
      },
      {
        "title": "Whole-Person Wellbeing",
        "description": "Conversations consider physical health, lifestyle and emotional wellbeing."
      }
    ],
    "faqs": [
      {
        "question": "What does a preventive health consultation cover?",
        "answer": "A consultation can include your personal and family health history, medicines, current concerns, available reports and lifestyle. Screening, vaccination needs and further assessment are discussed according to your individual needs."
      },
      {
        "question": "Can I attend if I already have a chronic condition?",
        "answer": "Yes. A review can help discuss monitoring, lifestyle priorities and follow-up alongside your existing treatment plan. Changes to treatment are discussed with the relevant treating team."
      },
      {
        "question": "Which preventive health services are important for adults?",
        "answer": "The appropriate health reviews, screenings and vaccination discussions depend on age, medical history and individual risk. Your consultation helps identify relevant priorities."
      },
      {
        "question": "How does preventive care support older adults?",
        "answer": "Reviews can focus on age-related concerns, existing conditions, medicines, independence and wellbeing, with follow-up or specialist coordination according to need."
      },
      {
        "question": "What does weight and metabolic health support involve?",
        "answer": "A consultation considers your health history, weight-related concerns and relevant reports, then discusses practical lifestyle priorities and any need for further medical evaluation."
      }
    ],
    "ctaTitle": "Take the next step in preventive health.",
    "ctaCopy": "Plan a personalised health review with Meddleaff Healthcare to discuss screening, lifestyle priorities and long-term wellbeing.",
    "metaTitle": "Preventive Health Care | Meddleaff Healthcare",
    "metaDescription": "Explore preventive health care at Meddleaff Healthcare, including adult health reviews, screening guidance, chronic health monitoring and lifestyle support.",
    "image": specialityHero7,
    "imageAlt": "Department of Preventive Health Care"
  },
  {
    "number": "08",
    "slug": "pathology",
    "title": "Pathology & Laboratory Medicine",
    "subtitle": "Diagnostic insights to support informed care",
    "description": "Laboratory investigations that support disease assessment, preventive health reviews and ongoing monitoring, with clear guidance for your diagnostic visit.",
    "overview": "At Meddleaff Healthcare, pathology supports clinical assessment through laboratory investigation of blood, body fluids, cells and tissue samples. Appropriate tests help clinicians understand health concerns, plan treatment and monitor changes over time. Our approach emphasises patient preparation, careful sample handling and coordination with the treating team. Confirm specific test availability and collection arrangements before booking.",
    "concerns": [
      "Clinician-recommended blood, urine or other laboratory tests",
      "Screening and monitoring for ongoing health conditions",
      "Preparation and sample collection questions",
      "Tissue or cell examination requests",
      "Reporting arrangements and review with your clinician"
    ],
    "care": [
      "Review of your test request and relevant medical information",
      "Confirmation of test availability, sample requirements and preparation",
      "Guidance on report collection and follow-up with your treating clinician"
    ],
    "serviceGroups": [
      {
        "eyebrow": "Pathology Services",
        "title": "Explore laboratory investigations.",
        "description": "Laboratory disciplines may include the categories below. The care team can confirm individual tests, collection arrangements and reporting options. Investigations are selected according to clinical need.",
        "services": [
          {
            "title": "Clinical Pathology",
            "description": "Clinical pathology involves examining blood, urine, and other body fluids to identify infections, metabolic abnormalities, and various medical conditions. These investigations help support diagnosis, treatment planning, and regular health monitoring."
          },
          {
            "title": "Histopathology",
            "description": "Histopathology involves the microscopic examination of tissue samples to identify abnormalities, including inflammatory conditions, infections, and tumors. It plays an important role in the diagnosis and classification of many diseases."
          },
          {
            "title": "Haematology",
            "description": "Haematology focuses on the examination of blood and blood-forming tissues. Tests such as complete blood counts and peripheral blood smears help evaluate anaemia, infections, clotting disorders, and other blood-related conditions."
          },
          {
            "title": "Cytopathology",
            "description": "Cytopathology examines individual cells or small groups of cells collected from body fluids or tissue samples. It helps detect abnormal cellular changes and may support the diagnosis of infections, inflammatory diseases, and certain cancers."
          },
          {
            "title": "Microbiology",
            "description": "Microbiology focuses on identifying microorganisms responsible for infectious diseases. Laboratory investigations may include microscopy, cultures, and susceptibility testing to support appropriate treatment decisions."
          },
          {
            "title": "Biochemical Investigations",
            "description": "Clinical biochemistry involves measuring substances in blood and other body fluids to assess organ function and metabolic health. Common investigations include blood glucose, lipid profiles, liver function, kidney function, and electrolyte testing."
          }
        ]
      },
      {
        "eyebrow": "The Role of Pathology",
        "title": "Information that supports better care decisions.",
        "services": [
          {
            "title": "Early Disease Detection",
            "description": "Laboratory investigations help identify potential health conditions before significant symptoms develop, supporting timely medical intervention."
          },
          {
            "title": "Diagnosis & Disease Evaluation",
            "description": "Pathology tests provide clinically useful information for identifying infections, blood disorders, metabolic abnormalities, and other diseases."
          },
          {
            "title": "Treatment Monitoring",
            "description": "Repeated laboratory investigations help healthcare professionals evaluate treatment responses and monitor changes in a patient's condition."
          },
          {
            "title": "Preventive Health Screening",
            "description": "Routine blood tests and preventive diagnostic assessments can help identify important health risks."
          },
          {
            "title": "Chronic Disease Monitoring",
            "description": "Laboratory testing supports the ongoing management of diabetes, kidney disorders, liver conditions, thyroid diseases, and other chronic illnesses."
          },
          {
            "title": "Clinical Decision Support",
            "description": "Diagnostic reports provide essential medical information to help clinicians make informed decisions regarding further investigations and treatment."
          }
        ]
      }
    ],
    "highlights": [
      {
        "title": "Diagnostic Accuracy",
        "description": "An emphasis on appropriate laboratory testing and reliable diagnostic interpretation."
      },
      {
        "title": "Quality & Safety",
        "description": "Attention to specimen handling, patient safety, and responsible laboratory practices."
      },
      {
        "title": "Comprehensive Testing",
        "description": "Laboratory investigations that support the evaluation of a wide range of medical conditions."
      },
      {
        "title": "Patient-Centered Approach",
        "description": "Clear preparation guidance and a considerate approach to diagnostic procedures."
      },
      {
        "title": "Healthcare Monitoring",
        "description": "Diagnostic support for preventive screening, ongoing treatment, and chronic disease management."
      },
      {
        "title": "Coordinated Patient Care",
        "description": "Laboratory findings that help support communication and clinical decision-making across medical specialities."
      }
    ],
    "faqs": [
      {
        "question": "What pathology services are available at Meddleaff Healthcare?",
        "answer": "Laboratory disciplines may include clinical pathology, histopathology, haematology, cytopathology, microbiology and biochemical investigations. Confirm the availability of your specific tests and collection arrangements with the care team before booking."
      },
      {
        "question": "Why are pathology tests important?",
        "answer": "Laboratory tests provide information that supports diagnosis, treatment planning and monitoring. Your clinician interprets the results alongside your symptoms, medical history and other findings."
      },
      {
        "question": "Are pathology test reports available online?",
        "answer": "Contact the care team to confirm available report formats, delivery options and any collection requirements for your tests."
      },
      {
        "question": "Do I need to fast before a pathology test?",
        "answer": "Preparation requirements depend on the test. Ask for the instructions for your specific investigation when booking and follow the directions provided by the laboratory or treating clinician."
      },
      {
        "question": "Can pathology tests support early disease detection?",
        "answer": "Appropriate laboratory investigations can help identify health risks or changes that need further assessment. Screening decisions depend on your history, age and individual clinical needs."
      },
      {
        "question": "How long does it take to receive pathology reports?",
        "answer": "Reporting times vary with the test and any processing required. Confirm expected turnaround times and report collection arrangements with the care team."
      }
    ],
    "ctaTitle": "Take the next step in diagnostic care.",
    "ctaCopy": "Contact Meddleaff Healthcare to confirm your requested tests, preparation and sample collection arrangements.",
    "ctaLabel": "Book a Diagnostic Test",
    "metaTitle": "Pathology & Laboratory Medicine | Meddleaff Healthcare",
    "metaDescription": "Explore pathology and laboratory medicine at Meddleaff Healthcare, including clinical pathology, haematology, microbiology, histopathology, cytopathology and biochemical investigations.",
    "image": specialityHero8,
    "imageAlt": "Pathology and laboratory diagnostic care"
  },
  {
    "number": "09",
    "slug": "radiology",
    "title": "Radiology & Diagnostic Imaging",
    "subtitle": "Clearer insights for informed healthcare",
    "description": "Diagnostic imaging guidance to support clinical assessment, treatment planning and ongoing care, with attention to patient safety and individual needs.",
    "overview": "At Meddleaff Healthcare, radiology supports the identification of medical conditions, treatment planning and monitoring over time. Our approach focuses on suitable investigations, clear preparation guidance and communication of findings with the treating team. Confirm the required examination, care location and service availability before booking.",
    "concerns": [
      "Clinician-recommended X-rays, ultrasound or other imaging",
      "Questions about the appropriate imaging examination",
      "Preparation requirements and relevant medical history",
      "Review of previous scans and reports",
      "Reporting arrangements and follow-up with your clinician"
    ],
    "care": [
      "Review of your imaging request, relevant history and previous reports",
      "Confirmation of examination availability and individual preparation instructions",
      "Guidance on report collection and review with your treating clinician"
    ],
    "serviceGroups": [
      {
        "eyebrow": "Diagnostic Imaging",
        "title": "Explore radiology examinations.",
        "description": "Imaging options may include the examinations below. The care team can confirm available services, equipment, examination location and appointment arrangements. Your clinician recommends the investigation appropriate to your needs.",
        "services": [
          {
            "title": "Digital X-Ray Imaging",
            "description": "Digital X-ray imaging helps examine bones, joints, chest structures, and other areas of the body. It is commonly used to identify fractures, infections, lung conditions, and certain structural abnormalities while using controlled radiation doses."
          },
          {
            "title": "Ultrasound Imaging",
            "description": "Ultrasound uses high-frequency sound waves to produce real-time images of internal organs and tissues. It is commonly used for abdominal, pelvic, soft tissue, and pregnancy-related examinations."
          },
          {
            "title": "Mammography & Breast Imaging",
            "description": "Mammography is a specialized X-ray examination used to detect breast abnormalities and support early breast cancer screening. Advanced imaging techniques, including 3D tomosynthesis where available, can provide additional diagnostic detail."
          },
          {
            "title": "CT Scan Imaging",
            "description": "Computed Tomography (CT) uses X-rays and computer processing to create detailed cross-sectional images of the body. CT scans are commonly used to evaluate conditions affecting the brain, chest, abdomen, bones, and internal organs."
          },
          {
            "title": "MRI Imaging",
            "description": "Magnetic Resonance Imaging (MRI) uses magnetic fields and radio waves to create detailed images of soft tissues, organs, and internal structures. It is particularly useful for evaluating neurological, spinal, musculoskeletal, and certain abdominal conditions."
          },
          {
            "title": "Interventional Radiology",
            "description": "Interventional radiology involves minimally invasive, image-guided procedures such as selected biopsies and angiographic examinations. These techniques help specialists diagnose and manage medical conditions using imaging guidance."
          }
        ]
      }
    ],
    "highlights": [
      {
        "title": "Clinical Assessment",
        "description": "Imaging findings support medical evaluation and treatment planning."
      },
      {
        "title": "Patient Safety",
        "description": "Attention to individual history, suitable imaging protocols and responsible radiation practices."
      },
      {
        "title": "Patient-Centred Guidance",
        "description": "Clear explanations and preparation information help you understand your examination."
      },
      {
        "title": "Reporting Guidance",
        "description": "Confirm expected reporting times and how to receive your results when booking."
      },
      {
        "title": "Coordinated Care",
        "description": "Imaging information supports communication with relevant medical specialties."
      },
      {
        "title": "Ongoing Monitoring",
        "description": "Imaging may help assess changes in a condition or response to treatment when recommended."
      }
    ],
    "faqs": [
      {
        "question": "What radiology services are available?",
        "answer": "Imaging options may include digital X-rays, ultrasound, mammography, CT, MRI and selected image-guided procedures. Contact the Meddleaff care team to confirm availability, equipment and the appropriate care location before booking."
      },
      {
        "question": "What types of X-ray examinations are commonly performed?",
        "answer": "X-rays are commonly used to examine bones, joints and the chest. The examination and body area are selected according to your clinical request."
      },
      {
        "question": "What is a CT scan used for?",
        "answer": "CT uses X-rays and computer processing to produce cross-sectional images. It can support assessment of the brain, chest, abdomen, bones and internal organs, depending on the clinical question."
      },
      {
        "question": "What is the difference between MRI and CT scans?",
        "answer": "CT uses X-rays to create cross-sectional images, while MRI uses magnetic fields and radio waves to produce detailed images. The appropriate examination depends on what your clinician needs to assess."
      },
      {
        "question": "How long does a radiology examination take?",
        "answer": "Timing depends on the examination, preparation and individual requirements. Ask the care team about the expected appointment duration when booking."
      },
      {
        "question": "Are digital radiology reports available?",
        "answer": "Contact the care team to confirm report formats, delivery options and expected reporting times for your examination."
      },
      {
        "question": "Do I need to prepare before an imaging examination?",
        "answer": "Preparation varies by examination. Ask for your specific instructions when booking and share relevant medical history and previous reports. Follow the directions provided by the imaging team."
      }
    ],
    "ctaTitle": "Clearer insights for better health decisions.",
    "ctaCopy": "Contact Meddleaff Healthcare to discuss your imaging request, preparation and appointment arrangements.",
    "metaTitle": "Radiology & Diagnostic Imaging | Meddleaff Healthcare",
    "metaDescription": "Explore radiology and diagnostic imaging information at Meddleaff Healthcare, including X-rays, ultrasound, mammography, CT, MRI and image-guided procedures.",
    "image": specialityHero9,
    "imageAlt": "Radiology and diagnostic imaging care"
  }
];

export { specialities, legacySpecialities };
