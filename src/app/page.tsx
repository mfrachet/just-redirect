import { redirect } from "next/navigation";

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{ r: string | string[] | undefined }>;
}) {
  const r = (await searchParams)?.r;

  if (!r)
    return (
      <html>
        <body>
          <h1>Hello!</h1>
        </body>
      </html>
    );

  return redirect(r as string);
}
