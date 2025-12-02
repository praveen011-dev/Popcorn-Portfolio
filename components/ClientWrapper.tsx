"use client";

import SplashLoader from "./SplashLoader";
import PageTransition from "./PageTransition";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SplashLoader>
      <PageTransition>{children}</PageTransition>
    </SplashLoader>
  );
}
