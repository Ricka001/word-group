import { notFound } from "next/navigation";

export default async function IdPage({ params }) {
  if (IdPage.length === 0) {
    notFound();
  }
  const myParams = await params;
  return (
    <>
      <h1>Post Number{myParams.id}</h1>
    </>
  );
}
