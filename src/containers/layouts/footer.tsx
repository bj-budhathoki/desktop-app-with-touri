import React from "react";

export const Footer = () => {
  return (
    <footer className="border-t dark:border-gray-700 dark:text-gray-500 text-center py-3">
      @{new Date().getFullYear()} tauri music app
    </footer>
  );
};
