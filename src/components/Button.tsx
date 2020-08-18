import React, { FunctionComponent, CSSProperties } from "react"
import classnames from "classnames"

import { IconType } from "react-icons"

const Button: FunctionComponent<{
    className?: string
    icon?: IconType
    href?: string
    style?: CSSProperties
}> = ({ className, icon, children, ...props }) => {
    const Icon = icon
    return (
        <a className={classnames(
            "flex flex-row items-center justify-center",
            "bg-white",
            "rounded-full",
            "px-6 py-3",
            "text-lg font-bold",
            "text-white",
            "bg-blue-500",
            "hover:bg-blue-600",
            className
        )}
        target="_blank"
        {...props}>
            { Icon ? <Icon size="1.6rem" className="mr-2" /> : null }
            { children }
        </a>
    )
}

export default Button