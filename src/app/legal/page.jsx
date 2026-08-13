import PageHead from '@/components/PageHead'
import Reveal from '@/components/Reveal'
import { Caption } from '@/components/Layout'
import { firm } from '@/content'

export default function Legal() {
  return (
    <>
      <PageHead
        crumb="Legal notice"
       
        eyebrow="Terms, privacy and disclaimer"
        title={
          <>
            The small print, <em className="gold">in plain words.</em>
          </>
        }
        lede="What this site is, what it is not, and what happens to anything you send us through it."
        image="/img/books.jpg"
      />

      <section className="section">
        <div className="shell split">
          <Reveal>
            <Caption>Notice</Caption>
          </Reveal>
          <Reveal className="prose">
            <h3 style={{ marginTop: 0 }}>This site is not legal advice</h3>
            <p>
              Everything published here is general information about Ethiopian law as we
              understood it on the date of publication. Proclamations are amended and
              directives are reissued, sometimes without notice. Do not act on anything on
              this site without asking us, or another advocate, about your own facts.
            </p>

            <h3>Contacting us does not make you a client</h3>
            <p>
              An advocate–client relationship begins when we have cleared conflicts and
              both signed an engagement letter, not when you send a form, an email, or a
              message through this site. Until then, what you send us is not privileged.
              Please do not send confidential documents until we have confirmed there is no
              conflict.
            </p>

            <h3>Past results</h3>
            <p>
              The matters described on this site were real, and the outcomes stated are
              accurate. They do not predict what will happen in your matter. Every case
              turns on its own facts, its own file, and the tribunal in front of you.
            </p>

            <h3>What we do with what you send</h3>
            <p>
              The enquiry form collects your name, contact details, and what you tell us
              about the matter. We use it to run a conflict check and to reply. We do not
              sell it, share it with anyone outside the firm, or add you to a mailing list.
              If we do not take the matter on, we keep only what we need for the conflicts
              register and delete the rest.
            </p>

            <h3>Cookies</h3>
            <p>
              This site sets no tracking cookies and runs no third-party analytics. Nothing
              you do here is followed anywhere else.
            </p>

            <h3>Regulation</h3>
            <p>
              Kebede Advocates is a partnership of advocates licensed to
              practise in Ethiopia. All members of the firm are admitted before the federal
              courts and are subject to the professional conduct rules that govern
              advocates in Ethiopia. Complaints may be addressed to the managing partner at{' '}
              <a href={`mailto:${firm.email}`} style={{ color: 'var(--brick)' }}>
                {firm.email}
              </a>
              , and are answered in writing within ten working days.
            </p>

            <h3>Photography</h3>
            <p>
              Photographs on this site are licensed stock imagery and do not depict the
              firm’s own premises, staff, or clients. Attribution is recorded in the site
              source.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
