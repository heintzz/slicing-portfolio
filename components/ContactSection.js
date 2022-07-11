import SectionParagraph from './SectionParagraph'
import SectionTitle from './SectionTitle'
import ContactItem from './ContactItem'
import Field from './Field'
import Button from './Button'

export default function ContactSection() {
  return (
    <section className="container mx-auto">
      <div className="bg-primary-gray flex rounded-lg">
        <div className="w-6/12 border-r border-primary-gray-200">
          <div className="px-20 py-16">
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
            <ContactItem
              label="twitter"
              icon="./twitter.svg"
              value="@izbreezy"
              className="mb-20"
            />
          </div>
        </div>
        <div className="w-6/12">
          <form className="px-20 py-16">
            <div className="flex gap-x-10">
              <div className="w-6/12">
                <Field type="text" label="Name" name="Name" />
              </div>
              <div className="w-6/12">
                <Field type="email" label="Email" name="Email" />
              </div>
            </div>
            <Field type="text" label="Subject" name="Subject" />
            <Field type="textarea" label="Message" name="Message" />
            <div className="text-right">
              <Button variant="black">Send</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
