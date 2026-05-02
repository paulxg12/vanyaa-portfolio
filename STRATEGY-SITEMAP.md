# VANYAA — Creator Portfolio | Strategy & Sitemap
# Built by: Senior Brand Portfolio Strategist + Conversion Copywriter
# Date: May 2, 2026

---

## 1. SITEMAP (Complete Site Architecture)

```
vanyaa/
├── index.html              # Home (primary conversion page)
├── about.html             # About / Brand Story
├── portfolio.html         # Portfolio / Campaigns Grid
├── case-study.html        # Case Study Template (repeatable)
├── services.html          # Services + Deliverables Table
├── media-kit.html        # Media Kit + PDF Download
├── work-with-me.html     # Inquiry Form (high-intent conversion)
├── press.html            # Press / Testimonials
├── terms.html            # Terms of Collaboration
├── privacy.html          # Privacy Policy + Cookie Notice
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── main.js
│   │   ├── form.js
│   │   └── analytics.js
│   ├── images/
│   │   ├── og-image.jpg
│   │   ├── vanyaa-headshot.[ext]     # [REQUIRED FROM CLIENT]
│   │   ├── brand-logos/                 # [REQUIRED FROM CLIENT]
│   │   └── campaign-thumbnails/          # [REQUIRED FROM CLIENT]
│   └── pdf/
│       └── vanyaa-media-kit-2026.pdf    # [REQUIRED FROM CLIENT]
└── sitemap.xml           # SEO sitemap
```

---

## 2. PAGE-BY-PAGE WIREFRAME (Content Blocks in Order)

### PAGE 1: HOME (index.html)
| # | Block | Purpose | CTA |
|---|------|---------|-----|
| 1 | Sticky Nav (Logo + links + "Book Colab" button) | Nav + brand anchor | Book Collaboration |
| 2 | Hero: Name + [REQUIRED FROM CLIENT: positioning line] + handle @vanyaaanegi._ | Hook + brand ID | Book Collaboration / Download Media Kit |
| 3 | Metrics Strip (4-stat row: ~27K followers / 58 posts / ~156 following / [views/engagement placeholder]) | Social proof | — |
| 4 | Featured Campaigns (3 cards: brand logo + deliverable + [REQUIRED FROM CLIENT]) | Credibility | View Portfolio |
| 5 | "Why Brands Work With Vanyaa" (3-column strengths [REQUIRED FROM CLIENT]) | Trust building | — |
| 6 | Testimonials Preview (1-2 quotes [REQUIRED FROM CLIENT]) | Social proof | View Press |
| 7 | Primary CTA Banner: "Ready to collaborate?" | Conversion | Book Collaboration |
| 8 | Footer (Links + [BUSINESS EMAIL REQUIRED FROM CLIENT] + Instagram link) | Navigation + contact | — |

---

### PAGE 2: ABOUT (about.html)
| # | Block | Purpose |
|---|------|---------|
| 1 | Nav (same) |
| 2 | Page Header: "About Vanyaa" |
| 3 | Bio Text [REQUIRED FROM CLIENT: short bio ~80 words] |
| 4 | Stats Block: 27K followers / 58 posts / [demographics placeholder] |
| 5 | Brand Values / Content Pillars [REQUIRED FROM CLIENT] |
| 6 | "What I Bring to Every Campaign" (3 points) |
| 7 | CTA: "Work With Me" |
| 8 | Footer |

---

### PAGE 3: PORTFOLIO (portfolio.html)
| # | Block | Purpose |
|---|------|---------|
| 1 | Nav |
| 2 | Page Header: "Campaign Portfolio" |
| 3 | Filter Bar: [REQUIRED FROM CLIENT: categories e.g. Beauty/Fashion/Lifestyle] |
| 4 | Campaign Grid (12-16 cards): brand logo / deliverable type / date / platform link / metric badges (views, saves, shares, CTR) [ALL REQUIRED FROM CLIENT] |
| 5 | CTA after every 3 cards: "Book Similar Campaign" |
| 6 | Footer |

---

