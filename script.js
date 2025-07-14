const mallaCompleta = [
  // Semestre 1 (30 créditos - 6 ramos)
  { sigla: "MAT060", nombre: "ÁLGEBRA Y GEOMETRÍA", semestre: 1, creditos: 6, prerequisitos: [] },
  { sigla: "HXW006", nombre: "COMUNICACIÓN EFECTIVA I", semestre: 1, creditos: 3, prerequisitos: [] },
  { sigla: "EFI200", nombre: "EDUCACIÓN FÍSICA I", semestre: 1, creditos: 2, prerequisitos: [] },
  { sigla: "FIS100", nombre: "INTRODUCCIÓN A LA FÍSICA", semestre: 1, creditos: 6, prerequisitos: [] },
  { sigla: "INF129", nombre: "INTRODUCCIÓN A LA PROGRAMACIÓN", semestre: 1, creditos: 7, prerequisitos: [] },
  { sigla: "MAT070", nombre: "INTRODUCCIÓN AL CÁLCULO", semestre: 1, creditos: 6, prerequisitos: [] },
  
  // Semestre 2 (30 créditos - 6 ramos)
  { sigla: "MAT061", nombre: "ÁLGEBRA LINEAL", semestre: 2, creditos: 6, prerequisitos: ["MAT060"] },
  { sigla: "MAT071", nombre: "CÁLCULO EN UNA VARIABLE", semestre: 2, creditos: 6, prerequisitos: ["MAT070"] },
  { sigla: "HXW007", nombre: "COMUNICACIÓN EFECTIVA II", semestre: 2, creditos: 3, prerequisitos: ["HXW006"] },
  { sigla: "EFI201", nombre: "EDUCACIÓN FÍSICA II", semestre: 2, creditos: 2, prerequisitos: ["EFI200"] },
  { sigla: "FIS111", nombre: "FÍSICA GENERAL MECÁNICA", semestre: 2, creditos: 6, prerequisitos: ["FIS100"] },
  { sigla: "IWG400", nombre: "PROYECTO INICIAL", semestre: 2, creditos: 7, prerequisitos: [] },
  
  // Semestre 3 (30 créditos - 6 ramos)
  { sigla: "AUX200", nombre: "ADMINISTRACIÓN Y SOSTENIBILIDAD", semestre: 3, creditos: 4, prerequisitos: [] },
  { sigla: "HXW008", nombre: "ANÁLISIS CRÍTICO DE TEXTO", semestre: 3, creditos: 3, prerequisitos: ["HXW007"] },
  { sigla: "MAT081", nombre: "CÁLCULO EN VARIAS VARIABLES", semestre: 3, creditos: 6, prerequisitos: ["MAT071"] },
  { sigla: "FIS112", nombre: "CALOR Y ONDAS", semestre: 3, creditos: 6, prerequisitos: ["FIS111"] },
  { sigla: "INF132", nombre: "MATEMÁTICA DISCRETA", semestre: 3, creditos: 5, prerequisitos: ["INF129", "MAT070", "MAT061"] },
  { sigla: "INF131", nombre: "PROGRAMACIÓN AVANZADA", semestre: 3, creditos: 6, prerequisitos: ["INF129"] },
  
  // Semestre 4 (30 créditos - 6 ramos)
  { sigla: "HXW009", nombre: "COMUNICACIÓN EFECTIVA III", semestre: 4, creditos: 3, prerequisitos: ["HXW007"] },
  { sigla: "MAT053", nombre: "ECUACIONES DIFERENCIALES", semestre: 4, creditos: 5, prerequisitos: ["MAT081"] },
  { sigla: "FIS114", nombre: "ELECTRICIDAD Y MAGNETISMO", semestre: 4, creditos: 6, prerequisitos: ["FIS112"] },
  { sigla: "INF135", nombre: "ESTADÍSTICA COMPUTACIONAL", semestre: 4, creditos: 6, prerequisitos: ["MAT081", "INF129"] },
  { sigla: "INF133", nombre: "ESTRUCTURA DE DATOS", semestre: 4, creditos: 6, prerequisitos: ["INF131"] },
  { sigla: "AUX201", nombre: "INGENIERÍA ECONÓMICA", semestre: 4, creditos: 4, prerequisitos: ["INF129"] },
  
  // Semestre 5 (30 créditos - 6 ramos)
  { sigla: "INF140", nombre: "ARQUITECTURA DE COMPUTADORES", semestre: 5, creditos: 5, prerequisitos: ["INF133"] },
  { sigla: "INF138", nombre: "BASES DE DATOS", semestre: 5, creditos: 5, prerequisitos: ["INF133"] },
  { sigla: "INF142", nombre: "INGENIERÍA Y SOCIEDAD", semestre: 5, creditos: 5, prerequisitos: ["IWG400"] },
  { sigla: "INF229", nombre: "OPTIMIZACIÓN", semestre: 5, creditos: 5, prerequisitos: ["INF129", "MAT061"] },
  { sigla: "INF141", nombre: "PARADIGMAS DE PROGRAMACIÓN", semestre: 5, creditos: 5, prerequisitos: ["INF133"] },
  { sigla: "INF143", nombre: "AUTÓMATAS Y LENGUAJES FORMALES", semestre: 5, creditos: 5, prerequisitos: ["INF132"] },
  
  // Semestre 6 (30 créditos - 6 ramos)
  { sigla: "INF144", nombre: "ALGORITMOS Y COMPLEJIDAD", semestre: 6, creditos: 6, prerequisitos: ["INF133"] },
  { sigla: "INF146", nombre: "ANÁLISIS Y DISEÑO DE SOFTWARE", semestre: 6, creditos: 5, prerequisitos: ["INF141", "INF138"] },
  { sigla: "INF147", nombre: "COMPUTACIÓN CIENTÍFICA", semestre: 6, creditos: 6, prerequisitos: ["MAT053", "INF133"] },
  { sigla: "HXW012", nombre: "COMUNICACIÓN EFECTIVA IV", semestre: 6, creditos: 3, prerequisitos: ["HXW009"] },
  { sigla: "INF148", nombre: "INVESTIGACIÓN DE OPERACIONES", semestre: 6, creditos: 5, prerequisitos: ["INF135", "INF229"] },
  { sigla: "INF145", nombre: "SISTEMAS OPERATIVOS", semestre: 6, creditos: 5, prerequisitos: ["INF140"] },
  
  // Semestre 7 (30 créditos - 6 ramos)
  { sigla: "INF158", nombre: "CIENCIA DE DATOS", semestre: 7, creditos: 5, prerequisitos: ["INF133", "INF146"] },
  { sigla: "INF156", nombre: "INGENIERÍA DE SOFTWARE", semestre: 7, creditos: 5, prerequisitos: ["INF146"] },
  { sigla: "AUX", nombre: "INGLÉS DISCIPLINAR", semestre: 7, creditos: 3, prerequisitos: ["HXW012"] },
  { sigla: "INF157", nombre: "INTELIGENCIA ARTIFICIAL I", semestre: 7, creditos: 6, prerequisitos: ["INF147"] },
  { sigla: "INF154", nombre: "REDES Y CIBERSEGURIDAD", semestre: 7, creditos: 6, prerequisitos: ["INF140"] },
  { sigla: "INF153", nombre: "TEORÍA DE SISTEMAS", semestre: 7, creditos: 5, prerequisitos: ["MAT053", "INF143"] },
  
  // Semestre 8 (30 créditos - 6 ramos)
  { sigla: "INF165", nombre: "DISEÑO UX", semestre: 8, creditos: 5, prerequisitos: ["INF146"] },
  { sigla: "AUX219", nombre: "ELECTIVO", semestre: 8, creditos: 5, prerequisitos: [] },
  { sigla: "INF166", nombre: "INTELIGENCIA ARTIFICIAL II", semestre: 8, creditos: 5, prerequisitos: ["INF157", "INF158"] },
  { sigla: "INF163", nombre: "PROYECTO DE INGENIERÍA", semestre: 8, creditos: 5, prerequisitos: ["INF147", "INF144"] },
  { sigla: "INF164", nombre: "SISTEMAS DISTRIBUIDOS", semestre: 8, creditos: 5, prerequisitos: ["INF145", "INF154"] },
  { sigla: "INF167", nombre: "SISTEMAS ORGANIZACIONALES", semestre: 8, creditos: 5, prerequisitos: ["INF142"] },
  
  // Semestre 9 (30 créditos - 5 ramos)
  { sigla: "AUX222", nombre: "ELECTIVO", semestre: 9, creditos: 5, prerequisitos: [] },
  { sigla: "INF170", nombre: "ELECTIVO DISCIPLINAR 1", semestre: 9, creditos: 6, prerequisitos: [] },
  { sigla: "INF169", nombre: "ELECTIVO DISCIPLINAR 2", semestre: 9, creditos: 6, prerequisitos: [] },
  { sigla: "INF171", nombre: "ELECTIVO DISCIPLINAR 3", semestre: 9, creditos: 6, prerequisitos: [] },
  { sigla: "INF168", nombre: "GESTIÓN PROYECTOS INF.", semestre: 9, creditos: 7, prerequisitos: [] },
  
  // Semestre 10 (30 créditos - 4 ramos) - CORREGIDO
  { sigla: "INF540", nombre: "ELECTIVO DISCIPLINAR 4", semestre: 10, creditos: 6, prerequisitos: [] },
  { sigla: "INF541", nombre: "ELECTIVO DISCIPLINAR 5", semestre: 10, creditos: 6, prerequisitos: [] },
  { sigla: "INF539", nombre: "TALLER DE TITULACIÓN", semestre: 10, creditos: 8, prerequisitos: ["INF164", "INF166"] },
  { sigla: "INF538", nombre: "TALLER DE DESARROLLO DE PROYECTOS DE INFORMÁTICA", semestre: 10, creditos: 10, prerequisitos: ["INF168", "INF539"] }
];

