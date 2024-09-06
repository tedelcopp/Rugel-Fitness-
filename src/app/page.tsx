import "../styles/globals.css";

export default function MedicalDashboard() {
  const citasHoy = [
    { hora: "08:00 AM", paciente: "Juan Rodolfo Pérez", dni: "12345678" },
    { hora: "09:30 AM", paciente: "Ana María García", dni: "87654321" },
  ];

  const estadisticas = {
    totalCitas: 2,
    pacientesAtendidos: 1,
    citasPendientes: 1,
  };

  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Bienvenido, Dr. Rodriguez</h1>
      <div className="grid grid-cols-1 gap-8">
        <div className="card p-6 bg-secondary shadow rounded-lg">
          <h2 className="text-2xl font-semibold mb-4"><u>Citas para Hoy</u></h2>
          <table className="table-citas">
            <thead>
              <tr>
                <th>Hora</th>
                <th>Paciente</th>
                <th>DNI</th>
              </tr>
            </thead>
            <tbody>
              {citasHoy.map((cita, index) => (
                <tr key={index}>
                  <td>{cita.hora}</td>
                  <td className="font-semibold">{cita.paciente}</td>
                  <td className="text-gray-500">{cita.dni}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card p-6 bg-secondary shadow rounded-lg">
          <h2 className="text-2xl font-semibold mb-4"><u>Estadísticas del Día</u></h2>
          <table className="table-estadisticas">
            <thead>
              <tr>
                <th>Descripción</th>
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Total Citas</td>
                <td>{estadisticas.totalCitas}</td>
              </tr>
              <tr>
                <td>Pacientes Atendidos</td>
                <td>{estadisticas.pacientesAtendidos}</td>
              </tr>
              <tr>
                <td>Citas Pendientes</td>
                <td>{estadisticas.citasPendientes}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="card p-6 bg-secondary shadow rounded-lg">
          <h2 className="text-2xl font-semibold mb-4"><u>Notas</u></h2>
          <textarea
            className="w-full h-32 p-4 border rounded-lg"
            placeholder="Escribe tus notas aquí..."
          ></textarea>
        </div>

        <div className="card p-6 bg-secondary shadow rounded-lg">
          <h2 className="text-2xl font-semibold mb-4"><u>Próximas Citas</u></h2>
        </div>

        <div className="card p-6 bg-secondary shadow rounded-lg">
          <h2 className="text-2xl font-semibold mb-4"><u>Mensajes Recientes</u></h2>
        </div>
      </div>
    </section>
  );
}
