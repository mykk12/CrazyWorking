import { Shield, FileText } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

interface LegalPageProps {
  type: 'privacy' | 'terms';
}

export default function LegalPage({ type }: LegalPageProps) {
  const isPrivacy = type === 'privacy';

  return (
    <>
      <PageHeader
        badge={isPrivacy ? 'Legal' : 'Legal'}
        title={isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
        subtitle={
          isPrivacy
            ? 'How Study Space collects, uses, and protects your information.'
            : 'The terms and conditions for using Study Space.'
        }
      />

      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              {isPrivacy ? (
                <Shield className="h-8 w-8 text-navy-600" />
              ) : (
                <FileText className="h-8 w-8 text-navy-600" />
              )}
              <p className="text-sm text-navy-400">Last updated: October 14, 2026</p>
            </div>

            <div className="prose prose-navy max-w-none space-y-6">
              {isPrivacy ? (
                <>
                  <div>
                    <h2 className="font-display text-xl font-semibold text-navy-900 mb-3">
                      1. Information We Collect
                    </h2>
                    <p className="text-sm text-navy-500 leading-relaxed">
                      Study Space collects information you provide directly to us,
                      such as your name, email address, and study preferences when
                      you create an account. We also collect usage data including
                      study session duration, notes created, and progress metrics
                      to improve your learning experience.
                    </p>
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-semibold text-navy-900 mb-3">
                      2. How We Use Your Information
                    </h2>
                    <p className="text-sm text-navy-500 leading-relaxed">
                      We use your information to provide and improve our services,
                      personalize your learning experience, send important account
                      notifications, and analyze platform usage to enhance our
                      features. We never sell your personal data to third parties.
                    </p>
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-semibold text-navy-900 mb-3">
                      3. Data Security
                    </h2>
                    <p className="text-sm text-navy-500 leading-relaxed">
                      We implement industry-standard encryption and security
                      measures to protect your data. Access to personal
                      information is restricted to authorized personnel only.
                      However, no method of transmission over the internet is
                      100% secure.
                    </p>
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-semibold text-navy-900 mb-3">
                      4. Your Rights
                    </h2>
                    <p className="text-sm text-navy-500 leading-relaxed">
                      You have the right to access, update, or delete your
                      personal information at any time. You can also opt out of
                      promotional communications. To exercise these rights,
                      contact us at hello@studyspace.edu.
                    </p>
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-semibold text-navy-900 mb-3">
                      5. Contact Us
                    </h2>
                    <p className="text-sm text-navy-500 leading-relaxed">
                      If you have questions about this Privacy Policy, please
                      reach out to us at hello@studyspace.edu or through our
                      Contact page.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h2 className="font-display text-xl font-semibold text-navy-900 mb-3">
                      1. Acceptance of Terms
                    </h2>
                    <p className="text-sm text-navy-500 leading-relaxed">
                      By accessing and using Study Space, you accept and agree to
                      be bound by these Terms of Service. If you do not agree to
                      these terms, please do not use our platform.
                    </p>
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-semibold text-navy-900 mb-3">
                      2. Use of the Platform
                    </h2>
                    <p className="text-sm text-navy-500 leading-relaxed">
                      Study Space is provided for educational purposes. You agree
                      to use the platform responsibly and not to misuse, disrupt,
                      or attempt to gain unauthorized access to any part of the
                      service. You are responsible for maintaining the
                      confidentiality of your account.
                    </p>
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-semibold text-navy-900 mb-3">
                      3. Intellectual Property
                    </h2>
                    <p className="text-sm text-navy-500 leading-relaxed">
                      All content provided by Study Space, including study
                      materials, tools, and platform design, is the property of
                      Study Space or its licensors. Content you create, such as
                      notes and study plans, remains your intellectual property.
                    </p>
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-semibold text-navy-900 mb-3">
                      4. Service Availability
                    </h2>
                    <p className="text-sm text-navy-500 leading-relaxed">
                      We strive to maintain high availability but do not guarantee
                      uninterrupted access. We may modify, suspend, or discontinue
                      any part of the platform at any time without prior notice.
                    </p>
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-semibold text-navy-900 mb-3">
                      5. Limitation of Liability
                    </h2>
                    <p className="text-sm text-navy-500 leading-relaxed">
                      Study Space is provided "as is" without warranties of any
                      kind. We are not liable for any indirect, incidental, or
                      consequential damages arising from your use of the platform.
                    </p>
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-semibold text-navy-900 mb-3">
                      6. Contact Us
                    </h2>
                    <p className="text-sm text-navy-500 leading-relaxed">
                      If you have questions about these Terms of Service, please
                      contact us at hello@studyspace.edu.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