### PAGE 4: CASE STUDY (case-study.html — repeatable template)
| # | Block | Purpose |
|---|------|---------|
| 1 | Nav |
| 2 | Brand + Campaign Title [REQUIRED FROM CLIENT] |
| 3 | Challenge (what brand needed) |
| 4 | Strategy (Vanyaa's approach) |
| 5 | Deliverables (reel count / post count / etc.) |
| 6 | Content Examples (thumbnails [REQUIRED FROM CLIENT]) |
| 7 | Results (metrics [REQUIRED FROM CLIENT]) |
| 8 | Learnings (1-2 sentences) |
| 9 | Brand Testimonial [REQUIRED FROM CLIENT] |
| 10 | CTA: "Book Vanyaa for Your Brand" |
| 11 | Footer |

---

### PAGE 5: SERVICES (services.html)
| # | Block | Purpose |
|---|------|---------|
| 1 | Nav |
| 2 | Page Header: "Services & Deliverables" |
| 3 | Deliverables Table: Sponsored Reel / Story Set / Static Post / UGC for Ads / Monthly Retainer / Event Appearance (optional) — with scope, timeline, revisions |
| 4 | Add-Ons: Whitelisting / Raw Files / Paid Usage Extension |
| 5 | Pricing Approach: "Custom Quote Based on Scope" (unless client provides rate card) |
| 6 | CTA: "Get a Quote" → links to work-with-me.html |
| 7 | Footer |

---

### PAGE 6: MEDIA KIT (media-kit.html)
| # | Block | Purpose |
|---|------|---------|
| 1 | Nav |
| 2 | Page Header: "Media Kit" |
| 3 | Short Bio [REQUIRED FROM CLIENT] |
| 4 | Audience Demographics [REQUIRED FROM CLIENT: age, gender, top geographies] |
| 5 | Platform Performance Charts [REQUIRED FROM CLIENT] |
| 6 | Top Campaign Snapshots (3-4) [REQUIRED FROM CLIENT] |
| 7 | Download PDF Button → /assets/pdf/vanyaa-media-kit-2026.pdf [REQUIRED FROM CLIENT] |
| 8 | "Last Updated: May 2026" + "Metrics updated monthly." |
| 9 | Footer |

---

### PAGE 7: WORK WITH ME (work-with-me.html — Inquiry Form)
| # | Field | Type | Validation |
|---|------|------|------------|
| 1 | Full Name | Text (required) | Min 2 chars |
| 2 | Company | Text (required) | — |
| 3 | Work Email | Email (required) | Valid email format |
| 4 | Brand/Agency Website | URL (required) | Valid URL |
| 5 | Campaign Objective | Dropdown (required) | Options: Awareness / Conversion / Product Launch / Event / Other |
| 6 | Deliverables Needed | Checkbox (required, multi) | Options: Sponsored Reel / Story Set / Static Post / UGC / Retainer / Event |
| 7 | Budget Range | Dropdown (required) | Options: Under $500 / $500–$1K / $1K–$3K / $3K–$5K / $5K+ / Undecided |
| 8 | Timeline | Date (required) | Must be future date |
| 9 | Usage Rights Needed | Dropdown (required) | Options: Organic Only / Whitelisting 30 days / Whitelisting 90 days / Perpetual / Not Sure |
| 10 | Region/Market | Text | — |
| 11 | Notes | Textarea | — |
| 12 | Consent Checkbox (required) | Checkbox | "I agree to the Terms of Collaboration and Privacy Policy" |
| — | Hidden Fields | — | Lead quality tag (budget + timeline auto-classified) |
| — | Submit Button | — | Shows thank-you confirmation; triggers auto-reply email to sender + notify [BUSINESS EMAIL REQUIRED FROM CLIENT] |

**Form Behavior:**
- On submit: Show thank-you message, fire GA4 `form_submit` event, fire Meta Pixel `Lead` event
- Auto-reply email sent to submitter confirming receipt
- Notification sent to [BUSINESS EMAIL REQUIRED FROM CLIENT] with lead score (High/Medium/Low based on budget + timeline)

---

### PAGE 8: PRESS / TESTIMONIALS (press.html)
| # | Block | Purpose |
|---|------|---------|
| 1 | Nav |
| 2 | Page Header: "Press & Brand Testimonials" |
| 3 | Brand Testimonials Grid (logo + quote + name + title) [REQUIRED FROM CLIENT] |
| 4 | Press Mentions (publication + headline + link) [REQUIRED FROM CLIENT] |
| 5 | CTA: "Book Vanyaa" |
| 6 | Footer |

---

### PAGE 9: TERMS (terms.html)
| # | Block | Purpose |
|---|------|---------|
| 1 | Nav |
| 2 | Page Header: "Terms of Collaboration" |
| 3 | Full terms text (see Legal Pages section below) |
| 4 | Footer |

---

### PAGE 10: PRIVACY (privacy.html)
| # | Block | Purpose |
|---|------|---------|
| 1 | Nav |
| 2 | Page Header: "Privacy Policy & Cookie Notice" |
| 3 | Full privacy text (see Legal Pages section below) |
| 4 | Footer |

---

## 3. CONVERSION CTA PLACEMENT MAP

| Page | Primary CTA | Secondary CTA | Placement Frequency |
|------|------------|----------------|----------------------|
| Home | Book Collaboration → work-with-me.html | Download Media Kit → media-kit.html | Hero (×1), Mid-page (×1), Footer (×1) |
| About | Work With Me → work-with-me.html | — | CTA section (×1), Footer (×1) |
| Portfolio | Book Similar Campaign → work-with-me.html | — | After every 3 cards |
| Case Study | Book Vanyaa → work-with-me.html | — | Bottom of case (×1) |
| Services | Get a Quote → work-with-me.html | — | After table (×1), Footer (×1) |
| Media Kit | Download PDF | Book Collaboration → work-with-me.html | Top (×1), Bottom (×1) |
| Press | Book Vanyaa → work-with-me.html | — | Mid-page (×1), Footer (×1) |

---

## 4. GA4 + PIXEL EVENT TRACKING PLAN

| Event Name | Trigger | Page |
|------------|--------|------|
| `page_view` | Every page load | All |
| `cta_click` | Any CTA button click | All |
| `form_start` | First focus on any form field | work-with-me.html |
| `form_submit` | Successful form submission | work-with-me.html |
| `media_kit_download` | PDF download click | media-kit.html |
| `campaign_view` | Campaign card click | portfolio.html |
| `case_study_view` | Case study page load | case-study.html |

**Meta Pixel Events:** `PageView`, `Lead` (on form submit), `ViewContent` (campaign/case study views)

---

## 5. SEO REQUIREMENTS (Per Page)

| Page | Title Tag | Meta Description |
|------|-----------|------------------|
| Home | Vanyaa (@vanyaaanegi._) — Creator Portfolio | [REQUIRED FROM CLIENT: positioning line] |
| About | About Vanyaa — Creator & Content Strategist | Meet Vanyaa, Instagram creator with 27K+ followers. [REQUIRED FROM CLIENT: one-line bio] |
| Portfolio | Campaign Portfolio — Vanyaa | See Vanyaa's brand collaborations and campaign results. [REQUIRED FROM CLIENT: top categories] |
| Case Study | [Brand Name] Case Study — Vanyaa | How Vanyaa helped [brand] achieve [result]. [REQUIRED FROM CLIENT] |
| Services | Services & Deliverables — Vanyaa | Book Vanyaa for reels, UGC, stories, and more. See deliverables and timelines. |
| Media Kit | Media Kit — Vanyaa | Download Vanyaa's media kit with audience demographics and campaign snapshots. |
| Work With Me | Book Collaboration — Vanyaa | Fill out the inquiry form to book Vanyaa for your next campaign. |
| Press | Press & Testimonials — Vanyaa | What brands say about working with Vanyaa. |
| Terms | Terms of Collaboration — Vanyaa | Collaboration terms and conditions. |
| Privacy | Privacy Policy — Vanyaa | Privacy policy and cookie notice. |

**Open Graph Image:** `assets/images/og-image.jpg` — [REQUIRED FROM CLIENT: high-quality brand photo, 1200×630px]

---

## 6. MONTHLY UPDATE CHECKLIST (For Client)

**Every Month (1st–5th):**
- [ ] Update follower count (~27K), posts (58), following (~156) across all pages
- [ ] Update [avg reel views / engagement rate REQUIRED FROM CLIENT] in metrics strip
- [ ] Add 1 new campaign to portfolio.html (with metrics)
- [ ] Update media-kit.html: audience demographics + platform performance charts
- [ ] Replace/download new PDF: `vanyaa-media-kit-2026.pdf`
- [ ] Update "Last Updated" date on media-kit.html
- [ ] Add 1 new testimonial or press mention to press.html
- [ ] Review inquiry form submissions → tag lead quality in CRM/spreadsheet
- [ ] Check GA4: CTA click-through rate, form start rate, form completion rate
- [ ] Export campaign metrics from Instagram for next month's update

**Quarterly:**
- [ ] Add 1 new case study (case-study.html template)
- [ ] Refresh hero positioning line if brand has evolved [REQUIRED FROM CLIENT]
- [ ] Review and update services pricing approach if needed
- [ ] Audit and fix any broken links (brand websites, campaign links)

---

## 7. LAUNCH CHECKLIST

**Pre-Launch:**
- [ ] All [REQUIRED FROM CLIENT] placeholders replaced with real content
- [ ] Business email configured for form notifications: [REQUIRED FROM CLIENT]
- [ ] Auto-reply email template written and tested
- [ ] GA4 property created and tagged on all pages
- [ ] Meta Pixel installed and tested (Lead event fires on form submit)
- [ ] PDF media kit uploaded to /assets/pdf/ [REQUIRED FROM CLIENT]
- [ ] OG image uploaded: 1200×630px [REQUIRED FROM CLIENT]
- [ ] All campaign links tested (Instagram posts/reels)
- [ ] Form validation tested (all required fields, email format, URL format)
- [ ] Mobile responsive tested (iPhone + Android)
- [ ] Anti-spam (honeypot field or CAPTCHA) enabled on form
- [ ] sitemap.xml submitted to Google Search Console
- [ ] robots.txt configured

**Launch Day:**
- [ ] DNS pointed / GitHub Pages enabled (or hosting deployed)
- [ ] SSL certificate active (HTTPS)
- [ ] Test inquiry form end-to-end (receives auto-reply + business email notified)
- [ ] Share website link on Instagram bio: @vanyaaanegi._
- [ ] Post story: "My new portfolio is live — link in bio"

---

## 8. KNOWN FACTUAL REFERENCES (Do Not Change)

- Display name: vanyaa
- Instagram handle: @vanyaaanegi._
- Instagram URL: https://www.instagram.com/vanyaaanegi._/
- Followers: ~26.7K–27K (as of May 2, 2026)
- Posts: 58
- Following: ~156
- Public bio: NOT AVAILABLE (use [REQUIRED FROM CLIENT] placeholder)
- No campaign data, engagement rates, or brand partnerships to be invented

---

## 9. CLIENT HANDOFF: WHAT TO SEND VANYAA

```
REQUIRED FROM CLIENT — Please provide:

1. [ ] Exact one-line positioning / bio (for Home hero + meta description)
2. [ ] Full short bio (~80 words, for About + Media Kit)
3. [ ] Audience demographics: age range, gender split, top 3 geographies
4. [ ] Avg reel views, engagement rate, any other performance metrics
5. [ ] Top 3 brand campaign details (brand name, deliverable, results, testimonial)
6. [ ] All campaign list for portfolio (with brand, type, date, metrics, links)
7. [ ] Brand logo files (for portfolio cards + case studies)
8. [ ] Campaign thumbnail images (for portfolio + case studies)
9. [ ] "Why brands work with Vanyaa" — 3 key strengths
10. [ ] 2–3 brand testimonials (quote + name + title + brand logo)
11. [ ] Business email address (for form notifications)
12. [ ] Content categories (e.g., Beauty / Fashion / Lifestyle / Travel)
13. [ ] Media kit PDF (or content to build one)
14. [ ] High-quality brand photo for OG image (1200×630px)
15. [ ] Press mentions (publication + headline + link)
16. [ ] Rate card (if available, otherwise "Custom Quote" stays)
```

---

End of Strategy & Sitemap Document
