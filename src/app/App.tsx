import React from "react";
import { Router } from "common/router/router";
import { useAuthInitialization } from "common/authInitialization/authInitialization";
import s from "./App.module.css";

function App() {
  useAuthInitialization();
  return (
    <div className={s.app}>
      <Router />
    </div>
  );
}

export default App;
