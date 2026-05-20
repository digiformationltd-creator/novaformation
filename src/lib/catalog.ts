// Service catalog — pricing and feature data for Nova Formation Ltd
// Descriptions are written in Nova Formation's own voice.

export type Package = {
  name: string;
  price: string;
  note?: string;
  popular?: boolean;
  features: string[];
};

export type Service = {
  slug: string;
  category: "uk-services" | "uk-compliance" | "usa-services" | "banks-payment-solutions";
  title: string;
  short: string;
  intro: string;
  highlights?: string[];
  whoNeedsIt?: { title: string; subtitle?: string; roles: { name: string; desc?: string }[] };
  requirements?: { title?: string; subtitle?: string; items: string[] };
  howItWorks?: { title?: string; steps: string[] };
  whatsIncluded?: { title?: string; items: string[] };
  packages: Package[];
};

// ============ UK FORMATION & SERVICES ============
export const ukServices: Service[] = [
  {
    slug: "uk-ltd-formation",
    category: "uk-services",
    title: "Register Your UK Limited Company in Days",
    short: "UK LTD Company Formation",
    intro:
      "Fast, compliant and fully supported UK LTD registration with UTR, ID verification and registered office services — handled remotely by Nova Formation specialists.",
    highlights: [
      "Companies House incorporation",
      "Digital & printed company documents",
      "UTR registration with HMRC",
      "Company authentication code",
      "Registered office & director service address",
      "ID verification (DIATF)",
      "Ongoing client support",
    ],
    whatsIncluded: {
      title: "Register your UK Limited Company with everything covered",
      items: [
        "Registered with Companies House",
        "300+ UK Companies Formed",
        "98% Success Rate",
        "Secure Document Handling",
        "Dedicated Support Team",
      ],
    },
    packages: [
      {
        name: "Starter",
        price: "£140",
        note: "Processing: 3–5 Business Days",
        features: [
          "UK LTD (Company) Registration",
          "Companies House Incorporation Fee Included",
          "Digital Certificate of Incorporation",
          "Digital Memorandum & Articles of Association",
          "Digital Copy of All Documents (PDF)",
          "Digital Shares Certificate",
          "ID Verification Included",
          "Client Portal Access (document uploads & status updates)",
          "12/6 Phone & WhatsApp Support",
        ],
      },
      {
        name: "Silver",
        price: "£170",
        popular: true,
        features: [
          "UK LTD (Company) Registration",
          "Companies House Incorporation Fee Included",
          "Digital + Printed Certificate of Incorporation",
          "Digital Memorandum & Articles of Association",
          "Registered Office Address",
          "Company Authentication Code",
          "UTR Number",
          "Digital Shares Certificate",
          "ID Verification Included",
          "Client Portal Access (document uploads & status updates)",
        ],
      },
      {
        name: "Gold",
        price: "£180",
        features: [
          "UK LTD (Company) Registration",
          "Companies House Incorporation Fee Included",
          "Digital Certificate of Incorporation",
          "Digital Memorandum & Articles of Association",
          "Registered Office Address",
          "Company Authentication Code",
          "UTR Number",
          "Digital Shares Certificate",
          "ID Verification Included",
          "Director Service Address",
          "Client Portal Access (document uploads & status updates)",
        ],
      },
      {
        name: "Platinum",
        price: "£200",
        features: [
          "UK LTD (Company) Registration",
          "Companies House Incorporation Fee Included",
          "Digital Certificate of Incorporation",
          "Digital Memorandum & Articles of Association",
          "London Registered Office Address",
          "Company Authentication Code",
          "UTR Number",
          "Digital Shares Certificate",
          "ID Verification Included",
          "Director Service Address",
          "Client Portal Access (document uploads & status updates)",
        ],
      },
    ],
  },
  {
    slug: "ltd-id-verification",
    category: "uk-services",
    title: "LTD ID Verification",
    short: "LTD ID Verification",
    intro:
      "Ready to verify your identity and keep your UK LTD compliant? Begin your secure Companies House identity check in minutes — one-time fee, worldwide officers accepted.",
    whoNeedsIt: {
      title: "Verification is mandatory for these roles",
      subtitle:
        "If you hold any of these positions in a UK Limited Company, identity verification with Companies House is now required.",
      roles: [
        { name: "Company Director" },
        { name: "Person with Significant Control (PSC)" },
        { name: "Company Secretary" },
        { name: "Shareholder" },
      ],
    },
    whatsIncluded: {
      title: "What this service covers",
      items: [
        "Secure digital identity verification",
        "Fast document review",
        "For UK & non-UK officers",
        "Accepted for Companies House",
        "Compliance-ready processing",
      ],
    },
    requirements: {
      title: "ID Verification Requirements",
      subtitle: "Please prepare the following documents before starting your verification for fast, smooth processing with Companies House.",
      items: [
        "ID Card / Passport Picture",
        "Live Selfie",
        "Home Address",
        "Residential Bank Statement",
        "Email Address",
      ],
    },
    packages: [
      {
        name: "ID Verification",
        price: "£20",
        note: "One-time fee · Worldwide officers accepted",
        features: [
          "Secure digital identity verification",
          "Companies House DIATF compliant",
          "Digital verification certificate",
          "Fast turnaround",
          "Support included",
        ],
      },
    ],
  },
  {
    slug: "registered-office-address",
    category: "uk-services",
    title: "Registered Office Address — UK LTD",
    short: "Registered Office Address",
    intro:
      "Use our secure and official UK Registered Office Addresses for your company registration and compliance. Receive all government correspondence digitally or via post — and maintain a professional UK business presence.",
    whoNeedsIt: {
      title: "Essential for every UK business",
      roles: [
        { name: "Directors", desc: "Receive official government mail" },
        { name: "Company Secretaries (PCS)", desc: "Maintain compliance with Companies House" },
        { name: "Shareholders", desc: "Official documentation & correspondence" },
        { name: "Small & Medium Businesses", desc: "Establish a professional UK business presence" },
      ],
    },
    packages: [
      {
        name: "Registered Office Address",
        price: "£40",
        note: "per year · 1 Year Contract",
        features: [
          "Unique Office Number with Address",
          "Use address for registration of 1 Company/Business",
          "Receive all mail from UK government bodies",
          "Receive Post (up to 10 items/month)",
          "Notify via email when mail received",
          "Proof of Address provided",
          "Scan & Email Your Mail",
          "Forward Your Mail (Paid)",
          "Client Portal Access (mail & document tracking)",
          "1 Year Contract (Billed Annually)",
        ],
      },
      {
        name: "Business Service Address",
        price: "£60",
        note: "per year · Most Popular",
        popular: true,
        features: [
          "Unique Office Number with Address",
          "Use for registration of 1 Company/Business",
          "Use address for marketing & advertising",
          "Receive Post (up to 10 items/month)",
          "Notify via email when mail received",
          "Proof of Address provided",
          "Scan & Email Your Mail",
          "Forward Your Mail (Paid)",
          "Client Portal Access (mail & document tracking)",
          "1 Year Contract (Billed Annually)",
        ],
      },
      {
        name: "Director Service Address",
        price: "£20",
        note: "per year · 1 Year Contract",
        features: [
          "Unique Office Number with Address",
          "Use address for 1 Director",
          "Receive all mail from UK government bodies",
          "Receive Post (up to 10 items/month)",
          "Notify via email when mail received",
          "Scan & Email Your Mail",
          "Forward Your Mail (Paid)",
          "Client Portal Access (mail & document tracking)",
          "1 Year Contract (Billed Annually)",
        ],
      },
    ],
  },
  {
    slug: "company-annual-filing",
    category: "uk-services",
    title: "Confirmation Statement Filing",
    short: "Confirmation Statement Filing",
    intro:
      "Professional confirmation statement filing delivered with speed, transparency and full compliance. Trusted by 300+ entrepreneurs across the UK, USA and beyond.",
    whatsIncluded: {
      title: "A complete service, handled for you",
      items: [
        "Fully managed end-to-end process",
        "Transparent fixed pricing — no hidden fees",
        "Dedicated specialist assigned to your case",
        "Status updates at every stage",
      ],
    },
    howItWorks: {
      steps: [
        "Book a free consultation",
        "We collect your details securely",
        "Our team handles every step",
        "You receive your documents",
      ],
    },
    packages: [
      {
        name: "Confirmation Statement",
        price: "£80",
        features: [
          "Prepare your annual confirmation statement",
          "File with Companies House (£50 fee included)",
          "Director identity verification details collected",
          "Avoid strike-off and compliance issues",
        ],
      },
    ],
  },
  {
    slug: "utr-number",
    category: "uk-services",
    title: "Get UTR Number (HMRC)",
    short: "Get UTR Number (HMRC)",
    intro:
      "Professional UTR number registration delivered with speed, transparency and full compliance. Trusted by 300+ entrepreneurs across the UK, USA and beyond.",
    whatsIncluded: {
      title: "A complete service, handled for you",
      items: [
        "Fully managed end-to-end process",
        "Transparent fixed pricing — no hidden fees",
        "Dedicated specialist assigned to your case",
        "Status updates at every stage",
      ],
    },
    howItWorks: {
      steps: [
        "Book a free consultation",
        "We collect your details securely",
        "Our team handles every step",
        "You receive your documents",
      ],
    },
    packages: [
      {
        name: "UTR Registration",
        price: "£30",
        features: [
          "HMRC registration handled end-to-end",
          "Company UTR issued by HMRC",
          "Digital delivery once received",
          "Support throughout the process",
        ],
      },
    ],
  },
  {
    slug: "auth-code",
    category: "uk-services",
    title: "Companies House Authentication Code",
    short: "Companies House Authentication Code",
    intro:
      "Professional Companies House authentication code service delivered with speed, transparency and full compliance. Trusted by 300+ entrepreneurs across the UK, USA and beyond.",
    whatsIncluded: {
      title: "A complete service, handled for you",
      items: [
        "Fully managed end-to-end process",
        "Transparent fixed pricing — no hidden fees",
        "Dedicated specialist assigned to your case",
        "Status updates at every stage",
      ],
    },
    howItWorks: {
      steps: [
        "Book a free consultation",
        "We collect your details securely",
        "Our team handles every step",
        "You receive your documents",
      ],
    },
    packages: [
      {
        name: "Auth Code Service",
        price: "£10",
        features: [
          "Request or reissue authentication code",
          "Postal delivery to registered office",
          "Support with online activation",
        ],
      },
    ],
  },
  {
    slug: "activation-code",
    category: "uk-services",
    title: "Activation Code Service",
    short: "Activation Code Service",
    intro:
      "Professional activation code service delivered with speed, transparency and full compliance. Trusted by 300+ entrepreneurs across the UK, USA and beyond.",
    whatsIncluded: {
      title: "A complete service, handled for you",
      items: [
        "Fully managed end-to-end process",
        "Transparent fixed pricing — no hidden fees",
        "Dedicated specialist assigned to your case",
        "Status updates at every stage",
      ],
    },
    howItWorks: {
      steps: [
        "Book a free consultation",
        "We collect your details securely",
        "Our team handles every step",
        "You receive your documents",
      ],
    },
    packages: [
      {
        name: "Activation Code",
        price: "£10",
        features: ["HMRC online account registration", "Activation code request", "Setup support"],
      },
    ],
  },
  {
    slug: "uk-vat-registration",
    category: "uk-services",
    title: "UK VAT Registration & Submission",
    short: "UK VAT Registration & Submission",
    intro:
      "Professional UK VAT registration and submission delivered with speed, transparency and full compliance. Trusted by 300+ entrepreneurs across the UK, USA and beyond.",
    whatsIncluded: {
      title: "A complete service, handled for you",
      items: [
        "Fully managed end-to-end process",
        "Transparent fixed pricing — no hidden fees",
        "Dedicated specialist assigned to your case",
        "Status updates at every stage",
      ],
    },
    howItWorks: {
      steps: [
        "Book a free consultation",
        "We collect your details securely",
        "Our team handles every step",
        "You receive your documents",
      ],
    },
    packages: [
      {
        name: "VAT Registration",
        price: "£100",
        features: [
          "VAT number issued by HMRC",
          "Full application handled by us",
          "Digital VAT certificate",
          "Support included",
        ],
      },
      {
        name: "VAT Return Submission",
        price: "£80",
        note: "per return",
        features: [
          "Quarterly VAT return preparation",
          "MTD-compliant submission",
          "Review & advice on input/output VAT",
        ],
      },
    ],
  },
];

