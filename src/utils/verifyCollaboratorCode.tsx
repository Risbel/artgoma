export const verifyCollaboratorCode = (cadena: string) => {
  const regex = /^[a-zA-Z0-9]{5}$/;

  cadena = cadena.substring(cadena.length - 5);

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
