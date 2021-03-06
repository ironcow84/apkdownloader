import React, { useEffect, useState } from 'react';
import "../App.css";

function Download() {
  const [insideLink, setInsideLink] = useState("https://1drv.ms/u/s!AlFOII-JTBDThE6MzbDrOAbWnwFR?e=bqUclv");
  const [insideTestLink, setInsideTestLink] = useState("https://1drv.ms/u/s!AlFOII-JTBDThFL6gTARTIi5i0ZP?e=FS2I8z");
  const [singitLink, setSingitLink] = useState("https://1drv.ms/u/s!AlFOII-JTBDThE8JGBZ9n8QDn_jR?e=gjetHd");
  const [creatorLink, setCreatorLink] = useState("https://1drv.ms/u/s!AlFOII-JTBDThFBNATFdzV-V8lcz?e=rrxv3Q");

  return (
    <div className="Download">
      <br />
      <br />
      <br />
      <div className="name">Inside APP</div>
      <div className="com.Newto.Inside">{`2021.08.09 17:56:12`}</div>
      <a className="link" href={insideLink}>
        <img className="androiddownload" src={"https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_389/https://boostapk.com/wp-content/uploads/2020/08/fall-guys-android.png"}></img>
      </a>
      <br />
      <br />
      <br />
      <div className="name">Inside Test APP</div>
      <div className="com.Newto.Inside.Test">{`2021.08.04 17:02:00`}</div>
      <a className="link" href={insideLink}>
        <img className="androiddownload" src={"https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_389/https://boostapk.com/wp-content/uploads/2020/08/fall-guys-android.png"}></img>
      </a>
      <br />
      <br />
      <br />
      <div className="name">SingIt Unity Plugin Apk</div>
      <div className="com.newto.audioTest">{`2021.08.04 17:00:15`}</div>
      <a className="link" href={singitLink}>
        <img className="androiddownload" src={"https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_389/https://boostapk.com/wp-content/uploads/2020/08/fall-guys-android.png"}></img>
      </a>
      <br />
      <br />
      <br />
      <div className="name">Tarot Card Creator Download</div>
      <div className="com.Newto.CardCreator">{`2021.08.04 17:35:47`}</div>
      <a className="link" href={creatorLink}>
        <img className="windowsdownload" src={"data:image/png;base64,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"}></img>
      </a>
    </div>
  );
}

export default Download;