const mallaContainer = document.getElementById("malla-container");
let estadoAsignaturas = JSON.parse(localStorage.getItem("estadoMalla")) || {};

function renderizarMalla() {
  mallaContainer.innerHTML = "";
  
  // Agrupar asignaturas por semestre
  const semestres = {};
  mallaCompleta.forEach(asignatura => {
    if (!semestres[asignatura.semestre]) {
      semestres[asignatura.semestre] = [];
    }
    semestres[asignatura.semestre].push(asignatura);
  });
  
  // Crear sección para cada semestre
  for (const [numeroSemestre, asignaturas] of Object.entries(semestres)) {
    const semestreDiv = document.createElement("div");
    semestreDiv.className = "semestre";
    
    const header = document.createElement("div");
    header.className = "semestre-header";
    header.textContent = `Semestre ${numeroSemestre}`;
    semestreDiv.appendChild(header);
    
    const grid = document.createElement("div");
    grid.className = "malla-grid";
    
    asignaturas.forEach(asignatura => {
      const asignaturaDiv = document.createElement("div");
      asignaturaDiv.className = "asignatura";
      
      // Determinar estado actual
      const estadoActual = estadoAsignaturas[asignatura.sigla] || "pendiente";
      const prerequisitosCumplidos = asignatura.prerequisitos.every(
        prereq => estadoAsignaturas[prereq] === "aprobado"
      );
      
      // Aplicar clase de estado
      if (estadoActual === "aprobado") {
        asignaturaDiv.classList.add("aprobado");
      } else if (estadoActual === "cursando") {
        asignaturaDiv.classList.add("cursando");
      } else if (!prerequisitosCumplidos && asignatura.prerequisitos.length > 0) {
        asignaturaDiv.classList.add("bloqueado");
      } else {
        asignaturaDiv.classList.add("pendiente");
      }
      
      // Crear contenido de la asignatura
      const botonesEstado = prerequisitosCumplidos || asignatura.prerequisitos.length === 0 ?
        `<div class="estado-botones">
          <button class="estado-btn btn-aprobado" data-sigla="${asignatura.sigla}" data-estado="aprobado">✓</button>
          <button class="estado-btn btn-cursando" data-sigla="${asignatura.sigla}" data-estado="cursando">~</button>
          <button class="estado-btn btn-pendiente" data-sigla="${asignatura.sigla}" data-estado="pendiente">✗</button>
        </div>` :
        `<div class="estado-botones">
          <button class="estado-btn btn-bloqueado tooltip" disabled data-sigla="${asignatura.sigla}">
            ✓
            <span class="tooltiptext">Prerrequisitos no cumplidos</span>
          </button>
          <button class="estado-btn btn-bloqueado tooltip" disabled data-sigla="${asignatura.sigla}">
            ~
            <span class="tooltiptext">Prerrequisitos no cumplidos</span>
          </button>
          <button class="estado-btn btn-pendiente" data-sigla="${asignatura.sigla}" data-estado="pendiente">✗</button>
        </div>`;
      
      asignaturaDiv.innerHTML = `
        <h3>${asignatura.sigla} - ${asignatura.nombre}</h3>
        <div class="creditos">${asignatura.creditos} cr.</div>
        <p>Semestre ${asignatura.semestre}</p>
        <div class="prerequisitos">
          ${asignatura.prerequisitos.length > 0 ? 
            `Prerrequisitos: ${asignatura.prerequisitos.join(", ")}` : 
            "Sin prerrequisitos"}
        </div>
        ${botonesEstado}
      `;
      
      grid.appendChild(asignaturaDiv);
    });
    
    semestreDiv.appendChild(grid);
    mallaContainer.appendChild(semestreDiv);
  }
  
  actualizarEstadisticas();
  
  // Agregar event listeners a los botones habilitados
  document.querySelectorAll(".estado-btn:not(:disabled)").forEach(boton => {
    boton.addEventListener("click", function() {
      const sigla = this.getAttribute("data-sigla");
      const nuevoEstado = this.getAttribute("data-estado");
      
      estadoAsignaturas[sigla] = nuevoEstado;
      localStorage.setItem("estadoMalla", JSON.stringify(estadoAsignaturas));
      
      renderizarMalla();
    });
  });
}

