import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Workout Coach | Brian Coombs",
  description:
    "Workout Coach: a private coaching assistant for Brian and Cassidy Coombs that plans workouts and reads their wearables.",
  robots: { index: true, follow: true },
}

export default function WorkoutCoachPage() {
  return (
    <article className="container py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            Workout Coach
          </h1>
          <p className="text-lg text-muted-foreground">
            A private coaching assistant Brian Coombs built for two people:
            himself and Cassidy Coombs.
          </p>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-foreground prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-muted-foreground prose-ul:list-disc prose-ul:pl-6 prose-li:my-1 prose-li:text-muted-foreground prose-p:my-4 prose-a:text-primary prose-a:underline prose-strong:font-semibold prose-strong:text-foreground">
          <p>
            Workout Coach isn&apos;t offered to anyone else, and there is no
            sign-up. It runs on a server Brian keeps at home and talks to
            each of them in their own private Slack channel.
          </p>

          <h2>What it does</h2>
          <ul>
            <li>
              Builds each day&apos;s workout in Hevy from their training
              program, and moves loads up as they progress.
            </li>
            <li>
              Checks in on Slack: the morning plan, a late-afternoon nudge on
              a planned gym day, an evening wind-down with a suggested
              bedtime, and Sunday reviews of the week.
            </li>
            <li>
              Tracks their goals, training load and habits: a daily
              meditation and being asleep before 11 pm.
            </li>
          </ul>

          <h2>Wearables</h2>
          <p>
            Brian&apos;s coach reads his WHOOP. Cassidy&apos;s coach reads her
            Fitbit through the Google Health API, read-only, after she
            connects it: sleep, resting heart rate, heart rate variability and
            exercise sessions. The coach uses them to count workouts she
            didn&apos;t log elsewhere, suggest a lighter session when her
            numbers have been well off her own baseline for several days, and
            show how her sleep and meditation are going. It never writes
            anything back to Fitbit or Google.
          </p>

          <h2>Privacy</h2>
          <p>
            How Workout Coach handles that data is in its{" "}
            <Link href="/workout-coach/privacy">privacy policy</Link>.
            Questions go to{" "}
            <a href="mailto:brian@malleable.ai">brian@malleable.ai</a>.
          </p>
        </div>
      </div>
    </article>
  )
}
