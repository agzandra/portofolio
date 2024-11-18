import  { useState, useEffect } from 'react';
export default function CLayouting(breakpoints: { xs?: any, sm?: any, md?: any, lg?: any, xl?: any, xxl?: any }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const { xs, sm, md, lg, xl, xxl } = breakpoints;
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    var size_xs = 10, size_sm = 640, size_md = 768, size_lg = 1024, size_xl = 1280, size_xxl = 1536;

    if (windowWidth > size_xxl){
        return xxl??xl??lg??md??sm??xs;
    } else if (windowWidth > size_xl){
        return xl??lg??md??sm??xs??xxl;
    } else if (windowWidth > size_lg){
        return lg??md??sm??xs??xl??xxl;
    } else if (windowWidth > size_md){
        return md??sm??xs??lg??xl??xxl;
    } else if (windowWidth > size_sm){
        return sm??xs??md??lg??xl??xxl;
    } else if (windowWidth > size_xs){
        return xs??sm??md??lg??xl??xxl;
    }

    
}