/// <reference types="vite/client" />
import type { JSX } from "react";

import type { ModelViewerElement } from
        "@google/model-viewer";

declare module "react" {
    namespace JSX {
        interface IntrinsicElements {
            "model-viewer": JSX.IntrinsicElements["div"] & {
                src?: string;
                alt?: string;
                "camera-controls"?: boolean;
                loading?: "auto" | "lazy" | "eager";
            };
        }
    }
}