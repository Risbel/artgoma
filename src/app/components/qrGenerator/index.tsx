import React from "react";
import QrGeneratorPro from "./QrGeneratorPro";
import { ICollaborator, getCollaborators } from "@/api/getCollaborators";

const QrGenerator = async () => {
  const collaborators: ICollaborator = await getCollaborators();

  return (
    <div>
      <QrGeneratorPro collaborators={collaborators} />
    </div>
  );
};

export default QrGenerator;
