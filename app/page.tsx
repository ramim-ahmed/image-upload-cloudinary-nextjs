/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client"
import { CldUploadWidget } from "next-cloudinary";
import React, { useState } from "react";

export default function Home() {
  const [resource, setResource] = useState('')
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <h1>Upload Image In Cloudinary</h1>
    <div className="mt-4">
    <CldUploadWidget onSuccess={(result , { widget }) => {
   setResource(result?.info['url']);
  }} uploadPreset="eyq3nbf4">
        {({ open }) => {
          return <button onClick={() => open()} className=" bg-indigo-700 text-white px-6 py-1 rounded-md">Upload an Image</button>;
        }}
      </CldUploadWidget>
    </div>
    <div>
      <img className="mt-5" width={300} height={300} src={resource} alt="" />
    </div>
    </div>
  );
}
