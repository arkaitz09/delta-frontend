import React, { useState } from "react";

const FormularioReserva = () => {
  const [preferencia, setPreferencia] = useState("");
  const [fecha, setFecha] = useState("");

  const galeriaOptions = [
    "AMALUR",
    "EGUZKI",
    "IZAR",
    "LAIA",
    "OREKA",
    "ARGIA",
    "LUR",
    "ZIRIMIRI",
    "GOIZU",
    "BAKARRA"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!preferencia || !fecha) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3001/api/reservas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ preferencia, fecha })
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Reserva guardada en el servidor.");
        setPreferencia("");
        setFecha("");
      } else {
        alert("❌ Error: " + data.error);
      }
    } catch (err) {
      console.error("Error al conectar:", err);
      alert("❌ Error al conectar con el servidor.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow-lg space-y-4"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Reservar Galería
      </h2>

      <div>
        <label className="block text-gray-600 font-medium">Preferencia</label>
        <select
          value={preferencia}
          onChange={(e) => setPreferencia(e.target.value)}
          className="w-full mt-1 p-2 border border-gray-300 rounded"
        >
          <option value="">Selecciona una galería</option>
          {galeriaOptions.map((galeria) => (
            <option key={galeria} value={galeria}>
              {galeria}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-gray-600 font-medium">Fecha</label>
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          className="w-full mt-1 p-2 border border-gray-300 rounded"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded"
      >
        Reservar
      </button>
    </form>
  );
};

export default FormularioReserva;
