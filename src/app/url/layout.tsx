import UrlList from "./page";

function UrlLayout() {
  return (
    <div className="url-container h-fit flex flex-col">
      <div className="title-wrapper flex items-center justify-center text-center my-10 font-bold relative text-4xl">
        <span className="text-center">URLS</span>
      </div>
      <UrlList />
    </div>
  );
}

export default UrlLayout;
