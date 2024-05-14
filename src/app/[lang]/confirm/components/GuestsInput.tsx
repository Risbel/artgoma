import { useDictionary } from "@/providers/DictionaryProvider";
import { PlusCircle, Trash } from "lucide-react";

export interface Person {
  first_name: string;
  last_name: string;
}

const GuestsInput = ({ inputList, setInputList }: { inputList: Person[]; setInputList: any }) => {
  const { form } = useDictionary();

  const handleinputchange = ({ e, index }: { e: any; index: any }) => {
    const { name, value } = e.target;
    const list: any = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleremove = (index: any) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleaddclick = () => {
    setInputList([...inputList, { first_name: "", last_name: "" }]);
  };

  return (
    <div>
      {inputList.length === 0 && (
        <button
          className="flex gap-1 items-center border rounded-full px-2 py-1 my-2 pr-2 bg-green-600 hover:bg-green-500 transition-colors"
          onClick={() => handleaddclick()}
        >
          <PlusCircle className="stroke-secondary" />
          <span className="text-sm text-secondary font-semibold">{form.buttons.addCompanion}</span>
        </button>
      )}
      {inputList.length !== 0 && <p className="text-primary pl-2 mt-2 text-xs">{form.buttons.addCompanion}</p>}

      {inputList.map((x, index) => {
        return (
          <div key={index} className="border-2 border-red-600 rounded-xl p-2 mb-2 bg-white">
            <div className="flex gap-2 items-center">
              <div className="flex flex-col">
                <label className="text-xs text-primary pl-2" htmlFor={`first_name${index}`}>
                  {form.labels.firstName}
                </label>
                <input
                  required
                  className="border pl-2 py-1 rounded-md w-full h-8 text-xs  text-[#383529] border-primary"
                  type="text"
                  name={`first_name`}
                  id={`first_name${index}`}
                  placeholder={form.placeHolder.firstName}
                  onChange={(e) => handleinputchange({ e, index })}
                  autoComplete="name"
                  autoCapitalize="on"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs text-primary pl-2" htmlFor={`last_name${index}`}>
                  {form.labels.lastName}
                </label>
                <input
                  required
                  className="border pl-2 py-1 rounded-md w-full h-8 text-xs  text-[#383529] border-primary"
                  type="text"
                  name={`last_name`}
                  id={`last_name${index}`}
                  placeholder={form.placeHolder.lastName}
                  onChange={(e) => handleinputchange({ e, index })}
                  autoComplete="additional-name"
                  autoCapitalize="on"
                />
              </div>
              <button onClick={() => handleremove(index)}>
                <Trash className="stroke-red-800 hover:stroke-red-600" />
              </button>
            </div>
            {inputList.length - 1 === index && (
              <button
                className="flex gap-1 items-center border rounded-full my-2 bg-green-600 hover:bg-green-500 transition-colors"
                onClick={() => handleaddclick()}
              >
                <PlusCircle className="stroke-secondary" />
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default GuestsInput;
