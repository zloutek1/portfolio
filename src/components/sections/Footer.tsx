import React from "react";

export function Footer(): React.JSX.Element {
  return (
    <footer className="py-8 bg-black text-white text-center border-t border-white/10">
      <p className="opacity-70">© {new Date().getFullYear()} Tomas Ljutenko. All rights reserved.</p>
    </footer>
  );
}


