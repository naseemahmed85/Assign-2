import Image from "next/image";

export default function Home() {
  return (
    <div className="container">

      <div className="right">
        <p className="text">Hi,</p>
        <p className="text1">I am Naseem Ahmed Abbasi</p>
        <p className="text2">Frontend Developer</p>
      </div>
      

      <div className="left">
        <img src="../image/image 01.png" alt="developer image"/>
      </div>
    </div>
  );
}
