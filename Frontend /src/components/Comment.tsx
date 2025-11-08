import Image from "../components/Image";

function Comment() {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <Image
          src="instagram.svg"
          className="rounded-3xl object-cover"
          w={40}
          h={30}
          alt="Featured post image"
        />
        <span className="font-medium">John Doe</span>
        <span className="text-sm text-gray-500">2 days ago</span>
      </div>
      <div className="mt-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias,
          quod? Earum molestiae vel nam quam sapiente libero, consectetur,
          beatae placeat voluptatem totam temporibus amet dignissimos ducimus
          iusto iste praesentium ab.
        </p>
      </div>
    </div>
  );
}

export default Comment;
