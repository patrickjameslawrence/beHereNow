import React from "react";
import { Menu as HeadlessUIMenu, Transition } from "@headlessui/react";
import { Link } from "gatsby";

import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import {
  ArrowTopRightOnSquareIcon,
  FlagIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import type { Option } from "../types";
import { Options } from "../lib/globals";

import joinClassNames from "../lib/joinClassNames";

export function Menu() {
  const options: Option[] = [
    {
      name: Options.AddToFavorites,
      icon: (
        <StarIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
      ),
    },
    {
      name: Options.Report,
      icon: (
        <FlagIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
      ),
    },
    {
      name: Options.Share,
      icon: (
        <ArrowTopRightOnSquareIcon
          className="mr-3 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-shrink-0 self-center">
        <HeadlessUIMenu as="div" className="relative inline-block text-left">
          <div>
            <HeadlessUIMenu.Button className="-m-2 flex items-center rounded-full p-2 text-gray-400 hover:text-gray-600">
              <span className="sr-only">Open options</span>
              <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
            </HeadlessUIMenu.Button>
          </div>

          <Transition
            as={React.Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <HeadlessUIMenu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right outline outline-1 outline-neutral-900 bg-neutral-950 ring-1 ring-black ring-opacity-5">
              {options.map((option) => {
                return (
                  <HeadlessUIMenu.Item>
                    {({ active }) => (
                      <button
                        className={joinClassNames(
                          active ? "bg-neutral-900 text-neutral-300" : "",
                          "w-full text-neutral-400 text-left flex px-4 py-2 text-sm",
                        )}
                      >
                        {option.icon}
                        <span>{option.name}</span>
                      </button>
                    )}
                  </HeadlessUIMenu.Item>
                );
              })}
            </HeadlessUIMenu.Items>
          </Transition>
        </HeadlessUIMenu>
      </div>
    </>
  );
}
Post.Menu = Menu;

export function Avatar({ src }) {
  return (
    <>
      <div className="flex-shrink-0">
        <img className="h-10 w-10 rounded-full" src={src} alt="Post avatar" />
      </div>
    </>
  );
}
Post.Avatar = Avatar;

export function Author({ name, username }) {
  return (
    <>
      <p className="text-sm">
        <Link to="#" className="font-semibold text-white hover:underline mr-2">
          {name}
        </Link>
        <Link to="#" className="text-gray-500 hover:underline">
          @{username}
        </Link>
      </p>
    </>
  );
}
Post.Author = Author;

function Timestamp({ value }) {
  return (
    <>
      <p className="text-sm text-gray-500">
        <Link to="#" className="hover:underline">
          {value}
        </Link>
      </p>
    </>
  );
}
Post.Timestamp = Timestamp;

export function Content({ value }) {
  return (
    <>
      <p>{value}</p>
    </>
  );
}
Post.Content = Content;

export default function Post({ children }) {
  return (
    <>
      <div className="bg-neutral-950 outline outline-1 outline-neutral-900 px-4 py-5 sm:px-6 shadow">
        {children}
      </div>
    </>
  );
}
