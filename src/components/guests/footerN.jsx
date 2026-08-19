import { Link } from "react-router-dom";

const FooterN = () => {
   const footerLinks = [
    {
      title: "Categories",
      item: [
        { title: "Fashion and Beauty", url: "" },
        { title: "Automotive", url: "" },
        { title: "Export Services", url: "" },
        { title: "Agriculture", url: "" },
        { title: "Logistics and warehousing", url: "" },
      ],
    },
    {
      title: "Quick Links",
      item: [
        { title: "About Us", url: "" },
        { title: "Contact Us", url: "" },
        { title: "Artisan's Attic Reports", url: "" },
        { title: "FAQ", url: "" },
      ],
    },
    {
      title: "Contact Us",
      item: [
        { title: "About Us", url: "" },
        { title: "Contact", url: "" },
        { title: "Artisan's Attic Reports", url: "" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: "/icons/facebook.png",
      url: "https://facebook.com",
      alt: "Facebook",
    },
    {
      icon: "/icons/telegram.png",
      url: "https://t.me",
      alt: "Telegram",
    },
    {
      icon: "/icons/instagram.png",
      url: "https://instagram.com",
      alt: "Instagram",
    },
    {
      icon: "/icons/youtube.png",
      url: "https://youtube.com",
      alt: "YouTube",
    },
  ];

  return (
    <footer className="flex flex-col relative justify-center w-full p-16 xl:px-28 bg-secondary-blue text-primary-white ">
      <div className="border-b-[1.34px] border-b-[#7B7E86] w-full mb-4 ">
        <div className="flex gap-8 pb-16 justify-between w-full max-w-[80%] text-[12px] ">
          {
            footerLinks.map(item => (
              <div className="flex flex-col gap-2 ">
                <h5 className=" font-bold text-xl mb-4">{item.title}</h5>
                {
                  item.item.map(val => (
                    <Link to={val.url} className="text-sm ">{val.title}</Link>
                  ))
                }
              </div>
            ))
          }
          <div className="flex flex-col">
            <h5 className=" font-bold text-xl mb-4">Social Links</h5>
            <div className="flex gap-2">
              {
                socialLinks.map(item => (
                  <Link to={item.url} className=" w-fit rounded-md ">
                    <img src={item.icon} height={"24px"} width={"24px"} alt={item.alt} className="h-6 w-auto  " />
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-5 w-full pr-25 text-[14px] ">
        <span className="">© 2023 All Rights Reserved</span>
        <p className="flex gap-4  ">
          <Link to={"/privacy-policy"}>Privacy Policy</Link>
          <Link to={"/privacy"}>Terms and conditions</Link>
        </p>
      </div>
    </footer>
  )
}

export default FooterN