import { useUser } from "@clerk/clerk-react";
import "quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

function Write() {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div className="">Loading...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div>You should Login</div>;
  }

  return (
    <div className="md:h-[calc(100vh-80)] md:h-[calc(100vh-80)]">
      <h1 className="text-cl font-light ">Create a New Post</h1>
      <form className="flex flex-col gap-6 flex-1 mb-6">
        <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
          Add a cover Image
        </button>
        <input
          type="text"
          placeholder="My Awsome Story"
          className="text-4xl font-semibold bg-transparent outline-none"
        />
        <div className="flex item-center gap-4 ">
          <label htmlFor="">Choose a category:</label>
          <select
            name="cat"
            id=""
            className="p-2 rounded-xl bg-white shadow-md"
          >
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Database</option>
            <option value="seo">Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea
          name="desc"
          id=""
          placeholder="A Short description"
          className="p-2 rounded-xl bg-white shadow-md"
        ></textarea>
        <ReactQuill
          theme="snow"
          className="flex-1 rounded-xl bg-white shadow-md"
        />
        <button className="bg-blue-700 text-white font-medium rounded-xl mt-4">
          send
        </button>
      </form>
    </div>
  );
}

export default Write;
