import React from "react";
import { useParams } from "react-router-dom";

export default function VideoDetail() {
  const { keyword } = useParams();

  return <div className="content px-6 pt-[100px]">VideoDetail {keyword}</div>;
}
