import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms and Conditions | Brian Coombs",
  description:
    "Terms and conditions for SMS communications and use of bcoombs.com.",
  robots: { index: true, follow: true },
}

export default function TermsAndConditionsPage() {
  return (
    <article className="container py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            Terms and Conditions
          </h1>
          <p className="text-sm text-muted-foreground">
            Last updated: June 13, 2026
          </p>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-foreground prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-muted-foreground prose-ul:list-disc prose-ul:pl-6 prose-li:my-1 prose-li:text-muted-foreground prose-p:my-4 prose-a:text-primary prose-a:underline prose-strong:font-semibold prose-strong:text-foreground">
          <p>
            These Terms and Conditions (&quot;Terms&quot;) govern your use of
            bcoombs.com and any SMS/text messaging communications with Brian
            Coombs (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By
            using the site or opting in to receive text messages, you agree
            to these Terms.
          </p>

          <h2>SMS Program Description</h2>
          <p>
            <strong>Gym Buddy</strong> is a recurring automated SMS program
            that matches members of participating gyms with compatible
            workout partners. By providing your mobile phone number and
            opting in, you consent to receive automated text messages from
            Brian Coombs at the number provided, including: a welcome and
            consent confirmation, a short onboarding questionnaire (gender,
            age, experience level, training style, preferred time of day,
            partner preferences), match proposals when a compatible partner
            is found at your gym, meetup confirmations and reminders,
            post-session feedback prompts, and automated replies to command
            keywords such as MATCH, PAUSE, REPORT, BLOCK, HELP, and STOP.
          </p>

          <h2>Opt-In</h2>
          <p>
            You may opt in by scanning a QR code physically posted at a
            participating gym, which composes a message with the keyword{" "}
            <strong>JOIN</strong> to our program phone number. You may also
            text <strong>JOIN</strong>, <strong>START</strong>,{" "}
            <strong>YES</strong>, or <strong>AGREE</strong> directly to our
            program phone number. After your first inbound message we send a
            welcome that identifies the brand and gym, links these Terms and
            the Privacy Policy, and asks you to reply <strong>YES</strong>{" "}
            to confirm consent before any further automated messages are
            sent. You confirm that the mobile number you provide is your own
            or that you are authorized to consent on behalf of the account
            holder.
          </p>

          <h2>Message Frequency</h2>
          <p>
            <strong>
              This is a recurring automated messaging program.
            </strong>{" "}
            Message frequency is variable and driven by match availability
            and your scheduled meetups. Most subscribers receive a few
            messages per week &mdash; a match proposal when a compatible
            partner is found, meetup reminders the day before a scheduled
            session, a post-session feedback prompt, and replies to
            commands you send. There is no fixed daily cadence.
          </p>

          <h2>Message and Data Rates</h2>
          <p>
            <strong>Message and data rates may apply.</strong> Your wireless
            carrier&apos;s standard messaging, data, and other rates and fees
            will apply to any messages sent to or received from us. Please
            check your mobile plan and contact your wireless provider for
            details.
          </p>

          <h2>Opt-Out</h2>
          <p>
            You may opt out of receiving SMS messages at any time by replying{" "}
            <strong>STOP</strong> to any message you receive from us. After
            you send STOP, we will send you a one-time confirmation message
            and will not send additional messages unless you opt in again.
          </p>

          <h2>Help</h2>
          <p>
            For help, reply <strong>HELP</strong> to any message, or contact
            us at{" "}
            <a href="mailto:brian@malleable.ai">brian@malleable.ai</a>.
          </p>

          <h2>Supported Carriers</h2>
          <p>
            Our SMS service is available on major U.S. carriers, including
            AT&amp;T, T-Mobile, Verizon, Sprint, U.S. Cellular, Boost,
            Cricket, MetroPCS, and others. Carriers are not liable for
            delayed or undelivered messages.
          </p>

          <h2>Privacy</h2>
          <p>
            Your privacy is important to us. Please review our{" "}
            <a href="/privacy">Privacy Policy</a> to understand how we
            collect, use, and protect your information. We do not share
            mobile information with third parties or affiliates for marketing
            or promotional purposes.
          </p>

          <h2>Disclaimer</h2>
          <p>
            The website and SMS services are provided on an
            &quot;as-is&quot; and &quot;as-available&quot; basis without
            warranties of any kind, whether express or implied. We do not
            guarantee uninterrupted or error-free message delivery.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. Continued use of the
            site or SMS service after changes are posted constitutes
            acceptance of the updated Terms.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these Terms can be directed to{" "}
            <a href="mailto:brian@malleable.ai">brian@malleable.ai</a>.
          </p>
        </div>
      </div>
    </article>
  )
}
