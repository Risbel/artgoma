import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";

const ButtonConfirm = ({ text }: { text: string }) => {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      className="my-2 bg-black/70 border-2 border-red-700 hover:bg-black/60 rounded-full p-2"
      type="submit"
    >
      <span className="font-semibold text-white">
        {!pending ? `${text}` : <Loader2 className="animate-spin stroke-white" />}
      </span>
    </Button>
  );
};

export default ButtonConfirm;
