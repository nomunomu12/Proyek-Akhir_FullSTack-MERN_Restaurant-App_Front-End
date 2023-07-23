import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { dataJam, dataMenit } from '../../helper/listHourDropdown';

const FormEdit = () => {
    const [fetch, setFetch] = useState(true)
  const [input, setInput] = useState({
    name: "",
    jamStart: "",
    menitStart: "",
    jamEnd: "",
    menitEnd: "",
    startDate: "",
    quantity: "",
    price: "",
    endDate: "",
  });

  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    const fectData = async () => {
        try {
          const response = await axios.get(`http://localhost:8082/pesanan/${id}`);
          setInput({
            ...input,
            name: response.data.name,
            quantity: response.data.quantity,
            price: response.data.price,
          });
        } catch (error) {
            
        }
    }

    if(fetch) 
    {
        fectData()
        setFetch(false)
    }
  },[fetch])

    
     const handleChange = (e) => {
       setInput({ ...input, [e.target.name]: e.target.value });
     };

       const handlerSubmit = async (e) => {
         e.preventDefault();
         const body = {
           _id: id,
           name: input.name,
           startTime: `${input.jamStart === "" ? "00" : input.jamStart}:${
             input.menitStart === "" ? "00" : input.menitStart
           }`,
           endTime: `${input.jamEnd === "" ? "00" : input.jamEnd}:${
             input.menitEnd === "" ? "00" : input.menitEnd
           }`,
           startDate: input.startDate,
           endDate: input.endDate,
           quantity: input.quantity,
           price: input.price,
         };

         console.log(body);
          try {
            await axios.post("http://localhost:8082/pesanan/edit", body);
            navigate("/");
          } catch (error) {
            alert("gagal Tambah Data, Masalah Server");
          }
       };

  return (
    <div className="bg-slate-200 min-h-screen flex justify-center">
      <div className="text-slate-800 flex self-center bg-white shadow-lg rounded-lg p-5">
        <form
          action="POST"
          className="self-start flex justify-start"
          onSubmit={handlerSubmit}
        >
          <div className="self-start flex flex-col gap-3 justify-start">
            <div className="flex gap-2 self-start justify-start">
              <p className=" text-xl">Name :</p>
              <input
                type="text"
                placeholder="Nama"
                name="name"
                onChange={handleChange}
                value={input.name}
                required
                className="border border-slate-300 py-1 px-2 rounded"
              />
            </div>
            <div className="flex gap-2 self-start justify-start">
              <p className=" text-xl">Price :</p>
              <input
                type="number"
                placeholder="Price"
                name="price"
                onChange={handleChange}
                value={input.price}
                required
                className="border border-slate-300 py-1 px-2 rounded"
              />
            </div>
            <div className="flex gap-2 self-start justify-start">
              <p className=" text-xl">Quantity :</p>
              <input
                type="number"
                placeholder="Quantity"
                name="quantity"
                onChange={handleChange}
                value={input.quantity}
                required
                className="border border-slate-300 py-1 px-2 rounded"
              />
            </div>
            <div className="flex gap-2 self-start justify-start">
              <p className=" text-xl">Start :</p>
              <input
                type="date"
                name="startDate"
                required
                onChange={handleChange}
                className="border border-slate-300 py-1 px-2 rounded"
              />
              <p className=" text-xl">Hours :</p>
              <select
                name="jamStart"
                onChange={handleChange}
                className="border border-gray-400 rounded p-2"
              >
                {dataJam.map((item) => {
                  return <option value={item}>{item}</option>;
                })}
              </select>
              <p className=" text-xl">Minutes :</p>
              <select
                name="menitStart"
                onChange={handleChange}
                defaultValue="00"
                className="border border-gray-400 rounded p-2"
              >
                {dataMenit.map((item, i) => {
                  return (
                    <option defaultChecked={i === 0} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex gap-2 self-start justify-start">
              <p className=" text-xl">End :</p>
              <input
                type="date"
                name="endDate"
                required
                onChange={handleChange}
                className="border border-slate-300 py-1 px-2 rounded"
              />
              <p className=" text-xl">Hours :</p>
              <select
                name="jamEnd"
                onChange={handleChange}
                className="border border-gray-400 rounded p-2"
              >
                {dataJam.map((item) => {
                  return <option value={item}>{item}</option>;
                })}
              </select>
              <p className=" text-xl">Minutes :</p>
              <select
                name="menitEnd"
                onChange={handleChange}
                defaultValue="00"
                className="border border-gray-400 rounded p-2"
              >
                {dataMenit.map((item) => {
                  return <option value={item}>{item}</option>;
                })}
              </select>
            </div>
            <div className="flex justify-evenly">
              <button
                className="bg-red-500 hover:bg-red-600 text-black font-bold rounded-lg py-1 px-2"
                onClick={() => navigate("/")}
                type="button"
              >
                cancel
              </button>
              <button
                type="submit"
                className="bg-green-500 text-white font-bold hover:bg-green-600 rounded-lg py-1 px-2"
              >
                Edit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormEdit