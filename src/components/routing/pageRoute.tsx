import { useState, useEffect } from 'react';

function PageRoute({ children, path }: { children: JSX.Element; path: string }) {
    const [currentPath, setCurrentPath] = useState(window.location.hash);

    if (currentPath === '') {
        setCurrentPath('#garage');
    }

    useEffect(() => {
        const changeLocation = () => {
            setCurrentPath(window.location.hash);
        };

        window.addEventListener('popstate', changeLocation);
        return () => {
            window.removeEventListener('popstate', changeLocation);
        };
    }, []);

    return currentPath === path ? children : null;
}

export default PageRoute;
