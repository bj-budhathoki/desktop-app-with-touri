import {
  ArrowRightOnRectangleIcon,
  UsersIcon,
  MusicalNoteIcon,
  ShoppingCartIcon,
  InformationCircleIcon,
  ClipboardDocumentCheckIcon,
  ChatBubbleBottomCenterIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

export const Sidebar = () => {
  return (
    <nav
      className="dark:border-gray-700 sidebar flex flex-col gap-4 bg-[#191d24] fixed h-screen w-[70px] top-0 left-0 z-50 justify-between
      p-3
    "
    >
      <div>
        <div className="dark:text-white px-4 border-gray-700 py-2 uppercase font-bold">
          MUSIC
        </div>
        <ul>
          <li>
            <Link
              href="/music"
              className="flex items-center gap-4 dark:text-white text-sm py-5"
            >
              <MusicalNoteIcon className="h-4 w-4 text-blue-500" />
              Musics
            </Link>
          </li>
          <li>
            <Link
              href="/artists"
              className="flex items-center gap-4 dark:text-white text-sm py-5"
            >
              <UsersIcon className="h-4 w-4 text-blue-500" />
              Artists
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex items-center gap-4 dark:text-white text-sm py-5"
            >
              <ShoppingCartIcon className="h-4 w-4 text-blue-500" />
              Store
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex items-center gap-4 dark:text-white text-sm py-5"
            >
              <ArrowRightOnRectangleIcon className="h-4 w-4 text-blue-500" />
              Login
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <Link
              href="/"
              className="flex items-center gap-4 dark:text-white text-sm py-5"
            >
              <ClipboardDocumentCheckIcon className="h-4 w-4 text-blue-500" />
              Usage Policy
            </Link>
            <Link
              href="/"
              className="flex items-center gap-4 dark:text-white text-sm py-5"
            >
              <InformationCircleIcon className="h-4 w-4 text-blue-500" />
              About
            </Link>
            <Link
              href="/"
              className="flex items-center gap-4 dark:text-white text-sm py-5"
            >
              <ChatBubbleBottomCenterIcon className="h-4 w-4 text-blue-500" />
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
