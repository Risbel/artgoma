"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";

const CollaboratorProvider = ({ children }: Props) => {
  const params: { id: string } = useParams();

  useEffect(() => {
    //to save on localStorage
    params?.id ? localStorage.setItem("collaborator", params.id) : localStorage.setItem("collaborator", "");
  }, []);

  return <>{children}</>;
};

export default CollaboratorProvider;

interface Props {
  children: React.ReactNode;
}
