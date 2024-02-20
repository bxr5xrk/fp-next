import { ENV } from "@platform/env";
import { PortableTextReactComponents } from "@portabletext/react";
import urlBuilder from "@sanity/image-url";
import { cl } from "../cl";
import Image from "next/image";

export const portableTextComponents: Partial<PortableTextReactComponents> = {
  block: (data) => {
    return <p className="text-gray-500 py-1">{data.children}</p>;
  }
  , types: {
    image: ({ value, isInline }) => {
      // console.log(value);
      const src = urlBuilder({
        clientConfig: {
          dataset: ENV.dataset,
          projectId: ENV.projectId,
        }
      }).image(value).url();

      return (
        <div
          className={cl("aspect-h-2 my-2 aspect-w-3 w-full overflow-hidden rounded-lg relative", isInline ? "inline-block" : "block")}
        >
          <Image alt="imag1" width={500}
            height={500} src={src} className="h-full w-full object-cover object-center" />
        </div>

      );
    }
  }
};