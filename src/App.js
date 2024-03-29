import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { Navbar, Footer, Sidebar, ThemeSettings } from './components'
<<<<<<< HEAD
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages'
=======
import { Ecommerce, Orders, Calendar, Employees,  Customers, Kanban, Line, Area, Stacked, ColorPicker, Editor } from './pages'

import { useStateContext } from './contexts/ContextProvider'
>>>>>>> d767f27fa0692b48942711f2b8fc259f877d5c4a

import './App.css'

const App = () => {
<<<<<<< HEAD
    const activeMenu = true

    return (
        <div>
=======
    const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode, setCurrentColor, setCurrentMode } = useStateContext()

    useEffect(() => {
        const currentThemeColor = localStorage.getItem('colorMode');
        const currentThemeMode = localStorage.getItem('themeMode');
        if (currentThemeColor && currentThemeMode) {
          setCurrentColor(currentThemeColor);
          setCurrentMode(currentThemeMode);
        }
      }, []);

    return (
        <div className={currentMode === 'Dark' ? 'dark' : ''}>
>>>>>>> d767f27fa0692b48942711f2b8fc259f877d5c4a
            <BrowserRouter>
                <div className="flex realtive dark:bg-main-dark-bg">
                    <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                        <TooltipComponent content="Settings" position="Top">
                            <button type="button"
                                className="text-3xl p-3 
                            hover:drop-shadow-xl 
                            hover:bg-light-gray text-white"
<<<<<<< HEAD
                                style={{
                                    background: 'blue',
=======
                            onClick={() => setThemeSettings(true)}
                                style={{
                                    background: currentColor,
>>>>>>> d767f27fa0692b48942711f2b8fc259f877d5c4a
                                    borderRadius: '50%'
                                }}>
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>
                    {activeMenu ? (
<<<<<<< HEAD
                        <div className="w-72 fixed sidebar
    dark:bg-secondary-dark-bg
    bg-white">
                            Sidebar
                        </div>
                    ) : (
                            <div className="w-0 dark:bg-secondary-dark-bg">
                                Sidebar w-0
                            </div>
                        )}
                    <div className={
                        `dark:bg-main-bg
=======
                        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                            <Sidebar />
                        </div>
                    ) : (
                            <div className="w-0 dark:bg-secondary-dark-bg">
                                <Sidebar />
                            </div>
                        )}
                    <div className={
                        `dark:bg-main-dark-bg
>>>>>>> d767f27fa0692b48942711f2b8fc259f877d5c4a
    bg-main-bg min-h-screen w-full ${activeMenu ?
                            'md:ml-72' : 'flex-2'}`
                    }>
                        <div className="fixed md:static
                        bg-main-bg dark:bg-main-dark-bg
                        navbar w-full">
<<<<<<< HEAD
                            Navbar
                        </div>
                    </div>
                    <div>
                        <Routes>
                            {/* Dashboard */}
                            <Route path="/" element="ECommerce" />
                            <Route path="/ecommerce" element="ECommerce" />

                            {/* Pages */}
                            <Route path="/orders" element="Orders" />
                            <Route path="/employees" element="Employees" />
                            <Route path="/customers" element="Customers" />

                            {/* Apps */}
                            <Route path="/kanban" element="Kanban" />
                            <Route path="/editor" element="Editor" />
                            <Route path="/calendar" element="Calendar" />
                            <Route path="/color-picker" element="ColorPicker" />

                            {/* Charts */}
                            <Route path="/line" element="Line" />
                            <Route path="/area" element="Area" />
                            <Route path="/bar" element="Bar" />
                            <Route path="/pie" element="Pie" />
                            <Route path="/financial" element="Financial" />
                            <Route path="/color-mapping" element="ColorMapping" />
                            <Route path="/pyramid" element="Pyramid" />
                            <Route path="/stacked" element="Stacked" />
                        </Routes>
                    </div>

=======
                            <Navbar />
                        </div>
                    <div>
                    {themeSettings && (<ThemeSettings />)}
                        <Routes>
                            {/* Dashboard */}
                            <Route path="/" element={<Ecommerce />} />
                            <Route path="/ecommerce" element={<Ecommerce />} />

                            {/* Pages */}
                            <Route path="/orders" element={<Orders />} />
                            <Route path="/employees" element={<Employees />} />
                            <Route path="/customers" element={<Customers />} />

                            {/* Apps */}
                            <Route path="/kanban" element={<Kanban />} />
                            <Route path="/editor" element={<Editor />} />
                            <Route path="/calendar" element={<Calendar />} />
                            <Route path="/color-picker" element={<ColorPicker />} />

                            {/* Charts */}
                            <Route path="/line" element={<Line />} />
                            <Route path="/area" element={<Area />} />
                            <Route path="/stacked" element={<Stacked />} />
                        </Routes>
                    </div>
                    </div>
>>>>>>> d767f27fa0692b48942711f2b8fc259f877d5c4a
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App