import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

import { useState } from 'react';

const Hero = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    // Redirect to the products page
    window.location.href = "http://localhost:8000/collections/sale"; // Update the URL as per your routing setup
  };

  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            Ecommerce Starter Template
          </Heading>
        </span>
        <Button variant="secondary" onClick={handleClick}>
          Buy Products from this Website
          <Github />
        </Button>
      </div>
    </div>
  );
};

export default Hero;