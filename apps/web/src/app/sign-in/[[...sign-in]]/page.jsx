import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  const authEnabled = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?.startsWith("pk_")
    && process.env.CLERK_SECRET_KEY?.startsWith("sk_");

  return (
    <div className="flex min-h-screen items-center justify-center">
      {authEnabled ? <SignIn /> : <p>Configure Clerk keys to enable sign-in.</p>}
    </div>
  );
}
