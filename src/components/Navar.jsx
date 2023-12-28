import React, { useEffect, useState } from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Navar() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => {
    console.log("1");
    setText(keyword || "");
  }, [keyword]);

  return (
    <div className="fixed w-full flex z-50">
      <nav className="w-full flex item-center bg-white p-5 min-h-[66px]">
        <Link to="/" className="flex items-center">
          <BsYoutube className="text-4xl mt-1 text-red-600 text-brand" />
          <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
        </Link>
        <form onSubmit={handleSubmit} className="w-full flex justify-center">
          <input
            type="text"
            placeholder="youtube video search.."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-7/12 p-2 border-2 text-gray-500"
          />
          <button className="bg-zinc-200 px-4">
            <BsSearch />
          </button>
        </form>
        <div>다크모드</div>
      </nav>
    </div>
  );
}
