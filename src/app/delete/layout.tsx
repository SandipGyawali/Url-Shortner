import DeletePage from "./page";

function DeleteLayout() {
  return (
    <div className="url-container h-fit">
      <div className="title-wrapper flex items-center justify-center text-center my-10 font-bold relative text-4xl">
        <span className="text-center">Delete Url Based on Short Url Id</span>
      </div>
      <DeletePage />;
    </div>
  );
}

export default DeleteLayout;
