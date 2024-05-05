"use client";

import { useState } from "react";
import { QRCode } from "react-qrcode-logo";
import { Check, Copy, Download, Settings } from "lucide-react";
import Selector from "./select/Selector";
import Image from "next/image";
import { ICollaborator } from "@/queries/getCollaborators";

const QrGeneratorPro = ({ collaborators }: { collaborators: ICollaborator }) => {
  const [urlParams, setUrlParams] = useState({ collaborator: "" });
  const [copySuccess, setCopySuccess] = useState(false);

  const downloadQR = () => {
    const canvas: any = document.getElementById("myqr");
    const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "myqr.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  // buil URL conditionally
  const buildURL = () => {
    let url = "https://artgoma.vercel.app";

    // Comprobar si 'colaborator' tiene un valor
    if (urlParams.collaborator) {
      url += `/${urlParams.collaborator}`;
    }

    return url;
  };

  return (
    <div className="flex flex-col w-full items-center justify-center py-16">
      <div className="flex gap-2 py-4">
        <Settings /> QrGenerator:
      </div>

      <div className="flex gap-4 border my-4 py-1 px-2 rounded-xl">
        <span>{buildURL()}</span>{" "}
        <button
          className="active:scale-125 active:rotate-180"
          onClick={() => {
            navigator.clipboard.writeText(buildURL());
            setCopySuccess(true);
            setTimeout(() => {
              setCopySuccess(false);
            }, 3000);
          }}
        >
          {copySuccess ? <Check /> : <Copy />}
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <Selector setUrlParams={setUrlParams} collaborators={collaborators} />

        <div className="fle flex-col">
          <div className="relative flex justify-center items-center rounded-xl border shadow-md overflow-hidden">
            <Image
              className="bg-black p-1 absolute z-20 rounded-l-full"
              src={"/logo-artgoma.svg"}
              alt="Logo Goma"
              width={50}
              height={50}
            />
            <QRCode
              id="myqr"
              value={buildURL()}
              bgColor="#ffffff"
              eyeRadius={[
                [8, 8, 0, 8], // top/left eye
                [8, 8, 8, 0], // top/right eye
                [8, 0, 8, 8], // bottom/left
              ]}
              eyeColor={[
                "#d31313", // top/left eye
                "#000000",
                "#000000",
              ]}
              qrStyle="squares"
              logoPaddingStyle="circle"
            />
          </div>
          <button type="button" onClick={downloadQR} className="mt-4 w-full flex gap-4">
            Download
            <Download />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QrGeneratorPro;
