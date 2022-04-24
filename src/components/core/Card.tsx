import React, { ReactNode } from "react"

interface CardProps {

    children: ReactNode,
    className?: string
}

export default function Card(props: CardProps) {

    return <div className={`${props.className}  p-4 rounded shadow bg-slate-50 dark:bg-primary-900/50 `}>
        {props.children}
    </div>

}