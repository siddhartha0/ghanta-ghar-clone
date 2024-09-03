import React from "react";
import companyLogo from "../../assets/companyLogo.png";
import { NavPaths } from "../../constant";
import { Button, NavigateLink, Text } from "../../units";

export const NavBar = React.memo(() => {
  return (
    <main className="flex justify-between place-items-center p-4 w-full">
      <section id="left-side" className="flex place-items-center ">
        <img src={companyLogo} alt="" className="h-16" />
        <div className="flex flex-col">
          <Text size="header">Ghantaghar</Text>
          <Text size="tiny" classNAME="capitalize">
            Nepal's First Hourly Booking platform
          </Text>
        </div>
      </section>

      <section id="mid-side" className="flex justify-between w-[35%]">
        {NavPaths.map((nav) => (
          <NavigateLink path={nav.path} key={nav.id}>
            {nav.title}
          </NavigateLink>
        ))}
      </section>

      <Button usage="pop-up">Log In</Button>
    </main>
  );
});
