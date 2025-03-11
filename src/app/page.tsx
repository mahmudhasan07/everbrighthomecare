import Logo from "@/components/shared/Logo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "Our privacy notice and how we handle your personal information",
};

export default function PrivacyNoticePage() {
  return (
    <div className="bg-background min-h-screen py-8">
      <div className="container max-w-3xl mx-auto px-4 md:px-6">
        <div className="space-y-8">
          <div className="space-y-2">
            <Logo/>
            <h1 className="text-3xl font-bold tracking-tight">
              Privacy Notice
            </h1>
            <div className="h-1 w-20 bg-black"></div>
          </div>

          <div className="text-gray-700 mt-8 max-w-none">
            <p className="mb-4">
              We may collect personal information as further described below
              through:
            </p>
            <ol className="list-decimal space-y-1 pl-5">
              <li>Personal Information provided by you</li>
              <li>Automatically Collected Information</li>
              <li>Billing Information</li>
              <li>Cookies and Other Tracking Technologies</li>
              <li>Third Party Analytics Data</li>
              <li>Mobile App-Based Data</li>
              <li>Cross-App and Cross-Device Information</li>
            </ol>

            <p className="mt-4">
              We do not collect or use &quot;sensitive information&quot; and do
              not offer or sell to any third party any data based on sensitive
              consumer information.
            </p>

            <p className="mt-4">
              We collect personal information about you when you request to
              engage with our Services for a variety of uses based on different
              reasons. For example, some of the information we collect from you,
              enable us to deliver the Services/information to you, sometimes we
              are required by law and regulations to collect and process this
              information about you, at other times, we consider it is in our
              legitimate business interests to collect and process this
              information, taking into consideration your privacy rights.
            </p>

            <p className="mt-4">
              For more information regarding this matter, please request our
              Data and privacy policy.
            </p>
          </div>

          <div className="border-t pt-8 mt-8">
            <h2 className="text-xl font-semibold mb-4">
              Privacy Policy Content
            </h2>
            {/* <p className="text-muted-foreground text-gray-700">
              For a complete copy of our privacy policy, please contact us or visit the privacy policy section of our
              website.
            </p> */}
            <p className="text-muted-foreground text-gray-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati animi voluptates nisi dolorum, in exercitationem
              similique quod ipsam! Dignissimos voluptas iure qui veniam ex
              impedit iusto, debitis unde quas.
            </p>
          </div>

          {/* <div className="flex justify-start pt-6">
            <Link href="/" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
              ← Back to Home
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}
