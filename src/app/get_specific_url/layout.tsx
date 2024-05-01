import ShortIdInputForm from "./page";

function GetUrlOnIdLayout() {
  return (
    <div className="url-container h-fit">
      <div className="title-wrapper flex items-center justify-center text-center my-10 font-bold relative text-4xl">
        <span className="text-center">Get Url Based on ShortId</span>
      </div>
      <ShortIdInputForm />
    </div>
  );
}

export default GetUrlOnIdLayout;
