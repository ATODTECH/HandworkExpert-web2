import {
  Box,
  CssBaseline,
  Grid,
  Typography,
  Chip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  InfoOutlined,
  DataUsageOutlined,
  ShareOutlined,
  AccessTimeOutlined,
  LockOutlined,
  GavelOutlined,
  CookieOutlined,
  TouchAppOutlined,
  ChildCareOutlined,
  WarningAmberOutlined,
  EmailOutlined,
  VerifiedUserOutlined,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useMemo, useEffect, useRef, useState } from "react";
import Topbar from "../../components/guests/topbar";
import Footer from "../../components/guests/footer";

const BRAND_NAVY = "#172153";
const BRAND_ORANGE = "#F56F46";

const sections = [
  { id: "collect",      label: "What We Collect",         icon: <InfoOutlined fontSize="small" /> },
  { id: "use",          label: "How We Use It",            icon: <DataUsageOutlined fontSize="small" /> },
  { id: "share",        label: "Who We Share With",        icon: <ShareOutlined fontSize="small" /> },
  { id: "retention",    label: "How Long We Keep It",      icon: <AccessTimeOutlined fontSize="small" /> },
  { id: "security",     label: "How We Keep It Safe",      icon: <LockOutlined fontSize="small" /> },
  { id: "rights",       label: "Your Privacy Rights",      icon: <VerifiedUserOutlined fontSize="small" /> },
  { id: "cookies",      label: "Cookies & Tracking",       icon: <CookieOutlined fontSize="small" /> },
  { id: "consent",      label: "Consent",                  icon: <TouchAppOutlined fontSize="small" /> },
  { id: "children",     label: "Children's Privacy",       icon: <ChildCareOutlined fontSize="small" /> },
  { id: "disclaimer",   label: "Legal Disclaimer",         icon: <WarningAmberOutlined fontSize="small" /> },
  { id: "contact",      label: "Contact Us",               icon: <EmailOutlined fontSize="small" /> },
];

function SectionCard({ id, icon, title, children }) {
  return (
    <Box
      id={id}
      sx={{
        mb: 4,
        borderRadius: 3,
        border: "1px solid #e8eaf0",
        overflow: "hidden",
        boxShadow: "0 2px 12px rgba(23,33,83,0.06)",
        backgroundColor: "#fff",
        scrollMarginTop: "100px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          px: 3,
          py: 2,
          background: `linear-gradient(135deg, ${BRAND_NAVY} 0%, #1e3a8a 100%)`,
          borderBottom: `3px solid ${BRAND_ORANGE}`,
        }}
      >
        <Box sx={{ color: BRAND_ORANGE, display: "flex", alignItems: "center" }}>
          {icon}
        </Box>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: 14, md: 16 },
            color: "#fff",
            letterSpacing: 0.3,
            textTransform: "uppercase",
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box sx={{ px: { xs: 2.5, md: 4 }, py: 3 }}>{children}</Box>
    </Box>
  );
}

function SubTitle({ children }) {
  return (
    <Typography
      sx={{
        fontWeight: 700,
        fontSize: 14,
        color: BRAND_NAVY,
        mt: 2.5,
        mb: 1,
        pl: 1.5,
        borderLeft: `3px solid ${BRAND_ORANGE}`,
      }}
    >
      {children}
    </Typography>
  );
}

function P({ children }) {
  return (
    <Typography sx={{ fontSize: 13.5, color: "#374151", lineHeight: 1.85, mb: 1.2 }}>
      {children}
    </Typography>
  );
}

