import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import LayoutContent from "../../layouts/content";
import { ReactComponent as HapusIcon } from "../../assets/icons/hapusIcon.svg";
import { ReactComponent as PemesananIcon } from "../../assets/icons/pemesananIcon.svg";
import Alert from "../../components/alert";
import { convertText } from "../../helper/convertText";

const Pesanan = () => {

  const Content = () => {
    const [data, setData] = useState([])
    const [fetch, setFetch] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:8082/pesanan");

          setData(response.data)
        } catch (error) {
          
        }
      }

      if (fetch)
      {
        fetchData()
        setFetch(false)
      }
    },[fetch])

    const handleDelete = async (id) => {
      try {
        await axios.delete("http://localhost:8082/pesanan/" + id);
        setFetch(true)
      } catch (error) {
        alert("gagal delete data")
      }
    }

     

    const handleOnCheck = async(id, bool) => {
      try {
        await axios.post("http://localhost:8082/pesanan/checked/" + id,{isChecked: !bool});
        setFetch(true)
      } catch (error) {
        alert("gagal ubah data")
      }
    }

    const handleEdit = (item) => {
      navigate(`edit/${item._id}`)
    }

    return (
      <div>
        <div className="flex flex-row justify-around flex-wrap text-slate-200 gap-8 overflow-auto max-h-[550px]">
          {data.length === 0 ? (
            <Alert value="No Data" />
          ) : null}
          {data.length !== 0 ? (
            <>
              {data.map((item) => {
                return (
                  <div
                    className={`${
                      item.isChecked ? "bg-gray-400" : "bg-yellow-800"
                    } text-slate-200 shadow-lg rounded-lg w-max p-6 px-16`}
                  >
                    <div className="flex flex-row gap-3">
                      <input
                        type="checkbox"
                        defaultChecked={item.isChecked}
                        className="hover:cursor-pointer"
                        onChange={() => handleOnCheck(item._id, item.isChecked)}
                      />
                      <p
                        className={`${
                          item.isChecked ? "line-through" : ""
                        } text-2xl`}
                      >
                        {item.name}
                      </p>
                    </div>
                    <p
                      className={`${
                        item.isChecked ? "line-through" : ""
                      } text-base`}
                    >
                      Price: Rp.{item.price}.-
                    </p>
                    <p
                      className={`${
                        item.isChecked ? "line-through" : ""
                      }  text-base`}
                    >
                      Quantity: {item.quantity}
                    </p>
                    <p className="text-base">
                      Start : {convertText(item.startDate.toLocaleString())}
                    </p>
                    <p className=" text-base">at {item.startTime}</p>
                    <p className=" text-base">
                      End : {convertText(item.endDate.toLocaleString())}
                    </p>
                    <p className=" text-base">at {item.endTime}</p>
                    <div className="flex justify-evenly mt-4 gap-16">
                      <button
                        disabled={item.isChecked}
                        onClick={() => handleDelete(item._id)}
                        className={`${
                          item.isChecked ? "bg-gray-700" : "bg-red-500 "
                        } rounded-full p-2`}
                      >
                        <HapusIcon />
                      </button>
                      <button
                        disabled={item.isChecked}
                        onClick={() => handleEdit(item)}
                        className={`${
                          item.isChecked ? "bg-gray-700" : "bg-blue-500 "
                        } rounded-full px-3`}
                      >
                        <PemesananIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </>
          ) : null}
        </div>
      </div>
    );
  }

   return (
     <LayoutContent
       headerElement={<Header value={`Grocery Shoping List`} />}
       sectionElement={<Content />}
     />
   );
};

export default Pesanan;