// ============ UK COMPLIANCE ============
export const ukCompliance: Service[] = [
  {
    slug: "company-name-change",
    category: "uk-compliance",
    title: "Change Your UK Company Name with Confidence",
    short: "Change UK Company Name (NM01)",
    intro:
      "Officially change your UK company name with a fully managed Companies House filing — certificate and resolution document included.",
    whatsIncluded: {
      title: "Service Overview — What's included",
      items: [
        "Update your registered company name at Companies House",
        "Certificate of name change included",
        "Special resolution document drafted for you",
        "Full compliance with Companies House filing rules",
      ],
    },
    requirements: {
      title: "What we'll need from you",
      subtitle: "Please have the following details ready so we can complete your filing quickly with Companies House.",
      items: ["Company Number (CRN)", "Company Authentication Code", "New Company Name"],
    },
    packages: [
      {
        name: "Name Change",
        price: "£30",
        note: "Service Charge",
        features: [
          "Update your registered company name at Companies House",
          "Certificate of name change included",
          "Special resolution document drafted for you",
          "Full compliance with Companies House filing rules",
        ],
      },
    ],
  },
  {
    slug: "company-address-change",
    category: "uk-compliance",
    title: "Update Your Registered UK Office Address",
    short: "Change Registered Office Address (AD01)",
    intro:
      "Update your UK registered office address quickly and stay fully compliant with Companies House.",
    whatsIncluded: {
      title: "Service Overview — What's included",
      items: [
        "Update your registered office address at Companies House",
        "Valid for 1 year — includes mail handling options",
        "Email notifications when post is received",
        "Optional mail scanning available",
      ],
    },
    requirements: {
      title: "What we'll need from you",
      subtitle: "Please have the following details ready so we can complete your filing quickly with Companies House.",
      items: ["Company Number (CRN)", "Company Authentication Code", "New Registered Address"],
    },
    packages: [
      {
        name: "Address Change",
        price: "£10",
        note: "Service Charge",
        features: [
          "Update your registered office address at Companies House",
          "Valid for 1 year — includes mail handling options",
          "Email notifications when post is received",
          "Optional mail scanning available",
        ],
      },
    ],
  },
  {
    slug: "annual-accounts-filing",
    category: "uk-compliance",
    title: "File Your UK Company Annual Accounts On Time",
    short: "File Annual Accounts (UK LTD)",
    intro:
      "Stay compliant with UK statutory filing — full preparation and submission of annual accounts to Companies House and HMRC.",
    whatsIncluded: {
      title: "Service Overview — What's included",
      items: [
        "Preparation of statutory annual accounts",
        "Submission to Companies House and HMRC",
        "Micro-entity, small company and dormant accounts",
        "Avoid late filing penalties",
      ],
    },
    requirements: {
      title: "What we'll need from you",
      subtitle: "Please have the following details ready so we can complete your filing quickly with Companies House.",
      items: [
        "Company Number (CRN)",
        "Company Authentication Code",
        "Business Financial Statement (income, expenses, budget — full year figures)",
      ],
    },
    packages: [
      {
        name: "Annual Accounts",
        price: "From £120",
        note: "Service Charge — starting from",
        features: [
          "Preparation of statutory annual accounts",
          "Submission to Companies House and HMRC",
          "Micro-entity, small company and dormant accounts",
          "Avoid late filing penalties",
        ],
      },
    ],
  },
  {
    slug: "confirmation-statement",
    category: "uk-compliance",
    title: "File Your Annual Confirmation Statement",
    short: "File Confirmation Statement (CS01)",
    intro:
      "Stay compliant with UK company law by filing your annual confirmation statement with Companies House.",
    whatsIncluded: {
      title: "Service Overview — What's included",
      items: [
        "Prepare your annual confirmation statement",
        "File with Companies House (£50 fee included)",
        "Director identity verification details collected",
        "Avoid strike-off and compliance issues",
      ],
    },
    requirements: {
      title: "What we'll need from you",
      subtitle: "Please have the following details ready so we can complete your filing quickly with Companies House.",
      items: ["Company Number (CRN)", "Company Authentication Code"],
    },
    packages: [
      {
        name: "Confirmation Statement",
        price: "£80",
        note: "Service Charge",
        features: [
          "Prepare your annual confirmation statement",
          "File with Companies House (£50 fee included)",
          "Director identity verification details collected",
          "Avoid strike-off and compliance issues",
        ],
      },
    ],
  },
  {
    slug: "director-appoint-remove",
    category: "uk-compliance",
    title: "Appoint or Remove a Director — Same Day",
    short: "Appoint or Remove Director",
    intro:
      "Appoint or remove UK company directors with a fully managed Companies House filing.",
    whatsIncluded: {
      title: "Service Overview — What's included",
      items: [
        "Appoint a new company director",
        "Remove or resign existing directors",
        "Companies House filing handled end-to-end",
        "Optional ID verification add-on available",
      ],
    },
    requirements: {
      title: "What we'll need from you",
      subtitle: "Please have the following details ready so we can complete your filing quickly with Companies House.",
      items: ["Company Number (CRN)", "Company Authentication Code", "Director's Personal Code"],
    },
    packages: [
      {
        name: "Director Appoint / Remove",
        price: "£10",
        note: "Service Charge",
        features: [
          "Appoint a new company director",
          "Remove or resign existing directors",
          "Companies House filing handled end-to-end",
          "Optional ID verification add-on available",
        ],
      },
    ],
  },
  {
    slug: "shareholder-appoint-remove",
    category: "uk-compliance",
    title: "Update Your UK Company Shareholders Quickly",
    short: "Appoint or Remove Shareholder",
    intro:
      "Easily add or remove shareholders and manage your UK company's ownership structure.",
    whatsIncluded: {
      title: "Service Overview — What's included",
      items: [
        "Add or remove shareholders",
        "Companies House updates",
        "Ownership structure management",
        "Compliance filing support",
      ],
    },
    requirements: {
      title: "What we'll need from you",
      subtitle: "Please have the following details ready so we can complete your filing quickly with Companies House.",
      items: ["Company Number (CRN)", "Company Authentication Code", "Shareholder's Personal Code"],
    },
    packages: [
      {
        name: "Shareholder Update",
        price: "£10",
        note: "Service Charge",
        features: [
          "Add or remove shareholders",
          "Companies House updates",
          "Ownership structure management",
          "Compliance filing support",
        ],
      },
    ],
  },
  {
    slug: "psc-secretary-appoint-remove",
    category: "uk-compliance",
    title: "Manage PSC & Secretary Changes with Ease",
    short: "Appoint or Remove PSC & Secretary",
    intro:
      "Manage PSC and Company Secretary appointments and removals with full Companies House compliance.",
    whatsIncluded: {
      title: "Service Overview — What's included",
      items: [
        "Appoint or remove a Person of Significant Control (PSC)",
        "Appoint or remove a Company Secretary",
        "Legal compliance updates handled",
        "Official Companies House filing",
      ],
    },
    requirements: {
      title: "What we'll need from you",
      subtitle: "Please have the following details ready so we can complete your filing quickly with Companies House.",
      items: ["Company Number (CRN)", "Company Authentication Code", "PSC / Secretary Personal Code"],
    },
    packages: [
      {
        name: "PSC / Secretary Update",
        price: "£10",
        note: "Service Charge",
        features: [
          "Appoint or remove a Person of Significant Control (PSC)",
          "Appoint or remove a Company Secretary",
          "Legal compliance updates handled",
          "Official Companies House filing",
        ],
      },
    ],
  },
  {
    slug: "company-residence-change",
    category: "uk-compliance",
    title: "Update Your Company Country of Residence",
    short: "Change Company Residence Status",
    intro:
      "Update your UK company's country of residence with full Companies House and HMRC compliance.",
    whatsIncluded: {
      title: "Service Overview — What's included",
      items: [
        "Change registered country of residence",
        "Update tax residence details",
        "Companies House and HMRC notifications",
        "Full compliance support",
      ],
    },
    requirements: {
      title: "What we'll need from you",
      subtitle: "Please have the following details ready so we can complete your filing quickly with Companies House.",
      items: ["Company Number (CRN)", "Company Authentication Code", "New Country of Residence"],
    },
    packages: [
      {
        name: "Residence Change",
        price: "£10",
        note: "Service Charge",
        features: [
          "Change registered country of residence",
          "Update tax residence details",
          "Companies House and HMRC notifications",
          "Full compliance support",
        ],
      },
    ],
  },
  {
    slug: "ad01-form-post",
    category: "uk-compliance",
    title: "Secure AD01 Address Filing Service",
    short: "AD01 Postal Filing Service",
    intro:
      "Official AD01 filing service to update your UK registered office address with full postal and Companies House handling.",
    whatsIncluded: {
      title: "Service Overview — What's included",
      items: [
        "Official AD01 filing",
        "Registered office address update",
        "Postal handling support",
        "Companies House submission",
      ],
    },
    requirements: {
      title: "What we'll need from you",
      subtitle: "Please have the following details ready so we can complete your filing quickly with Companies House.",
      items: ["Company Number (CRN)", "Company Authentication Code", "New Registered Address"],
    },
    packages: [
      {
        name: "AD01 Postal Filing",
        price: "£100",
        note: "Service Charge",
        features: [
          "Official AD01 filing",
          "Registered office address update",
          "Postal handling support",
          "Companies House submission",
        ],
      },
    ],
  },
];