function actualizarEstadisticas() {
  const totalAsignaturas = mallaCompleta.length;
  const asignaturasAprobadas = mallaCompleta.filter(
    a => estadoAsignaturas[a.sigla] === "aprobado"
  ).length;
  
  const creditosTotales = 300;
  const creditosAprobados = mallaCompleta.reduce((total, a) => {
    return estadoAsignaturas[a.sigla] === "aprobado" ? total + a.creditos : total;
  }, 0);
  
  // Calcular porcentajes
  const porcentajeAsignaturas = Math.round((asignaturasAprobadas / totalAsignaturas) * 100);
  const porcentajeCreditos = Math.round((creditosAprobados / creditosTotales) * 100);
  
  // Actualizar DOM
  document.getElementById("asignaturas-totales").textContent = `Total asignaturas: ${totalAsignaturas}`;
  document.getElementById("asignaturas-aprobadas").textContent = 
    `Aprobadas: ${asignaturasAprobadas} (${porcentajeAsignaturas}%)`;
  
  document.getElementById("creditos-totales").textContent = `Créditos totales: ${creditosTotales}`;
  document.getElementById("creditos-aprobados").textContent = 
    `Aprobados: ${creditosAprobados} (${porcentajeCreditos}%)`;
  
  document.getElementById("progreso-bar").style.width = `${porcentajeCreditos}%`;
  document.getElementById("progreso-texto").textContent = `${porcentajeCreditos}% completado`;
}

// Inicializar
renderizarMalla();

