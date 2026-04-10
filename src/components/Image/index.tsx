import { Box, SxProps } from "@mui/material";
import React, { ImgHTMLAttributes, useState } from "react";
import { useNavigate } from "react-router-dom";


interface CommonImageProps extends ImgHTMLAttributes<HTMLImageElement>{
    fallbackSrc?: string;
    sx?: SxProps;
    borderRadius?: string | number;
    route?: string,
    openInNewTab?: boolean; // optional: cho phép control
}

const CommonImage: React.FC<CommonImageProps> = ({
    src,
    alt = 'image',
    fallbackSrc,
    sx= {},
    onError,
    borderRadius,
    route,
    openInNewTab = true,
    ...rest
}) => {
    const navigate = useNavigate()
    const [imgSrc, setImgSrc] = useState(src);

    const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        setImgSrc(fallbackSrc);
        if(onError) onError(e)
    }

    const handleClick = () => {
        if(!route) return;
        const isExternal = /^https?:\/\//.test(route);
        if(isExternal){
            if(openInNewTab){
                window.open(route, "_blank", "noopener,noreferrer")
            } else {
                window.location.href = route;
            }
        } else {
            navigate(route)
        }
    }

    return(
        <Box
            component='img'
            src={imgSrc}
            alt={alt}
            loading="lazy"
            onError={handleError}
            onClick={handleClick}
            sx={{
                maxWidth: '100%',
                height:'auto',
                borderRadius: borderRadius,
                objectFit: 'fill',
                transition: "0.3s",
                "&:hover": {
                    transform: route ? "scale(1.05)" : "none",
                    opacity: route ? 0.9 : 1,
                },
                cursor: route ? "pointer" : "default",
                ...sx,
            }}
            {...rest}
        />
    )
}

export default CommonImage;