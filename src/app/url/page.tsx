"use client";
import Button from "@/components/Button";
import { useState } from "react";

function UrlForm() {
  const [url, setUrl] = useState<string>("");
  const [shortUrl, setShortUrl] = useState<string>("");

  function handleUrlFormSubmit() {
    console.log(url);
  }

  function click() {
    console.log("Component button clicked");
  }

  return (
    <div
      className="url-form-wrapper rounded h-1/2 m-auto w-11/12 lg:w-8/12 
        2xl:6/12 border br-white p-8"
    >
      <form
        onSubmit={handleUrlFormSubmit}
        className="url-form w-full h-full relative"
      >
        <div className="input-wrapper flex flex-col">
          <label className="font-bold text-lg text-white/70">
            Enter your Url:
          </label>
          <input
            type="text"
            onChange={(e) => setUrl(e.target.value)}
            className="text-white rounded bg-black border br-white h-10 px-2 font-semibold"
          />
        </div>
        <br />
        <br />
        <br />
        <div className="input-wrapper flex flex-col">
          <label className="font-bold text-lg text-white/70">
            Shortened Url:
          </label>
          <input
            type="text"
            onChange={(e) => setShortUrl(e.target.value)}
            className="text-white rounded bg-black border br-white h-10 px-2 font-semibold"
          />
        </div>
        <Button click={click} label="Shorten Url" />
      </form>
    </div>
  );
}

export default UrlForm;
