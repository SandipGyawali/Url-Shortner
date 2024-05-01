"use client";
import Button from "@/components/Button";
import axios from "axios";
import { FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DeletePage() {
  const [shortId, setShortId] = useState<string>("");

  async function handleForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(shortId);

    try {
      const res = await axios.delete(`/api/url/${shortId}`);

      if (res.status === 200) {
        if (res.data?.error == true) {
          toast.warn(`${res.data?.description?.msg}`);
          return;
        }

        toast.success("Url deleted successful");
      }

      console.log(res.data);
    } catch (err) {
      toast.error("Error deleting the Url");
    }
  }

  return (
    <div
      className="url-form-wrapper relative rounded h-fit m-auto mb-8 w-11/12 lg:w-8/12 
        2xl:6/12 border br-white p-8"
    >
      <form onSubmit={handleForm} className="url-form relative min-h-[400px]">
        <div className="input-wrapper flex flex-col mt-2">
          <label className="font-bold text-lg mb-2 text-white/70">
            Enter the Short-Id-Url:
          </label>
          <input
            type="text"
            onChange={(e) => setShortId(e.target.value)}
            className="text-white rounded bg-black border br-white h-10 px-2 font-semibold"
            required={true}
          />
        </div>
        <br />
        <br />
        <br />
        <div className="btn-wrapper absolute bottom-0 flex flex-col">
          <Button label="Delete Url" style="w-fit bg-red-400" />
          <span>
            Note: To get the short url navigate{" "}
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

export default DeletePage;
