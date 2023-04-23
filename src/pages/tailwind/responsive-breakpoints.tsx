import React, { useEffect } from "react";

const ResponsiveBreakpoints = () => {
  const [width, setWidth] = React.useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    return () => window.removeEventListener("resize", () => {});
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center w-screen">
      <div className="text-2xl text-white text-center font-semibold bg-blue-500 rounded-md shadow-md p-4">
        {width}
        <span className="block sm:hidden">Default (0px to 640px)</span>
        <span className="hidden sm:block md:hidden">
          sm to md (640px to 768px)
        </span>
        <span className="hidden md:block lg:hidden">
          md to lg (768px to 1024px)
        </span>
        <span className="hidden lg:block xl:hidden">
          lg to xl (1024px to 1280px)
        </span>
        <span className="hidden xl:block 2xl:hidden">
          xl to 2xl (1280px to 1536px)
        </span>
        <span className="hidden 2xl:block">2xl and up (1536px and up)</span>
      </div>
    </div>
  );
};

export default ResponsiveBreakpoints;
