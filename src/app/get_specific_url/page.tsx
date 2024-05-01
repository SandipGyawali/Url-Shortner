"use client";
import Button from "@/components/Button";
import { useState, FormEvent, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Data = {
  createdAt: string;
  expiresAt: string;
  id: number;
  lastVisited: null | string;
  originalUrl: string;
  shortUrlId: string;
  visitHistory: number;
};

function ShortIdInputForm() {
  const [shortId, setShortId] = useState<string>("");
  const [urlData, setUrlData] = useState<Data | null>(null);

  async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const res = await axios.get(`/api/url/${shortId}`);
      if (res.status === 200) {
        if (res.data.status === "Successful") {
          setUrlData(res.data?.result);
          toast.success("Data Fetch Successful");
        } else {
          toast.warn("Issue while fetching");
        }
      }
    } catch (err) {
      toast.error("Error while processing shortUrlId");
    }
  }

  return (
    <div
      className="url-form-wrapper relative rounded h-fit m-auto mb-8 w-11/12 lg:w-8/12 
        2xl:6/12 border br-white p-8"
    >
      <form
        onSubmit={handleFormSubmit}
        className="url-form relative min-h-[500px]"
      >
        <div className="input-wrapper flex flex-col mt-2">
          <label className="font-bold text-lg mb-2 text-white/70">
            Enter your Short-Url-Id:
          </label>
          <input
            type="text"
            onChange={(e) => setShortId(e.target.value)}
            className="text-white rounded bg-black border br-white h-10 px-2 font-semibold"
            required={true}
          />
        </div>
        <div className="input-wrapper flex flex-col mt-10">
          <span className="font-semibold text-gray-400">Result:</span>
          {urlData !== null ? (
            <>
              [ <br />
              <p className="ml-6">
                <span>id: </span>
                {urlData?.id}
              </p>
              <p>
                <span className="ml-6 pr-2">OriginalUrl: </span>
                <span className="text-violet-400">{urlData?.originalUrl}</span>
              </p>
              <p className="ml-6">
                <span className="pr-2">ShortUrl: </span>
                <span className="text-violet-400">
                  http://localhost:3000/{urlData?.shortUrlId}
                </span>
              </p>
              <p className="ml-6">
                <span className="pr-2">ShortId: </span>
                <span className="text-violet-400">{urlData?.shortUrlId}</span>
              </p>
              <p className="ml-6">
                <span className="pr-2">CreatedAt:</span>
                <span>
                  {urlData?.createdAt
                    ? new Date(urlData?.createdAt).toLocaleString()
                    : ""}
                </span>
              </p>
              <p className="ml-6">
                <span className="pr-2">LastVisited:</span>
                <span>
                  {urlData?.lastVisited
                    ? new Date(urlData?.lastVisited).toLocaleString()
                    : "null"}
                </span>
              </p>
              <p className="ml-6">
                <span className="pr-2">ExpiresAt:</span>
                <span>
                  {urlData?.createdAt
                    ? new Date(urlData?.expiresAt).toLocaleString()
                    : ""}
                </span>
              </p>
              <p className="ml-6">
                <span className="pr-2">Visit-History-Count:</span>
                <span> {urlData?.visitHistory}</span>
              </p>
              ],
              <br />
            </>
          ) : (
            ""
          )}
        </div>
        <div className="btn-wrapper flex flex-col absolute bottom-0">
          <Button style="w-fit bg-yellow-600" label="Find URL" />
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

export default ShortIdInputForm;
