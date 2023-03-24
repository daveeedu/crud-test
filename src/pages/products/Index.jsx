import React from 'react'
import WrappedButton from '../../components/Button';
import Input from '../../components/InputOne';
import SearchBar from '../../components/SearchBar';
import Table from '../../components/TableComp';
import HomeLayout from '../../layout/HomeLayout';
import { useSelector, useDispatch } from 'react-redux';
import { deleteRow, editRow } from '../../features/product/productSlice';



const ProductsPage = () => {
  const rows = useSelector(state => state.product.data);
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(deleteRow(index));
  };

  const handleEdit = (index, newData) => {

    dispatch(editRow({ index, data: newData }));
  };

  return (
    <HomeLayout>
        <div className='md:flex mt-14'>
        <h1 className='text-[var(--c-dark-1)] font-bold text-5xl  lg:ml-24 md:ml-10 ml-3 mr-14 md:mr-8 mb-4 md:mb-0'>
          Products
        </h1>
        <SearchBar {...{
          placeholder: "Search for Keywords...",
          wraperClass: "rounded-lg shadow-none border-2 border-[var(--c-dark-1)] ml-3"
        }}
        />

        </div>
        <div className='xl:flex gap-24 mb-24' >
        <Table
            {...{
              dropdownMenu: rows,
              data: rows,
              handleDelete,
              handleEdit: handleEdit
            }}
          />
          <div className='md:w-[500px] w-[95%] m-auto h-[500px] bg-[var(--cc-grey-1)] md:mt-14'>
            <h1 className='text-center mt-14 mb-8 font-bold text-4xl'>Header Text</h1>
            <p className='text-center mb-14 w-[80%] m-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit totam </p>
            <Input {...{
              placeholder: "Name",
              inputClass: "w-[80%] m-auto ",
              inputC: "mb-3"
            }}
            />
            <Input {...{
              placeholder: "Price",
              inputClass: "w-[80%] m-auto",
              inputC: "mb-5"
            }}
            />
            <WrappedButton
          value="Call to Action" 
          onClick={() => alert('Button clicked')}
           wrapperClass="bg-black py-2 px-4 text-[var(--c-white-2)] rounded-md w-[80%] m-auto text-center"
          />

          </div>
        </div>
        
    </HomeLayout>
  )
}

export default ProductsPage