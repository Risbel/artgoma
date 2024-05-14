import React from "react";
import QrGeneratorPro from "./QrGeneratorPro";
import { ICollaborator, getCollaborators } from "@/queries/getCollaborators";

const QrGenerator = async () => {
  const collaborators: ICollaborator = await getCollaborators();

  return <QrGeneratorPro collaborators={collaborators} />;
};

export default QrGenerator;
