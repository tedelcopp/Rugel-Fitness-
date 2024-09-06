// src/pages/quotes.tsx

import AppointmentForm from '../components/AppointmentForm';

export default function QuotesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Citas</h1>
      <p>Aquí puedes gestionar las citas de los pacientes.</p>
      <AppointmentForm />
    </div>
  );
}
