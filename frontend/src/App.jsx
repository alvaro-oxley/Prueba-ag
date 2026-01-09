import { useState, useEffect } from 'react'
import Detalles from './components/Detalles'

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
                <h1>Programa de Puntos</h1>
            </header>

            <main className="content-wrapper">
                {loading ? (
                    <p>Cargando datos...</p>
                ) : (
                    <Detalles detalles={data.detalles} total={data.total} />
                )}
            </main>
        </div>
    )
}

export default App
