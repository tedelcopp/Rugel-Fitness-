"use client"; // Esto asegura que el componente se ejecute en el cliente

import { useState } from 'react';

export default function AppointmentForm() {
  const [patientName, setPatientName] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const appointment = { patientName, appointmentDate };

    await fetch('/api/appointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(appointment),
    });

    setPatientName('');
    setAppointmentDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="patientName" className="block text-sm font-medium text-gray-700">Nombre del Paciente</label>
        <input
          type="text"
          id="patientName"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-700">Fecha de la Cita</label>
        <input
          type="date"
          id="appointmentDate"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
      >
        Agregar Cita
      </button>
    </form>
  );
}
