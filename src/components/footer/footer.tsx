import { memo } from "react";
import { Text } from "../../units";
import { Facebook, Instagram, Linkedin } from "react-feather";

export const Footer = memo(() => {
  return (
    <main className="flex bg-primary  px-36 py-4 z-10 flex-col -mt-16 gap-3">
      <hr className=" border border-white h-[2px] w-[100%]" />
      <header className="flex flex-col gap-1 ">
        <Text usage="primary">Ghantaghar.com</Text>
        <Text usage="primary" size="small">
          Ghantaghar.com is a Nepal-based hourly hotel booking platform
          committed to prioritizing privacy, security, and safety, offering
          flexible bookings with stringent measures in place for a secure guest
          experience.
        </Text>
      </header>

      <section className="grid grid-cols-3 ">
        <div className="flex flex-col gap-2">
          <Text usage="primary">Customer Services</Text>
          <Text usage="primary" size="small">
            Terms and Conditions
          </Text>
          <Text usage="primary" size="small">
            Privacy Policies
          </Text>
          <Text usage="primary" size="small">
            Blog
          </Text>
          <Text usage="primary" size="small">
            About us
          </Text>
        </div>
        <div className="flex flex-col gap-2">
          <Text usage="primary">Operated By</Text>
          <Text usage="primary" size="small">
            KSW TechZone, Nepal
          </Text>
          <Text usage="primary" size="small">
            contact@kswtechzone.com.np
          </Text>
          <Text usage="primary" size="small">
            +977-9863198323
          </Text>
          <Text usage="primary" size="small">
            www.kswtechzone.com.np
          </Text>
        </div>
        <div className="flex flex-col gap-2">
          <Text usage="primary">Contact Details</Text>
          <Text usage="primary" size="small">
            support@ghantaaghar.com
          </Text>
          <Text usage="primary" size="small">
            +977-9863198323
          </Text>
        </div>
      </section>
      <hr className=" border border-white h-[2px] w-[100%]" />

      <footer className="flex place-items-center justify-center gap-3 pb-6">
        <Facebook color="white" />
        <Instagram color="white" />
        <Linkedin color="white" />

        <Text size="small">
          Copyright ©2023 All rights reserved by GhantaaGhar.com (KSW TechZone)
        </Text>
      </footer>
    </main>
  );
});
