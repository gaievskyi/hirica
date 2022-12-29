import { Suspense } from "react";

import { render } from "@testing-library/react";
import { SessionProvider } from "next-auth/react";

import type { RenderOptions } from "@testing-library/react";
import type { Session } from "next-auth";
import type { FC, PropsWithChildren, ReactElement } from "react";

type Props = PropsWithChildren & unknown;

const mockSession: Session = {
  expires: `${Date.now() * 100}`,
};

const Providers: FC<Props> = ({ children }) => (
  <Suspense>
    <SessionProvider session={mockSession}>{children}</SessionProvider>
  </Suspense>
);

const mockRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";
export { mockRender as render };
