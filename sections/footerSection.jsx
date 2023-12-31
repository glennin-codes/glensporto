import {  } from "react";
import Image from "next/image";
import Link from "next/link";
import LinkedIn from "../images/icons/linkedin-2.svg";
import Github from "../images/icons/github.svg";
import Twitter from "../images/icons/twitter.svg";
import styles from "../styles/footer.module.scss";


export default function footerSection() {

    return(
      <footer className={styles.footer}>
        <div className={styles.footer_line}></div>
        <div className={styles.footer_main}>
          <div className={styles.footer_links}>
            <Link href="https://www.linkedin.com/in/glen-ayienda-600967207/">
              <p>
                <span>LN</span>{" "}
                <Image width="25" height="25" src={LinkedIn}></Image>
              </p>
            </Link>

            <Link href="https://x.com/glenayienda">
              <p>
                <span>TW</span>{" "}
                <Image width="25" height="25" src={Twitter}></Image>
              </p>
            </Link>
            <Link href="https://github.com/glennin-codes">
              <p>
                <span>GH</span>{" "}
                <Image width="25" height="25" src={Github}></Image>
              </p>
            </Link>
          </div>
          <p className={styles.copy}>
            Copyright ©{" "}
            <Link href="https://github.com/glennin-codes">Glennin Technologies</Link>{" "}
            2023, All rights reserved.
          </p>
        </div>
      </footer>
  )
}
