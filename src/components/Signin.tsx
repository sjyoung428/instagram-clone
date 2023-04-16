"use client";

import { ClientSafeProvider, signIn } from "next-auth/react";
import ColorButton from "./ui/ColorButton";

interface SigninProps {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
}

const Signin = ({ providers, callbackUrl }: SigninProps) => {
  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <ColorButton
          key={id}
          text={`Sign in with ${name}`}
          onClick={() => signIn(id, { callbackUrl })}
          size="big"
        />
      ))}
    </>
  );
};

export default Signin;