// ============ USA SERVICES ============
export const usaServices: Service[] = [
  {
    slug: "us-llc-formation",
    category: "usa-services",
    title: "Form US LLC for Non-Residents",
    short: "US LLC Formation",
    intro:
      "Register a US LLC remotely with EIN, business address and full digital documentation. Delaware, Wyoming, New Mexico and more — choose the state that fits your business.",
    highlights: [
      "State filing handled for you",
      "EIN registration with IRS",
      "Business address & registered agent",
      "Digital incorporation pack",
      "ITIN available on Gold tier",
    ],
    packages: [
      {
        name: "Starter",
        price: "£150",
        note: "Base price — state surcharge may apply",
        features: [
          "U.S. LLC Registration",
          "Shared Business Address (no portal, no mail support)",
          "Articles of Organization",
          "Employer Identification Number (EIN)",
          "Digital Company Documents (PDF)",
          "Certificate of Formation (Digital)",
          "24/7 Support",
        ],
      },
      {
        name: "Silver",
        price: "£200",
        popular: true,
        features: [
          "U.S. LLC Registration",
          "Unique Business Address (with portal access & mail support)",
          "Articles of Organization",
          "Employer Identification Number (EIN)",
          "Digital Company Documents (PDF)",
          "Certificate of Formation (Digital)",
          "24/7 Support",
        ],
      },
      {
        name: "Gold",
        price: "£400",
        features: [
          "U.S. LLC Registration",
          "Unique Business Address (with portal access & mail support)",
          "Articles of Organization",
          "Employer Identification Number (EIN)",
          "Individual Taxpayer Identification Number (ITIN) included",
          "Digital Company Documents (PDF)",
          "Certificate of Formation (Digital)",
          "24/7 Support",
        ],
      },
    ],
  },
  {
    slug: "ein-number",
    category: "usa-services",
    title: "Get Your U.S. EIN Number Quickly",
    short: "EIN Number",
    intro:
      "Apply for your Employer Identification Number (EIN) for your LLC. Official IRS-recognized digital certificate delivered.",
    whatsIncluded: {
      title: "Service Features — What's included",
      items: [
        "EIN Registration with IRS",
        "Digital Certificate Delivery (PDF)",
        "Fast Processing",
        "Compliant & Secure",
        "Support included",
      ],
    },
    requirements: {
      title: "What you'll need to apply",
      subtitle: "Please prepare the following before starting your EIN Number application. This helps us complete your filing quickly and without delays.",
      items: [
        "Registered LLC name & state of formation",
        "Articles of Organization (PDF)",
        "Responsible party full name & address",
        "Passport copy of the responsible party",
        "Business activity description",
        "Contact email & WhatsApp number",
      ],
    },
    howItWorks: {
      title: "Simple 4-step process",
      steps: [
        "Submit your details and documents",
        "We prepare & file Form SS-4 with the IRS",
        "Receive your official EIN confirmation (CP-575 / 147C)",
        "Digital PDF certificate delivered to your email",
      ],
    },
    packages: [
      {
        name: "EIN Number",
        price: "$50",
        note: "Service fee · Turnaround 3–10 business days",
        features: [
          "EIN Registration with IRS",
          "Digital Certificate Delivery (PDF)",
          "Fast Processing",
          "Compliant & Secure",
          "Support included",
        ],
      },
    ],
  },
  {
    slug: "itin-number",
    category: "usa-services",
    title: "Obtain Your U.S. ITIN (Individual Taxpayer Identification Number)",
    short: "ITIN Number",
    intro: "Ideal for non-resident members of an LLC or individuals needing a U.S. tax ID.",
    whatsIncluded: {
      title: "Service Features — What's included",
      items: [
        "ITIN Application Assistance",
        "IRS-Compliant Submission",
        "Digital ITIN Certificate",
        "Fast & Secure Process",
        "Support Included",
      ],
    },
    requirements: {
      title: "What you'll need to apply",
      subtitle: "Please prepare the following before starting your ITIN Number application. This helps us complete your filing quickly and without delays.",
      items: [
        "Notarized passport copy (or certified true copy)",
        "Proof of foreign address",
        "Reason for ITIN (LLC ownership, U.S. tax filing, etc.)",
        "LLC formation documents (if applicable)",
        "Signed Form W-7 (we prepare it for you)",
        "Contact email & WhatsApp number",
      ],
    },
    howItWorks: {
      title: "Simple 4-step process",
      steps: [
        "Submit your passport & supporting documents",
        "We prepare and certify your Form W-7 application",
        "IRS Acceptance Agent submission",
        "Receive your ITIN letter from the IRS by post & email",
      ],
    },
    packages: [
      {
        name: "ITIN Number",
        price: "$200",
        note: "Service fee · Turnaround 6–10 weeks (IRS processing)",
        features: [
          "ITIN Application Assistance",
          "IRS-Compliant Submission",
          "Digital ITIN Certificate",
          "Fast & Secure Process",
          "Support Included",
        ],
      },
    ],
  },
  {
    slug: "annual-tax-filing",
    category: "usa-services",
    title: "Annual U.S. LLC Tax Filing Made Simple",
    short: "US LLC Annual Tax Return",
    intro: "File your federal & state taxes accurately with professional guidance and portal access.",
    whatsIncluded: {
      title: "Service Features — What's included",
      items: [
        "Federal & State Tax Submission",
        "IRS & State Compliant",
        "Portal Access for Filings",
        "Support & Guidance",
        "Ongoing Tax Assistance",
      ],
    },
    requirements: {
      title: "What you'll need to apply",
      subtitle: "Please prepare the following before starting your Annual Tax Filing application. This helps us complete your filing quickly and without delays.",
      items: [
        "LLC name, EIN & state of formation",
        "Members / owners details (name, address, ownership %)",
        "Annual income & expense summary",
        "Bank statements for the tax year",
        "Previous year's tax filings (if any)",
        "Contact email & WhatsApp number",
      ],
    },
    howItWorks: {
      title: "Simple 4-step process",
      steps: [
        "Share your financial summary & documents",
        "We prepare Form 5472 + 1120 (or relevant returns)",
        "Review with you before submission",
        "File with the IRS & deliver confirmation receipt",
      ],
    },
    packages: [
      {
        name: "Annual Tax Filing",
        price: "$100",
        note: "Service fee · Turnaround 5–14 business days",
        features: [
          "Federal & State Tax Submission",
          "IRS & State Compliant",
          "Portal Access for Filings",
          "Support & Guidance",
          "Ongoing Tax Assistance",
        ],
      },
    ],
  },
  {
    slug: "bio-report",
    category: "usa-services",
    title: "File Your U.S. BOI (Beneficial Ownership Information) Report",
    short: "BOI Report (Beneficial Ownership)",
    intro: "Comply with U.S. BOI requirements quickly with secure digital processing.",
    whatsIncluded: {
      title: "Service Features — What's included",
      items: [
        "Digital BOI Report Submission",
        "U.S. Government Compliant",
        "Fast Processing",
        "Secure Document Delivery (PDF)",
        "Support Included",
      ],
    },
    requirements: {
      title: "What you'll need to apply",
      subtitle: "Please prepare the following before starting your BOI Report application. This helps us complete your filing quickly and without delays.",
      items: [
        "LLC name, EIN & state of formation",
        "Beneficial owner(s) full name & date of birth",
        "Residential address of each beneficial owner",
        "Passport or government-issued ID copy",
        "Company applicant details (if formed after 2024)",
        "Contact email & WhatsApp number",
      ],
    },
    howItWorks: {
      title: "Simple 4-step process",
      steps: [
        "Submit owner details & ID documents",
        "We prepare your BOI report for FinCEN",
        "File electronically with FinCEN",
        "Receive confirmation receipt (PDF) by email",
      ],
    },
    packages: [
      {
        name: "BOI Report",
        price: "$20",
        note: "Service fee · Turnaround 2–5 business days",
        features: [
          "Digital BOI Report Submission",
          "U.S. Government Compliant",
          "Fast Processing",
          "Secure Document Delivery (PDF)",
          "Support Included",
        ],
      },
    ],
  },
];

