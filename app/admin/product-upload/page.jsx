"use client"
import React, { useState } from "react";
import LoadingBar from "@/components/LoadingBar";
import Image from "next/image";

const ProductUploadForm = () => {
  const [loadingImage1, setLoadingImage1] = useState(false);
  const [loadingImage2, setLoadingImage2] = useState(false);
  const [loadingImage3, setLoadingImage3] = useState(false);
  const [loadingImage4, setLoadingImage4] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    newPrice: 0,
    oldPrice: 0,
    extraOffer: 0,
    featureProduct: false,
    brand: "",
    country: "",
    lifeCycle: "",
    image1: { url: "", public_id: "" },
    image2: { url: "", public_id: "" },
    image3: { url: "", public_id: "" },
    image4: { url: "", public_id: "" },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDeleteImage = async (publicId, name) => {
    if (name === "image1") setLoadingImage1(true);
    else if (name === "image2") setLoadingImage2(true);
    else if (name === "image3") setLoadingImage3(true);
    else if (name === "image4") setLoadingImage4(true);

    try {
      const response = await fetch("/api/upload", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ public_id: publicId }),
      });

      if (!response.ok) throw new Error("Failed to delete image.");

      if (name === "image1") setLoadingImage1(false);
      else if (name === "image2") setLoadingImage2(false);
      else if (name === "image3") setLoadingImage3(false);
      else if (name === "image4") setLoadingImage4(false);

      const result = await response.json();

      if (result) {
        setFormData((prev) => ({
          ...prev,
          [name]: {
            url: "",
            public_id: "",
          },
        }));
      }
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  const handleImageUpload = async (e, name) => {
    if (name === "image1") setLoadingImage1(true);
    else if (name === "image2") setLoadingImage2(true);
    else if (name === "image3") setLoadingImage3(true);
    else if (name === "image4") setLoadingImage4(true);

    if (e.target.files && e.target.files[0]) {
      const form = new FormData();
      form.append("image", e.target.files[0]);

      try {
        const response = await fetch("/api/upload", {
          method: "POST",
          body: form,
        });

        if (!response.ok) throw new Error("Network response was not ok.");

        const result = await response.json();

        if (result.url && result.public_id) {
          if (name === "image1") setLoadingImage1(false);
          else if (name === "image2") setLoadingImage2(false);
          else if (name === "image3") setLoadingImage3(false);
          else if (name === "image4") setLoadingImage4(false);

          setFormData((prev) => ({
            ...prev,
            [name]: {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Network response was not ok.");

      const result = await response.json();
      alert("Product upload successful");

      setFormData({
        name: "",
        description: "",
        newPrice: 0,
        oldPrice: 0,
        extraOffer: 0,
        featureProduct: false,
        brand: "",
        country: "",
        lifeCycle: "",
        image1: { url: "", public_id: "" },
        image2: { url: "", public_id: "" },
        image3: { url: "", public_id: "" },
        image4: { url: "", public_id: "" },
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="px-6 md:px-16 lg:px-28 w-full py-9 h-[100vh] overflow-auto scrollbar-thin">
      <h2 className="font-bold mb-4 text-2xl md:text-3xl text-slate-700">Upload Product</h2>
      <hr />
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-1 text-sm font-semibold text-slate-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                id="name"
                placeholder="Product Name"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="newPrice" className="mb-1 text-sm font-semibold text-slate-700">New Price</label>
              <input
                type="number"
                name="newPrice"
                id="newPrice"
                value={formData.newPrice}
                placeholder="New Price"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="oldPrice" className="mb-1 text-sm font-semibold text-slate-700">Old Price</label>
              <input
                type="number"
                name="oldPrice"
                value={formData.oldPrice}
                id="oldPrice"
                placeholder="Old Price"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="extraOffer" className="mb-1 text-sm font-semibold text-slate-700">Extra Offer</label>
              <input
                type="number"
                name="extraOffer"
                value={formData.extraOffer}
                id="extraOffer"
                placeholder="Extra Offer"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="description" className="mb-1 text-sm font-semibold text-slate-700">Description</label>
            <textarea
              name="description"
              id="description"
              placeholder="Product Description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <label className="flex items-center mt-4">
          <input
            type="checkbox"
            name="featureProduct"
            checked={formData.featureProduct}
            onChange={(e) => setFormData((prev) => ({ ...prev, featureProduct: e.target.checked }))}
            className="mr-2"
          />
          Feature Product
        </label>

        <div className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label htmlFor="brand" className="mb-1 text-sm font-medium text-gray-700">Brand</label>
              <input
                type="text"
                name="brand"
                id="brand"
                placeholder="Brand"
                value={formData.brand}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="country" className="mb-1 text-sm font-medium text-gray-700">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                id="country"
                placeholder="Country"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="lifeCycle" className="mb-1 text-sm font-medium text-gray-700">Life Cycle</label>
              <input
                type="text"
                name="lifeCycle"
                value={formData.lifeCycle}
                id="lifeCycle"
                placeholder="Life Cycle"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {["image1", "image2", "image3", "image4"].map((name, index) => (
              <div key={name} className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-700">Upload Image {index + 1}</label>
                {formData[name].url ? (
                  <div className="relative">
                    <Image
                      src={formData[name].url}
                      alt={`Uploaded Image ${index + 1}`}
                      width={150}
                      height={150}
                      className="object-cover w-full h-full"
                    />
                    <button
                      type="button"
                      onClick={() => handleDeleteImage(formData[name].public_id, name)}
                      className="absolute top-0 right-0 p-2 bg-red-600 text-white rounded"
                    >
                      {index === 0 ? (loadingImage1 ? "Deleting..." : "Delete") : (index === 1 ? (loadingImage2 ? "Deleting..." : "Delete") : (index === 2 ? (loadingImage3 ? "Deleting..." : "Delete") : (loadingImage4 ? "Deleting..." : "Delete")))}
                    </button>
                  </div>
                ) : (
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, name)}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductUploadForm;
