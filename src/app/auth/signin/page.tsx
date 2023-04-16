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

  console.log(callbackUrl, "123");

  const providers = (await getProviders()) ?? {};

  return (
    <section className="flex justify-center mt-[30%]">
      <Signin providers={providers} callbackUrl={callbackUrl ?? "/"} />
    </section>
  );
};

export default SignInPage;
