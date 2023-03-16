import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Logo from "../assets/Logo.png";
import Link from "next/link";
import Partner1 from "../assets/OyasMarketLogo.png";
import Partner2 from "../assets/RubyBloomLogo.png";
import Partner3 from "../assets/VintiquesLogo.png";
import Destinee from "../assets/destinee-image.jpg";

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
              Luxury dating at its finest.
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
            Luxury dating at its finest.
          </h2>
        </div>
      </div>

      {/* about */}

      {/*about the service*/}
      <div className="flex h-full max-w-[80%] flex-col items-stretch justify-center sm:flex-row">
        <div className="mb-10 flex items-center  justify-center rounded-md bg-offWhite sm:max-w-[80%] sm:rounded-2xl sm:rounded-tr-none sm:rounded-br-none">
          <div className="max-w-[80%] p-5">
            <h2 className="py-3 text-2xl font-semibold">
              {" "}
              The Perfect Date Night{" "}
            </h2>
            <p className="text-base sm:w-[80%]">
              Roses in Rhapsody is here to make your date, anniversary, or
              honeymoon a special one. With our different tiers we fit into
              every budget while not skimping on the quality. <br /> <br />{" "}
              You’ll get our signature roses and lavender bouquet with our
              handmade tea sure to get you in the mood as well as an aphrodisiac
              oil from Oya’s Marketplace with every order. We pride ourselves
              with partnering with the local community to give the freshest
              flowers, hand picked macaroons, and personalized poetry for that
              special someone. <br /> <br /> We look forward to giving your
              intimate moment a distinct and loving touch that only Roses in
              Rhapsody can provide.
            </p>
          </div>
        </div>
        {/*about me*/}
        <div className=" mb-10 flex flex-col  items-center rounded-md bg-offBlack p-5 sm:ml-[-12px] sm:max-w-[80%]  sm:rounded-2xl">
          <h2 className="py-3 text-center text-2xl font-semibold text-offWhite">
            My Mission
          </h2>
          <Image
            className="my-4  max-w-[200px] rounded-md object-contain md:max-w-[400px] "
            alt="logo"
            src={Destinee}
          />
          <p className="p-5 text-center text-base text-offWhite sm:max-w-[60%]">
            Bring the romance and the roses to your exceptional moment with your
            significant other.
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
        <div className="flex h-full flex-col items-stretch justify-start sm:flex-row ">
          <div className=" relative mb-5 flex  grow flex-col items-center  rounded-md bg-offWhite pt-8 sm:mr-10">
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
          <div className=" relative mb-5 flex grow flex-col  items-center justify-between rounded-md bg-offWhite pt-8">
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
