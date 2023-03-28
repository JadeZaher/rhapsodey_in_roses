import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Logo from "../assets/Logo.png";
import Link from "next/link";
import Partner1 from "../assets/OyasMarketLogo.png";
import Partner2 from "../assets/RubyBloomLogo.png";
import Partner3 from "../assets/VintiquesLogo.png";
import Destinee from "../assets/destinee-image.jpg";
import I1 from "../assets/gallery/1.jpg";
import I2 from "../assets/gallery/2.jpg";
import I3 from "../assets/gallery/3.jpg";
import I4 from "../assets/gallery/4.jpg";
import I6 from "../assets/gallery/6.jpg";
import I7 from "../assets/gallery/7.jpg";
import I8 from "../assets/gallery/8.jpg";
import I9 from "../assets/gallery/9.jpg";
import I10 from "../assets/gallery/10.jpg";
import I11 from "../assets/gallery/11.jpg";
import I12 from "../assets/gallery/12.jpg";
import I13 from "../assets/gallery/13.jpg";
import I14 from "../assets/gallery/14.jpg";
import I15 from "../assets/gallery/15.jpg";
import I16 from "../assets/gallery/16.jpg";
import I17 from "../assets/gallery/17.jpg";
import I18 from "../assets/gallery/18.jpg";
import I19 from "../assets/gallery/19.jpg";
import I20 from "../assets/gallery/20.jpg";
import I21 from "../assets/gallery/21.jpg";
import I22 from "../assets/gallery/22.jpg";
import I23 from "../assets/gallery/23.jpg";
import I24 from "../assets/gallery/24.jpg";
import I25 from "../assets/gallery/25.jpg";
import I26 from "../assets/gallery/26.jpg";
import I27 from "../assets/gallery/27.jpg";

import ImageCarousel from "../components/Carousel.component";

