import dorasilklogo from "@/assets/dorasilk-logo.png";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface Footer2Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer = ({
  tagline = " @dorasilkbeauty",
  menuItems = [
    {
      title: "Product",
      links: [
        { text: "My Account", url: "#" },
        { text: "Find Store", url: "#" },
        { text: "My Orders", url: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { text: "Terms of Use", url: "#" },
        { text: "Privacy Policy", url: "#" },
        { text: "Refund Policy", url: "#" },
        { text: "Shipping", url: "#" },
        { text: "FAQs", url: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About Us", url: "#" },
        { text: "Contact Us", url: "#" },
        { text: "Blog", url: "#" },
        { text: "Career", url: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { text: "Give Us Feedback", url: "#" },
        { text: "Help Center", url: "#" },
        { text: "Live Chat", url: "#" },
      ],
    },
  ],
  copyright = "© 2025 Dorasilk. All rights reserved.",
//   bottomLinks = [
//     { text: "Terms and Conditions", url: "#" },
//     { text: "Privacy Policy", url: "#" },
//   ],
}: Footer2Props) => {
  return (
    <section className="py-12 bg-gold-1 px-25">
      <div className="container">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start"></div>
              <p className="mt-4 font-bold">{tagline}</p>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="text-white-1  space-y-4">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-primary font-normal"
                    >
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col justify-between gap-4  pt-8 text-sm font-medium md:flex-row md:items-center text-white-1">
            <img src={dorasilklogo} alt="Dorasilk" />
            <p>{copyright}</p>

            {/* <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="hover:text-primary underline">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul> */}
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer ;