export default function SectionTitle(props) {
  return (
    <h2
      className={`text-2xl font-semibold font-mono ${
        props.left ? 'text-left' : 'text-center'
      }`}
    >
      {props.children}
    </h2>
  )
}
