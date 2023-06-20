import React, { useState } from "react";
import WrappedButton from "../../components/Button";
import Input from "../../components/InputOne";
import SearchBar from "../../components/SearchBar";
import Table from "../../components/TableComp";
import HomeLayout from "../../layout/HomeLayout";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteRow,
  editRow,
  addProduct,
} from "../../features/product/productSlice";

const ProductsPage = () => {
  const rows = useSelector((state) => state.product.data);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");

  const handleDelete = (index) => {
    dispatch(deleteRow(index));
  };

  const handleEdit = (index, newData) => {
    dispatch(editRow({ index, data: newData }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setError("");
      setName(value);
    } else if (name === "price") {
      setError("");
      setPrice(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) {
      setError(
        price
          ? "Name field cannot be empty"
          : name
          ? "Price field cannot be empty"
          : "Fields cannot be empty"
      );
    } else {
      const newData = {
        name: name,
        price: price,
      };
      dispatch(addProduct(newData));
      setName("");
      setPrice("");
    }
  };

  return (
    <HomeLayout>
      <div className="md:flex mt-14">
        <h1 className="text-[var(--c-dark-1)] font-bold text-5xl  lg:ml-24 md:ml-10 ml-3 mr-14 md:mr-8 mb-4 md:mb-0">
          Products
        </h1>
        <SearchBar
          {...{
            placeholder: "Search for Keywords...",
            wraperClass:
              "rounded-lg shadow-none border-2 border-[var(--c-dark-1)] ml-3",
          }}
        />
      </div>
      <div className="xl:flex gap-24 mb-24">
        <Table
          {...{
            dropdownMenu: rows,
            data: rows,
            handleDelete: handleDelete,
            handleEdit: handleEdit,
          }}
        />
        <form
          className="md:w-[500px] w-[95%] m-auto h-[500px] bg-[var(--cc-grey-1)] mt-14"
          onSubmit={handleSubmit}
        >
          <h1 className="text-center pt-10 mb-8 font-bold text-4xl">
            Header Text
          </h1>
          <p className="text-center mb-14 w-[80%] m-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            totam{" "}
          </p>
          <Input
            placeholder="Name"
            inputClass="w-[80%] m-auto "
            inputC="mb-3"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Price"
            inputClass="w-[80%] m-auto"
            inputC=""
            name="price"
            value={price}
            onChange={handleInputChange}
          />
          {error && (
            <p className="error text-[red] text-[13px] text-center mb-5">
              {error}
            </p>
          )}
          <WrappedButton
            value="Add Product"
            type="submit"
            wrapperClass="bg-black py-2 px-4 mt-8 text-[var(--c-white-2)] rounded-md w-[80%] m-auto text-center"
          />
        </form>
      </div>
    </HomeLayout>
  );
};

export default ProductsPage;
