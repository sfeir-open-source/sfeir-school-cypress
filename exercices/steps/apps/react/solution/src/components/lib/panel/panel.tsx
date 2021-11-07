import { PropsWithChildren } from 'react'
import './panel.module.scss'

/* eslint-disable-next-line */
export interface PanelProps {
  label: string,
  className?:string
}

export function Panel ({ label, className = '', children }: PropsWithChildren<PanelProps>) {
  return (
    <div className={`w-full md:w-6/12 border border-gray-300 shadow rounded-md ${className}`}>
      <div className="px-4 py-2 border-b border-gray-300">{label}</div>
      <div className="px-4 py-2">
        {children}
      </div>
    </div>
  )
}

export default Panel
