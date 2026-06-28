import { redirect } from "next/navigation";

// The root "/" is handled by next-intl middleware — this is a safety fallback.
export default function RootPage() {
  redirect("/en");
}
