export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center gap-[200px] p-24">
      <p className="text-center text-4xl font-semibold">
        Welcome to Url-Shortner
      </p>
      <a
        href="http://localhost:3000/url"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        // target="_blank"
        rel="noopener noreferrer"
      >
        <h1 className="mb-3 text-2xl font-semibold">
          Url-Shortner{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h1>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Navigate to http://localhost:3000/url&nbsp;for all existing url!
        </p>
      </a>
    </main>
  );
}
