import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-11/12">
            <div className="py-1">
              <span className="font-semibold">{item.card.info.name}</span>
              <span className='font-semibold'>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-base">{item.card.info.description}</p>
          </div>
          <div className="w-4/12 py-4 ">
            <div className="absolute">
              <button className="px-10 py-1 mx-8 my-28 rounded-md font-bold bg-white text-green-600 shadow-lg"
              onClick={() => handleAddItem(item)}>
                ADD
              </button>
            </div>
            <img className="w-44 h-32 rounded-lg"
              src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList
