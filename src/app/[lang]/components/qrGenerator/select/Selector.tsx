import { ICollaborator } from "@/queries/getCollaborators";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { memo } from "react";

const Selector = memo(
  ({
    setUrlParams,
    collaborators,
  }: {
    setUrlParams: React.Dispatch<React.SetStateAction<any>>;
    collaborators: ICollaborator;
  }) => {
    return (
      <Select onValueChange={(value) => setUrlParams({ collaborator: value })} name="collaborator">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Use a collaborator" />
        </SelectTrigger>
        <SelectContent>
          {collaborators.results.map((colab) => {
            return (
              <SelectItem key={colab.id} value={colab.code}>
                {colab.name}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    );
  }
);

export default Selector;
