import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  const authEnabled = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?.startsWith("pk_")
    && process.env.CLERK_SECRET_KEY?.startsWith("sk_");

  return (
    <div className="flex min-h-screen items-center justify-center">
      {authEnabled ? <SignUp /> : <p>Configure Clerk keys to enable sign-up.</p>}
    </div>
  );
}
