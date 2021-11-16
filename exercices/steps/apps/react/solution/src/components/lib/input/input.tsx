import './input.module.scss'

/* eslint-disable-next-line */
export interface InputProps {
  label: string
  name: string
  value: string
  onChange: (value: string, name: string) => void
  placeholder?: string
  'data-cy'?: string,
  className?: string
}

export function Input ({ 'data-cy': dataCy, label, name, value, onChange, placeholder, className = '' }: InputProps) {
  return (
    <div className="flex flex-col w-full my-2">
      <label htmlFor={name}>{label}:</label>
      <input
        data-cy={dataCy}
        type="text"
        name={name}
        className={`w-full px-4 py-1 border border-gray-700 rounded hover:border-primary-500 ${className}`}
        placeholder={placeholder || label}
        value={value}
        onChange={(e) => onChange(e.currentTarget.value, name)}/>
    </div>
  )
}

export default Input
