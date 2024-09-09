"use client"

import { useProductStore } from "@/usestore/store";

const Quentity = () => {
    const { quantity, increase, decrease } = useProductStore();
  return (
    <div className='quemtitySize flex gap-2 items-center mt-3'>
        <p  className='text-sm bg-sky-200 border-white border   border-dashed py-1 px-3'>Quantity & Size </p>
        <span> : </span>
      <button className="bg-gray-300 py-1 px-3 rounded"  onClick={decrease}>-</button>
            <p className="px-3">{quantity} </p>
            <button className="bg-gray-300 py-1 px-3 rounded" onClick={increase}>+</button>
    </div>
  )
}

export default Quentity
