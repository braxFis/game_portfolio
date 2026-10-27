
/// <reference types="vite/client" />
import type { ModelViewerElement } from "@google/model-viewer";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        alt?: string;
        "camera-controls"?: boolean;
        "touch-action"?: string;
        "auto-rotate"?: boolean;
        "rotation-per-second"?: string;
        "shadow-intensity"?: string;
        exposure?: string;
        "environment-image"?: string;
        "interaction-prompt"?: string;
        loading?: "auto" | "lazy" | "eager";
        ar?: boolean;
        "ar-modes"?: string;
        key?: React.Key;
        onError?: React.ReactEventHandler<HTMLElement>;
      };
    }
  }
}
