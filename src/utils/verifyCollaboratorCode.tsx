export const verifyCollaboratorCode = (cadena: string) => {
  const regex = /^[a-zA-Z0-9]{5}$/;

  if (regex.test(cadena)) {
    return true;
  } else {
    return false;
  }
};
