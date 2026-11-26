import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

function ErrorLayout({ title, message }: { title: string; message: string }) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-[#8ab4ff]">
        Renz Frederick P. Bañas
      </p>
      <h1 className="mt-4 text-4xl font-bold text-white">{title}</h1>
      <p className="mt-3 max-w-md text-gray-400">{message}</p>
      <Link
        to="/"
        className="mt-8 inline-block rounded-lg bg-gray-700 px-4 py-2 text-white transition-colors hover:bg-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Back home
      </Link>
    </main>
  );
}

export function NotFound() {
  return (
    <ErrorLayout
      title="Page not found"
      message="That page does not exist. Head back home to explore the portfolio."
    />
  );
}

export default function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <ErrorLayout
        title={error.status === 404 ? "Page not found" : `Error ${error.status}`}
        message={error.statusText || "Something unexpected happened while loading this page."}
      />
    );
  }

  return (
    <ErrorLayout
      title="Something went wrong"
      message="An unexpected error occurred. Please try again or head back home."
    />
  );
}
