"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import LoadingBar from "@/components/LoadingBar";
import { useProductStore } from "@/usestore/store";

const Page = () => {
  const { loading, feedBack, fetchFeedback, deleteFeedback, insertFeedback } = useProductStore();
  const [formData, setFormData] = useState({
    _id: "",
    name: "",
    image: { url: "", public_id: "" },
    description: "",
  });

  const [loadings, setLoadings] = useState(false);
  const [loadingsdeletefeedback, setLoadingsdeletefeedback] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = async (e) => {
    setLoadings(true);
    if (e.target.files && e.target.files[0]) {
      const form = new FormData();
      form.append("image", e.target.files[0]);

      try {
        const response = await fetch("/api/upload", {
          method: "POST",
          body: form,
        });

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        const result = await response.json();
        setLoadings(false);
        if (result.url && result.public_id) {
          setFormData((prev) => ({
            ...prev,
            image: {
              url: result.url,
              public_id: result.public_id,
            },
          }));
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    } else {
      console.log("No file selected.");
    }
  };

  const handleDeleteImage = async (publicId) => {
    setLoadings(true);

    try {
      const response = await fetch("/api/upload", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ public_id: publicId }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete image.");
      }

      setLoadings(false);
      setFormData((prevData) => ({
        ...prevData,
        image: { url: "", public_id: "" },
      }));
    } catch (error) {
      console.error("Error deleting image:", error);
    } finally {
      setLoadings(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { _id, ...restData } = formData;

    try {
      const response = await fetch("/api/feed-back", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(restData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const result = await response.json();
      insertFeedback(result.data);

      setFormData({ _id: "", name: "", image: { url: "", public_id: "" }, description: "" });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDelete = async (feedbackId) => {
    setLoadingsdeletefeedback(feedbackId);
    const result = await deleteFeedback(feedbackId);
    if (result) {
      setLoadingsdeletefeedback("");
      alert("Deleted successfully");
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, [fetchFeedback]);

  return (
    <div className="flex w-full mx-auto p-4">
      {/* Feedback List */}
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-4">Customer Feedback List</h3>
        <div className="w-full flex flex-wrap gap-3">
          {feedBack &&
            feedBack.map((feedback, index) => (
              <div key={index} className="p-4 bg-white w-72 rounded-lg shadow-md border flex flex-col items-start relative">
                {loadingsdeletefeedback !== "" && loadingsdeletefeedback === feedback._id && (
                  <div style={{ background: "rgba(0,0,0,0.5)" }} className="absolute z-20 top-0 start-0 w-full h-full flex justify-center items-center">
                    <LoadingBar />
                  </div>
                )}
                <div className="w-full relative h-48">
                  <Image
                    src={feedback.image.url}
                    layout="fill"
                    alt={feedback.name}
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                <div className="flex-1 mt-2">
                  <h4 className="text-lg font-semibold">{feedback.name}</h4>
                  <p className="text-gray-700">{feedback.description}</p>
                  <p className="text-gray-700">
                    {feedback.createdAt
                      ? `Posted on: ${new Date(feedback.createdAt).toLocaleDateString("en-IN")}`
                      : "Date not available"}
                  </p>
                </div>
                <button onClick={() => handleDelete(feedback._id)} className="bg-red-500 text-white py-1 mt-3 px-4 rounded-lg hover:bg-red-600 focus:outline-none">
                  Delete
                </button>
              </div>
            ))}
        </div>
      </div>

      {/* Feedback Form */}
      <form onSubmit={handleSubmit} className="mb-8 p-4 bg-white rounded-lg border">
        <h2 className="text-xl font-semibold mb-4">Customer Feedback</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Customer Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none shadow-lg"
            placeholder="Enter your name"
            required
          />
        </div>

        {loadings ? (
          <div className="border border-dashed w-[220px] h-[220px] flex justify-center items-center">
            <LoadingBar />
          </div>
        ) : (
          <div className="flex flex-col items-center bg-slate-300 pt-2 rounded rounded-t-lg shadow-lg">
            <label className="mb-2 text-base text-gray-600 text-[13px] font-thin">Upload Image</label>

            {formData.image.url ? (
              <div className="relative w-full">
                <Image
                  src={formData.image.url}
                  alt="feedback"
                  width={220}
                  height={220}
                  objectFit="cover"
                  className="rounded border"
                />
                <button
                  type="button"
                  onClick={() => handleDeleteImage(formData.image.public_id)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full focus:outline-none"
                >
                  ✕
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => document.getElementById("image")?.click()}
                className="flex items-center justify-center w-full h-[220px] bg-gray-100 border border-dashed border-gray-300 rounded hover:bg-gray-200 focus:outline-none"
              >
                <span className="text-3xl text-gray-500">+</span>
              </button>
            )}
            <input
              type="file"
              accept="image/*"
              name="image"
              id="image"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2 mt-3">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none shadow-lg"
            placeholder="Enter your feedback"
            rows={4}
            required
          ></textarea>
        </div>

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Page;
