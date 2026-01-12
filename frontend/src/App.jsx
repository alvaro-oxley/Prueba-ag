import { useState, useEffect } from 'react'
import Detalles from './components/Detalles'
import logo from './img/logo.svg'

function App() {
    const [data, setData] = useState({ detalles: [], total: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/api/puntos')
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching data:", err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="app-container">
            <header className="main-header">
                <div className="header-container">
                    <img src={logo} alt="Logo" className="header-logo" />
                    {/* <h1>Programa de Puntos</h1> */}
                </div>
            </header>

            <main className="content-wrapper">
                {loading ? (
                    <p>Cargando datos...</p>
                ) : (
                    <Detalles detalles={data.detalles} total={data.total} />
                )}
            </main>

            <div className="back-button-container">
                <a href="#" className="back-button">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 12H5M5 12L12 19M5 12L12 5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Volver a sitio de revendedora
                </a>
            </div>
        </div>
    )
}

export default App
