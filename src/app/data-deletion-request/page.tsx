import DataDeletionRequestForm from "@/components/DataDeletionRequestForm";
import Logo from "@/components/shared/Logo";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Data Deletion Request",
  description:
    "Submit a request to delete your account data. We process all data deletion requests.",
}


export default function DataDeletionRequest() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <Logo/>
        <h1 className="text-3xl font-bold text-center mb-2 font-sans text-gray-800">Data Deletion Request</h1>
        <p className="text-center text-gray-600 mb-6">Submit your information to request data removal</p>
        <DataDeletionRequestForm />
      </div>
    </main>
  )
}

