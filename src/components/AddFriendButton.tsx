"use client";

import { FC } from "react";
import Button from "./ui/Button";

interface AddFriendButtonProps {}
const AddFriendButton: FC<AddFriendButtonProps> = ({}) => {
  return (
    <form action="" className="max-w-sm">
      <label
        htmlFor="emial"
        className="block text-sm font-md leading-6 text-gray-900"
      >
        Add friend by email
      </label>
      <div className="mt-2 flex gap-4">
        <input
          type="text"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="email@example.com"
        />
        <Button>button</Button>
      </div>
    </form>
  );
};

export default AddFriendButton;