import Image from "../components/Image";
import { Link } from "react-router-dom";
import PostListPage from "./PostListPage";
import PostMenuAction from "../components/PostMenuAction";
import Search from "../components/Search";
import Comments from "../components/comments";

function SinglePostPage() {
  return (
    <div className="flex flex-col gap-8">
      {/*detail*/}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            veritatis.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">John Doe</Link>
            <span>on</span>
            <Link className="text-blue-800"> Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            officia est, laudantium itaque perspiciatis officiis sunt omnis.
            Modi necessitatibus fugiat officia debitis? Tempora, aliquam!
            Voluptates alias enim quis recusandae consequatur?
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image
            src="postImg.jpeg"
            className="rounded-3xl object-cover"
            w={400}
            h={300}
            alt="Featured post image"
          />
        </div>
      </div>
      {/*Content*/}
      <div className="flex flex-col md:flex-row gap-8">
        {/*text*/}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
            laboriosam rerum totam aperiam earum aspernatur tempora voluptatibus
            fugit? Dolore et adipisci dolor expedita tempore odit sapiente, nam
            ipsum nulla enim.Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Quos laboriosam rerum totam aperiam earum aspernatur tempora
            voluptatibus fugit? Dolore et adipisci dolor expedita tempore odit
            sapiente, nam ipsum nulla enim. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Quos laboriosam rerum totam aperiam
            earum aspernatur tempora voluptatibus fugit? Dolore et adipisci
            dolor expedita tempore odit sapiente, nam ipsum nulla enim.Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Quos laboriosam
            rerum totam aperiam earum aspernatur tempora voluptatibus fugit?
            Dolore et adipisci dolor expedita tempore odit sapiente, nam ipsum
            nulla enim.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Quos laboriosam rerum totam aperiam earum aspernatur tempora
            voluptatibus fugit? Dolore et adipisci dolor expedita tempore odit
            sapiente, nam ipsum nulla enim.Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Quos laboriosam rerum totam aperiam
            earum aspernatur tempora voluptatibus fugit? Dolore et adipisci
            dolor expedita tempore odit sapiente, nam ipsum nulla enim. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Quos laboriosam
            rerum totam aperiam earum aspernatur tempora voluptatibus fugit?
            Dolore et adipisci dolor expedita tempore odit sapiente, nam ipsum
            nulla enim.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Quos laboriosam rerum totam aperiam earum aspernatur tempora
            voluptatibus fugit? Dolore et adipisci dolor expedita tempore odit
            sapiente, nam ipsum nulla enim.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
            laboriosam rerum totam aperiam earum aspernatur tempora voluptatibus
            fugit? Dolore et adipisci dolor expedita tempore odit sapiente, nam
            ipsum nulla enim.Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Quos laboriosam rerum totam aperiam earum aspernatur tempora
            voluptatibus fugit? Dolore et adipisci dolor expedita tempore odit
            sapiente, nam ipsum nulla enim. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Quos laboriosam rerum totam aperiam
            earum aspernatur tempora voluptatibus fugit? Dolore et adipisci
            dolor expedita tempore odit sapiente, nam ipsum nulla enim.Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Quos laboriosam
            rerum totam aperiam earum aspernatur tempora voluptatibus fugit?
            Dolore et adipisci dolor expedita tempore odit sapiente, nam ipsum
            nulla enim. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Quos laboriosam rerum totam aperiam earum aspernatur tempora
            voluptatibus fugit? Dolore et adipisci dolor expedita tempore odit
            sapiente, nam ipsum nulla enim.Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Quos laboriosam rerum totam aperiam
            earum aspernatur tempora voluptatibus fugit? Dolore et adipisci
            dolor expedita tempore odit sapiente, nam ipsum nulla enim. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Quos laboriosam
            rerum totam aperiam earum aspernatur tempora voluptatibus fugit?
            Dolore et adipisci dolor expedita tempore odit sapiente, nam ipsum
            nulla enim.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Quos laboriosam rerum totam aperiam earum aspernatur tempora
            voluptatibus fugit? Dolore et adipisci dolor expedita tempore odit
            sapiente, nam ipsum nulla enim.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
            laboriosam rerum totam aperiam earum aspernatur tempora voluptatibus
            fugit? Dolore et adipisci dolor expedita tempore odit sapiente, nam
            ipsum nulla enim.Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Quos laboriosam rerum totam aperiam earum aspernatur tempora
            voluptatibus fugit? Dolore et adipisci dolor expedita tempore odit
            sapiente, nam ipsum nulla enim. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Quos laboriosam rerum totam aperiam
            earum aspernatur tempora voluptatibus fugit? Dolore et adipisci
            dolor expedita tempore odit sapiente, nam ipsum nulla enim.Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Quos laboriosam
            rerum totam aperiam earum aspernatur tempora voluptatibus fugit?
            Dolore et adipisci dolor expedita tempore odit sapiente, nam ipsum
            nulla enim. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Quos laboriosam rerum totam aperiam earum aspernatur tempora
            voluptatibus fugit? Dolore et adipisci dolor expedita tempore odit
            sapiente, nam ipsum nulla enim.Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Quos laboriosam rerum totam aperiam
            earum aspernatur tempora voluptatibus fugit? Dolore et adipisci
            dolor expedita tempore odit sapiente, nam ipsum nulla enim. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Quos laboriosam
            rerum totam aperiam earum aspernatur tempora voluptatibus fugit?
            Dolore et adipisci dolor expedita tempore odit sapiente, nam ipsum
            nulla enim.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Quos laboriosam rerum totam aperiam earum aspernatur tempora
            voluptatibus fugit? Dolore et adipisci dolor expedita tempore odit
            sapiente, nam ipsum nulla enim.
          </p>
        </div>
        {/*menu*/}
        <div className="px-4 h-max sticky top-8">
          <h1>Author</h1>
          <div className="">
            <Image
              src="featured1.jpeg"
              className="rounded-3xl object-cover"
              w={400}
              h={300}
              alt="Featured post image"
            />
            <Link>John Doe</Link>
            <p>Lorem ipsum dolor, sit amet consectetur</p>
            <div className="flex gap-2">
              <Link>
                <Image
                  src="instagram.svg"
                  className="rounded-3xl object-cover"
                  w={40}
                  h={30}
                  alt="Featured post image"
                />
              </Link>
              <Link>
                <Image
                  src="instagram.svg"
                  className="rounded-3xl object-cover"
                  w={40}
                  h={30}
                  alt="Featured post image"
                />
              </Link>
            </div>
          </div>
          <PostMenuAction />
          <h1>Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link to="/posts?cat=web-design" className="underline">
              Web Design
            </Link>
            <Link to="/posts?cat=development" className="underline">
              Development
            </Link>
            <Link to="/posts?cat=databases" className="underline">
              Databases
            </Link>
            <Link to="/posts?cat=seo" className="underline">
              Search Engines
            </Link>
            <Link to="/posts?cat=marketing" className="underline">
              Marketing
            </Link>
          </div>
          <h1>Search</h1>
          <Search />
        </div>
      </div>
      <Comments />
    </div>
  );
}

export default SinglePostPage;
