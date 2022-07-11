export default function Field({ type, label, name }) {
  const formControlClassName =
    'bg-transparent border border-primary-gray-300 py-3 px-6 w-full'

  return (
    <div className="mb-6">
      <label htmlFor={label} className="block mb-1 text-lg font-semibold">
        {label}
      </label>
      {type !== 'textarea' && (
        <input
          type={type}
          name={name}
          id={name}
          className={formControlClassName}
        />
      )}
      {type === 'textarea' && (
        <textarea
          name={name}
          id={name}
          cols="30"
          rows="10"
          className={`${formControlClassName} resize-none`}
        ></textarea>
      )}
    </div>
  )
}
