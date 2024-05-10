"use client";

import { addCollaborator } from "@/actions/addCollaborator";
import { useRef, useState } from "react";
import ButtonSubmitCollaborator from "./ButtonSubmitCollaborator";

const AddCollaboratorsForm = () => {
  const [error, setError] = useState<string | null>(null);
  const ref = useRef<HTMLFormElement>(null);

  return (
    <div className="relative z-50 flex flex-col border-2 p-4 md:p-6 rounded-xl border-red-600 bg-white backdrop-blur-3xl lg:w-1/3">
      <div className="flex flex-col w-full mb-4">
        {/* <p className="text-md md:text-2xl text-center text-primary">{form.title}</p> */}
        <p className="text-md md:text-2xl text-center">Add collaborators here</p>
      </div>

      <form
        ref={ref}
        action={async (formData) => {
          const data = await addCollaborator(formData);

          if (data?.error) {
            setError("Unespected error");
            return;
          }

          setError(null);
          ref.current?.reset();
        }}
        className="flex flex-col w-full"
      >
        <div className="flex flex-col">
          <label className="pl-2 text-xs text-primary" htmlFor="name">
            {/* {form.labels.firstName} */}
            name
          </label>
          <input
            required
            className="border pl-2 py-1 rounded-md h-8 text-xs md:text-base text-[#383529] border-primary"
            placeholder={"name"}
            min={2}
            type="text"
            name="name"
            id="name"
            autoComplete="name"
          />
        </div>
        <div className="flex flex-col">
          <label className="pl-2 text-xs text-primary" htmlFor="slogan">
            {/* {form.labels.lastName} */}
            slogan
          </label>
          <input
            required
            className="border pl-2 py-1 rounded-md w-full h-8 text-xs md:text-base text-[#383529] border-primary"
            placeholder={"slogan"}
            min={2}
            type="text"
            name="slogan"
            id="slogan"
            autoComplete="none"
          />
        </div>

        <div>
          <label className="pl-2 text-xs text-primary" htmlFor="email">
            {/* {form.labels.email} */}
            email
          </label>
          <input
            required
            className="border pl-2 py-1 rounded-md w-full h-8 text-xs md:text-base text-[#383529] border-primary"
            placeholder={"email"}
            min={2}
            type="email"
            name="email"
            id="email"
            autoComplete="email"
          />
        </div>
        <div>
          <label className="pl-2 text-xs text-primary" htmlFor="phone">
            {/* {form.labels.phone} */}
            phone
          </label>
          <input
            required
            className="border pl-2 py-1 rounded-md w-full h-8 text-xs md:text-base text-[#383529] border-primary"
            placeholder={"phone"}
            min={2}
            type="tel"
            name="phone"
            id="phone"
            autoComplete="tel"
          />
        </div>

        <div>
          <label className="pl-2 text-xs text-primary" htmlFor="address">
            {/* {form.labels.address} */}
            address (optional)
          </label>
          <input
            className="border pl-2 py-1 rounded-md w-full h-8 text-xs md:text-base text-[#383529] border-primary"
            placeholder={"address"}
            min={2}
            type="text"
            name="address"
            id="address"
            autoComplete="off"
          />
        </div>

        <ButtonSubmitCollaborator />

        <span className="text-red-600 text-sm text-center">{error}</span>
      </form>
    </div>
  );
};

export default AddCollaboratorsForm;

// <div>
//           <label className="pl-2 text-xs text-primary" htmlFor="logo">
//             {/* {form.labels.logo} */}
//             logo (optional)
//           </label>
//           <input
//             className="border pl-2 py-1 rounded-md w-full h-8 text-xs md:text-base text-[#383529] border-primary"
//             placeholder={"logo"}
//             min={2}
//             type="file"
//             name="logo"
//             id="logo"
//             autoComplete="off"
//           />
//         </div>

//         <div>
//           <label className="pl-2 text-xs text-primary" htmlFor="image">
//             {/* {form.labels.image} */}
//             image (optional)
//           </label>
//           <input
//             className="border pl-2 py-1 rounded-md w-full h-8 text-xs md:text-base text-[#383529] border-primary"
//             placeholder={"image"}
//             min={2}
//             type="file"
//             name="image"
//             id="image"
//             autoComplete="off"
//           />
//         </div>
