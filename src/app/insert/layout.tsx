import UrlForm from "./page";

function UrlLayout() {
  return (
    <div className="url-container h-fit">
      <div className="title-wrapper flex items-center justify-center text-center my-10 font-bold relative text-4xl">
        <span className="text-center">Shorten Url</span>
      </div>
      <UrlForm />
    </div>
  );
}

export default UrlLayout;
