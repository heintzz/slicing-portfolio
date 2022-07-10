import NavBar from './NavBar'
import Button from './Button'

export default function Hero() {
  return (
    <div className="bg-hero h-[712px]">
      <div className="container mx-auto">
        <NavBar />
        <div className="text-center mt-10">
          <h1 className="text-white text-3xl font-semibold font-mono w-8/12 mx-auto leading-relaxed">
            Saya seorang front-end engineer, back-end engineer, dan juga UI
            designer
          </h1>
          <p className="text-white/60 text-lg w-4/12 mx-auto leading-relaxed">
            Sejak 13 tahun saya memulai programming. Sejak 3 tahun memulai UI
            design.
          </p>
          <Button className="mt-14" variant="yellow">
            Pelajari
          </Button>
        </div>
      </div>
    </div>
  )
}


