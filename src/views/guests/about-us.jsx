import { useSelector } from "react-redux";
import SEOHead from "../../components/SEOHead";
import { useMemo, useState } from "react";
// import Hero from "../../components/guests/hero";
import AboutIcon1 from "../../assets/img/about-icon-1.png";
import AboutIcon2 from "../../assets/img/about-icon-2.png";
import AboutIcon3 from "../../assets/img/about-icon-3.png";
import TopBarN from "@/src/components/guests/topbarN";
import FooterN from "@/src/components/guests/footerN";
import ForegroundAboutUsIndex from "./components/about-us/foreground";
import AboutUsContIndex from "./components/about-us/content";
import DataLoading from "@/src/components/data-loading";


export default function AboutUs() {
  const { service_category } = useSelector((state) => state.user);
  const popularServices = useMemo(() => {
    let data = service_category || [];
    return data.slice(0, 7);
  }, [service_category]);

  const [regAs, setRegAs] = useState("User");
  const [openReg, setOpenReg] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  
  return (
    <div className="flex flex-col justify-end bg-primary-white min-h-screen">
      <SEOHead
        title="About Us"
        description="Learn about Handwork Expert — our mission to connect users with trusted, verified artisans across Nigeria for reliable, professional home and business services."
        canonical="/about-us"
      />
      { !service_category ? (
        <DataLoading mt={50} />
      ) : (
        <>
          <TopBarN popularServices={popularServices} />
          <ForegroundAboutUsIndex />
          <AboutUsContIndex />
          <FooterN />
        </>
      )}
    </div>
  );
}

  // <Box>
    // <SEOHead
    //   title="About Us"
    //   description="Learn about Handwork Expert — our mission to connect users with trusted, verified artisans across Nigeria for reliable, professional home and business services."
    //   canonical="/about-us"
    // />
  //   <Topbar popularServices={popularServices} />
  //   <CssBaseline />
  //   <Hero
  //     coloredText={"About"}
  //     whiteText={"Us"}
  //     subtitle={
  //       "Connecting You with Trusted Artisans for Every Handiwork Need."
  //     }
  //   />

  //   <br />

  //   <Box
  //     sx={{
  //       mt: 6,
  //       mb: 7,
  //       px: 2,
  //     }}
  //   >
  //     <Grid container spacing={1} alignItems={"center"}>
  //       <Grid item xs={12} sm={1} md={1} lg={1}></Grid>
  //       <Grid item xs={12} sm={5} md={5} lg={5}>
  //         <Box>
  //           <h3 style={{ color: "#172153" }}>Who We Are</h3>
  //           <p style={{ color: "#000000", fontSize: 13, lineHeight: 1.8 }}>
  //             At prohandy, we bridge the gap between people and skilled
  //             artisans, offering a platform that delivers quality handiwork
  //             services with ease and professionalism. Whether it’s plumbing,
  //             painting, electrical repairs, or carpentry, we ensure that every
  //             task is handled by trusted experts who take pride in their
  //             craft.
  //           </p>
  //           <br />
  //           <Button
  //             variant="contained"
  //             disableElevation
  //             sx={{
  //               backgroundColor: "#F56F46",
  //               fontSize: 12,
  //             }}
  //             onClick={() => setOpenReg(true)}
  //             endIcon={<ExpandMore />}
  //           >
  //             Register
  //           </Button>
  //         </Box>
  //       </Grid>
  //       <Grid item xs={12} sm={1} md={1} lg={1}></Grid>
  //       <Grid item xs={12} sm={4} md={4} lg={4}>
  //         <Box>
  //           <img
  //             src={AboutImage1}
  //             className="w3-image"
  //             style={{
  //               maxHeight: 500,
  //             }}
  //           />
  //         </Box>
  //       </Grid>
  //     </Grid>
  //   </Box>
  //   <Box
  //     sx={{
  //       mt: 6,
  //       mb: 7,
  //       px: 2,
  //     }}
  //   >
  //     <Grid container spacing={1} alignItems={"center"}>
  //       <Grid item xs={12} sm={1} md={1} lg={1}></Grid>
  //       <Grid item xs={12} sm={4} md={4} lg={4}>
  //         <Box>
  //           <img
  //             src={AboutImage2}
  //             className="w3-image"
  //             style={{
  //               maxHeight: 500,
  //             }}
  //           />
  //         </Box>
  //       </Grid>

  //       <Grid item xs={12} sm={1} md={1} lg={1}></Grid>
  //       <Grid item xs={12} sm={5} md={5} lg={5}>
  //         <Box>
  //           <h3 style={{ color: "#172153" }}>Our Mission</h3>
  //           <p style={{ color: "#000000", fontSize: 13, lineHeight: 1.8 }}>
  //             Our mission is simple, to create seamless access to reliable
  //             artisans while empowering professionals to showcase their
  //             skills. We aim to build a community where trust, excellence, and
  //             convenience come together to transform how people find and
  //             deliver services.
  //           </p>
  //           <br />
  //           <Button
  //             variant="contained"
  //             disableElevation
  //             onClick={() => setOpenReg(true)}
  //             sx={{
  //               backgroundColor: "#F56F46",
  //               fontSize: 12,
  //             }}
  //             endIcon={<ExpandMore />}
  //           >
  //             Register
  //           </Button>
  //         </Box>
  //       </Grid>
  //     </Grid>
  //   </Box>
  //   <Box
  //     sx={{
  //       mt: 6,
  //       mb: 10,
  //       px: 2,
  //     }}
  //   >
  //     <h3 style={{ color: "#F56F46", textAlign: "center" }}>Why Choose Us</h3>
  //     <Grid container spacing={1} alignItems={"center"}>
  //       <Grid item xs={12} sm={1} md={1} lg={1}></Grid>
  //       <Grid item xs={12} sm={10} md={10} lg={10}>
  //         <p
  //           style={{
  //             textAlign: "center",
  //             color: "#000000",
  //             fontSize: 14,
  //             lineHeight: 1.8,
  //           }}
  //         >
  //           At ProHandy, we make finding skilled artisans easy and reliable.
  //           With verified professionals, quality service, and a seamless
  //           booking process, we’re here to ensure every job is done right, the
  //           first time.
  //         </p>

  //         <Grid container spacing={1} sx={{ mt: 8, px: 2 }}>
  //           {choices.map((item, index) => (
  //             <Grid item key={index} xs={12} sm={4} md={4} lg={4}>
  //               <Box sx={{ textAlign: "center" }}>
  //                 <img
  //                   src={item.icon}
  //                   className="w3-image"
  //                   style={{ width: 100, height: 100 }}
  //                 />
  //                 <br />
  //                 <br />
  //                 <h6
  //                   style={{
  //                     fontWeight: "700",
  //                     fontSize: 16,
  //                   }}
  //                 >
  //                   {item.title}
  //                 </h6>
  //                 <p
  //                   style={{
  //                     fontWeight: "400",
  //                     fontSize: 13,
  //                   }}
  //                 >
  //                   {item.content}
  //                 </p>
  //               </Box>
  //             </Grid>
  //           ))}
  //         </Grid>
  //       </Grid>
  //     </Grid>
  //   </Box>
  //   <Box
  //     sx={{
  //       mt: 6,
  //       mb: 7,
  //       px: 2,
  //     }}
  //   >
  //     <Grid container spacing={1} alignItems={"center"}>
  //       <Grid item xs={12} sm={1} md={1} lg={1}></Grid>
  //       <Grid item xs={12} sm={5} md={5} lg={5}>
  //         <Box>
  //           <h3 style={{ color: "#172153" }}>Our Vision</h3>
  //           <p style={{ color: "#000000", fontSize: 13, lineHeight: 1.8 }}>
  //             We envision a world where finding skilled artisans is no longer a challenge. By fostering connections based on trust and quality, ProHandy strives to become the go-to platform for handiwork services, revolutionizing how people connect with professionals.
  //           </p>
  //           <br />
  //           <Button
  //             variant="contained"
  //             disableElevation
  //             onClick={() => setOpenReg(true)}
  //             sx={{
  //               backgroundColor: "#F56F46",
  //               fontSize: 12,
  //             }}
  //             endIcon={<ExpandMore />}
  //           >
  //             Register
  //           </Button>
  //         </Box>
  //       </Grid>
  //       <Grid item xs={12} sm={1} md={1} lg={1}></Grid>
  //       <Grid item xs={12} sm={4} md={4} lg={4}>
  //         <Box>
  //           <img
  //             src={VisionImage}
  //             className="w3-image"
  //             style={{
  //               maxHeight: 500,
  //             }}
  //           />
  //         </Box>
  //       </Grid>
  //     </Grid>
  //   </Box>
  //   <br />
  //   <br />
  //   <Promotions />
  //   <br />
  //   <br />
  //   <Footer />

  //   <Register
  //     dialog={openReg}
  //     setDialog={setOpenReg}
  //     setOpenLogin={setOpenLogin}
  //     regAs={regAs}
  //   />
  // </Box>