// import CTAButton from "../components/CTAButton.component";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center [&>div]:z-20 [&>div]:mb-5">
      <Head>
        <title>Roses In Rhapsody</title>
        <meta
          name="description"
          content="Luxury Dating services by Destinee Schriner"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" space-between flex w-[80%] justify-evenly ">
        {/* desktop */}
        {/*logo header*/}
        <div className="hidden h-[85vh] w-full items-center justify-between p-5 sm:flex">
          <div className="  flex flex-col justify-self-start">
            <h1 className="py-5 font-sans text-3xl font-semibold text-white ">
              Roses In Rhapsody
            </h1>
            <h2 className=" py-5 font-sans text-xl font-extrabold text-white">
              Make Date Night Easy
            </h2>
            {/* <CTAButton text="Contact" link="contact" styles={{}} /> */}
          </div>
          <Image
            className="ml-[3vw] max-w-[400px] justify-self-end object-contain"
            alt="logo"
            src={Logo}
          />
        </div>
      </div>

      {/* mobile */}
      {/*logo mobile*/}
      <div className=" mx-5 flex w-[80%] flex-col items-end sm:hidden">
        <div className=" flex flex-col ">
          <h1 className="font-sans text-3xl font-semibold text-white ">
            Roses In Rhapsody
          </h1>
          <Image
            className="my-4 max-w-[200px] self-end object-contain"
            alt="logo"
            src={Logo}
          />
          <h2 className="py-5 text-right font-sans text-xl text-white">
            Make Date Night Easy
          </h2>
        </div>
      </div>

      {/* about */}

      {/*about the service*/}
      <div className="flex h-full max-w-[80%] flex-col items-stretch justify-center sm:flex-row">
        <div className="mb-10 flex items-center  justify-center rounded-md bg-offWhite sm:max-w-[80%] sm:rounded-2xl sm:rounded-tr-none sm:rounded-br-none">
          <div className="max-w-[80%] p-5">
            <h2 className="py-3 text-2xl font-semibold">
              Show up and she&apos;ll think you&apos;re a pro.
            </h2>
            <p className="text-base sm:w-[80%]">
              Roses in Rhapsody is here to make your romance with your
              significant other simple. After your free 30 minute consultation,
              let Roses in Rhapsody take care of the rest. All you&apos;re
              required to do is show up! Your significant other will love the
              intricate details that are detailed in our questionnaire to make
              your role as easy as possible. And what&apos;s even better is that
              you&apos;ll get all the credit. Contact us and make date night
              easy!
            </p>
            <h2 className="mt-8 py-3 text-xl font-semibold">Payment</h2>
            <p className="text-base sm:w-[80%]">
              Don’t have all the money upfront but want a special night? No
              problem, we work with any budget, just ask us about a payment
              plan.
            </p>
          </div>
        </div>
        {/*about me*/}
        <div className=" mb-10 flex flex-col  items-center rounded-md bg-offBlack p-5 sm:ml-[-12px] sm:max-w-[80%]  sm:rounded-2xl">
          <h2 className="py-3 text-center text-2xl font-semibold text-offWhite">
            Destinee Schriner
          </h2>
          <Image
            className="my-4  max-w-[200px] rounded-md object-contain md:max-w-[400px] "
            alt="logo"
            src={Destinee}
          />
          <p className="p-5 text-center text-base text-offWhite sm:max-w-[60%]">
            With being married for over 12 years, my husband and I have looked
            everywhere for unique affordable date nights and anniversaries. And
            with my skill with project and finance coordination, as well as
            being a writer, Roses in Rhapsody was born. I can’t wait to make
            your night easy, affordable, and special.
          </p>
          {/* <CTAButton
            text="Learn More"
            link="about"
            styles={{ padding: ".75rem", color: "rgb(30 5 11)" }}
          /> */}
        </div>
      </div>
      {/* services */}
      <div className="w-[80%]">
        <h2 className="py-3 text-2xl font-semibold text-offWhite">
          Package Tiers
        </h2>
        <div className="relative flex h-full flex-col items-stretch justify-center sm:flex-row">
          <div className=" relative my-5 flex  grow flex-col items-stretch justify-evenly  rounded-md border-4 border-offBlack bg-offWhite pt-8 sm:mr-10">
            <div>
              <h2 className="p-3 text-center text-xl font-semibold text-offBlack">
                Romance Profile — $25
              </h2>
              <p className="text-center">
                <strong className="py-2">This package comes with:</strong>
              </p>
              <p className=" px-[5%] pb-20 text-center text-base leading-10">
                <br />
                Reminders for All Important Dates <br />
                Personalized Romance Fact Sheet <br />
                A Date Timeline <br />
                Gift Ideas <br />
                Date Ideas <br />
              </p>

              <p className="mb-20 text-center">
                <strong className=" py-2">Most Popular</strong>
              </p>
            </div>
            {/* <div className=" absolute right-2 bottom-5">
              <CTAButton
                text="Book Now"
                link="services"
                color="offBlack"
                styles={{
                  padding: ".75rem",
                  alignSelf: "flex-end",
                  marginTop: "20px",
                }}
              />
            </div> */}
          </div>
          <div className=" relative my-5 flex  grow flex-col items-center  rounded-md bg-offWhite pt-8 sm:mr-10">
            <div>
              <h2 className="p-3 text-center text-xl font-semibold text-offBlack">
                Anniversary — $600
              </h2>
              <p className="text-center">
                <strong className="py-2">This package comes with:</strong>
              </p>
            </div>
            <p className=" px-[5%] pb-20 text-center text-base leading-10">
              <br />
              Local $50 Restaurant Gift Card <br />
              Aphrodisiac Massage Oil <br />
              Women’s Arousal Cream <br />
              Artisinal Herbal Tea Blend <br />
              Champagne Glasses <br />
              Champagne <br />
              Roses and Lavender <br />
              Rose Petals <br />
              Location Setup <br />
              Custom Poetry <br />
              Unique Basket <br />
              Craft Honey <br />
              Craft Soap <br />
              Candle <br />
            </p>
            {/* <div className=" absolute right-2 bottom-5">
              <CTAButton
                text="Book Now"
                link="services"
                color="offBlack"
                styles={{
                  padding: ".75rem",
                  alignSelf: "flex-end",
                  marginTop: "20px",
                }}
              />
            </div> */}
          </div>
          <div className=" relative my-5 flex grow flex-col  items-center justify-between rounded-md bg-offWhite pt-8">
            <div>
              <h2 className="p-3 text-center text-xl font-semibold text-offBlack">
                Honeymoon — $1080
              </h2>
              <p className="text-center">
                <strong className="py-2">This package comes with:</strong>
              </p>
            </div>
            <p className="m-auto px-[5%] pb-[100px] text-center text-base leading-10">
              <br />
              Local Restaurant $100 Gift Card <br />
              Crystals Wrapped As A Gift <br />
              Aphrodisiac Massage Oil <br />
              Artisinal Herbal Tea Blend <br />
              Women’s Arousal Cream <br />
              Champagne Glasses <br />
              Champagne <br />
              Roses and Lavender <br />
              Rose Petals <br />
              Location Setup <br />
              Custom Poetry <br />
              Wine Charms <br />
              Macaroons <br />
              Craft Honey <br />
              Craft Soap <br />
              Unique Basket <br />
              Candle <br />
            </p>
            {/* <div className=" absolute right-2 bottom-5">
              <CTAButton
                text="Book Now"
                link="services"
                color="offBlack"
                styles={{
                  padding: ".75rem",
                  alignSelf: "flex-end",
                  marginTop: "20px",
                }}
              />
            </div> */}
          </div>
        </div>
        <div className=" relative my-5 flex grow flex-col  items-center justify-between rounded-md bg-offWhite pt-8">
          <div>
            <h2 className="p-3 text-center text-xl font-semibold text-offBlack">
              Custom — starting at $125 an hour
            </h2>
          </div>
          <p className="m-auto px-[5%] pb-[100px] text-center text-base leading-10">
            Please be at the location or have someone that knows that I am
            coming. <br />
            <br />I will set up your perfect night with your significant other.
            I’m also available to travel anywhere on the west coast. <br />
            <br /> Let’s do a consultation.
          </p>
          {/* <div className=" absolute right-2 bottom-5">
              <CTAButton
                text="Book Now"
                link="services"
                color="offBlack"
                styles={{
                  padding: ".75rem",
                  alignSelf: "flex-end",
                  marginTop: "20px",
                }}
              />
            </div> */}
        </div>
      </div>
      <div className=" w-[80%]">
        <h2 className="py-3 text-2xl font-semibold text-offWhite">Gallery</h2>
        <ImageCarousel
          images={[
            I1,
            I2,
            I3,
            I4,
            I6,
            I7,
            I8,
            I9,
            I11,
            I12,
            I13,
            I14,
            I15,
            I16,
            I17,
            I18,
            I19,
            I20,
            I21,
            I22,
            I23,
            I24,
            I25,
            I26,
            I27,
          ]}
        />
      </div>
      {/* contact form */}
      <div className="flex w-[80%] flex-col">
        <h2 className=" self-start py-3 text-2xl font-semibold text-offWhite">
          Contact
        </h2>
        <div className="flex flex-col items-center justify-between rounded-md bg-offBlack sm:py-10">
          <form
            action="https://public.herotofu.com/v1/3e0520f0-9ff9-11ed-82c7-3d7607318e65"
            method="post"
          >
            <div className="mb-4 flex flex-col items-start">
              <div className="flex flex-col p-2">
                <label
                  className="my-3 p-2 text-xl font-semibold text-offWhite"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="mx-2 min-w-[60vw] rounded-md  border-2 border-offWhite bg-offBlack p-2 py-4 font-semibold text-offWhite "
                  placeholder="Your Name"
                  name="Name"
                  id="name"
                  type="text"
                  required
                />
              </div>
              <div className="flex flex-col p-2">
                <label
                  className=" my-3 min-w-[100%] p-2 text-xl font-semibold text-offWhite"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="mx-2 min-w-[60vw] rounded-md border-2 border-offWhite bg-offBlack p-2 py-4 font-semibold text-offWhite"
                  placeholder="Your@email.com"
                  name="Email"
                  id="email"
                  type="email"
                  required
                />
              </div>
              <div className="flex flex-col p-2">
                <label
                  className=" my-3 min-w-[100%] p-2 text-xl font-semibold text-offWhite"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  className="mx-2 min-w-[60vw] rounded-md border-2 border-offWhite bg-offBlack p-2 py-4 font-semibold text-offWhite"
                  placeholder="xxx-xxx-xxxx"
                  name="Phone"
                  id="phone"
                  type="phone"
                />
              </div>
              <div className="flex flex-col p-2">
                <label
                  className=" my-3 min-w-[100%] p-2 text-xl font-semibold text-offWhite"
                  htmlFor="email"
                >
                  Reason For Reaching Out
                </label>
                <select
                  className="mx-2 min-w-[60vw] rounded-md border-2 border-offWhite bg-offBlack p-2 py-4 font-semibold text-offWhite"
                  name="Reason For Reaching Out"
                  id="Reason For Reaching Out"
                  required
                  defaultValue="Select Your Option"
                >
                  <option>Anniversary</option>
                  <option>Honeymoon</option>
                  <option>Custom</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex flex-col p-2">
                <label
                  className=" my-3 min-w-[100%] p-2 text-xl font-semibold text-offWhite"
                  htmlFor="email"
                >
                  Your Message
                </label>
                <textarea
                  className="mx-2 min-h-[300px] min-w-[60vw] rounded-md border-2 border-offWhite bg-offBlack p-2 py-4 font-semibold text-offWhite"
                  placeholder="Message"
                  name="Message"
                  id="Message"
                />
              </div>
              <div className="mx-2 flex flex-col p-2 py-8">
                <input
                  className="rounded-md border-2 border-offWhite p-2 pl-4 pr-12 text-xl font-semibold text-offWhite"
                  type="submit"
                  value="Submit"
                />
              </div>
            </div>
          </form>
        </div>
        {/* partners section */}
        <div className="my-20  ">
          <h2 className=" self-start py-3 text-2xl font-semibold text-offWhite">
            My Partners
          </h2>
          <div className=" flex min-h-[30vmin] flex-col items-center justify-center rounded-md bg-offWhite p-2 md:flex-row">
            <Link href={`https://oyascraft.com/`}>
              <Image
                className="m-4 max-h-[200px] max-w-[90%] rounded-md object-cover"
                alt="Oyas Market"
                src={Partner1}
              />
            </Link>
            <Link href={`https://therubybloom.com/`}>
              <Image
                className="m-4 max-h-[200px] max-w-[90%] rounded-md object-cover"
                alt="Ruby Bloom"
                src={Partner2}
              />
            </Link>
            <Link href={`https://www.facebook.com/Vintiquesdecor`}>
              <Image
                className="m-4 max-h-[200px] max-w-[90%] rounded-md object-cover"
                alt="Vintiquesdecor"
                src={Partner3}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
