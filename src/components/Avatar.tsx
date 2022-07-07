import { ImgHTMLAttributes } from 'react'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

export function Avatar({ hasBorder =true, ...props}: AvatarProps) {
    return (
        <img
            className={hasBorder ? "w-full h-full rounded-lg border-4 border-gray-800 outline outline-2 outline-green-500" : "w-full h-full rounded-lg" }
            {...props}
        />
    )
}