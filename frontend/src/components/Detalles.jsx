import React from 'react';

const Detalles = ({ detalles, total }) => {
    return (
        <div className="card">
            <div className="card-header">
                <span className="icon-check">✓</span>
                <h2>Detalles</h2>
            </div>

            <div className="table-container">
                <table className="points-table">
                    <thead>
                        <tr>
                            <th>ID Motivo</th>
                            <th>Descripción</th>
                            <th className="text-right">Puntos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {detalles && Array.isArray(detalles) && detalles.length > 0 ? (
                            detalles.map((item, index) => (
                                <tr key={index}>
                                    <td className="id-col">{item.idmotivo}</td>
                                    <td>{item.descripcion}</td>
                                    <td className="text-right points-col">+{item.puntos}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" style={{ textAlign: "center" }}>No hay detalles disponibles o hubo un error al cargar.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="total-container">
                <div className="total-label">
                    <span className="icon-check-circle">✓</span>
                    Total acumulado:
                </div>
                <div className="total-value">
                    +{total} puntos
                </div>
            </div>
        </div>
    );
};

export default Detalles;
