export const verifyCollaboratorCode = (cadena: string) => {
  const regex = /^[a-zA-Z0-9]{5}$/;

  cadena = cadena.substring(cadena.length - 6);

  if (cadena.slice(0, 1) === "/") {
    cadena = cadena.replace("/", "");
  } else {
    return {
      isCollaborator: false,
      collaborator: null,
    };
  }

  if (regex.test(cadena)) {
    return {
      isCollaborator: true,
      collaborator: cadena,
    };
  } else {
    return {
      isCollaborator: false,
      collaborator: null,
    };
  }
};
