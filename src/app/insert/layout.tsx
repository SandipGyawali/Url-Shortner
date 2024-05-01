import UrlForm from "./page";

function UrlLayout() {
  return (
    <div className="url-container h-fit">
      <div className="title-wrapper flex items-center justify-center text-center my-10 font-bold relative text-5xl">
        <span className="text-center">Shorten Url</span>
      </div>
      <UrlForm />
    </div>
  );
}

export default UrlLayout;
