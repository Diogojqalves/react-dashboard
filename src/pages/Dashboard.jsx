import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import '../css/style.css';
import Main from './Main';
import Caixa from './Caixa';
import MeusProjetos from './MeusProjetos';
import Equipa from './Equipa';
import Projeto from './Projeto';
import Mensagens from './Mensagens';
import Calendario from './Calendario';

function dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> 
        <main>
        <Routes>
        <Route exact path="*" element={<Main />}/>
        <Route exact path="caixa" element={<Caixa/>}/>
        <Route exact path="meusprojetos" element={<MeusProjetos />}/>
        <Route exact path="equipa" element={<Equipa />}/>
        <Route exact path="criarprojeto" element={<Projeto />}/>
        <Route exact path="mensagens" element={<Mensagens />}/>
        <Route exact path="calendario" element={<Calendario/>}/>
        </Routes>
        </main>
      </div>
    </div>
  );
}

export default dashboard;