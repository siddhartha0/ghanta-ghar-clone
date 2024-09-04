import React from "react";
import companyLogo from "../../assets/companyLogo.png";
import { NavPaths } from "../../constant";
import { InputField, Text } from "../../units";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

export const NavBar = React.memo(() => {
  return (
    <main className="flex justify-between bg-nav p-2 place-items-center   w-full z-10">
      <section
        id="left-side"
        className="flex px-1 cursor-pointer place-items-center "
      >
        <img src={companyLogo} alt="" className="h-16 " />
        <div className="flex flex-col">
          <Text varaint="bold">Ghantaghar.com</Text>
          <Text size="tiny" classNAME="capitalize">
            Nepal's First Hourly Booking platform
          </Text>
        </div>
      </section>

      <section id="mid-side" className="flex gap-9 px-1">
        {NavPaths.map((nav) => (
          <Link
            to={nav.path}
            key={nav.id}
            className="flex place-items-center gap-1 "
          >
            {nav.icon && <Icon icon={nav.icon} />}
            <Text size="small" usage="link" classNAME="hover:text-black">
              {nav.title}
            </Text>
          </Link>
        ))}

        <form className="flex gap-2">
          <InputField
            inputSize="small"
            varaint="border-less"
            outline
            placeholder="search by hotel"
          />
          <div className="py-[6px] px-3  rounded-md border border-other-base hover:bg-primary cursor-pointer">
            <Icon icon="ic:baseline-search" fontSize={20} />
          </div>
        </form>

        <div className="flex p-1 bg-dark rounded-md place-items-center gap-1 cursor-pointer">
          <Icon icon="mdi:user" color="white" fontSize={20} />
          <Text usage="primary" size="small">
            Login / Signup
          </Text>
        </div>
      </section>
    </main>
  );
});
