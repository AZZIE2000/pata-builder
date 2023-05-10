import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { SignIn } from "@clerk/nextjs";
import { api } from "~/utils/api";
import { SignInButton, useUser } from "@clerk/nextjs";
import { useEffect } from "@nebula.js/stardust";
const Home: NextPage = () => {
  const user = useUser();
  const { data } = api.post.getAll.useQuery();
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        {!user.isSignedIn ? (
          <>
            <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
            <SignInButton mode="modal">
              <button className="rounded-md bg-green-600 p-3 text-white">
                Sign in
              </button>
            </SignInButton>
          </>
        ) : (
          <button className="rounded-md bg-red-600 p-3 text-white">
            Sign out
          </button>
        )}
        <div className="flex w-full justify-center">
          {data?.map((post, i) => {
            return (
              <div key={i} className="">
                {post.content}
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Home;
