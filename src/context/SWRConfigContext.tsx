"use client";

import { SWRConfig } from "swr";

interface SWRConfigContextProps {
  children: React.ReactNode;
}

const SWRConfigContext = ({ children }: SWRConfigContextProps) => {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => fetch(url).then((res) => res.json()),
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default SWRConfigContext;