// ============ BANKING & PAYMENTS ============
const bankCard = (slug: string, title: string, intro: string, price: string, features: string[]): Service => ({
  slug,
  category: "banks-payment-solutions",
  title,
  short: title,
  intro,
  packages: [{ name: "Account Setup", price, features }],
});

export const banking: Service[] = [
  bankCard(
    "paypal",
    "PayPal",
    "Trusted global online payment platform for businesses and freelancers.",
    "£20",
    [
      "Instant international payments",
      "Business invoicing",
      "Buyer & seller protection",
      "Easy integration with e-commerce platforms",
    ],
  ),
  bankCard(
    "payoneer",
    "Payoneer",
    "Global payment solution for businesses, freelancers, and e-commerce sellers.",
    "£20",
    [
      "Receive payments worldwide",
      "Multi-currency accounts",
      "Prepaid MasterCard for withdrawals",
      "E-commerce marketplace support",
    ],
  ),
  bankCard(
    "worldfirst",
    "WorldFirst",
    "Fast, secure, and low-cost international money transfers.",
    "£20",
    [
      "Multi-currency accounts",
      "Competitive exchange rates",
      "Easy integration with global marketplaces",
      "Safe and reliable transfers",
    ],
  ),
  bankCard(
    "stripe",
    "Stripe",
    "Complete payment processing solution for online businesses.",
    "£20",
    [
      "Online and mobile payments",
      "Subscription billing",
      "Fraud protection",
      "API integration for websites",
    ],
  ),
  bankCard(
    "tide",
    "Tide",
    "UK-based business banking platform designed for small businesses and freelancers.",
    "£50",
    [
      "Business account opening",
      "Instant payment notifications",
      "Expense management",
      "Integrated invoicing",
    ],
  ),
  bankCard(
    "sunrate",
    "Sunrate",
    "Fintech platform offering fast and secure cross-border payments for businesses.",
    "£50",
    ["Global remittance solutions", "Multi-currency support", "Competitive exchange rates", "API for automation"],
  ),
  bankCard(
    "wise",
    "Wise",
    "Fast, transparent, and low-cost international money transfers.",
    "£70",
    [
      "Real exchange rate transfers",
      "Multi-currency accounts",
      "International invoicing",
      "Borderless account for global payments",
    ],
  ),
  bankCard(
    "zyla",
    "Zyla",
    "Digital payment solutions for SMEs and e-commerce merchants.",
    "£50",
    ["Multi-currency support", "Merchant accounts", "Online payment processing", "Simple integration"],
  ),
  bankCard(
    "airwallex",
    "Airwallex",
    "Global financial platform for businesses.",
    "£50",
    [
      "Multi-currency business accounts",
      "International payments & transfers",
      "Competitive FX rates",
      "Virtual cards for team expenses",
    ],
  ),
  bankCard(
    "mollie",
    "Mollie",
    "European payment service provider for businesses.",
    "£50",
    [
      "Accept credit card, debit, and e-wallet payments",
      "Simple API integration",
      "Subscription and recurring payments",
      "Real-time reporting",
    ],
  ),
  bankCard(
    "zionpe",
    "ZionPe",
    "Modern Payment OS built for startups and online businesses.",
    "£50",
    [
      "Online payments & checkout",
      "Invoicing & payment links",
      "Subscription billing automation",
      "Multi-currency: GBP, USD, EUR",
      "Instant payouts in 195+ countries",
    ],
  ),
  bankCard(
    "wallester",
    "Wallester",
    "Secure payment solutions and instant Visa card issuing platform.",
    "£50",
    [
      "Instant virtual & physical Visa card issuing",
      "Real-time spend tracking & controls",
      "API-first integration",
      "Multi-currency settlement",
      "Operates in 35+ countries",
    ],
  ),
  bankCard(
    "pingpong",
    "PingPong",
    "Cross-border payment infrastructure for global commerce.",
    "£50",
    [
      "Multi-currency local receiving accounts",
      "Cross-border payouts worldwide",
      "Lock-in FX rates & treasury management",
      "Card issuing for global spend",
      "Marketplace & e-commerce integrations",
    ],
  ),
  bankCard(
    "grey",
    "Grey",
    "Borderless banking for freelancers, remote workers, and global businesses.",
    "£50",
    [
      "Foreign currency accounts (USD, GBP, EUR)",
      "Competitive currency conversion",
      "Virtual USD cards for global spending",
      "Fast international transfers",
    ],
  ),
  bankCard(
    "taptap",
    "TapTap Send",
    "Fast, low-cost international money transfers to emerging markets.",
    "£50",
    [
      "Low-cost international transfers",
      "Competitive FX rates",
      "Fast delivery to bank accounts & mobile wallets",
      "Wide global coverage",
    ],
  ),
  bankCard(
    "nsave-business",
    "Nsave Business",
    "Secure offshore business banking with multi-currency accounts.",
    "£50",
    [
      "Multi-currency business accounts",
      "Offshore account protection",
      "International SWIFT payments",
      "Dedicated business support",
    ],
  ),
];

export const allServices: Service[] = [...ukServices, ...ukCompliance, ...usaServices, ...banking];

export function findService(category: Service["category"], slug: string): Service | undefined {
  return allServices.find((s) => s.category === category && s.slug === slug);
}

export function servicesByCategory(category: Service["category"]): Service[] {
  return allServices.filter((s) => s.category === category);
}
