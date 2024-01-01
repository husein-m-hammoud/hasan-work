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

  const getSilder = (title: any, action: any, index: number) => {
    console.log(title, action);
    console.log(imagesData[index][title][action]);
    var before = imagesData[index][title]["before"];
    var after = imagesData[index][title]["after"];
    var new_sliders = before.concat(after);
    setSlider(new_sliders);
    setOpen(true);
  };
  // const file = await fs.readFile(process.cwd() + '/app/image_data.json', 'utf8');
  //const data:any= imagesData;
  console.log(imagesData);
  return (
    <main className="flex min-h-screen flex-col md:items-center justify-between ">
      <h1 className="lg:text-3xl p-5 md:p-12 text-center text-lg">Hasan Wartung</h1>
      <ul className="gallery">
        {imagesData.map((item: any, index: number) => {
          var title: any = Object.keys(imagesData[index]);
          var befor_src: any = item[title].before[0].src;
          var after_src: any = item[title].after[0].src;

          return (
            <>
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
                <div className="content content--before">Vor</div>
                <div className="content content--after">Nach</div>
                {/* <div className="content--title"> {title[0]}</div> */}
              </li>
            </>
          );
          //return(<>{JSON.stringify(item[title].befor[0].src)}</> )
        })}
      </ul>
      <Lightbox open={open} close={() => setOpen(false)} slides={slider} />
      <Script src={"./main.js"} />
    </main>
  );
}

const imagesData: any = [
  {
    br2: {
      before: [
        { src: "/images/br2_before_1.jpeg" },
        { src: "/images/br2_before_2.jpeg" },
        { src: "/images/br2_before_3.jpeg" },
        { src: "./images/br2_before_4.jpeg" },
        { src: "./images/br2_before_5.jpeg" },
        { src: "./images/br2_before_6.jpeg" },
        { src: "./images/br2_before_7.jpeg" },
        { src: "./images/br2_before_8.jpeg" },
      ],
      after: [{ src: "/images/br2_after_1.jpeg" }],
    },
  },
  {
    br3: {
      before: [
        { src: "/images/br3_before_1.jpeg" },
        { src: "/images/br3_before_2.jpeg" },
        { src: "/images/br3_before_3.jpeg" },
        { src: "./images/br3_before_4.jpeg" },
        { src: "./images/br3_before_5.jpeg" },
      ],
      after: [{ src: "/images/br3_after_1.jpeg" }],
    },
  },

  // {
  //   br: {
  //     before: [
  //       { src: "/images/br_before_1.jpeg" },
  //       { src: "/images/br_before_2.jpeg" },
  //       { src: "/images/br_before_3.jpeg" },
  //       { src: "./images/br_before_4.jpeg" },
  //       { src: "/images/br_after_2.jpeg" },
  //       { src: "/images/br_after_3.jpeg" },
  //       { src: "/images/br_after_4.jpeg" },
  //     ],
  //     after: [
  //       { src: "/images/br_after_1.jpeg" },

  //       { src: "/images/br_after_5.jpeg" },
  //     ],
  //   },
  // },
  {
    kw: {
      before: [
        { src: "/images/kw_before_1.jpeg" },
        { src: "/images/kw_before_2.jpeg" },
        { src: "/images/kw_before_3.jpeg" },
        { src: "./images/kw_before_4.jpeg" },
        { src: "./images/kw_before_5.jpeg" },
        { src: "./images/kw_before_6.jpeg" },
        { src: "./images/kw_before_7.jpeg" },
        { src: "./images/kw_before_8.jpeg" },
      ],
      after: [{ src: "/images/kw_after_1.jpeg" }],
    },
  },
  {
    kw2: {
      before: [
        { src: "/images/kw2_before_1.jpeg" },
        { src: "/images/kw2_before_2.jpeg" },
        { src: "/images/kw2_before_3.jpeg" },
        { src: "./images/kw2_before_4.jpeg" },
      ],
      after: [{ src: "/images/kw2_after_1.jpeg" }],
    },
  },

  {
    garden: {
      before: [
        { src: "/images/garden_before_2.jpeg" },
        { src: "/images/garden_before_1.jpeg" },
        { src: "/images/garden_after_3.jpeg" },
        { src: "/images/garden_after_4.jpeg" },
        { src: "/images/garden_after_5.jpeg" },
        { src: "/images/garden_after_2.jpeg" },
      ],
      after: [{ src: "/images/garden_after_1.jpeg" }],
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
];
