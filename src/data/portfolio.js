export const navigation = [
  { label: "About", href: "#about" },
  { label: "Role fit", href: "#role-fit" },
  { label: "Experience", href: "#experience" },
  { label: "Media", href: "#media" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const metrics = [
  { value: "21", unit: "months", label: "supporting a virtual data course" },
  { value: "1,500+", unit: "students", label: "supported in each course term" },
  { value: "1,000", unit: "datasets", label: "checked in one grading workflow" },
  { value: "14", unit: "departments", label: "coordinated at Paradox" },
  { value: "₹16M", unit: "budget", label: "managed with accountability" },
  { value: "5", unit: "tons", label: "of school materials distributed" },
];

export const roleFit = [
  {
    number: "01",
    title: "Financial education",
    text: "Ran live sessions and answered Discourse questions for a course serving more than 1,500 students per term.",
  },
  {
    number: "02",
    title: "Educational materials",
    text: "Prepared supporting resources, assessments, and new question formats around the needs of a large, varied student group.",
  },
  {
    number: "03",
    title: "Program analysis",
    text: "Used assessment and submission patterns to find unclear communication, recurring errors, and gaps in educational processes.",
  },
  {
    number: "04",
    title: "Digital badge support",
    text: "Improved online course workflows and administration—transferable experience for learning systems and digital badge operations.",
  },
  {
    number: "05",
    title: "Intern supervision",
    text: "Mentored students and coordinated a 350-person student team, setting clear responsibilities and following work through.",
  },
];

export const caseStudies = [
  {
    id: "bdm",
    index: "01",
    eyebrow: "Teaching Assistant · IIT Madras",
    title: "Helping a virtual data course run clearly and consistently",
    intro:
      "For 21 months, I worked between the faculty team, the course systems, and more than 1,500 students each term. The job was part teaching, part assessment design, and part making a large online course more reliable.",
    facts: [
      { value: "1,500+", label: "students per term" },
      { value: "1,000", label: "unique assignment datasets" },
      { value: "Minutes", label: "evaluation time, down from hours" },
    ],
    sections: [
      {
        title: "Teaching at scale",
        text: "I ran live doubt-clearing sessions, followed student questions on Discourse, and prepared supporting material. The goal was simple: give students a patient, practical explanation when the first one did not click.",
      },
      {
        title: "Better ways to assess learning",
        text: "I contributed to assignments, quizzes, and exams, and researched new question formats. Several of those formats were used in course examinations, giving the team more ways to test applied understanding.",
      },
      {
        title: "Faster, safer course operations",
        text: "For an assignment with 1,000 unique datasets, I helped replace sequential checks with a cloud-based queue and parallel workers, bringing evaluation down from hours to minutes. I also traced a timing gap in remote-exam locking and added batch processing and verification checks so submissions closed consistently.",
      },
    ],
  },
  {
    id: "paradox",
    index: "02",
    eyebrow: "Secretary & Steering Committee · Paradox, IIT Madras",
    title: "Keeping a large student festival accountable and on track",
    intro:
      "I grew from volunteer to Deputy Head, Secretary, and then Steering Committee member. Along the way, I helped a 350-person student team deliver more than 50 events while keeping budgets, vendors, approvals, and on-ground work connected.",
    facts: [
      { value: "350", label: "students in the team network" },
      { value: "14", label: "departments" },
      { value: "₹16M", label: "operating budget" },
    ],
    sections: [
      {
        title: "Responsibility that grew over time",
        text: "As Deputy Head of Facilities, Requirements, and Budgeting, I led a 20-person team through vendor coordination and five days of festival logistics. As Secretary, the scope grew to 14 departments, financial oversight, resource planning, and shared deadlines.",
      },
      {
        title: "Systems that made coordination easier",
        text: "I oversaw the rollout of a student app for announcements and QR check-ins, the customization of an open-source team-management tool, and a new payment gateway. Together, they made approvals, tracking, and collections easier to follow.",
      },
      {
        title: "A more direct route to schools",
        text: "For School to School, I helped replace centralized storage with direct delivery to schools and orphanages. That change made it easier to coordinate volunteers and get five tons of academic material to the communities it was meant for.",
      },
    ],
  },
];

export const competencies = [
  {
    number: "01",
    title: "Student education",
    description: "Making unfamiliar information clear and approachable.",
    skills: [
      "Live and online education",
      "Educational material development",
      "Support for diverse learners",
      "Student mentorship",
    ],
  },
  {
    number: "02",
    title: "Communication analysis",
    description: "Using program activity to improve how students are reached.",
    skills: [
      "Education effort analysis",
      "Communication review",
      "Analysis and reporting",
      "Clear findings for decisions",
    ],
  },
  {
    number: "03",
    title: "Program operations",
    description: "Keeping people, systems, and delivery aligned.",
    skills: [
      "Digital learning workflows",
      "Budget accountability",
      "Intern and team supervision",
      "Project coordination",
    ],
  },
];
