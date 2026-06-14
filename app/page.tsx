import "./globals.css";
import Link from "next/link";
import QRCode from "react-qr-code";
import Image from "next/image";

export default function Home() {
  const directives = ["Scan the QR code with your phone's camera" , "Tap the link to open NexText" , "Scan the QR code again to link your account"]
  return (
    <div>
       <div><Image src={"./vite.svg"} width={70} height={70} alt="NextText icon" /> <h3>NexText</h3></div>
       <div>
        <div>computer</div>
        <div id="download">
          <h4>Download NexText for Mac</h4>
          <p>Make calls and get faster experience when you download the mac app</p>
        </div>
       </div>
       <div id="scan">
        <div id="scan-text">
          <h3>Scan to log in</h3>
          <div id="directives">
            <ol>
            {directives.map((directive, index) => (
              <li key={index}>{directive}</li>
            ))}
            </ol>
            <p>Need Help?</p>
          </div>
        </div>
        <div id="qr-div">
        <QRCode value="https://youtube.com"  />
        <Link href={"https://youtube.com"}>Log in with phone number</Link>
        </div>
       </div>
    </div>
  )
}
