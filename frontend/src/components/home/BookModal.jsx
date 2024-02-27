/* eslint-disable react/prop-types */

import { AiOutlineClose } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { PiBookOpenTextLight } from "react-icons/pi";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className=" fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col relative w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {book.publishYear}
        </h2>
        <h4 className="my-2 text-gray-500">{book._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <p className="mt-4">Anything you want to show</p>
        <p className="my-2">
          {`In the tranquil dawn, as the sun gently kissed the horizon, whispers 
          of possibility danced on the morning breeze. Each dewdrop glistened
          like a tiny jewel, reflecting the promise of a new day. Birds greeted
          the dawn with joyful melodies, their songs weaving a tapestry of hope
          and renewal. In this moment, time seemed to stand still, as nature
          embraced the beauty of existence. Life's symphony played softly,
          orchestrating a harmonious blend of serenity and wonder. Amidst the
          quietude, hearts stirred with anticipation, eager to embark on the
          journey that lay ahead, filled with infinite possibilities.`}
        </p>
      </div>
    </div>
  );
};

export default BookModal;
