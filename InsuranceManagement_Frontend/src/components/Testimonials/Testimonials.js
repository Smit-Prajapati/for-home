import React from "react";
import styles from "./Testimonials.module.scss";

const list = [
  {
    name: "Emma Stone",
    details: "I did not even need help from an agent ! This is very good.",
    imgUrl:
      "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1713087643~exp=1713091243~hmac=c670123b8c8aef2bf634611ad69d1bfa96c8e8e8a2f260db27a4e8bc382d3107&w=996",
  },
  {
    name: "Chris Evans",
    details:
      "You are doing a great job. Proud to be a customer of Policybazaar.",
    imgUrl:
      "https://img.freepik.com/free-photo/confident-handsome-guy-posing-against-white-wall_176420-32936.jpg?t=st=1713087694~exp=1713091294~hmac=dcc8deaf4780ca8a8ae2d03aec4758aba77534b1c08cd5fa14dcde35c9727684&w=996",
  },
  {
    name: "Elle Fanning",
    details:
      "The services provided by CybSure are extremely helpful in making the right choice. Overall I had a good experience with Cybsure.",
    imgUrl:
      "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?t=st=1713087736~exp=1713091336~hmac=5382b231e93ca2040f3d4610d8a5a2f735217726c31a4bc0f79024e4560c27bd&w=996",
  },
  {
    name: "Ana De Armas",
    details:
      "Thanking you very much for your support for getting our policy quickly, I would appreciate your work.",
    imgUrl:
      "https://img.freepik.com/free-photo/friendly-smiling-woman-looking-pleased-front_176420-20779.jpg?t=st=1713090936~exp=1713094536~hmac=d18a654edbc452600c93ecfff40b9da375c8de4642ab7b20368a1e464fa9f6c5&w=996",
  },
];
const Testimonials = () => {
  return (
    <div className={styles["main-container"]}>
      <div className={styles["title"]}>What our customers are saying </div>
      <div className={styles["cards-container"]}>
        {list.map((item) => (
          <div className={styles["card"]}>
            <div className={styles["img-container"]}>
              <img src={item.imgUrl} />
            </div>
            <div className={styles["details"]}>
              <p>{item.name}</p>
              <p>{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
