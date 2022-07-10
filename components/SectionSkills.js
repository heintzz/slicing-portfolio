import SectionParagraph from './SectionParagraph'
import SectionTitle from './SectionTitle'
import SkillCard from './SkillCard'

export default function SectionSkills() {
  return (
    <section className="py-28 bg-gray-skill">
      <div className="container mx-auto">
        <SectionTitle>Skills</SectionTitle>
        <SectionParagraph>Beberapa kemampuan saya.</SectionParagraph>
        <div className="flex flex-wrap -mx-4 mt-20 gap-y-16">
          <div className="w-4/12 px-4">
            <SkillCard
              name="JavaScript"
              level="lanjutan"
              image="/javascript.svg"
              imageClassName="rounded-full h-16"
            >
              JavaScript
            </SkillCard>
          </div>
          <div className="w-4/12 px-4">
            <SkillCard
              name="React JS"
              level="menengah"
              image="/react.svg"
              imageClassName="h-16"
            >
              React JS
            </SkillCard>
          </div>
          <div className="w-4/12 px-4">
            <SkillCard
              name="Node JS"
              level="lanjutan"
              image="/nodejs.svg"
              imageClassName="h-16"
            >
              Node JS
            </SkillCard>
          </div>
          <div className="w-4/12 px-4">
            <SkillCard
              name="Node JS"
              level="menengah"
              image="/nodejs.svg"
              imageClassName="h-16"
            >
              Node JS
            </SkillCard>
          </div>
          <div className="w-4/12 px-4">
            <SkillCard
              name="JavaScript"
              level="lanjutan"
              image="/javascript.svg"
              imageClassName="rounded-full h-16"
            >
              JavaScript
            </SkillCard>
          </div>
          <div className="w-4/12 px-4">
            <SkillCard
              name="React JS"
              level="menengah"
              image="/react.svg"
              imageClassName="h-16"
            >
              React JS
            </SkillCard>
          </div>
          <div className="w-4/12 px-4">
            <SkillCard
              name="React JS"
              level="menengah"
              image="/react.svg"
              imageClassName="h-16"
            >
              React JS
            </SkillCard>
          </div>
          <div className="w-4/12 px-4">
            <SkillCard
              name="Node JS"
              level="lanjutan"
              image="/nodejs.svg"
              imageClassName="h-16"
            >
              Node JS
            </SkillCard>
          </div>
          <div className="w-4/12 px-4">
            <SkillCard
              name="JavaScript"
              level="lanjutan"
              image="/javascript.svg"
              imageClassName="rounded-full h-16"
            >
              JavaScript
            </SkillCard>
          </div>
        </div>
      </div>
    </section>
  )
}
