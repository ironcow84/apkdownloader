import React, { useEffect, useState } from 'react';
import "../App.css";

function Privacy() {
  const [insideLink, setInsideLink] = useState("https://1drv.ms/u/s!AlFOII-JTBDThE6MzbDrOAbWnwFR?e=bqUclv");
  const [insideTestLink, setInsideTestLink] = useState("https://1drv.ms/u/s!AlFOII-JTBDThFL6gTARTIi5i0ZP?e=FS2I8z");
  const [singitLink, setSingitLink] = useState("https://1drv.ms/u/s!AlFOII-JTBDThE8JGBZ9n8QDn_jR?e=gjetHd");
  const [creatorLink, setCreatorLink] = useState("https://1drv.ms/u/s!AlFOII-JTBDThFBNATFdzV-V8lcz?e=rrxv3Q");

  useEffect(() => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerHTML = "Inside Download Page";
  }, [])

  return (
    <div className="Privacy">
        <div>privacy</div>
    </div>
  );
}

export default Privacy;
