export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center gap-[200px] p-24">
      <p className="text-center text-4xl font-semibold">
        Welcome to Url-Shortner
      </p>
      <div className="grid grid-cols-2 gap-8">
        <a
          href="http://localhost:3000/url"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          // target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="mb-3 text-2xl font-semibold">
            Get All Urls{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h1>
          <p className="m-0 max-w-[30ch] text-sm">
            Navigate to{" "}
            <span className="text-violet-500">
              http://localhost:3000/url&nbsp;
            </span>
            for all existing url!
          </p>
        </a>

        <a
          href="http://localhost:3000/get_specific_url"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          // target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="mb-3 text-2xl font-semibold">
            Get Specific Url{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h1>
          <p className="m-0 max-w-[30ch] text-sm">
            Navigate to{" "}
            <span className="text-violet-500">
              http://localhost:3000/get_specific_url&nbsp;
            </span>
            for all existing url!
          </p>
        </a>

        <a
          href="http://localhost:3000/delete"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          // target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="mb-3 text-2xl font-semibold">
            Delete Specific Url{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h1>
          <p className="m-0 max-w-[30ch] text-sm">
            Navigate to{" "}
            <span className="text-violet-500">
              http://localhost:3000/delete&nbsp;
            </span>
            for all existing url!
          </p>
        </a>

        <a
          href="http://localhost:3000/insert"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          // target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="mb-3 text-2xl font-semibold">
            Insert Url{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h1>
          <p className="m-0 max-w-[30ch] text-sm">
            Navigate to{" "}
            <span className="text-violet-500">
              http://localhost:3000/insert&nbsp;
            </span>
            for all existing url!
          </p>
        </a>
      </div>
    </main>
  );
}
