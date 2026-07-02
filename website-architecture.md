# StrategyLab Website Architecture

## Sitemap

| Page | URL | Purpose |
|------|-----|---------|
| Home | / | Agency overview, value proposition, lead capture |
| Services | /services | Detailed service offerings and capabilities |
| Portfolio | /portfolio | Case studies and project showcase |
| About | /about | Team, culture, and company story |
| Contact | /contact | Inquiry forms and contact information |
| Blog | /blog | Thought leadership and insights |

---

## Page Layouts

### 1. Home Page (`index.html`)

**Hero Section**
- Full-screen hero with animated gradient background
- Headline: "Creative Technology Studio"
- Subheadline: "We build digital experiences that drive growth"
- Primary CTA: "View Our Work" → Portfolio
- Secondary CTA: "Get in Touch" → Contact

**Services Overview**
- 4-card grid highlighting core services
- Each card: icon + title + brief description + "Learn More" link
- Services: Branding, UI/UX Design, Web Development, AI Automation

**Stats/Impact Section**
- KPI counters: Projects Delivered, Happy Clients, Years Experience, Team Members
- Animated numbers on scroll

**Portfolio Preview**
- 3 featured projects with images
- Each: project thumbnail + category + brief result metric
- "View All Projects" button

**Workflow Pipeline**
- Visual step-by-step process (1-4-7-10 stages)
- Icons for each phase: Discovery → Strategy → Design → Development → Delivery

**About Teaser**
- Team photo collage
- "Meet Our Team" CTA → About page

**Contact CTA**
- Bold statement: "Ready to transform your business?"
- Contact form preview with 3 fields (name, email, project type)

---

### 2. Services Page (`/services`)

**Hero Section**
- Headline: "Our Premium Services"
- Subheadline: "End-to-end solutions for modern businesses"

**Service Categories Grid**
- Filter tabs: All | Branding | Design | Development | AI | E-Commerce

**Individual Service Cards**
Each service includes:
- Badge (e.g., "Service Corporate Elite")
- Icon/illustration
- Title
- Description (2-3 lines)
- "Inclus" features list
- Duration badge
- "Valeur ajoutée" highlight
- CTA: "Get a Quote"

**Services offered:**
1. Branding & Identité Graphique de Prestige
2. Conception UI / UX Design d'Interfaces
3. Développement Web & Applications SaaS
4. Développement Applications Mobiles
5. Automatisation IA & Workflows
6. Plateformes E-Commerce Complètes

**Process Integration**
- "How We Work" section with 4-step visual

**FAQ Section**
- Collapsible accordion with common questions

---

### 3. Portfolio Page (`/portfolio`)

**Hero Section**
- Headline: "Our Work"
- Subheadline: "Case studies that demonstrate impact"

**Project Filter Bar**
- Tags: All | Branding | Web | Mobile | SaaS | E-Commerce

**Project Grid** (3-column layout)
Each project card:
- Hero image/mockup
- Category tag
- Project title
- Challenge/Solution/Success metrics (3-column text)
- "View Case Study" link

**Featured Case Study Highlight**
- Larger banner format for marquee project
- Extended metrics and quote

**Industry Expertise Section**
- Icons + names of industries served

---

### 4. About Page (`/about`)

**Hero Section**
- Headline: "About StrategyLab"
- Subheadline: "Creative Technology Studio"

**Our Story**
- Two-column layout: text + founder photo
- Mission statement
- Vision for the future

**Team Section**
- Leadership grid (3 cards)
- Hover reveals: role, country, responsibilities
- Future hires preview with "We're Hiring" CTA

**Organization Chart**
- Visual hierarchy diagram
- Color-coded by department

**Equity Structure**
- Clean table presentation
- Good Leaver / Bad Leaver policy callout

**Weekly Rituals**
- Frequency-based table format
- Clean, scannable layout

**Values Section**
- 3 core values with icons
- Brief descriptions

---

### 5. Contact Page (`/contact`)

**Hero Section**
- Headline: "Let's Build Something Together"
- Subheadline: "We'd love to hear about your project"

**Contact Options Grid** (2-column)
- Left: Contact form
  - Name, Email, Company, Project Type (dropdown), Budget (range), Message
  - Submit button with loading state
- Right: Direct contact info
  - Email, Phone, Location
  - Response time guarantee

**Project Type Quick Links**
- Buttons linking to relevant service pages

**Office Locations**
- Map integration (if applicable)
- Ghana and Togo offices

**Social Media Links**
- LinkedIn, Twitter, Instagram icons

---

### 6. Blog Page (`/blog`)

**Hero Section**
- Headline: "Insights"
- Subheadline: "Thoughts on design, technology, and business"

**Article Grid** (3-column)
- Featured image
- Publication date
- Category tag
- Title
- Excerpt (2 lines)
- "Read More" link

**Sidebar**
- Categories list
- Newsletter signup

---

## Technical Implementation Notes

- Responsive grid layouts using CSS Grid and Flexbox
- Consistent navigation across all pages
- Smooth scroll animations for KPIs and transitions
- Mobile-first approach with desktop enhancements
- CSS variables from existing styles.css maintained
- Gold (#D4AF37) accent color for CTAs and highlights
- Clean typography with Helvetica Neue system stack