// Only names in this list are ever shown, so nobody can make the page display their own text by editing the address.
// Each description says what the real page does, so participants know where their click would have taken them
const destinations = {
  'final-exam-schedule': {
    name: 'Final Exam Schedule',
    about: 'On the real Testudo, this page lists the date, time and room of the final exam for each course.',
  },
  'final-exam-policies-and-info': {
    name: 'Final Exam Policies & Info',
    about: 'On the real Testudo, this page explains the general policies and information that apply to all final exams.',
  },
  'registration-drop-add': {
    name: 'Registration (Drop/Add)',
    about: 'On the real Testudo, this page is where you add, drop and swap classes for the current or next term.',
  },
  'venus-schedule-builder': {
    name: 'Venus - Schedule Builder',
    about: 'On the real Testudo, this tool lets you try different combinations of courses and sections to plan a schedule.',
  },
  'student-schedule': {
    name: 'Student Schedule',
    about: 'On the real Testudo, this page shows your current classes in a weekly calendar.',
  },
  'schedule-of-classes': {
    name: 'Schedule of Classes',
    about: 'On the real Testudo, this page lets you search every course offered in a term, with its sections, times, instructors and open seats.',
  },
  'full-academic-calendar': {
    name: 'Full Academic Calendar',
    about: 'In a finished version of this redesign, this page would show the main dates for fall, spring, summer and winter, like when classes start and end, breaks and exams. The deadlines below are sample data.',
  },
  'appointment-and-registration-status': {
    name: 'Appointment and Registration Status',
    about: 'On the real Testudo, this page shows the date and time you can start registering, and anything blocking you from registering.',
  },
  'academic-deadlines': {
    name: 'Academic Deadlines',
    about: 'On the real Testudo, this page lists detailed deadlines for every kind of term, including 12-week and non-standard courses. The deadlines below are sample data.',
  },
  'course-feedback-reports-and-submissions': {
    name: 'Course Feedback Reports and Submissions',
    about: 'On the real Testudo, this page is where you fill out course evaluations and read past results for courses and instructors.',
  },
  'extended-studies': {
    name: 'Extended Studies',
    about: 'On the real Testudo, this link goes to the Office of Extended Studies website, with programs outside the regular fall and spring terms.',
  },
  'summer-session': {
    name: 'Summer Session',
    about: 'On the real Testudo, this link goes to the Summer Session website, where you can find and sign up for summer classes.',
  },
  'waitlist-status': {
    name: 'Waitlist Status',
    about: 'On the real Testudo, this page shows the classes you’re currently on a waitlist for.',
  },
  'winter-session': {
    name: 'Winter Session',
    about: 'On the real Testudo, this link goes to the Winter Session website, where you can find and sign up for winter classes.',
  },
  'degree-verification-request': {
    name: 'Degree Verification Request',
    about: 'On the real Testudo, this page is where graduates ask for official proof of their degree, for example for an employer.',
  },
  'diploma-remake-request': {
    name: 'Diploma Remake Request',
    about: 'On the real Testudo, this page is where you order a replacement diploma.',
  },
  'enrollment-certification-request': {
    name: 'Enrollment Certification Request',
    about: 'On the real Testudo, this page is where you request an official letter saying you’re enrolled, for things like insurance or loans.',
  },
  'institute-of-applied-agriculture-transcripts': {
    name: 'Institute of Applied Agriculture Transcripts',
    about: 'On the real Testudo, this page is where you order transcripts for the Institute of Applied Agriculture’s certificate programs.',
  },
  'notarization-of-documents-request': {
    name: 'Notarization of Documents Request',
    about: 'On the real Testudo, this page is where you ask the registrar to notarize a university document.',
  },
  'transcript-ordering': {
    name: 'Transcript Ordering',
    about: 'On the real Testudo, this page is where you order an official transcript to send to schools or employers.',
  },
  'unofficial-transcript': {
    name: 'Unofficial Transcript',
    about: 'On the real Testudo, this page lets you view and print a list of all your courses and grades.',
  },
  'degree-audit': {
    name: 'Degree Audit',
    about: 'On the real Testudo, this page shows which degree requirements you’ve finished and which are left.',
  },
  'gpa-calculator': {
    name: 'GPA Calculator',
    about: 'On the real Testudo, this tool shows how future grades would change your GPA.',
  },
  'grades': {
    name: 'Grades',
    about: 'On the real Testudo, this page shows your grades for current and past terms.',
  },
  'graduation-application-and-diploma-status': {
    name: 'Graduation Application & Diploma Status',
    about: 'On the real Testudo, this page is where you apply to graduate and track your diploma.',
  },
  'honor-pledge': {
    name: 'Honor Pledge',
    about: 'On the real Testudo, this page explains the Honor Pledge and how students and faculty use it.',
  },
  'transfer-credit': {
    name: 'Transfer Credit',
    about: 'On the real Testudo, this page shows how AP exams and courses from other schools count toward a UMD degree.',
  },
  'change-address-e-mail': {
    name: 'Change Address / E-mail',
    about: 'On the real Testudo, this page is where you update the addresses, phone number and email on your record.',
  },
  'deactivate-id-card': {
    name: 'Deactivate ID Card',
    about: 'On the real Testudo, this page is where you turn off your student ID if it’s lost or stolen.',
  },
  'grant-remove-parent-access': {
    name: 'Grant/Remove Parent Access',
    about: 'On the real Testudo, this page is where you choose whether a parent or guest can see things like your bill or grades.',
  },
  'parent-access': {
    name: 'Parent Access',
    about: 'On the real Testudo, this page is where parents or guests sign in to see what a student has shared with them.',
  },
  // The real link goes to an old account site that no longer works, so this describes the current one
  'passwords-and-account-security': {
    name: 'Passwords & Account Security',
    about: 'In a finished version of this redesign, this link would go to UMD’s account website, where you can change your password, manage security settings and see your account details.',
  },
  'personal-information': {
    name: 'Personal Information',
    about: 'On the real Testudo, this page shows your name, UID, contact information, addresses and emergency contacts.',
  },
  'billing-and-payments': {
    name: 'Billing & Payments',
    about: 'On the real Testudo, this link goes to the university’s bill pay website, where you can view your bill and make payments.',
  },
  'financial-aid': {
    name: 'Financial Aid',
    about: 'On the real Testudo, this page shows your financial aid offer, lets you accept awards and lists any missing documents.',
  },
  'campus-map': {
    name: 'Campus Map',
    about: 'On the real Testudo, this link goes to an interactive map of campus buildings.',
  },
  'counseling-center': {
    name: 'Counseling Center',
    about: 'On the real Testudo, this link goes to the Counseling Center website, for mental health appointments, workshops and crisis support.',
  },
  'dining': {
    name: 'Dining',
    about: 'On the real Testudo, this link goes to the Dining Services website, with menus, hours and meal plans.',
  },
  'health-center': {
    name: 'Health Center',
    about: 'On the real Testudo, this link goes to the University Health Center website, for medical appointments and health services.',
  },
  'housing': {
    name: 'Housing',
    about: 'On the real Testudo, this link goes to the housing website, with residence halls and housing applications.',
  },
  'register-to-vote': {
    name: 'Register to Vote',
    about: 'On the real Testudo, this link goes to TurboVote, a free service that helps you register to vote and sends election reminders.',
  },
  'transportation': {
    name: 'Transportation',
    about: 'On the real Testudo, this link goes to the Department of Transportation Services website, for parking permits and Shuttle-UM bus routes.',
  },
  'tutoring-services': {
    name: 'Tutoring Services',
    about: 'On the real Testudo, this link goes to a list of tutoring options on campus.',
  },
  'grad-school': {
    name: 'Grad School',
    about: 'On the real Testudo, this link goes to the Graduate School’s admissions website.',
  },
  'reenrollment': {
    name: 'Reenrollment',
    about: 'On the real Testudo, this page is where you apply to return to UMD after time away.',
  },
  'undergrad-admissions': {
    name: 'Undergrad Admissions',
    about: 'On the real Testudo, this link goes to the undergraduate admissions website.',
  },
  'registrar-help-email': {
    name: 'registrar-help@umd.edu',
    about: 'On the real Testudo, this link opens a new email to the registrar’s help desk.',
  },
  'web-accessibility': {
    name: 'Web Accessibility',
    about: 'On the real Testudo, this page explains UMD’s commitment to web accessibility and how to report a problem.',
  },
  'privacy-and-ferpa': {
    name: 'Privacy & FERPA',
    about: 'On the real Testudo, this page explains how UMD protects your records under FERPA, the federal student privacy law.',
  },
  'a-z-index': {
    name: 'A-Z Index',
    about: 'In a finished version of this redesign, this page would list every page and service in alphabetical order, for when you know what you need but not which category it’s in.',
  },
};

// These show the sample deadlines table, so the deadline task lands somewhere believable
const deadlinePages = ['academic-deadlines', 'full-academic-calendar'];

// Same as on the home page: buttons don't leave a see-through copy behind, text links still drag
document.addEventListener('dragstart', (event) => {
  if (event.target instanceof Element && event.target.matches('.skip-link, .back-link')) {
    event.preventDefault();
  }
});

const heading = document.querySelector('.destination-heading');
const explanation = document.querySelector('.destination-explanation');
const id = new URLSearchParams(location.search).get('to');

if (Object.hasOwn(destinations, id)) {
  const { name, about } = destinations[id];
  heading.textContent = `You chose: ${name}`;
  document.title = `You chose: ${name} – Testudo Redesign Prototype`;
  explanation.textContent = `This is the end of the prototype. ${about}`;

  if (deadlinePages.includes(id)) {
    document.querySelector('.sample-deadlines').hidden = false;
  }
} else {
  heading.textContent = 'This link isn’t part of the prototype';
  document.title = 'Link not found – Testudo Redesign Prototype';
  explanation.textContent = 'The address may have been changed or mistyped.';
}
