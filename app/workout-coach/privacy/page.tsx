import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Workout Coach Privacy Policy | Brian Coombs",
  description:
    "How Workout Coach accesses, uses, stores and shares the Fitbit data it reads through the Google Health API.",
  robots: { index: true, follow: true },
}

export default function WorkoutCoachPrivacyPage() {
  return (
    <article className="container py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            Workout Coach Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground">
            Last updated: October 19, 2026
          </p>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-foreground prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-muted-foreground prose-ul:list-disc prose-ul:pl-6 prose-li:my-1 prose-li:text-muted-foreground prose-p:my-4 prose-a:text-primary prose-a:underline prose-strong:font-semibold prose-strong:text-foreground">
          <p>
            <Link href="/workout-coach">Workout Coach</Link> is a private
            coaching assistant run by Brian Coombs for two people, himself and
            Cassidy Coombs. This policy covers the health data it reads from
            their wearables, in particular the Fitbit data it reads through
            the Google Health API.
          </p>

          <h2>What it reads</h2>
          <p>
            Only after the account holder connects it, and only with read-only
            access:
          </p>
          <ul>
            <li>
              <strong>Sleep:</strong> sleep sessions, when they started and
              ended, and minutes asleep.
            </li>
            <li>
              <strong>Health metrics:</strong> daily resting heart rate and
              daily heart rate variability.
            </li>
            <li>
              <strong>Activity and fitness:</strong> exercise sessions: their
              type, start, duration, heart-rate zones and average heart rate.
            </li>
          </ul>
          <p>
            It also reads the account&apos;s Google Health user identity, to
            confirm the Fitbit account is linked. It never writes, changes or
            deletes anything in Fitbit or Google Health.
          </p>

          <h2>How it uses the data</h2>
          <p>Only to coach the person whose data it is:</p>
          <ul>
            <li>
              Counting workouts the wearable tracked, so they don&apos;t have
              to log them again.
            </li>
            <li>
              Comparing the last 7 days of heart rate variability and resting
              heart rate with their own 28 days before, and offering a lighter
              session when they have been well off for several days.
            </li>
            <li>
              Showing bedtimes against an 11 pm goal, suggesting tonight&apos;s
              lights-out, and comparing mornings after meditating with
              mornings after not.
            </li>
          </ul>
          <p>
            The data is never sold, never used for advertising, credit or
            lending decisions, and never used to train AI models.
          </p>

          <h2>Who else sees it</h2>
          <ul>
            <li>
              <strong>OpenAI:</strong> the coach&apos;s messages are written by
              an AI model from OpenAI. When it writes a check-in or answers a
              question, it receives the numbers that message needs, such as
              last night&apos;s sleep, today&apos;s resting heart rate and HRV,
              and 7-day averages.
            </li>
            <li>
              <strong>Slack:</strong> the messages are delivered in the
              person&apos;s private coaching channel in Brian&apos;s Slack
              workspace.
            </li>
          </ul>
          <p>
            No one else receives it, apart from what the law requires.
          </p>

          <h2>Where it is stored</h2>
          <p>
            On a private server at Brian&apos;s home. The access token Google
            issues is kept in a file only the server&apos;s administrator can
            read; it is never logged, shared or backed up. The coach keeps the
            workouts it counted, the summaries behind each check-in and its
            conversation history on that server. Each night those state files
            are backed up to a private GitHub repository that only Brian can
            access.
          </p>

          <h2>Keeping and deleting it</h2>
          <p>
            The data is kept while the account is connected. To disconnect,
            remove Workout Coach under{" "}
            <a href="https://myaccount.google.com/connections">
              Third-party apps &amp; services
            </a>{" "}
            in the Google Account, or ask Brian. On request, Brian deletes the
            stored data from the server and its backup.
          </p>

          <h2>Google API Services User Data Policy</h2>
          <p>
            Workout Coach&apos;s use and transfer of information received from
            Google APIs adheres to the{" "}
            <a href="https://developers.google.com/terms/api-services-user-data-policy">
              Google API Services User Data Policy
            </a>
            , including the Limited Use requirements, and to the{" "}
            <a href="https://developers.google.com/health/policies/health-api-developer-user-data-policy">
              Google Health API Developer and User Data Policy
            </a>
            .
          </p>

          <h2>Changes and contact</h2>
          <p>
            Changes to this policy update the date above. Questions go to{" "}
            <a href="mailto:brian@malleable.ai">brian@malleable.ai</a>.
          </p>
        </div>
      </div>
    </article>
  )
}
