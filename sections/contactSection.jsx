import {  } from "react";
import Link from "next/link";
import { Envelope } from "phosphor-react";
import styles from "../styles/contact.module.scss";

export default function ContactSection() {
 return(
        <section className={styles.contact} id="contact">
          <h4>Got a project in mind?</h4>
          <h2>
            Get In Touch.{" "}
            <Link href="mailto:ayiendaglen@gmail.com">
              <Envelope color="#ABABAD" weight="regular" size={80} />
            </Link>
          </h2>
          <Link href="mailto:ayiendaglen@gmail.com">
            <p>ayiendaglen@gmail.com</p>
          </Link>
          <Link href="tel:+254713322025">
            <p> +(254) 713 322 025</p><p> +254721929835</p>
          </Link>
        </section>
    
  );
}
