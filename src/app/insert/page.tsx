"use client";
import Button from "@/components/Button";
import { useState, FormEvent } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UrlForm() {
  const [url, setUrl] = useState<string>("");
  const [shortUrl, setShortUrl] = useState<string>("");

  async function handleUrlFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const res = await axios.post("/api/url", { url: url });

      if (res.status === 200) {
        if (res.data?.status === "Successful") {
          setShortUrl(res.data?.description?.shortUrlId);
          toast.success("Short-Url created Successfully");
        }
      }
      console.log(res.data);
    } catch (err) {
      toast.error("Error while creating a short url");
    }
  }

  return (
    <div
      className="url-form-wrapper relative rounded h-fit m-auto mb-8 w-11/12 lg:w-8/12 
        2xl:6/12 border br-white p-8"
    >
      <form
        onSubmit={handleUrlFormSubmit}
        className="url-form relative min-h-[500px]"
      >
        <div className="input-wrapper flex flex-col mt-2">
          <label className="font-bold text-lg mb-2 text-white/70">
            Enter your Url:
          </label>
          <input
            type="text"
            onChange={(e) => setUrl(e.target.value)}
            className="text-white rounded bg-black border br-white h-10 px-2 font-semibold"
            required={true}
          />
        </div>
        <br />
        <br />
        <br />
        <div className="input-wrapper flex flex-col">
          <label className="font-bold flex gap-4 text-lg text-white/70">
            <span>(Result)Shortened Url:</span>
            <span className="text-violet-400">
              {shortUrl != "" ? `http://localhost:3000/${shortUrl}` : ""}
            </span>
          </label>
          <p className="font-bold my-2 ml-4"></p>
        </div>
        <div className="btn-wrapper flex flex-col absolute bottom-0">
          <Button style="w-fit" label="Shorten Url" />
          <span>
            Note: To verify the url::{" "}
            <a href="http://localhost:3000/url" className="text-violet-400">
              Click Here
            </a>
          </span>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default UrlForm;
