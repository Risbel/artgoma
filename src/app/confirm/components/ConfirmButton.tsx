import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

const ConfirmButton = () => {
  const { pending } = useFormStatus();

  return (
    <button className="my-2 bg-black/40 border-2 border-red-700 hover:bg-black/30 rounded-full p-2" type="submit">
      <span className="font-semibold text-white">
        {!pending ? `${"confirm"}` : <Loader2 className="animate-spin stroke-secondary" />}
      </span>
    </button>
  );
};

export default ConfirmButton;
