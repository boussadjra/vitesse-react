import React, { ReactNode } from "react"

interface CardProps {

    children: ReactNode
}

export default function Card(props: CardProps) {

    return <div className="max-w-xs p-4 rounded shadow bg-slate-50 dark:bg-primary-800 ">
        {props.children}
    </div>

}