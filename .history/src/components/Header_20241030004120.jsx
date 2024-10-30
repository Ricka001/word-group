import Link from "next/link";
import {
  UserButton,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

export default async function Header() {
  const { userId } = auth();
  return (
    <>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/posts"}>Chats</Link>
      </nav>

      {/* when the user is signed in, i will show the user button */}
      <SignedIn>
        <UserButton />
      </SignedIn>
      {/* we only want to show the SignInButton and SignUpButton when the user is
        signed out */}
      <SignedOut>
        <SignInButton mode="modal">Sign In</SignInButton>
        <SignUpButton>Sign Up</SignUpButton>
      </SignedOut>
    </>
  );
}
