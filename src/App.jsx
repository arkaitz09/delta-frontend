import './App.css'
import React, { useState } from "react";
import GaleriaCard from "./components/GaleriaCard";
import FormularioReserva from "./components/FormularioReserva"; // ajusta la ruta si lo pones en otra carpeta
function App() {
  const [mostrarGaleria, setMostrarGaleria] = useState(false);
  var previs = false;
  const handleMostrar = () => {
    setMostrarGaleria(!previs);
    previs = !previs;
  };
  return (
    <>
    <div id="papi">
      <div className="card">
        <h1>Zorionak princesita🎉🎊</h1>
        <h2>2∞ añitos ❤️</h2>
      </div>
      <img id="aidaf" src="static\cumple-aida\Aida.jpg" alt="Aida" width="300" height="350" ></img>
    </div>
    <div className="card" id="content">
      <h3>Esta es la presentación de mi regalito...</h3>
      <p>Estarás pensando, uy, y mi regalo? Pues esque toda espera merece la pena.</p>
    </div>
    <button
        onClick={handleMostrar}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >Pulsame para la sorpresa...</button>
    {mostrarGaleria && (
      <div id="galeria-container">
        <h1>ELIGE TU FAVORITA</h1>
        <div id='galeria'>
          <GaleriaCard folderName="amalur" title="AMALUR" />
          <GaleriaCard folderName="eguzki" title="EGUZKI" />
          <GaleriaCard folderName="elaia" title="ELAIA" />
          <GaleriaCard folderName="hontza" title="HONTZA" />
          <GaleriaCard folderName="ilargi" title="ILARGI" />
          <GaleriaCard folderName="izar" title="IZAR" />
          <GaleriaCard folderName="kikisai" title="KIKISAI" />
          <GaleriaCard folderName="lasai" title="LASAI" />
          <GaleriaCard folderName="suite oh" title="SUITE OH OH" />
          <GaleriaCard folderName="txantxagorria" title="TXANTXAGORRI" />
        </div>
        <FormularioReserva />
    </div>
    )}
    </>
  )
}

export default App
