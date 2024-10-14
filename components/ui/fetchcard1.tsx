"use client";
import { useEffect, useState } from "react";

export default function FetchCard1() {
  const [imageUrl, setImageUrl] = useState(
    "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
  );  

  const [message, setMessage] = useState("NO MESSAGE");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ some: "data" }),
    }) //   fetch("http://localhost:3000/api/test")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      });
  }, []);

  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={message} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title flex justify-center">DALL-e 3</h2>
        </div>
      </div>
    </>
  );
}
