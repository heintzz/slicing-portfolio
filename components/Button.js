export default function Button({ className, variant, children, pill }) {
  const addClassName = className ? `${className}` : ''

  const variants = {
    'outline-yellow': `border border-yellow-500 text-yellow-500`,
    yellow: `bg-yellow-500 text-black`,
    black: `bg-black text-white`,
  }

  const pickedVariant = variants[variant]

  return (
    <a className={`py-2 px-6 ${pill ? 'rounded-full': ''} font-semibold text-lg inline-block ${pickedVariant} ${addClassName}`}>
      {children}
    </a>
  )
}
