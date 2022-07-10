import ProjectItems from './ProjectItems'
import SectionParagraph from './SectionParagraph'
import SectionTitle from './SectionTitle'

export default function SectionProjects() {
  return (
    <section>
      <div className="container mx-auto py-20">
        <SectionTitle>Projects</SectionTitle>
        <SectionParagraph>Beberapa proyek bikinan saya.</SectionParagraph>
        <div className="flex flex-wrap -mx-4 mt-20 gap-y-8">
          <div className="w-6/12 px-4">
            <ProjectItems
              image="./pemandangan.jpg"
              name="Hasten"
              description="Eksplorasi landing page"
            />
          </div>
          <div className="w-6/12 px-4">
            <ProjectItems
              image="./pemandangan.jpg"
              name="Resources"
              description="Eksplorasi resources page"
            />
          </div>
          <div className="w-6/12 px-4">
            <ProjectItems
              image="./pemandangan.jpg"
              name="Resources"
              description="Eksplorasi resources page"
            />
          </div>
          <div className="w-6/12 px-4">
            <ProjectItems
              image="./pemandangan.jpg"
              name="Hasten"
              description="Eksplorasi landing page"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
