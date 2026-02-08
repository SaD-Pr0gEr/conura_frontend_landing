'use client'


import {IconProps} from "@/components/icons/base";

export function Cursor({focused}: IconProps) {
    const fgColor = !focused ? '#787878' : 'white'
    const bgColor = !focused ? '#EEF0F2' : 'black'
    return (
        <>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <rect width="40" height="40" rx="10" fill={bgColor}/>
                <path
                    d="M15.921 10.2999C14.936 9.53195 13.5 10.2339 13.5 11.4819V28.4909C13.5 29.9129 15.295 30.5369 16.177 29.4209L20.367 24.1209C20.5216 23.9256 20.7184 23.7678 20.9427 23.6594C21.167 23.551 21.4129 23.4948 21.662 23.4949H28.514C29.942 23.4949 30.563 21.6869 29.435 20.8109L15.921 10.2999Z"
                    fill={fgColor}/>
            </svg>
        </>
    )
}
