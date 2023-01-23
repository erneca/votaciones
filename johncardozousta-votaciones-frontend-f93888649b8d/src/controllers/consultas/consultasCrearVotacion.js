import axios from "axios";
import { tokenStore } from "../../stores/tokens";
import { consultaCrearVotacionesStore } from "../../stores/consultasCrearVotaciones";

export async function consultarNombres() {
  try {
    const tokens = tokenStore();
    const crearVotacion = consultaCrearVotacionesStore();
    const res = await axios.get("http://localhost:3001/consulta/tipos", {
      headers: {
        authorization: `Bearer ${tokens.token}`,
      },
    });
    crearVotacion.nombres = res.data;
  } catch (error) {
    alert(error);
  }
}

export async function consultarFacultades() {
  try {
    const tokens = tokenStore();
    const crearVotacion = consultaCrearVotacionesStore();
    const res = await axios.get("http://localhost:3001/consulta/facultades", {
      headers: {
        authorization: `Bearer ${tokens.token}`,
      },
    });
    crearVotacion.facultades = res.data;
  } catch (error) {
    alert(error);
  }
}

export async function consultarDependientes(programa) {
  try {
    const tokens = tokenStore();
    const crearVotacion = consultaCrearVotacionesStore();
    const res = await axios.get(
      `http://localhost:3001/consulta/dependientes/${programa._id}`,
      {
        headers: {
          authorization: `Bearer ${tokens.token}`,
        },
      }
    );
    crearVotacion.dependientes = res.data;
  } catch (error) {
    alert(error);
  }
}

export async function consultarProgramas(facultad) {
  try {
    const tokens = tokenStore();
    const crearVotacion = consultaCrearVotacionesStore();
    const res = await axios.get(
      `http://localhost:3001/consulta/programa/${facultad._id}`,
      {
        headers: {
          authorization: `Bearer ${tokens.token}`,
        },
      }
    );
    crearVotacion.programas = res.data;
  } catch (error) {
    alert(error);
  }
}
