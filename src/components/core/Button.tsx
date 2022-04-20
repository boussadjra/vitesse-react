import React, { ReactNode } from "react"

interface ButtonProps {

    children: ReactNode
}

export default function Button(props: ButtonProps) {

    return <button className="px-4 py-2 text-white border-0 rounded bg-primary-400 ">
        {props.children}
    </button>

}