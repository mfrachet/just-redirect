import { redirect } from "next/navigation";

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{ r: string | string[] | undefined }>;
}) {
  const r = (await searchParams)?.r;

  if (!r) return <h1>Hello!</h1>;

  const decodedBase64 = Buffer.from(r as string, "base64").toString("utf-8");

  return redirect(decodedBase64);
}
