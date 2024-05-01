import UrlList from "./page";

function UrlLayout() {
  return (
    <div className="url-container h-fit flex flex-col">
      <div className="title-wrapper flex items-center justify-center text-center my-10 font-bold relative text-5xl">
        <span className="text-center">URLS</span>
      </div>
      <UrlList />
    </div>
  );
}

export default UrlLayout;
