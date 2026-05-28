import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Brian Coombs",
  description:
    "Privacy policy for SMS communications and personal data handling at bcoombs.com.",
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <article className="container py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground">
            Last updated: May 28, 2026
          </p>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-foreground prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-muted-foreground prose-ul:list-disc prose-ul:pl-6 prose-li:my-1 prose-li:text-muted-foreground prose-p:my-4 prose-a:text-primary prose-a:underline prose-strong:font-semibold prose-strong:text-foreground">
          <p>
            This Privacy Policy describes how Brian Coombs (&quot;we&quot;,
            &quot;us&quot;, or &quot;our&quot;) collects, uses, and protects
            information in connection with the bcoombs.com website and any
            related SMS/text messaging services.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We may collect the following information when you interact with
            our website or opt in to receive text messages:
          </p>
          <ul>
            <li>Name</li>
            <li>Mobile phone number</li>
            <li>Email address (if voluntarily provided)</li>
            <li>
              Message content you send to us and our replies to you
            </li>
            <li>
              Basic technical information such as the date and time of
              communications
            </li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>
              Send you text messages you have explicitly consented to receive
            </li>
            <li>Respond to your questions and requests</li>
            <li>
              Maintain records of consent and communications as required by
              law
            </li>
            <li>Improve and operate our services</li>
          </ul>

          <h2>SMS / Text Messaging</h2>
          <p>
            <strong>
              No mobile information will be shared with third parties or
              affiliates for marketing or promotional purposes.
            </strong>{" "}
            Information sharing with subcontractors that support our services
            (such as Twilio, our messaging provider) is limited strictly to
            what is necessary to deliver the messages you have requested.
            Mobile opt-in data and consent are not shared with any third party
            for any other purpose.
          </p>
          <p>
            <strong>Message frequency varies</strong> based on your
            interaction with us. You can expect to receive messages only in
            response to your requests or as part of conversations you have
            initiated.
          </p>
          <p>
            <strong>Message and data rates may apply.</strong> Standard
            messaging rates from your wireless carrier may apply to any
            messages sent to or received from us.
          </p>
          <p>
            You may opt out of receiving SMS messages at any time by replying{" "}
            <strong>STOP</strong> to any message. For help, reply{" "}
            <strong>HELP</strong> or contact us using the information below.
          </p>

          <h2>How We Protect Your Information</h2>
          <p>
            We take reasonable administrative, technical, and physical
            safeguards to protect your information against unauthorized
            access, disclosure, alteration, or destruction.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            We use Twilio to deliver SMS messages. Twilio processes phone
            numbers and message content solely on our behalf for the purpose
            of delivering messages. Twilio&apos;s privacy practices are
            governed by its own privacy policy.
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p>
            Our services are not directed to children under 13, and we do not
            knowingly collect personal information from children under 13.
          </p>

          <h2>Your Choices</h2>
          <p>
            You may request access to, correction of, or deletion of personal
            information we hold about you by contacting us at the address
            below. You may also opt out of SMS communications at any time as
            described above.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be reflected by an updated &quot;Last updated&quot; date
            above.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this Privacy Policy can be directed to{" "}
            <a href="mailto:brian@malleable.ai">brian@malleable.ai</a>.
          </p>
        </div>
      </div>
    </article>
  )
}
