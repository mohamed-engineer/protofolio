'use client';

import Contact from "./components/form";
import Hero from "./components/header";
import Organizations from "./components/org";
import Skills from "./components/skillsSec";
import Certifications from "./components/cert";
import CyberGridBackground from "./components/bg";
import Navbar from "./components/navbar";

export default function Home() {
  return (
   
<>

     
<Navbar />
<Hero />
      {/* Skills Section */}

<Skills />
      {/* Organizations Section */}
      <Organizations />
      <Certifications/>

      {/* Contact Section */}
      <Contact />
      {/* Footer */}

      <CyberGridBackground />
</>
      
  );
}
