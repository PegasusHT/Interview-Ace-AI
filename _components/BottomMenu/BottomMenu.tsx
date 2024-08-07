import React from "react";
import Link from "next/link";

const BottomMenu: React.FC = () => {
  return (
    <nav className="w-full bg-green-50 py-4 flex justify-center items-center">
      <ul className="flex gap-8">
        <li>
          <Link href="/about" className="text-green-600 hover:text-green-700">
            About
          </Link>
        </li>
        <li>
          <Link href="/faqs" className="text-green-600 hover:text-green-700">
            FAQs
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-green-600 hover:text-green-700">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomMenu;