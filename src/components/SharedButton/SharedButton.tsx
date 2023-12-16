import React from 'react'
import classNames from 'classnames'

interface SharedButtonProps {
  children: React.ReactNode
  className?: string
  icon?: boolean
  onClick?: () => void
}

export default function SharedButton(props: SharedButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className={classNames(
        `${
          props.className
            ? `${props.className} rounded-full p-1 text-lg font-bold text-blue-400`
            : 'h-[30px] min-w-[250px] rounded-full bg-white-900 p-1 text-lg font-bold text-blue-400'
        }`
      )}
    >
      {props.children} {props.icon && <span>→</span>}
    </button>
  )
}
