import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import LayoutContent from "../../layouts/content";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import { dataJam, dataMenit } from "../../helper/listHourDropdown";

const TambahPesanan = () => {
  const navigate = useNavigate();
  
  const Content = () => {
    const [input,setInput] = useState({
      name: "",
      jamStart: "",
      price: "",
      quantity: "",
      menitStart: "",
      jamEnd: "",
      menitEnd: "",
      startDate: "",
      endDate: ""
    })

    const handleChange = (e) => {
      setInput({...input, [e.target.name]: e.target.value})
    }

    const handlerSubmit = async (e) => {
      e.preventDefault()
      const body = {
        name: input.name,
        startTime: `${input.jamStart === "" ? "00" : input.jamStart}:${input.menitStart === "" ? "00": input.menitStart}`,
        endTime: `${input.jamEnd === "" ? "00" : input.jamEnd}:${input.menitEnd === "" ? "00": input.menitEnd}`,
        startDate: input.startDate,
        endDate: input.endDate,
        quantity: input.quantity,
        price: input.price
      }

      // console.log(body)
      try {
        await axios.post("http://localhost:8082/pesanan",body);
        navigate("/")
      } catch (error) {
        alert("gagal Tambah Data, Masalah Server")
      }

    }

    return (
      <div className="text-slate-800 flex justify-center pt-20">
        <form
          action="POST"
          className="self-center flex justify-center shadow-lg rounded p-10"
          onSubmit={handlerSubmit}
        >
          <div className="self-start flex flex-col gap-3 justify-start">
            <div className="flex gap-2 self-start justify-start">
              <p className=" text-xl">Name :</p>
              <input
                type="text"
                placeholder="Name"
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
                {dataMenit.map((item,i) => {
                  return <option defaultChecked={i === 0} value={item}>{item}</option>;
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
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 rounded-lg py-1 px-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
    };

  return (
    <LayoutContent
      headerElement={<Header value={`Add Grocery`} />}
      sectionElement={<Content />}
    />
  );
};

export default TambahPesanan;
