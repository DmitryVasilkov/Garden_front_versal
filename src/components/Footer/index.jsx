import s from "./index.module.css";

import React from "react";
import { TfiLinkedin } from "react-icons/tfi";
import { PiInstagramLogoThin } from "react-icons/pi";

import Wrapper from "../UI/Wrapper";

export default function Footer() {
    return (
      <footer>
        <Wrapper>
          <div className={s.contacts}>
            <div className={s.contact}>
              <p>Contact</p>
              <p>
                <a href="tel:+499999999999">+49 160 946 300 15</a>
              </p>
              <span>
                <a href="https://www.instagram.com/startainstitute/">
                  <p>
                    <PiInstagramLogoThin />
                    Instagram
                  </p>
                </a>
                <a href="https://www.linkedin.com/school/tel-ran-de/about/">
                  <p>
                    <TfiLinkedin />
                    Linkedin
                  </p>
                </a>
              </span>
            </div>

            <div className={s.address}>
              <p>Address</p>
              <a href="https://www.google.com/maps/place/Starta+Institute+by+Tel-Ran/@52.5079361,13.3724698,17z/data=!3m1!5s0x47a851cbc6be2f3b:0x7edf0a3a9c29227c!4m6!3m5!1s0x47a8515353a68755:0xd0866511db4f838f!8m2!3d52.5079329!4d13.3750447!16s%2Fg%2F11sb3nrbfl?entry=ttu">
                <p>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p>
              </a>
              <p>Working Hours:</p>
              <p>24 hours a day</p>
            </div>
            <div className={s.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7320.623009012905!2d13.368522409825365!3d52.50808942673097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cecff94831%3A0x9f39bce1f6ad5524!2sMall%20of%20Berlin!5e0!3m2!1sen!2sde!4v1688501585528!5m2!1sen!2sde"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </Wrapper>
      </footer>
    );
}
