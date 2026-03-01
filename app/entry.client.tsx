import * as React from "react";
import { StrictMode, startTransition } from "react";
import * as ReactDOM from "react-dom";
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";

if (typeof window !== "undefined") {
  (window as any).React = React;
  (window as any).ReactDOM = ReactDOM;
}

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <HydratedRouter />
    </StrictMode>,
  );
});
