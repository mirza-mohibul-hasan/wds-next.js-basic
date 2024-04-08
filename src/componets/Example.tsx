"use client";
import { useParams } from "next/navigation";
import React from "react";

const Example = () => {
  const { id } = useParams();
  return <div>Example component of id:{id}</div>;
};

export default Example;
