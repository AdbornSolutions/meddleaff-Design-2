const site = {
  name: "Meddleaff Healthcare",
  legalName: "MEDDLEAFF HEALTHCARE PVT LTD",
  tagline: "Compassionate Care. Advanced Healthcare. Better Lives.",
  kind: "Patient-centred healthcare",
  phones: [],
  nav: [
    { label: "Home", href: "/" },
    { label: "Specialities", href: "/treatments", menu: "specialities" },
    { label: "Our Doctor", href: "/doctor-profile" },
    { label: "Patient Guide", href: "/patient-guide/prepare-for-your-visit", menu: "patientGuide" },
    { label: "Affiliations", href: "/hospital-affiliation" },
    { label: "Media", href: "/gallery", children: [{ label: "Gallery", href: "/gallery" }, { label: "Health Insights", href: "/blogs" }] },
    { label: "Contact", href: "/contact" }
  ]
};
const trustPoints = [
  { title: "Compassionate Care", copy: "Patient-first approach" },
  { title: "Focused Expertise", copy: "Dedicated specialist care" },
  { title: "Advanced Facilities", copy: "Modern healthcare technology" },
  { title: "Clear Guidance", copy: "Care explained with transparency" }
];
const aboutFeatures = [
  "Experienced Medical Professionals",
  "Patient-Focused Care",
  "Modern Healthcare Approach",
  "Women's Health Support"
];
const whyChooseUs = [
  {
    number: "01",
    title: "Expert Care",
    copy: "Experienced healthcare professionals dedicated to your wellbeing."
  },
  {
    number: "02",
    title: "Clear Communication",
    copy: "Care options and next steps explained in understandable language."
  },
  {
    number: "03",
    title: "Compassionate Approach",
    copy: "Healthcare designed around your comfort and individual needs."
  },
  {
    number: "04",
    title: "Continuity of Care",
    copy: "Support designed to stay connected from consultation through follow-up."
  }
];
const journeySteps = [
  {
    step: "Step 01",
    title: "Book Appointment",
    copy: "Send an online request and share the reason for your visit."
  },
  {
    step: "Step 02",
    title: "Meet Your Consultant",
    copy: "An unhurried consultation where your history and concerns are heard."
  },
  {
    step: "Step 03",
    title: "Diagnosis & Care",
    copy: "Receive a clinical assessment and a care plan explained in plain language."
  },
  {
    step: "Step 04",
    title: "Recovery & Support",
    copy: "Continue with follow-up guidance based on your individual care needs."
  }
];
export {
  aboutFeatures,
  journeySteps,
  site,
  trustPoints,
  whyChooseUs
};
