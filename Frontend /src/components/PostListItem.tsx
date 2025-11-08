import Image from "./Image";
import { Link } from "react-router-dom";

function PostListItem() {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* image */}
      <div className="md:hidden xl:block">
        <Image
          src="featured1.jpeg"
          className="rounded-3xl object-cover"
          w={400}
          h={300}
          alt="Featured post image"
        />
      </div>
      {/* Details */}
      <div className="">
        <Link to="/test" className="text-4xl font-semibold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          suscipit
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link to="/test" className="text-blue-800">
            John Doe
          </Link>
          <span>On</span>
          <Link to="/test" className="text-blue-800">
            Web Design
          </Link>
          <span> 2 days ago</span>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          voluptas harum aliquam quis ab odit veritatis dolore natus illum sunt
          eligendi, debitis eum. Excepturi repellendus eum laborum sint fugit
          officiis?
        </p>
        <Link to="/test" className="underline text-blue-800 text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default PostListItem;
