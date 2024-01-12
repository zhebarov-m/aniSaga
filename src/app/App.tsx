import React, { Suspense, useState } from 'react';
import { customClasses } from 'shared/lib/classNames/customClasses';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Button } from 'shared/ui/Button/Button';

function App() {
    const { theme } = useTheme();
    const [isOpen, setOpen] = useState(false);

    return (
        <div className={customClasses('app', {}, [theme!])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
