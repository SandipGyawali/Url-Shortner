import UrlForm from "./page";

function UrlLayout() {
  return (
    <div className="url-container flex flex-col items-center h-screen">
      <div className="title-wrapper font-bold text-5xl relative top-40">
        <span>Url Shortner</span>
      </div>
      <UrlForm />
    </div>
  );
}

export default UrlLayout;
