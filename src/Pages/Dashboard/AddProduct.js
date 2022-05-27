import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const imageStorageKey = "3295545da356d1ab2934662ac0d23d38";

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const product = {
            name: data.name,
            price: data.price,
            quantity: data.quantity,
            minQuantity: data.minQuantity,
            description: data.description,
            image: img,
          };
          console.log(product);

          //send to database
          fetch("http://localhost:5000/product", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((inserted) => {
              toast("product added successfully");
              reset();
            });
        }
      });
  };

  return (
    <div className="min-h-screen mt-6 mb-12">
      <div className="w-1/2 mx-auto">
        <h2 className="text-2xl">Add a Product</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full "
              placeholder="Product Name"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full "
              placeholder="Product Description"
              {...register("description", {
                required: {
                  value: true,
                  message: "Description is required",
                },
              })}
            />
            <label className="label">
              {errors.description?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.description.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              className="input input-bordered w-full "
              placeholder="Product Price"
              {...register("price", {
                required: {
                  value: true,
                  message: "Price is required",
                },
              })}
            />
            <label className="label">
              {errors.price?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.price.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="number"
              className="input input-bordered w-full "
              placeholder="Product Quantity"
              {...register("quantity", {
                required: {
                  value: true,
                  message: "Quantity is required",
                },
              })}
            />
            <label className="label">
              {errors.quantity?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.quantity.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Minimum Quantity</span>
            </label>
            <input
              type="number"
              className="input input-bordered w-full "
              placeholder="Product Min quantity"
              {...register("minQuantity", {
                required: {
                  value: true,
                  message: "Min quantity is required",
                },
              })}
            />
            <label className="label">
              {errors.minQuantity?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.minQuantity.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              className="input w-full "
              {...register("image", {
                required: {
                  value: true,
                  message: "Image is required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>

          <input type="submit" value="add" className="btn w-full" />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
