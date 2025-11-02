import type { LabelHTMLAttributes, ReactNode } from "react"
import styles from './Label.module.css'

type Props = {
  children?: ReactNode
} & LabelHTMLAttributes<HTMLLabelElement>

export default function Label({children, ...rest}: Props) {
  return (
    <div className={styles.container}>
      <label {...rest}>
        {children}
      </label>
    </div>
  )
}
