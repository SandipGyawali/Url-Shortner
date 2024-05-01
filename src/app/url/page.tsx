"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ResultObj = {
  createdAt: string;
  expiresAt: Date;
  id: number;
  originalUrl: string;
  shortUrlId: string;
  visitHistory: number;
  lastVisited: string;
};

function UrlList() {
  const [urls, setUrls] = useState<Array<ResultObj>>([]);

  useEffect(() => {
    async function fetchList() {
      try {
        const res = await axios.get("/api/url");
        if (res.status === 200) {
          setUrls(res.data?.result);
          toast.success("Data fetched successfully");
        }
      } catch (err) {
        toast.error("Error fetching data!");
      }
    }

    fetchList();
  }, []);

  return (
    <div
      className="url-form-wrapper relative rounded h-fit m-auto mb-8 w-11/12 lg:w-8/12 
        2xl:6/12 border br-white p-8"
    >
      <div className="url-form relative min-h-[500px]">
        <div className="input-wrapper flex flex-col">
          <>
            {urls.map((url, index) => (
              <div key={index} className="my-4 py-1">
                [ <br />
                <p className="ml-6">
                  <span>id: </span>
                  {url?.id}
                </p>
                <p>
                  <span className="ml-6 pr-2">OriginalUrl: </span>
                  <span className="text-violet-400">{url?.originalUrl}</span>
                </p>
                <p className="ml-6">
                  <span className="pr-2">ShortUrl: </span>
                  <span className="text-violet-400">
                    http://localhost:3000/{url?.shortUrlId}
                  </span>
                </p>
                <p className="ml-6">
                  <span className="pr-2">CreatedAt:</span>
                  <span>
                    {url?.createdAt
                      ? new Date(url?.createdAt).toLocaleString()
                      : ""}
                  </span>
                </p>
                <p className="ml-6">
                  <span className="pr-2">LastVisited:</span>
                  <span>
                    {url?.lastVisited
                      ? new Date(url?.lastVisited).toLocaleString()
                      : "null"}
                  </span>
                </p>
                <p className="ml-6">
                  <span className="pr-2">ExpiresAt:</span>
                  <span>
                    {url?.createdAt
                      ? new Date(url?.expiresAt).toLocaleString()
                      : ""}
                  </span>
                </p>
                <p className="ml-6">
                  <span className="pr-2">Visit-History-Count:</span>
                  <span> {url?.visitHistory}</span>
                </p>
                ],
                <br />
              </div>
            ))}
          </>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default UrlList;
