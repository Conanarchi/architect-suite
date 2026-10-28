/* ============================================================================================
   Architect Suite website: every link and every personal detail lives in THIS file.
   Edit the values below, commit, and the whole site (all pages) follows.
   ============================================================================================ */
window.SITE = {
  // --- who you are (used on the Terms, Privacy and Refund pages) -----------------------------
  legalName:    "",                       // e.g. "Jane Doe" or "Studio X LLC".  Empty = "the publisher"
  country:      "",                       // e.g. "France".  Empty = no country line on the legal pages
  contactEmail: "architectsuite.revit@outlook.com",                       // support + order e-mail.  Empty = Buy buttons are disabled
  lastUpdated:  "12 October 2026",

  // --- downloads ------------------------------------------------------------------------------
  // The GitHub release page that holds the installer.  Upload ArchitectSuite-Setup-<version>.exe to a release.
  downloadUrl:  "https://github.com/Conanarchi/architect-suite/releases/latest",
  version:      "1.6.0",

  // --- Buy buttons ----------------------------------------------------------------------------
  // Paste a checkout link per plan (Stripe Payment Link, Lemon Squeezy, Paddle, ...).
  // While a link is empty, that Buy button opens an e-mail order to contactEmail instead.
  checkout: {
    pro:    "https://architectsuite.lemonsqueezy.com/checkout/buy/ebca071f-ac10-4b27-9a01-72de6cdff19d",     // Pro, 1 user, 1 year
    office: "https://architectsuite.lemonsqueezy.com/checkout/buy/c0f790ac-0146-4134-87af-ad23cda8c7fe",     // Office pack, 5 licences, 1 year
    studio: "https://architectsuite.lemonsqueezy.com/checkout/buy/6ebe9093-bc52-440a-ad7b-d59ee4f16e17"      // Studio pack, 10 licences, 1 year
  },
  plans: {
    pro:    { name: "Architect Suite Pro (1 user, 1 year)",       price: "$39" },
    office: { name: "Architect Suite Office pack (5 users, 1 year)",  price: "$149" },
    studio: { name: "Architect Suite Studio pack (10 users, 1 year)", price: "$249" }
  },

  // --- other links ----------------------------------------------------------------------------
  issuesUrl:    "https://github.com/Conanarchi/architect-suite/issues",
  siteUrl:      "https://conanarchi.github.io/architect-suite/"
};
