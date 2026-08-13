import Image from 'next/image'

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3.75 6.75h16.5v10.5H3.75z" />
      <path d="m4.5 7.5 7.5 6 7.5-6" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.1 20.45H3.54V9H7.1v11.45Z" />
    </svg>
  )
}

export function PersonContactLinks({ person }) {
  const linkedInUrl =
    person.linkedin ||
    "https://www.linkedin.com/search/results/people/?keywords=" + encodeURIComponent(person.name)

  return (
    <span className="person__contacts">
      <a
        className="person__contact person__contact--email"
        href={"mailto:" + person.email}
        aria-label={"Email " + person.name}
        title={"Email " + person.name}
      >
        <EmailIcon />
      </a>
      <a
        className="person__contact"
        href={linkedInUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={"Find " + person.name + " on LinkedIn"}
        title={"Find " + person.name + " on LinkedIn"}
      >
        <LinkedInIcon />
      </a>
    </span>
  )
}

export function PersonCard({ person }) {
  return (
    <article className="person">
      <div className="person__media">
        <Image
          src={person.photo}
          alt={person.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 25vw"
        />
        <PersonContactLinks person={person} />
      </div>
      <div>
        <span className="person__name">{person.name}</span>
        <span className="person__role">{person.role}</span>
        <span className="person__focus">{person.focus}</span>
      </div>
    </article>
  )
}
