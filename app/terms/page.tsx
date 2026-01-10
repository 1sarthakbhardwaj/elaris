import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms and Conditions - Elaris Labs',
  description: 'Terms and Conditions for ElarisLabs',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background Effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/20 rounded-full blur-[120px]" />
          <div className="absolute top-20 left-1/4 w-[400px] h-[300px] bg-pink-600/10 rounded-full blur-[100px]" />
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
            Terms and Conditions
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
              Agreement to these Terms
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              These Terms and Conditions ("Terms") govern your access to and use of elarislabs.ai and related Services provided by Elaris Labs AI ("ElarisLabs," "we," "us").
            </p>
            <p className="text-white/70 leading-relaxed">
              By using the Services, you agree to these Terms. If you are using the Services on behalf of an organization, you represent you have authority to bind that organization, and "you" includes the organization.
            </p>
          </section>

          {/* Section 2 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 text-sm font-bold">2</span>
              Eligibility
            </h2>
            <p className="text-white/70 leading-relaxed">
              You must be legally able to form a contract in your jurisdiction. The Services are not intended for children under 13 (or higher age where required).
            </p>
          </section>

          {/* Section 3 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 text-sm font-bold">3</span>
              Accounts and workspace administration
            </h2>
            <ul className="space-y-2">
              {[
                'You must provide accurate account information and keep it updated.',
                'You are responsible for all activity under your account and for maintaining the confidentiality of credentials.',
                'Workspace admins may manage users, permissions, and connected integrations.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Section 4 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 text-sm font-bold">4</span>
              Subscriptions, trials, and payments
            </h2>
            <ul className="space-y-2">
              {[
                'Some features require a paid subscription. Pricing, billing cycle, and plan details are shown at checkout or in your order form.',
                'Taxes may apply. You are responsible for all applicable taxes unless otherwise stated.',
                'Trials (if offered) may convert to paid unless canceled before the trial ends.',
                'We may use third-party payment processors.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Section 5 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 text-sm font-bold">5</span>
              Using the Services: acceptable use
            </h2>
            <p className="text-white/70 leading-relaxed mb-6">
              You agree not to misuse the Services. You must not, and must not allow others to:
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <p className="text-white font-medium mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  Break the law or violate rights
                </p>
                <ul className="space-y-1.5 ml-4">
                  {[
                    'Use the Services for unlawful activities',
                    'Infringe or misappropriate intellectual property, privacy, or publicity rights',
                    'Upload content you do not have permission to use',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-white/40 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <p className="text-white font-medium mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  Generate or distribute harmful content
                </p>
                <ul className="space-y-1.5 ml-4">
                  {[
                    'Content that is illegal, exploitative, or abusive',
                    'Content that meaningfully facilitates wrongdoing (fraud, scams, malware)',
                    'Content that promotes violence or harassment',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-white/40 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <p className="text-white font-medium mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  Security and platform abuse
                </p>
                <ul className="space-y-1.5 ml-4">
                  {[
                    'Attempt to gain unauthorized access, probe, or scan systems',
                    'Reverse engineer or attempt to extract model weights or underlying source code (except to the extent the restriction is prohibited by law)',
                    'Interfere with service integrity (rate abuse, scraping beyond published limits, bypassing safeguards)',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-white/40 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <p className="text-white font-medium mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-400" />
                  High-risk decisions
                </p>
                <p className="text-white/60 text-sm">
                  Do not rely on Outputs for medical, legal, financial, or other professional advice without qualified human review.
                </p>
              </div>
            </div>

            <p className="text-white/60 text-sm mt-4 italic">
              We may suspend or terminate access for violations.
            </p>
          </section>

          {/* Section 6 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 text-sm font-bold">6</span>
              AI Outputs: important disclaimers
            </h2>
            <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20 mb-4">
              <p className="text-white/80 text-sm leading-relaxed">
                <strong className="text-yellow-400">⚠️ Important:</strong> Outputs are generated by probabilistic systems and may be incorrect, incomplete, non-unique, or unsuitable.
              </p>
            </div>
            <ul className="space-y-2">
              {[
                'You are responsible for reviewing Outputs before use, including legal review where needed (for example, advertising compliance, claims substantiation, IP clearance).',
                'We do not guarantee that Outputs will be original or that they will not resemble content generated for other users.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Section 7 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 text-sm font-bold">7</span>
              Customer Content, Outputs, and licenses
            </h2>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <p className="text-white font-medium mb-3 flex items-center gap-2">
                  <span className="text-purple-400">A.</span> Your content
                </p>
                <p className="text-white/60 text-sm mb-3">
                  You retain ownership of Customer Content you submit, subject to the rights you grant in these Terms.
                </p>
                <p className="text-white/60 text-sm mb-2">
                  You grant ElarisLabs a non-exclusive, worldwide, royalty-free license to host, store, reproduce, process, and display Customer Content solely to:
                </p>
                <ul className="space-y-1.5 ml-4">
                  {[
                    'Provide and maintain the Services',
                    'Generate Outputs and variants you request',
                    'Enforce safety, security, and compliance',
                    'Provide support and troubleshoot issues',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-white/40 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <p className="text-white font-medium mb-3 flex items-center gap-2">
                  <span className="text-purple-400">B.</span> Outputs
                </p>
                <p className="text-white/60 text-sm mb-2">
                  As between you and ElarisLabs, and to the extent permitted by law:
                </p>
                <ul className="space-y-1.5 ml-4">
                  {[
                    'You own the Outputs generated for you from your Customer Content, if any ownership rights exist.',
                    'ElarisLabs assigns to you any transferable rights it may have in those Outputs.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-white/40 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <p className="text-white font-medium mb-2 flex items-center gap-2">
                  <span className="text-purple-400">C.</span> Feedback
                </p>
                <p className="text-white/60 text-sm">
                  If you provide feedback (ideas, suggestions, improvements), you grant us the right to use it without restriction or compensation.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 text-sm font-bold">8</span>
              Model improvement and data controls
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Our handling of prompts and Outputs for model improvement is described in our Privacy Policy, including opt-in controls and safety review carve-outs.
            </p>
            <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
              <p className="text-white/80 text-sm">
                If your organization requires a DPA, SCCs, or enterprise controls, contact{' '}
                <a href="mailto:sales@elarislabs.ai" className="text-purple-400 hover:text-purple-300 transition-colors">
                  sales@elarislabs.ai
                </a>
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 text-sm font-bold">9</span>
              Intellectual property in the Services
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              ElarisLabs and its licensors own the Services, including software, templates, workflows, UI, and underlying technology, excluding Customer Content and Outputs as described above.
            </p>
            <p className="text-white/70 leading-relaxed">
              You may not copy, modify, distribute, sell, or lease any part of the Services unless expressly permitted.
            </p>
          </section>

          {/* Section 10 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 text-sm font-bold">10</span>
              Third-party services and integrations
            </h2>
            <p className="text-white/70 leading-relaxed">
              The Services may integrate with third-party services (for example, analytics, storage, social platforms, ad platforms). Your use of third-party services is governed by their terms and policies. We are not responsible for third-party services.
            </p>
          </section>

          {/* Section 11 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 text-sm font-bold">11</span>
              Confidentiality (for business users)
            </h2>
            <p className="text-white/70 leading-relaxed">
              If you access non-public features, betas, or confidential materials, you agree not to disclose them without our permission. Additional confidentiality terms may apply in an order form or NDA.
            </p>
          </section>

          {/* Section 12 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 text-sm font-bold">12</span>
              Suspension and termination
            </h2>
            <ul className="space-y-2">
              {[
                'You may stop using the Services at any time.',
                'We may suspend or terminate access if you violate these Terms, if your use risks harm to others, or if required by law.',
                'Upon termination, your right to use the Services ends. Certain sections survive termination (including IP, disclaimers, limitation of liability, and dispute terms).',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Section 13 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 text-sm font-bold">13</span>
              Disclaimers
            </h2>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
              <p className="text-white/70 leading-relaxed mb-4 uppercase text-sm tracking-wide">
                The Services are provided "as is" and "as available." To the maximum extent permitted by law:
              </p>
              <ul className="space-y-2">
                {[
                  'We disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.',
                  'We do not warrant that the Services will be uninterrupted, error-free, or that Outputs will be accurate or suitable.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/60 text-sm">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 14 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 text-sm font-bold">14</span>
              Limitation of liability
            </h2>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
              <p className="text-white/70 leading-relaxed mb-4 uppercase text-sm tracking-wide">
                To the maximum extent permitted by law:
              </p>
              <ul className="space-y-3">
                {[
                  'ElarisLabs will not be liable for indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or goodwill.',
                  'ElarisLabs\' total liability for any claim relating to the Services will not exceed the amount paid by you to ElarisLabs for the Services in the 12 months before the event giving rise to the claim, or USD 100 if you have not paid any amounts.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/60 text-sm">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-white/60 text-sm mt-4 italic">
              Some jurisdictions do not allow certain limitations, so these limits may not apply to you in full.
            </p>
          </section>

          {/* Section 15 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 text-sm font-bold">15</span>
              Indemnification
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              If you are using the Services for business, you agree to indemnify and hold harmless ElarisLabs from claims arising out of:
            </p>
            <ul className="space-y-2">
              {[
                'Your Customer Content',
                'Your use of Outputs',
                'Your violation of these Terms or applicable law',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Section 16 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 text-sm font-bold">16</span>
              Governing law and dispute resolution
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              These Terms are governed by the laws of [Jurisdiction], excluding conflict of laws rules.
            </p>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
              <p className="text-white font-medium mb-2">Dispute resolution:</p>
              <ul className="space-y-1.5">
                {[
                  'Courts located in [Venue] will have jurisdiction, unless your order form specifies otherwise.',
                  'Alternatively, if you prefer arbitration, insert your arbitration clause here (many SaaS companies do).',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-white/40 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 17 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 text-sm font-bold">17</span>
              Changes to these Terms
            </h2>
            <p className="text-white/70 leading-relaxed">
              We may update these Terms from time to time. We will post the updated Terms and update the "Last updated" date. If changes are material, we may provide additional notice.
            </p>
          </section>

          {/* Section 18 */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 text-sm font-bold">18</span>
              Contact
            </h2>
            <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
              <p className="text-white/80 text-sm">
                Questions about these Terms:{' '}
                <a href="mailto:legal@elarislabs.ai" className="text-purple-400 hover:text-purple-300 transition-colors">
                  legal@elarislabs.ai
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
