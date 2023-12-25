"use client";
import Image from "next/image";
import Script from "next/script";
import { useState } from "react";
import { promises as fs } from "fs";
//import imagesData from "./image_data.json"
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [slider, setSlider] = useState([]);

  const imagesData: any = [
    {
      br: {
        before: [
          { src: "/images/br_before_1.jpeg" },
          { src: "/images/br_before_2.jpeg" },
          { src: "/images/br_before_3.jpeg" },
          { src: "./images/br_before_4.jpeg" },
        ],
        after: [
          { src: "/images/br_after_1.jpeg" },
          { src: "/images/br_after_2.jpeg" },
          { src: "/images/br_after_3.jpeg" },
          { src: "/images/br_after_4.jpeg" },
          { src: "/images/br_after_5.jpeg" },
        ],
      },
    },
    {
      door: {
        before: [{ src: "/images/door_before_1.jpeg" }],
        after: [
          { src: "/images/door_after_1.jpeg" },
          { src: "/images/door_after_2.jpeg" },
        ],
      },
    },
    {
      garden: {
        before: [
          { src: "/images/garden_before_1.jpeg" },
          { src: "/images/garden_before_2.jpeg" },
        ],
        after: [
          { src: "/images/garden_after_1.jpeg" },
          { src: "/images/garden_after_2.jpeg" },
          { src: "/images/garden_after_3.jpeg" },
          { src: "/images/garden_after_4.jpeg" },
          { src: "/images/garden_after_5.jpeg" },
        ],
      },
    },
  ];

  const getSilder = (title: any, action: any, index: number) => {
    console.log(title, action);
    console.log(imagesData[index][title][action]);
    setSlider(imagesData[index][title][action]);
    setOpen(true);
  };
  // const file = await fs.readFile(process.cwd() + '/app/image_data.json', 'utf8');
  //const data:any= imagesData;
  console.log(imagesData);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul className="gallery">
        {imagesData.map((item: any, index: number) => {
          var title: any = Object.keys(imagesData[index]);
          var befor_src: any = item[title].before[0].src;
          var after_src: any = item[title].after[0].src;

          return (
            <li className="before_after">
              <div className="img img--before">
                <div
                  className="img__bg"
                  style={{ backgroundImage: `url(${befor_src})` }}
                  onClick={() => getSilder(title[0], "before", index)}
                ></div>
              </div>
              <div className="img img--after">
                <div
                  className="img__bg"
                  style={{ backgroundImage: `url(${after_src})` }}
                  onClick={() => getSilder(title[0], "after", index)}
                ></div>
              </div>
              <div className="content content--before">Before</div>
              <div className="content content--after">After</div>
            </li>
          );
          //return(<>{JSON.stringify(item[title].befor[0].src)}</> )
        })}
      </ul>
      <Lightbox open={open} close={() => setOpen(false)} slides={slider} />
      <Script src={"./main.js"} />
    </main>
  );
}
