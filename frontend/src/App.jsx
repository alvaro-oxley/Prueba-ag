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
                <a href="https://hmlescritoriorv.ar.violettacosmeticos.com/" className="back-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Volver a sitio de revendedora
                </a>
            </div>
        </div>
    )
}

export default App