function BulletList({ items }) {
  return (
    <Box sx={{ mb: 1.5, pl: 0.5 }}>
      {items.map((item, i) => (
        <Box key={i} sx={{ display: "flex", gap: 1, mb: 0.7, alignItems: "flex-start" }}>
          <Box
            sx={{
              mt: "6px",
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: BRAND_ORANGE,
              flexShrink: 0,
            }}
          />
          <Typography sx={{ fontSize: 13.5, color: "#374151", lineHeight: 1.8 }}>
            {item}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

function TableOfContents({ activeId }) {
  return (
    <Box
      sx={{
        position: "sticky",
        top: 90,
        borderRadius: 3,
        border: "1px solid #e8eaf0",
        overflow: "hidden",
        boxShadow: "0 2px 12px rgba(23,33,83,0.06)",
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          px: 2.5,
          py: 1.8,
          background: `linear-gradient(135deg, ${BRAND_NAVY} 0%, #1e3a8a 100%)`,
        }}
      >
        <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: 13, letterSpacing: 0.5, textTransform: "uppercase" }}>
          Contents
        </Typography>
      </Box>
      <Box sx={{ py: 1 }}>
        {sections.map((s) => {
          const isActive = activeId === s.id;
          return (
            <Box
              key={s.id}
              component="a"
              href={`#${s.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" });
              }}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.2,
                px: 2.5,
                py: 1,
                textDecoration: "none",
                cursor: "pointer",
                borderLeft: isActive ? `3px solid ${BRAND_ORANGE}` : "3px solid transparent",
                backgroundColor: isActive ? "#fff7f4" : "transparent",
                transition: "all 0.2s",
                "&:hover": {
                  backgroundColor: "#f8f9ff",
                  borderLeftColor: BRAND_NAVY,
                },
              }}
            >
              <Box
                sx={{
                  color: isActive ? BRAND_ORANGE : "#9ca3af",
                  display: "flex",
                  alignItems: "center",
                  "& .MuiSvgIcon-root": { fontSize: 14 },
                }}
              >
                {s.icon}
              </Box>
              <Typography
                sx={{
                  fontSize: 12.5,
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? BRAND_NAVY : "#4b5563",
                  lineHeight: 1.4,
                }}
              >
                {s.label}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default function PrivacyPolicy() {
  const { service_category } = useSelector((state) => state.user);
  const popularServices = useMemo(() => (service_category || []).slice(0, 7), [service_category]);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [activeId, setActiveId] = useState(sections[0].id);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observerRef.current.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <Box sx={{ backgroundColor: "#f5f7fb", minHeight: "100vh" }}>
      <Topbar popularServices={popularServices} />
      <CssBaseline />

      {/* Hero */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${BRAND_NAVY} 0%, #1a2e6e 60%, #0f1f4d 100%)`,
          pt: { xs: 8, md: 10 },
          pb: { xs: 6, md: 8 },
          px: 3,
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: -80,
            right: -80,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${BRAND_ORANGE}33 0%, transparent 70%)`,
          },
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: -60,
            left: "30%",
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${BRAND_ORANGE}22 0%, transparent 70%)`,
          },
        }}
      >
        <Box sx={{ maxWidth: 800, mx: "auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <Chip
            icon={<GavelOutlined sx={{ fontSize: "14px !important", color: `${BRAND_ORANGE} !important` }} />}
            label="Nigeria Data Protection Act (NDPA 2023) Compliant"
            sx={{
              mb: 3,
              backgroundColor: "rgba(245,111,70,0.15)",
              border: `1px solid ${BRAND_ORANGE}55`,
              color: "#ffa07a",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 0.4,
            }}
          />
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "#fff",
              fontSize: { xs: 28, md: 42 },
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Privacy{" "}
            <Box component="span" sx={{ color: BRAND_ORANGE }}>
              Policy
            </Box>
          </Typography>
          <Typography sx={{ color: "#94a3b8", fontSize: { xs: 13, md: 15 }, lineHeight: 1.8, maxWidth: 600, mx: "auto" }}>
            We are committed to protecting your privacy and handling your personal information in a transparent, lawful, and secure manner.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3, flexWrap: "wrap" }}>
            <Chip
              label="Effective: April 11, 2026"
              size="small"
              sx={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#cbd5e1", fontSize: 11 }}
            />
            <Chip
              label="Handwork Expert · Atod Tech"
              size="small"
              sx={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#cbd5e1", fontSize: 11 }}
            />
          </Box>
        </Box>
      </Box>

      {/* Body */}
      <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2, md: 4 }, py: { xs: 4, md: 6 } }}>
        <Grid container spacing={3}>
          {/* Sidebar TOC */}
          {isDesktop && (
            <Grid item md={3}>
              <TableOfContents activeId={activeId} />
            </Grid>
          )}

          {/* Content */}
          <Grid item xs={12} md={9}>

            {/* WHAT WE COLLECT */}
            <SectionCard id="collect" icon={<InfoOutlined fontSize="small" />} title="What Information We Collect">
              <P>We collect information you provide directly, information collected automatically when you use our Services, and limited information from trusted third parties.</P>

              <SubTitle>Personal Information You Provide</SubTitle>
              <P>We collect personal information when you register, use our services, fill out forms, contact support, or participate in surveys. This may include:</P>
              <BulletList items={["Full name", "Phone number", "Email address", "Username", "Password (securely encrypted)", "Profile details (picture, location, service category if artisan)", "Contact preferences", "Authentication or verification data (OTPs)"]} />

              <SubTitle>Sensitive Personal Data</SubTitle>
              <P>We do <strong>not intentionally collect sensitive personal data</strong> such as race, religion, health status, or political opinions. If unintentionally provided, it will be handled with strict confidentiality.</P>

              <SubTitle>Payment Information</SubTitle>
              <P>For payments, we collect payment confirmation details and transaction reference IDs. We do <strong>not store your full card details</strong> — all payment processing is handled by <strong>Paystack</strong>, Flutterwave, or similar licensed processors.</P>

              <SubTitle>Social Login Information</SubTitle>
              <P>If you sign in via Google, Facebook, or Apple, we may receive your name, email address, profile picture, and unique user ID — used only to create and manage your account.</P>

              <SubTitle>Device & Usage Information (Auto-Collected)</SubTitle>
              <BulletList items={["Device type and model", "Operating system", "IP address", "App usage data (features accessed, time spent)", "Crash logs and performance data", "Approximate location (only when permission is granted)"]} />

              <SubTitle>Push Notifications</SubTitle>
              <P>With your permission, we may send service updates, account alerts, booking updates, and important announcements. You can disable notifications anytime in your device settings.</P>

              <SubTitle>Information from Third Parties</SubTitle>
              <P>We may receive limited information from identity verification providers, analytics partners, social media platforms, and public databases. This may include name, email, phone number, and IP-related data.</P>

              <SubTitle>Accuracy of Information</SubTitle>
              <P>You are responsible for ensuring all information you provide is accurate, complete, and up to date.</P>
            </SectionCard>

            {/* HOW WE USE */}
            <SectionCard id="use" icon={<DataUsageOutlined fontSize="small" />} title="How We Use Your Information">
              <P>We use your personal information to operate, improve, secure, and deliver our Services, and to comply with legal obligations.</P>

              <SubTitle>To Provide & Maintain Our Services</SubTitle>
              <BulletList items={["Create and manage your user or artisan account", "Enable access to app features", "Match users with artisans and service providers", "Process requests, bookings, and service interactions", "Facilitate communication between users and artisans"]} />

              <SubTitle>To Improve Our Services</SubTitle>
              <BulletList items={["Understand how users interact with the app", "Improve user experience and app performance", "Fix bugs, errors, and technical issues", "Develop new features and services"]} />

              <SubTitle>To Communicate With You</SubTitle>
              <BulletList items={["Send account-related notifications (login alerts, updates)", "Respond to customer support requests", "Send important service announcements or policy updates", "Provide transaction and activity confirmations"]} />

              <SubTitle>For Safety, Security & Fraud Prevention</SubTitle>
              <BulletList items={["Detect and prevent fraudulent activity", "Protect user accounts and platform integrity", "Monitor suspicious or unauthorized access", "Enforce our Terms of Use and community guidelines"]} />

              <SubTitle>For Legal & Regulatory Compliance</SubTitle>
              <BulletList items={["Comply with applicable laws, including the Nigeria Data Protection Act (NDPA 2023)", "Respond to lawful requests from regulators or law enforcement", "Maintain proper business and financial records"]} />

              <SubTitle>For Marketing & Engagement (Optional)</SubTitle>
              <P>With your consent, we may send promotional messages, inform you about new features, and improve engagement. You can opt out at any time.</P>
            </SectionCard>

            {/* SHARING */}
            <SectionCard id="share" icon={<ShareOutlined fontSize="small" />} title="When and With Whom We Share Your Information">
              <P>We <strong>do not sell your personal data</strong>. We only share your information where necessary to operate our services, comply with legal obligations, or protect users and the platform.</P>

              <SubTitle>Service Providers & Business Partners</SubTitle>
              <BulletList items={["Payment processors (e.g., Paystack or similar)", "Cloud hosting and storage providers", "Analytics and performance monitoring tools", "Messaging and notification services (SMS/email providers)", "Identity verification services"]} />
              <P>These providers are only permitted to use your data to perform services on our behalf and must keep your information secure.</P>

              <SubTitle>Between Users & Artisans (Core App Function)</SubTitle>
              <P>As a service marketplace, we share necessary information to complete bookings:</P>
              <BulletList items={["Name", "Contact details (for service coordination)", "Location (when required for service delivery)", "Service request details"]} />

              <SubTitle>Legal Requirements & Law Enforcement</SubTitle>
              <BulletList items={["Comply with the Nigeria Data Protection Act (NDPA 2023)", "Respond to lawful requests from government authorities or courts", "Prevent fraud, criminal activity, or security threats"]} />

              <SubTitle>Business Transfers</SubTitle>
              <P>In a merger, acquisition, or restructuring, your information may be transferred to the new owner while remaining protected under this Privacy Policy or an equivalent standard.</P>

              <SubTitle>We Do NOT</SubTitle>
              <BulletList items={["Sell your personal data to advertisers", "Share your data for unrelated third-party marketing without consent", "Expose sensitive personal information without legal basis"]} />
            </SectionCard>

            {/* RETENTION */}
            <SectionCard id="retention" icon={<AccessTimeOutlined fontSize="small" />} title="How Long We Keep Your Information">
              <P>We keep your personal information only as long as necessary to provide our Services, comply with legal obligations, resolve disputes, and enforce our agreements.</P>

              <SubTitle>Active Account Data</SubTitle>
              <P>Retained for as long as your account is active to provide access, enable functionality, and maintain service history.</P>

              <SubTitle>Inactive or Closed Accounts</SubTitle>
              <BulletList items={["Personal data deleted within a reasonable period", "Some data may be retained in anonymized form for analytics", "Limited records retained for fraud prevention and security purposes"]} />

              <SubTitle>Legal & Regulatory Requirements</SubTitle>
              <BulletList items={["Comply with the Nigeria Data Protection Act (NDPA 2023)", "Meet tax, accounting, or regulatory obligations", "Resolve disputes or enforce agreements", "Support lawful requests from authorities"]} />

              <SubTitle>Backup & Security Storage</SubTitle>
              <P>Even after deletion, data may temporarily exist in secure backups and disaster recovery systems, which are automatically overwritten or securely deleted on a scheduled cycle.</P>

              <SubTitle>Data Minimization</SubTitle>
              <P>We only retain data that is necessary, relevant, and limited to the purpose for which it was collected. Once no longer required, data is securely deleted or anonymized.</P>
            </SectionCard>

            {/* SECURITY */}
            <SectionCard id="security" icon={<LockOutlined fontSize="small" />} title="How We Keep Your Information Safe">
              <P>We use a combination of technical, administrative, and physical security measures to protect your personal information. However, no system is completely secure.</P>

              <SubTitle>Technical Security Measures</SubTitle>
              <BulletList items={["Data encryption (in transit and at rest where applicable)", "Secure server infrastructure and cloud hosting protections", "Firewalls and intrusion detection systems", "Secure APIs and authentication systems", "Password hashing and secure login protocols", "Regular system updates and security patching"]} />

              <SubTitle>Access Control</SubTitle>
              <BulletList items={["Only authorized personnel can access user data", "Access granted strictly on a \"need-to-know\" basis", "Staff and contractors bound by confidentiality obligations", "Role-based access controls enforced within the system"]} />

              <SubTitle>Organisational Measures</SubTitle>
              <BulletList items={["Staff training on data protection and privacy", "Internal security policies and data handling procedures", "Monitoring of system activities for suspicious behaviour", "Incident response procedures for data breaches"]} />

              <SubTitle>Data Breach Response</SubTitle>
              <P>In the unlikely event of a data breach, we will take immediate steps to contain the issue, notify affected users where required by law, report the breach to the <strong>Nigeria Data Protection Commission (NDPC)</strong>, and implement corrective actions.</P>

              <SubTitle>Limitations of Security</SubTitle>
              <BulletList items={["No method of transmission over the internet is 100% secure", "No electronic storage system can be guaranteed completely safe", "You are responsible for keeping your login credentials secure"]} />
            </SectionCard>

            {/* RIGHTS */}
            <SectionCard id="rights" icon={<VerifiedUserOutlined fontSize="small" />} title="Your Privacy Rights">
              <P>Depending on your location, you have rights over your personal data including the right to access, correct, delete, and control how your data is used.</P>

              <SubTitle>Your Rights Under Applicable Laws (Including NDPA 2023)</SubTitle>
              <BulletList items={["Access your personal data — Request a copy of the information we hold about you", "Correct your data — Request correction of inaccurate or incomplete information", "Delete your data — Request deletion of your personal data, subject to legal obligations", "Withdraw consent — Withdraw consent where processing is based on consent", "Object to processing — Object to certain uses of your data", "Data portability — Request transfer of your data where technically feasible"]} />

              <SubTitle>Account Controls</SubTitle>
              <BulletList items={["Updating your profile details", "Changing your contact information", "Editing notification preferences", "Deleting or deactivating your account (where available)"]} />

              <SubTitle>Marketing Communications</SubTitle>
              <P>You can opt out at any time by clicking the "unsubscribe" link in emails, adjusting notification settings in the app, or contacting our support team. You may still receive important service-related messages.</P>

              <SubTitle>How to Exercise Your Rights</SubTitle>
              <P>Contact us using the details provided in this Privacy Policy. We may need to verify your identity before processing your request. We will respond within a reasonable timeframe, in line with the <strong>Nigeria Data Protection Act (NDPA 2023)</strong>.</P>
            </SectionCard>

            {/* COOKIES */}
            <SectionCard id="cookies" icon={<CookieOutlined fontSize="small" />} title="Cookies & Tracking Technologies">
              <P>Cookies and similar technologies are small data files used to collect information about how you interact with our services. In mobile applications, we may use device identifiers, analytics SDKs, and app usage tracking tools.</P>

              <SubTitle>How We Use These Technologies</SubTitle>
              <BulletList items={["Understand how users interact with the app", "Improve performance and stability", "Remember user preferences and settings", "Detect and fix technical issues", "Measure feature usage and engagement", "Enhance security and prevent fraud"]} />

              <SubTitle>Third-Party Analytics Tools</SubTitle>
              <P>We may use Google Firebase Analytics, crash reporting tools, and performance monitoring services. These providers may collect and process data in accordance with their own privacy policies.</P>

              <SubTitle>Your Choices</SubTitle>
              <BulletList items={["Adjusting your device privacy settings", "Disabling analytics or ad tracking (where supported by your device)", "Limiting app permissions (such as location access)"]} />

              <P>By using our Services, you consent to the use of cookies and similar tracking technologies as described in this Policy.</P>
            </SectionCard>

            {/* CONSENT */}
            <SectionCard id="consent" icon={<TouchAppOutlined fontSize="small" />} title="In-App Consent & User Acknowledgement">
              <SubTitle>Consent at First Use</SubTitle>
              <P>When you first use the Handwork Expert application, you will be presented with a clear consent notice. Before continuing, you will be required to read this policy, accept the terms of data collection and processing, and confirm your agreement.</P>

              <SubTitle>Consent for Data Processing</SubTitle>
              <P>By using Handwork Expert, you explicitly consent to:</P>
              <BulletList items={["The collection and processing of your personal data as described in this Privacy Policy", "The sharing of necessary information between users and artisans to complete service requests", "The use of third-party service providers (such as payment processors and analytics tools)", "The processing of your data for security, fraud prevention, and service improvement"]} />

              <SubTitle>Optional Permissions</SubTitle>
              <BulletList items={["Location access (to connect users with nearby artisans)", "Push notifications (for updates and alerts)", "Camera or media access (for profile or service-related uploads)"]} />
              <P>These permissions are only activated if you choose to allow them and can be disabled at any time in your device settings.</P>

              <SubTitle>Withdrawal of Consent</SubTitle>
              <P>You may withdraw consent at any time by deleting your account, disabling app permissions, or contacting our support team. Withdrawing consent may limit your ability to use certain features.</P>

              <SubTitle>Age Confirmation</SubTitle>
              <P>By using the application, you confirm that you are at least 18 years old, or using the Services under the supervision of a parent or legal guardian where applicable.</P>
            </SectionCard>

            {/* CHILDREN */}
            <SectionCard id="children" icon={<ChildCareOutlined fontSize="small" />} title="Children's Privacy">
              <P>Our services are not intended for children under 18 years of age, and we do not knowingly collect personal data from minors.</P>

              <SubTitle>Age Restriction</SubTitle>
              <P>Handwork Expert is designed for individuals who are <strong>18 years and above</strong>. By using our Services, you confirm that you are at least 18 years old or using the Services under the supervision and consent of a parent or legal guardian.</P>

              <SubTitle>Data from Minors</SubTitle>
              <P>We do not knowingly collect, request, or process personal information from children under 18. If we become aware that we have collected personal data from a minor without appropriate consent, we will take immediate steps to delete such information and may suspend or remove the associated account.</P>

              <SubTitle>Parental Responsibility</SubTitle>
              <P>If you are a parent or guardian and believe your child has provided personal data to us without your consent, please contact us immediately so we can take appropriate action.</P>
            </SectionCard>

            {/* DISCLAIMER */}
            <SectionCard id="disclaimer" icon={<WarningAmberOutlined fontSize="small" />} title="Legal Disclaimer">
              <SubTitle>Service Nature</SubTitle>
              <P>Handwork Expert is a digital marketplace platform that connects users with independent service providers (artisans). We do not directly provide all services listed on the platform.</P>

              <SubTitle>No Liability for Third Parties</SubTitle>
              <P>While we facilitate connections between users and artisans, we are not responsible for the quality of services provided by artisans, disputes between users and service providers, or actions/omissions of third-party service providers. However, we may assist in dispute resolution where possible.</P>

              <SubTitle>No Guarantee of Continuous Service</SubTitle>
              <BulletList items={["Continuous availability of the app", "Error-free or uninterrupted operation", "Compatibility with all devices at all times"]} />

              <SubTitle>Limitation of Liability</SubTitle>
              <P>To the fullest extent permitted under applicable law, we shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Services.</P>
            </SectionCard>

            {/* CONTACT */}
            <SectionCard id="contact" icon={<EmailOutlined fontSize="small" />} title="Contact Us">
              <P>If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:</P>
              <Box
                sx={{
                  mt: 2,
                  p: 3,
                  borderRadius: 2,
                  background: "linear-gradient(135deg, #f8f9ff 0%, #fff7f4 100%)",
                  border: `1px solid #e8eaf0`,
                }}
              >
                {[
                  { label: "Email", value: "support@handworkexpert.com" },
                  { label: "Company", value: "Atod Tech" },
                  { label: "Country", value: "Nigeria" },
                ].map((item) => (
                  <Box key={item.label} sx={{ display: "flex", gap: 1.5, mb: 1.2 }}>
                    <Typography sx={{ fontSize: 13.5, fontWeight: 700, color: BRAND_NAVY, minWidth: 70 }}>
                      {item.label}:
                    </Typography>
                    <Typography sx={{ fontSize: 13.5, color: "#374151" }}>{item.value}</Typography>
                  </Box>
                ))}
              </Box>
              <P style={{ marginTop: 12 }}>
                We will respond to all legitimate requests in accordance with applicable data protection laws, including the <strong>Nigeria Data Protection Act (NDPA 2023)</strong>.
              </P>
            </SectionCard>

          </Grid>
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
}
