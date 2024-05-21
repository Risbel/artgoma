import { Loader2 } from "lucide-react";
import React from "react";

const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Loader2 className="animate-spin" />
    </div>
  );
};

export default loading;
