import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy - Elaris Labs',
  description: 'Privacy Policy for ElarisLabs',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background Effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/20 rounded-full blur-[120px]" />
          <div className="absolute top-20 right-1/4 w-[400px] h-[300px] bg-pink-600/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            Privacy Policy
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-white/60">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">
              Effective: January 10, 2026
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">
              Last updated: January 10, 2026
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="relative mx-auto max-w-4xl px-6 pb-20">
        <div className="space-y-6">
          {/* Section 1 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 text-sm font-bold">1</span>
              Who we are
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              This Privacy Policy explains how ElarisLabs ("ElarisLabs," "we," "us") collects, uses, shares, and protects information when you use elarislabs.ai, our apps, dashboards, APIs, and related services (collectively, the "Services").
            </p>
            <div className="mt-4 p-4 rounded-xl bg-white/[0.03] border border-white/5">
              <p className="text-white/60 text-sm">
                <strong className="text-white/80">Contact:</strong>{' '}
                <a href="mailto:privacy@elarislabs.ai" className="text-purple-400 hover:text-purple-300 transition-colors">
                  privacy@elarislabs.ai
                </a>
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 text-sm font-bold">2</span>
              What this policy covers
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">This policy covers:</p>
            <ul className="space-y-2 mb-4">
              {[
                'Visitors to our website',
                'Customers and users of the Services (including trials and betas)',
                'Leads and marketing contacts',
                'Business partners and vendors',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-white/70 leading-relaxed">
              It does not cover third-party websites or services that you access via links from our Services.
            </p>
          </section>

          {/* Section 3 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 text-sm font-bold">3</span>
              Key definitions (AI-specific)
            </h2>
            <div className="space-y-4">
              {[
                { term: 'Personal Data', desc: 'Information that identifies or can reasonably be linked to an individual.' },
                { term: 'Customer Content', desc: 'Content you submit to the Services, including prompts, text, brand briefs, images, videos, logos, product photos, fonts, creative guidelines, and files.' },
                { term: 'Outputs', desc: 'Content generated by the Services based on Customer Content (for example, ad copy, creative concepts, images, videos, variants, and metadata).' },
                { term: 'Account Data', desc: 'Information tied to your account (name, email, organization, role, billing).' },
                { term: 'Usage Data', desc: 'Telemetry and logs about how the Services are used.' },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <p className="text-white font-medium mb-1">{item.term}</p>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 text-sm font-bold">4</span>
              Information we collect
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white/90 flex items-center gap-2">
                  <span className="text-purple-400">A.</span> Information you provide
                </h3>
                <div className="grid gap-4">
                  {[
                    { title: 'Account and profile data', items: ['Name, email, password (hashed), organization name, role, and workspace settings', 'Team member invites and permissions'] },
                    { title: 'Billing and transaction data', items: ['Billing address, tax identifiers (if applicable), subscription plan, invoices', 'Payment details are typically processed by our payment processor; we generally receive tokens and limited payment metadata rather than full card numbers.'] },
                    { title: 'Customer Content', items: ['Prompts, briefs, brand assets, uploaded files, campaign inputs', 'Generated outputs you save, export, publish, or share via the Services', 'Feedback you submit (ratings, comments, bug reports)'] },
                    { title: 'Support and communications', items: ['Emails, chat messages, and call notes when you contact us', 'Attachments you send to support'] },
                  ].map((group, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                      <p className="text-white font-medium mb-2">{group.title}</p>
                      <ul className="space-y-1.5">
                        {group.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-white/60 text-sm">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-white/40 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-white/90 flex items-center gap-2">
                  <span className="text-purple-400">B.</span> Information collected automatically
                </h3>
                <div className="grid gap-4">
                  {[
                    { title: 'Device and browser data', items: ['IP address, device identifiers, browser type, OS, language, and approximate location (derived from IP)'] },
                    { title: 'Usage and log data', items: ['Feature usage, clicks, timestamps, pages viewed, error logs, performance metrics', 'Security logs (authentication events, suspicious activity signals)'] },
                    { title: 'Cookies and similar technologies', items: ['Essential cookies for login and session integrity', 'Analytics cookies (if enabled)', 'Preference cookies (language, UI settings)', 'You can manage cookies through your browser settings and, where available, our cookie banner/preferences center.'] },
                  ].map((group, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                      <p className="text-white font-medium mb-2">{group.title}</p>
                      <ul className="space-y-1.5">
                        {group.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-white/60 text-sm">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-white/40 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-white/90 flex items-center gap-2">
                  <span className="text-purple-400">C.</span> Information from third parties
                </h3>
                <ul className="space-y-2">
                  {[
                    'Identity providers (if you use SSO)',
                    'Payment processors (payment confirmation, fraud signals)',
                    'Analytics and marketing platforms (campaign attribution)',
                    'Public sources or enrichment tools (for business contact data, where permitted)',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 text-sm font-bold">5</span>
              How we use information
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">We use information to:</p>
            <div className="grid gap-3">
              {[
                { title: 'Provide and operate the Services', desc: 'Create accounts, authenticate users, manage workspaces, process prompts and assets to generate Outputs and creative variants, store and retrieve your projects, settings, and exports' },
                { title: 'Improve performance and reliability', desc: 'Debug issues, monitor uptime, prevent crashes, conduct testing including beta testing and new feature rollout' },
                { title: 'Security, safety, and abuse prevention', desc: 'Detect fraud, account compromise, malware, prompt abuse, and policy violations; enforce our acceptable use rules and protect users' },
                { title: 'Customer support', desc: 'Respond to questions, troubleshoot problems, and fulfill requests' },
                { title: 'Billing and administration', desc: 'Process payments, manage subscriptions, send invoices, and handle taxes' },
                { title: 'Communications and marketing', desc: 'Service announcements, security alerts, onboarding guidance, marketing updates (you can opt out of marketing emails anytime)' },
                { title: 'Legal compliance', desc: 'Comply with applicable laws, respond to lawful requests, and maintain records' },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <p className="text-white font-medium mb-1">{item.title}</p>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 text-sm font-bold">6</span>
              AI processing, model improvement, and training controls
            </h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Because we provide AI-driven creative generation, we process Customer Content (including prompts and brand assets) to produce Outputs.
            </p>

            <div className="space-y-4">
              {[
                { letter: 'A', title: 'How your content is processed', content: 'Your prompts and assets are processed by our systems to generate Outputs and variants. We may use third-party infrastructure (cloud hosting, storage, content delivery) and, depending on your configuration, third-party AI model providers to perform inference (generation).' },
                { letter: 'B', title: 'Default: Customer Content is not used to train foundation models', content: 'By default, we do not use your Customer Content (including prompts and Outputs) to train or fine-tune our foundation models. This mirrors common enterprise-style AI data controls.' },
                { letter: 'C', title: 'Optional opt-in for improvement', content: 'We may offer product settings that allow you (or your organization admin) to opt in to share certain content to help improve model quality, evaluation, and features. If you opt in, we may use shared content to evaluate and improve the Services (including internal fine-tuning or supervised review pipelines). We apply safeguards designed to minimize exposure of sensitive data.' },
                { letter: 'D', title: 'Safety and abuse review carve-outs', content: 'Even if you do not opt in, we may review limited content as necessary to investigate security incidents, fraud, and abuse; enforce policies and prevent harmful use; and comply with legal obligations.' },
                { letter: 'E', title: 'What we recommend you avoid sharing', content: 'Unless you have a signed agreement that explicitly permits it, do not upload highly sensitive personal data (e.g., government IDs, biometrics, medical records) or secrets that you cannot risk exposing (e.g., private keys, credentials). Contact us for enterprise configuration and a Data Processing Addendum (DPA) if needed.' },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <p className="text-white font-medium mb-2 flex items-center gap-2">
                    <span className="text-purple-400">{item.letter}.</span> {item.title}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 text-sm font-bold">7</span>
              Legal bases for processing (EEA, UK, Switzerland)
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">If you are in the EEA/UK/Switzerland, we rely on:</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { title: 'Contract', desc: 'To provide the Services you request' },
                { title: 'Legitimate interests', desc: 'To secure, maintain, and improve the Services' },
                { title: 'Consent', desc: 'For optional analytics cookies and marketing where required' },
                { title: 'Legal obligation', desc: 'To comply with applicable laws' },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <p className="text-white font-medium mb-1">{item.title}</p>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 8 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 text-sm font-bold">8</span>
              How we share information
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">We may share information with:</p>
            <div className="grid gap-3">
              {[
                { title: 'Service providers and processors', desc: 'Hosting, storage, analytics, customer support tools, email delivery, payment processing, fraud prevention. They process data under contractual obligations consistent with this policy.' },
                { title: 'AI and infrastructure providers', desc: 'Model inference providers (if used), compute providers, CDN, and related vendors needed to run the Services' },
                { title: 'Affiliates', desc: 'If we operate through group entities, we may share data within our corporate family for internal administration and delivery of Services.' },
                { title: 'Business transfers', desc: 'If we are involved in a merger, acquisition, financing, or sale of assets, data may be transferred as part of that transaction.' },
                { title: 'Legal and safety', desc: 'If required by law or necessary to protect rights, safety, and security (for example, responding to valid legal process)' },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <p className="text-white font-medium mb-1">{item.title}</p>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 9 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 text-sm font-bold">9</span>
              International data transfers
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              We may transfer Personal Data to countries other than where you live. Where required, we use safeguards such as:
            </p>
            <ul className="space-y-2">
              {[
                'Standard Contractual Clauses (SCCs)',
                'Equivalent legal transfer mechanisms',
                'Additional security measures (as appropriate)',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Section 10 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 text-sm font-bold">10</span>
              Data retention
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">We retain data only as long as needed for the purposes described:</p>
            <div className="grid gap-3">
              {[
                { title: 'Account Data', desc: 'Retained while your account is active, then for a reasonable period to close the account and meet legal obligations' },
                { title: 'Customer Content', desc: 'Retained until you delete it or your workspace is deleted, subject to backups' },
                { title: 'Backups', desc: 'May persist for up to 30–90 days after deletion for disaster recovery' },
                { title: 'Logs and security records', desc: 'Typically 30–180 days, longer if needed for investigations or legal compliance' },
                { title: 'Billing records', desc: 'Retained as required by tax and accounting laws' },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <p className="text-white font-medium mb-1">{item.title}</p>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-white/70 leading-relaxed mt-4">You can request deletion as described below.</p>
          </section>

          {/* Section 11 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 text-sm font-bold">11</span>
              Security measures
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              We use administrative, technical, and organizational measures designed to protect information, such as:
            </p>
            <ul className="space-y-2 mb-4">
              {[
                'Access controls and least-privilege permissions',
                'Encryption in transit (TLS) and encryption at rest where supported',
                'Monitoring, rate limiting, and anomaly detection',
                'Secure development practices and vulnerability management',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-white/60 text-sm italic">
              No system is 100% secure. You are responsible for using strong passwords and safeguarding access credentials.
            </p>
          </section>

          {/* Section 12 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 text-sm font-bold">12</span>
              Your rights and choices
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">Depending on your location, you may have rights to:</p>
            <ul className="space-y-2 mb-6">
              {[
                'Access, correct, or delete your Personal Data',
                'Object to or restrict processing',
                'Port your data',
                'Withdraw consent (where processing is based on consent)',
                'Appeal certain automated decisions, where applicable',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
              <p className="text-white/80 text-sm">
                <strong className="text-white">How to exercise rights:</strong> Email{' '}
                <a href="mailto:privacy@elarislabs.ai" className="text-purple-400 hover:text-purple-300 transition-colors">
                  privacy@elarislabs.ai
                </a>{' '}
                with your request. We may need to verify your identity.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3 text-white/90">For California residents (CCPA/CPRA)</h3>
              <ul className="space-y-2">
                {[
                  'We do not "sell" Personal Data in the traditional sense.',
                  'If we "share" data for cross-context behavioral advertising (if enabled), you can opt out via our cookie preferences center.',
                  'You may designate an authorized agent to submit requests.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 13 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 text-sm font-bold">13</span>
              Children&apos;s privacy
            </h2>
            <p className="text-white/70 leading-relaxed">
              The Services are not intended for children under 13 (or higher age where required). We do not knowingly collect Personal Data from children.
            </p>
          </section>

          {/* Section 14 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 text-sm font-bold">14</span>
              Changes to this policy
            </h2>
            <p className="text-white/70 leading-relaxed">
              We may update this policy from time to time. We will post updates on this page and update the "Last updated" date. For material changes, we may provide additional notice (for example, email or in-product notification).
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
