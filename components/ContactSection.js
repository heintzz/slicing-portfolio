import SectionParagraph from './SectionParagraph'
import SectionTitle from './SectionTitle'
import ContactItem from './ContactItem'

export default function ContactSection() {
  return (
    <section className="bg-gray-skill  p-14">
      <div className="container mx-auto flex rounded-lg">
        <div className="w-6/12">
          <SectionTitle left>Contact</SectionTitle>
          <SectionParagraph left>
            Beberapa cara menghubungi saya.
          </SectionParagraph>
          <ContactItem
            label="email"
            icon="./mail.svg"
            value="hi@hasnan"
            className="my-10"
          />
          <ContactItem
            label="phone"
            icon="./phone.svg"
            value="081234567890"
            className="mb-10"
          />
          <ContactItem label="twitter" icon="./twitter.svg" value="@izbreezy" />
        </div>
      </div>
    </section>
  )
}
