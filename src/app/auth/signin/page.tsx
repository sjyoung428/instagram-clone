import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";
import { authOptions } from "~/app/api/auth/[...nextauth]/route";
import Signin from "~/components/Signin";

interface SignInPageProps {
  searchParams: {
    callbackUrl?: string;
  };
}

const SignInPage = async ({
  searchParams: { callbackUrl },
}: SignInPageProps) => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  const providers = (await getProviders()) ?? {};

  return (
    <section className="flex justify-center mt-24">
      <Signin providers={providers} callbackUrl={callbackUrl ?? "/"} />
    </section>
  );
};

export default SignInPage;
