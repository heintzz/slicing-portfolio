export default function ContactItem({ label, value, icon, className }) {
  const addClassName = className ? `${className}` : ''
  return (
    <div className={`flex items-start ${addClassName}`}>
      <img src={icon} className="w-8" />
      <div className="ml-4">
        <div className="text-sm font-semibold ">{label}</div>
        <div className="text-sm font-semibold">{value}</div>
      </div>
    </div>
  )
}
