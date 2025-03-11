import AccountDeletionRequestForm from "@/components/AccountDeletionRequestForm";
import Logo from "@/components/shared/Logo";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Account Deletion Request",
    description:
      "Submit a request to delete your account.",
  }
  
export default function AccountDeletionRequest() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <Logo/>
        <h1 className="text-3xl font-bold text-center mb-2 font-sans text-gray-800">Account Deletion Request</h1>
        <p className="text-center text-gray-600 mb-6">Submit your information to request account removal</p>
        <AccountDeletionRequestForm />
      </div>
    </main>
  )
}

