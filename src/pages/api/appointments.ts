import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    const { patientName, appointmentDate } = req.body;

    // Aquí puedes agregar lógica para almacenar la cita en una base de datos
    // Por ahora, solo respondemos con un mensaje

  //   res.status(200).json({ message: 'Cita agregada exitosamente.' });
  // } else {
  //   res.status(405).json({ message: 'Método no permitido' });
  }
}
