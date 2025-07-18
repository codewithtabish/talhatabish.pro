// pages/privacy-policy.tsx (or wherever you want to use it)

import PrivacyPolicyComp from "@/components/custom/(privacy)/privacy-policy-comp";


export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;  // You can get the language from context, router, or props
  const lang = "en"; // or "ur", "ar", etc.

  return (
    <main>
      <PrivacyPolicyComp lang={locale} />
    </main>
  );
}
