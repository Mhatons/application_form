import React from "react";
import { Link } from "react-router-dom";



export default function Form({ title, children }) {
  return (
    <div className="relative flex justify-center">
      <div
        className={`w-[90%] hideScrollBar overflow-y-auto max-h-[70vh] rounded-md hover:bg-slate-50 m-auto shadow-md border px-8 py-10 absolute  border-zinc-200`}
      >
        <header
          className={`${
            title === "Login Form" ? "bg-amber-700" : "bg-[#112DAB]"
          } font-bold mb-5 text-white text-center py-2`}
        >
          {title}
        </header>
        {children}
        <footer className="text-sm text-zinc-500 text-center pt-6">
          {title !== "Login Form"
            ? "Have an account?"
            : "Don't have an account?"}{" "}
          {title !== "Login Form" ? (
            <Link to="/login" className="hover:text-[#112DAB] hover:font-semibold">
              Login
            </Link>
          ) : (
            <Link to="/reg" className="hover:text-[#112DAB] hover:font-semibold">
              Sign up
            </Link>
          )}
        </footer>
      </div>
    </div>
  );
}
