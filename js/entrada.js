const piso = document.getElementById("piso");
const consultorio = document.getElementById("consultorio");

piso.addEventListener("change", cargarConsultorios);

function cargarConsultorios() {

    consultorio.innerHTML = "";

    let numeroPiso = parseInt(piso.value);

    if (!numeroPiso) {
        consultorio.innerHTML = "<option>Seleccione un piso</option>";
        return;
    }

    let inicio = numeroPiso * 100 + 1;
    let fin = numeroPiso * 100 + 23;

    for (let i = inicio; i <= fin; i++) {

        // Omitir el consultorio 13
        if (i % 100 === 13) continue;

        let opcion = document.createElement("option");
        opcion.value = i;
        opcion.textContent = i;

        consultorio.appendChild(opcion);
    }

}
