import { Box, CssBaseline, Grid, Typography, Divider } from "@mui/material";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import Topbar from "../../components/guests/topbar";
import Hero from "../../components/guests/hero";
import Footer from "../../components/guests/footer";

const SectionTitle = ({ children }) => (
  <Typography
    variant="h5"
    sx={{ fontWeight: 700, color: "#1a1a1a", mt: 5, mb: 1.5, fontSize: { xs: 18, md: 22 } }}
  >
    {children}
  </Typography>
);

const SubTitle = ({ children }) => (
  <Typography
    variant="h6"
    sx={{ fontWeight: 700, color: "#292626", mt: 3, mb: 1, fontSize: { xs: 14, md: 16 } }}
  >
    {children}
  </Typography>
);

const Paragraph = ({ children }) => (
  <Typography
    component="p"
    sx={{ color: "#444", fontSize: 14, lineHeight: 1.8, mb: 1.5 }}
  >
    {children}
  </Typography>
);

const BulletList = ({ items }) => (
  <Box component="ul" sx={{ pl: 3, mb: 1.5 }}>
    {items.map((item, i) => (
      <Box
        component="li"
        key={i}
        sx={{ color: "#444", fontSize: 14, lineHeight: 1.8, mb: 0.5 }}
      >
        {item}
      </Box>
    ))}
  </Box>
);

export default function PrivacyPolicy() {
  const { service_category } = useSelector((state) => state.user);
  const popularServices = useMemo(() => {
    let data = service_category || [];
    return data.slice(0, 7);
  }, [service_category]);

  return (
    <Box sx={{ backgroundColor: "#fcfcfc" }}>
      <Topbar popularServices={popularServices} />
      <CssBaseline />
      <Hero
        coloredText={"Handwork Expert"}
        whiteText={"Privacy Policy"}
        subtitle={""}
      />

      <Box sx={{ mt: 6, mb: 8, px: 2 }}>
        <Grid container>
          <Grid item xs={12} sm={1} md={1} lg={2} />
          <Grid item xs={12} sm={10} md={10} lg={8}>
            <Typography sx={{ color: "#666", fontSize: 14, mb: 3 }}>
              <strong>Effective Date:</strong> April 11, 2026
            </Typography>

            <Paragraph>
              Welcome to <strong>Handwork Expert</strong> ("we," "our," or "us").
            </Paragraph>
            <Paragraph>
              This Privacy Policy explains how we collect, use, store, process, and protect
              your personal data when you access or use our mobile application, website, and
              any related services (collectively referred to as the "Services").
            </Paragraph>
            <Paragraph>
              We are committed to protecting your privacy and handling your personal
              information in a transparent, lawful, and secure manner.
            </Paragraph>
            <Paragraph>
              This Privacy Policy is designed to comply with applicable data protection laws
              and platform requirements, including:
            </Paragraph>
            <BulletList
              items={[
                "The Nigeria Data Protection Act, 2023 (NDPA)",
                "Regulations and guidelines issued by the Nigeria Data Protection Commission (NDPC)",
                "The Google Play Developer Data Safety and Privacy Policy Requirements",
                "Other applicable international privacy standards where relevant (such as GDPR principles where applicable)",
              ]}
            />
            <Paragraph>
              By accessing or using our Services, you confirm that you have read, understood,
              and agreed to the practices described in this Privacy Policy.
            </Paragraph>
            <Paragraph>
              If you do not agree with this policy, you should discontinue use of the services.
            </Paragraph>

            <Divider sx={{ my: 3 }} />

            {/* SECTION 1 */}
            <SectionTitle>WHAT INFORMATION WE COLLECT</SectionTitle>
            <Paragraph>
              We collect information that you provide to us directly, information collected
              automatically when you use our Services, and limited information from trusted
              third parties.
            </Paragraph>

            <SubTitle>Personal Information You Provide to Us</SubTitle>
            <Paragraph>
              We collect personal information that you voluntarily provide when you:
            </Paragraph>
            <BulletList
              items={[
                "Register or create an account",
                "Use our Services (as a user or artisan)",
                "Fill out forms within the app",
                "Contact customer support",
                "Participate in surveys, promotions, or feedback activities",
              ]}
            />
            <Paragraph>This information may include:</Paragraph>
            <BulletList
              items={[
                "Full name",
                "Phone number",
                "Email address",
                "Username",
                "Password (securely encrypted)",
                "Profile details (e.g., profile picture, location, service category if artisan)",
                "Contact preferences",
                "Authentication or verification data (such as OTPs)",
              ]}
            />

            <SubTitle>Sensitive Personal Data</SubTitle>
            <Paragraph>
              We do <strong>not intentionally collect sensitive personal data</strong> such as
              information relating to race, religion, health status, or political opinions.
            </Paragraph>
            <Paragraph>
              However, if you unintentionally provide such data, we will treat it with strict
              confidentiality and handle it in accordance with applicable laws.
            </Paragraph>

            <SubTitle>Payment Information</SubTitle>
            <Paragraph>
              If you make payments through our platform, we may collect information required
              to process transactions, such as:
            </Paragraph>
            <BulletList
              items={[
                "Payment confirmation details",
                "Transaction reference IDs",
              ]}
            />
            <Paragraph>
              We do <strong>not store your full card details</strong>. All payment processing
              is handled securely by third-party payment providers such as{" "}
              <strong>Paystack</strong>, Flutterwave, or similar licensed processors. Their
              privacy policies govern how your payment data is handled.
            </Paragraph>

            <SubTitle>Social Login Information</SubTitle>
            <Paragraph>
              If you choose to register or log in using a third-party platform (such as
              Google, Facebook, or Apple), we may receive:
            </Paragraph>
            <BulletList
              items={[
                "Your name",
                "Email address",
                "Profile picture",
                "Unique user ID from the provider",
              ]}
            />
            <Paragraph>
              We only use this information to create and manage your account.
            </Paragraph>

            <SubTitle>Device and Usage Information (Automatically Collected)</SubTitle>
            <Paragraph>
              When you use our services, we may automatically collect the following:
            </Paragraph>
            <BulletList
              items={[
                "Device type and model",
                "Operating system",
                "IP address",
                "App usage data (features accessed, time spent, interactions)",
                "Crash logs and performance data",
                "Approximate location (only when permission is granted)",
              ]}
            />
            <Paragraph>
              This helps us improve app performance, security, and user experience.
            </Paragraph>

            <SubTitle>Push Notifications</SubTitle>
            <Paragraph>
              With your permission, we may send push notifications such as:
            </Paragraph>
            <BulletList
              items={[
                "Service updates",
                "Account alerts",
                "Booking or request updates",
                "Important announcements",
              ]}
            />
            <Paragraph>
              You can disable notifications anytime in your device settings.
            </Paragraph>

            <SubTitle>Information from Third Parties</SubTitle>
            <Paragraph>
              We may receive limited information from trusted third-party sources, such as:
            </Paragraph>
            <BulletList
              items={[
                "Identity verification providers",
                "Marketing or analytics partners",
                "Social media platforms (if connected)",
                "Public databases (where legally permitted)",
              ]}
            />
            <Paragraph>This may include:</Paragraph>
            <BulletList
              items={[
                "Name",
                "Email address",
                "Phone number",
                "Profile or business information",
                "IP-related data",
              ]}
            />

            <SubTitle>Accuracy of Information</SubTitle>
            <Paragraph>
              You are responsible for ensuring that all information you provide is accurate,
              complete, and up to date. Failure to provide accurate information may affect
              your ability to use certain features of the Services.
            </Paragraph>

            <Divider sx={{ my: 3 }} />

            {/* SECTION 2 */}
            <SectionTitle>HOW WE USE YOUR INFORMATION</SectionTitle>
            <Paragraph>
              We use your personal information to operate, improve, secure, and deliver our
              Services, as well as to comply with legal obligations. We process your
              information for the following purposes:
            </Paragraph>

            <SubTitle>To Provide and Maintain Our Services</SubTitle>
            <Paragraph>We use your information to:</Paragraph>
            <BulletList
              items={[
                "Create and manage your user or artisan account",
                "Enable you to access and use the app features",
                "Match users with artisans and service providers",
                "Process requests, bookings, and service interactions",
                "Facilitate communication between users and artisans",
              ]}
            />

            <SubTitle>To Improve Our Services</SubTitle>
            <Paragraph>We may use your data to:</Paragraph>
            <BulletList
              items={[
                "Understand how users interact with the app",
                "Improve user experience and app performance",
                "Fix bugs, errors, and technical issues",
                "Develop new features and services",
              ]}
            />

            <SubTitle>To Communicate With You</SubTitle>
            <Paragraph>We may use your information to:</Paragraph>
            <BulletList
              items={[
                "Send account-related notifications (e.g., login alerts, updates)",
                "Respond to customer support requests",
                "Send important service announcements or policy updates",
                "Provide transaction and activity confirmations",
              ]}
            />

            <SubTitle>For Safety, Security, and Fraud Prevention</SubTitle>
            <Paragraph>We use your information to:</Paragraph>
            <BulletList
              items={[
                "Detect and prevent fraudulent activity",
                "Protect user accounts and platform integrity",
                "Monitor suspicious or unauthorized access",
                "Enforce our Terms of Use and community guidelines",
              ]}
            />

            <SubTitle>For Legal and Regulatory Compliance</SubTitle>
            <Paragraph>We may process your information to:</Paragraph>
            <BulletList
              items={[
                "Comply with applicable laws, including the Nigeria Data Protection Act (NDPA 2023)",
                "Respond to lawful requests from regulators or law enforcement",
                "Maintain proper business and financial records",
              ]}
            />

            <SubTitle>For Marketing and Engagement (Optional)</SubTitle>
            <Paragraph>With your consent, we may use your information to:</Paragraph>
            <BulletList
              items={[
                "Send promotional messages or service updates",
                "Inform you about new features or offers",
                "Improve user engagement and retention",
              ]}
            />
            <Paragraph>
              You can opt out of marketing communications at any time.
            </Paragraph>

            <SubTitle>With Your Consent</SubTitle>
            <Paragraph>
              We may process your personal data for any other purpose that you explicitly
              agree to at the point of collection.
            </Paragraph>

            <Divider sx={{ my: 3 }} />

            {/* SECTION 3 */}
            <SectionTitle>WHEN AND WITH WHOM WE SHARE YOUR INFORMATION</SectionTitle>
            <Paragraph>
              We do not sell your personal data. We only share your information in limited
              situations where it is necessary to operate our services, comply with legal
              obligations, or protect users and the platform.
            </Paragraph>

            <SubTitle>Service Providers and Business Partners</SubTitle>
            <Paragraph>
              We may share your data with trusted third-party companies that help us operate
              the platform, such as:
            </Paragraph>
            <BulletList
              items={[
                "Payment processors (e.g., Paystack or similar providers)",
                "Cloud hosting and storage providers",
                "Analytics and performance monitoring tools",
                "Messaging and notification services (e.g., SMS or email providers)",
                "Identity verification services",
              ]}
            />
            <Paragraph>
              These providers are only allowed to use your data to perform services on our
              behalf and are required to keep your information secure.
            </Paragraph>

            <SubTitle>Between Users and Artisans (Core Function of the App)</SubTitle>
            <Paragraph>
              Because Handwork Expert is a service marketplace, we may share necessary
              information between users and service providers, such as:
            </Paragraph>
            <BulletList
              items={[
                "Name",
                "Contact details (as needed for service coordination)",
                "Location (when required for service delivery)",
                "Service request details",
              ]}
            />
            <Paragraph>
              This sharing is essential for completing transactions within the platform.
            </Paragraph>

            <SubTitle>Legal Requirements and Law Enforcement</SubTitle>
            <Paragraph>We may disclose your information if required to:</Paragraph>
            <BulletList
              items={[
                "Comply with applicable laws and regulations, including the Nigeria Data Protection Act (NDPA 2023)",
                "Respond to lawful requests from government authorities or courts",
                "Prevent fraud, criminal activity, or security threats",
              ]}
            />

            <SubTitle>Business Transfers</SubTitle>
            <Paragraph>
              If Handwork Expert is involved in a merger, acquisition, sale of assets, or
              business restructuring, your information may be transferred to the new owner or
              partner. In such cases, we will ensure your data remains protected under this
              Privacy Policy or an equivalent standard.
            </Paragraph>

            <SubTitle>With Your Consent</SubTitle>
            <Paragraph>
              We may share your information for any other purpose if you have given us clear
              permission to do so.
            </Paragraph>

            <SubTitle>We Do NOT Do</SubTitle>
            <Paragraph>To be clear, we do NOT:</Paragraph>
            <BulletList
              items={[
                "Sell your personal data to advertisers",
                "Share your data for unrelated third-party marketing without consent",
                "Expose sensitive personal information without legal basis",
              ]}
            />

            <Divider sx={{ my: 3 }} />

            {/* SECTION 4 */}
            <SectionTitle>HOW LONG WE KEEP YOUR INFORMATION</SectionTitle>

            <SubTitle>Data Retention</SubTitle>
            <Paragraph>
              We keep your personal information only for as long as it is necessary to
              provide our Services, comply with legal obligations, resolve disputes, and
              enforce our agreements. We retain your personal data based on the following
              principles:
            </Paragraph>

            <SubTitle>Active Account Data</SubTitle>
            <Paragraph>
              If you maintain an active account with Handwork Expert, we will retain your
              information for as long as your account remains active. This requirement is
              necessary to:
            </Paragraph>
            <BulletList
              items={[
                "Provide access to your account",
                "Enable app functionality",
                "Maintain service history and preferences",
              ]}
            />

            <SubTitle>Inactive or Closed Accounts</SubTitle>
            <Paragraph>If you deactivate or delete your account:</Paragraph>
            <BulletList
              items={[
                "Your personal data will be deleted within a reasonable period",
                "Some data may be retained in anonymized form for analytics and service improvement",
                "Limited records may be retained for fraud prevention and security purposes",
              ]}
            />

            <SubTitle>Legal and Regulatory Requirements</SubTitle>
            <Paragraph>
              We may retain certain data for longer periods where required to:
            </Paragraph>
            <BulletList
              items={[
                "Comply with the Nigeria Data Protection Act (NDPA 2023)",
                "Meet tax, accounting, or regulatory obligations",
                "Resolve disputes or enforce agreements",
                "Support lawful requests from authorities",
              ]}
            />

            <SubTitle>Backup and Security Storage</SubTitle>
            <Paragraph>
              Even after deletion requests, your data may temporarily exist in:
            </Paragraph>
            <BulletList items={["Secure backups", "Disaster recovery systems"]} />
            <Paragraph>
              These backups are automatically overwritten or securely deleted on a scheduled
              cycle.
            </Paragraph>

            <SubTitle>Data Minimization</SubTitle>
            <Paragraph>We only retain data that is:</Paragraph>
            <BulletList
              items={[
                "Necessary",
                "Relevant",
                "Limited to the purpose for which it was collected",
              ]}
            />
            <Paragraph>
              Once no longer required, data is securely deleted or anonymized.
            </Paragraph>

            <Divider sx={{ my: 3 }} />

            {/* SECTION 5 */}
            <SectionTitle>HOW WE KEEP YOUR INFORMATION SAFE</SectionTitle>
            <Paragraph>
              We use a combination of technical, administrative, and physical security
              measures to protect your personal information. However, no system is completely
              secure.
            </Paragraph>

            <SubTitle>Technical Security Measures</SubTitle>
            <Paragraph>We protect your information using:</Paragraph>
            <BulletList
              items={[
                "Data encryption (in transit and at rest where applicable)",
                "Secure server infrastructure and cloud hosting protections",
                "Firewalls and intrusion detection systems",
                "Secure APIs and authentication systems",
                "Password hashing and secure login protocols",
                "Regular system updates and security patching",
              ]}
            />

            <SubTitle>Access Control</SubTitle>
            <Paragraph>
              We limit access to your personal data by ensuring that:
            </Paragraph>
            <BulletList
              items={[
                "Only authorized personnel can access user data",
                "Access is granted strictly on a \"need-to-know\" basis",
                "Staff and contractors are bound by confidentiality obligations",
                "Role-based access controls are enforced within the system",
              ]}
            />

            <SubTitle>Organisational Measures</SubTitle>
            <Paragraph>
              We also protect your data through internal processes such as:
            </Paragraph>
            <BulletList
              items={[
                "Staff training on data protection and privacy",
                "Internal security policies and data handling procedures",
                "Monitoring of system activities for suspicious behaviour",
                "Incident response procedures for data breaches",
              ]}
            />

            <SubTitle>Third-Party Security</SubTitle>
            <Paragraph>
              Where we rely on third-party service providers (such as cloud hosting or
              payment processors), we ensure they:
            </Paragraph>
            <BulletList
              items={[
                "Meet industry-standard security requirements",
                "Comply with applicable data protection laws (including NDPA 2023 where applicable)",
                "Process data only under strict contractual obligations",
              ]}
            />

            <SubTitle>Data Breach Response</SubTitle>
            <Paragraph>
              In the unlikely event of a data breach, we will:
            </Paragraph>
            <BulletList
              items={[
                "Take immediate steps to contain and investigate the issue",
                "Notify affected users where required by law",
                "Report the breach to relevant authorities, including the Nigeria Data Protection Commission (NDPC) where applicable",
                "Implement corrective actions to prevent recurrence",
              ]}
            />

            <SubTitle>Limitations of Security</SubTitle>
            <Paragraph>
              While we work hard to protect your data, please be aware that:
            </Paragraph>
            <BulletList
              items={[
                "No method of transmission over the internet is 100% secure",
                "No electronic storage system can be guaranteed to be completely safe",
                "You are responsible for keeping your login credentials secure",
              ]}
            />

            <Divider sx={{ my: 3 }} />

            {/* SECTION 6 */}
            <SectionTitle>YOUR PRIVACY RIGHTS</SectionTitle>
            <Paragraph>
              Depending on your location, you have rights over your personal data. These
              include the right to access, correct, delete, and control how your data is
              used.
            </Paragraph>

            <SubTitle>Your Rights Under Applicable Laws (Including NDPA 2023)</SubTitle>
            <Paragraph>
              If you are located in Nigeria or other applicable regions, you may have the
              right to:
            </Paragraph>
            <BulletList
              items={[
                "Access your personal data — Request a copy of the information we hold about you",
                "Correct your data — Request correction of inaccurate or incomplete information",
                "Delete your data — Request deletion of your personal data, subject to legal obligations",
                "Withdraw consent — Withdraw consent where processing is based on consent",
                "Object to processing — Object to certain uses of your data",
                "Data portability — Request transfer of your data where technically feasible",
              ]}
            />

            <SubTitle>Account Controls</SubTitle>
            <Paragraph>
              You can manage your information directly through the app by:
            </Paragraph>
            <BulletList
              items={[
                "Updating your profile details",
                "Changing your contact information",
                "Editing notification preferences",
                "Deleting or deactivating your account (where available)",
              ]}
            />

            <SubTitle>Marketing Communications</SubTitle>
            <Paragraph>You can opt out of marketing messages at any time by:</Paragraph>
            <BulletList
              items={[
                "Clicking the \"unsubscribe\" link in emails",
                "Adjusting your notification settings in the app",
                "Contacting our support team",
              ]}
            />
            <Paragraph>
              Even if you opt out, you may still receive important service-related messages
              (e.g. security alerts or account updates).
            </Paragraph>

            <SubTitle>Withdrawing Consent</SubTitle>
            <Paragraph>
              Where we rely on your consent to process your data, you may withdraw it at any
              time. Once withdrawn:
            </Paragraph>
            <BulletList
              items={[
                "We will stop processing your data for that purpose",
                "This does not affect processing already carried out before withdrawal",
              ]}
            />

            <SubTitle>How to Exercise Your Rights</SubTitle>
            <Paragraph>
              You may exercise your rights by contacting us using the details provided in
              this Privacy Policy. We may need to verify your identity before processing your
              request to protect your data from unauthorized access.
            </Paragraph>

            <SubTitle>Response Time</SubTitle>
            <Paragraph>
              We will respond to your request within a reasonable timeframe, in line with
              applicable legal requirements under the{" "}
              <strong>Nigeria Data Protection Act (NDPA 2023)</strong>.
            </Paragraph>

            <Divider sx={{ my: 3 }} />

            {/* SECTION 7 — Cookies */}
            <SectionTitle>COOKIES AND TRACKING TECHNOLOGIES</SectionTitle>

            <SubTitle>What Are Cookies and Tracking Technologies?</SubTitle>
            <Paragraph>
              Cookies and similar technologies are small data files or tools used to collect
              information about how you interact with our services. In mobile applications,
              we may use equivalent technologies such as:
            </Paragraph>
            <BulletList
              items={["Device identifiers", "Analytics SDKs", "App usage tracking tools"]}
            />

            <SubTitle>How We Use These Technologies</SubTitle>
            <Paragraph>We use cookies and tracking technologies to:</Paragraph>
            <BulletList
              items={[
                "Understand how users interact with the app",
                "Improve performance and stability",
                "Remember user preferences and settings",
                "Detect and fix technical issues",
                "Measure feature usage and engagement",
                "Enhance security and prevent fraud",
              ]}
            />

            <SubTitle>Types of Data Collected</SubTitle>
            <Paragraph>These technologies may collect:</Paragraph>
            <BulletList
              items={[
                "Device type and operating system",
                "App usage patterns and interactions",
                "Session duration and activity logs",
                "Crash reports and performance data",
                "Approximate location (if permitted)",
              ]}
            />

            <SubTitle>Third-Party Analytics Tools</SubTitle>
            <Paragraph>
              We may use trusted third-party analytics providers such as:
            </Paragraph>
            <BulletList
              items={[
                "Google Firebase Analytics",
                "Crash reporting tools",
                "Performance monitoring services",
              ]}
            />
            <Paragraph>
              These providers may collect and process data in accordance with their own
              privacy policies.
            </Paragraph>

            <SubTitle>Your Choices</SubTitle>
            <Paragraph>You can manage your tracking preferences by:</Paragraph>
            <BulletList
              items={[
                "Adjusting your device privacy settings",
                "Disabling analytics or ad tracking (where supported by your device)",
                "Limiting app permissions (such as location access)",
              ]}
            />

            <SubTitle>Consent</SubTitle>
            <Paragraph>
              By using our Services, you consent to the use of cookies and similar tracking
              technologies as described in this Policy. Where required by law, we will
              request your explicit consent before activating certain tracking features.
            </Paragraph>

            <Divider sx={{ my: 3 }} />

            {/* SECTION 8 */}
            <SectionTitle>IN-APP CONSENT AND USER ACKNOWLEDGEMENT</SectionTitle>

            <SubTitle>Consent at First Use</SubTitle>
            <Paragraph>
              When you first download and use the Handwork Expert application, we will
              present you with a clear consent notice explaining how your data is collected
              and used. Before you can continue using the Services, you will be required to:
            </Paragraph>
            <BulletList
              items={[
                "Read this privacy policy",
                "Accept the terms of data collection and processing",
                "Confirm your agreement through an \"Accept\" action",
              ]}
            />
            <Paragraph>
              If you do not agree, you will not be able to use the Services.
            </Paragraph>

            <SubTitle>Consent for Data Processing</SubTitle>
            <Paragraph>By using Handwork Expert, you explicitly consent to:</Paragraph>
            <BulletList
              items={[
                "The collection and processing of your personal data as described in this Privacy Policy",
                "The sharing of necessary information between users and artisans to complete service requests",
                "The use of third-party service providers (such as payment processors and analytics tools)",
                "The processing of your data for security, fraud prevention, and service improvement",
              ]}
            />

            <SubTitle>Optional Permissions Consent</SubTitle>
            <Paragraph>
              We may request optional permissions within the app, such as:
            </Paragraph>
            <BulletList
              items={[
                "Location access (to connect users with nearby artisans)",
                "Push notifications (for updates and alerts)",
                "Camera or media access (for profile or service-related uploads)",
              ]}
            />
            <Paragraph>
              These permissions will only be activated if you choose to allow them. You can
              disable them at any time in your device settings.
            </Paragraph>

            <SubTitle>Withdrawal of Consent</SubTitle>
            <Paragraph>You may withdraw your consent at any time by:</Paragraph>
            <BulletList
              items={[
                "Deleting your account",
                "Disabling app permissions",
                "Contacting our support team",
              ]}
            />
            <Paragraph>
              Please note that withdrawing consent may limit your ability to use certain
              features of the Services.
            </Paragraph>

            <SubTitle>Age Confirmation</SubTitle>
            <Paragraph>By using the application, you confirm that you are:</Paragraph>
            <BulletList
              items={[
                "At least 18 years old, OR",
                "Using the Services under the supervision of a parent or legal guardian where applicable",
              ]}
            />

            <Divider sx={{ my: 3 }} />

            {/* SECTION 9 */}
            <SectionTitle>CHILDREN'S PRIVACY</SectionTitle>
            <Paragraph>
              Our services are not intended for children under 18 years of age, and we do
              not knowingly collect personal data from minors.
            </Paragraph>

            <SubTitle>Age Restriction</SubTitle>
            <Paragraph>
              Handwork Expert is designed for individuals who are{" "}
              <strong>18 years and above</strong>. By using our Services, you confirm that
              you are at least 18 years old or that you are using the Services under the
              supervision and consent of a parent or legal guardian, where applicable.
            </Paragraph>

            <SubTitle>Data from Minors</SubTitle>
            <Paragraph>
              We do not knowingly collect, request, or process personal information from
              children under 18 years of age. If we become aware that we have collected
              personal data from a minor without appropriate consent:
            </Paragraph>
            <BulletList
              items={[
                "We will take immediate steps to delete such information",
                "We may suspend or remove the associated account",
              ]}
            />

            <SubTitle>Parental Responsibility</SubTitle>
            <Paragraph>
              If you are a parent or guardian and believe that your child has provided
              personal data to us without your consent, please contact us immediately so we
              can take appropriate action.
            </Paragraph>

            <Divider sx={{ my: 3 }} />

            {/* SECTION 10 */}
            <SectionTitle>LEGAL DISCLAIMER</SectionTitle>

            <SubTitle>Service Nature</SubTitle>
            <Paragraph>
              Handwork Expert is a digital marketplace platform that connects users with
              independent service providers (artisans). We do not directly provide all
              services listed on the platform.
            </Paragraph>

            <SubTitle>No Liability for Third Parties</SubTitle>
            <Paragraph>
              While we facilitate connections between users and artisans, we are not
              responsible for:
            </Paragraph>
            <BulletList
              items={[
                "The quality of services provided by artisans",
                "Disputes between users and service providers",
                "Actions or omissions of third-party service providers",
              ]}
            />
            <Paragraph>
              However, we may assist in dispute resolution where possible.
            </Paragraph>

            <SubTitle>No Guarantee of Continuous Service</SubTitle>
            <Paragraph>
              We strive to ensure uninterrupted access to our services, but we do not
              guarantee the following:
            </Paragraph>
            <BulletList
              items={[
                "Continuous availability of the app",
                "Error-free or uninterrupted operation",
                "Compatibility with all devices at all times",
              ]}
            />

            <SubTitle>Limitation of Liability</SubTitle>
            <Paragraph>
              To the fullest extent permitted under applicable law, we shall not be liable
              for any indirect, incidental, or consequential damages arising from your use of
              the Services.
            </Paragraph>

            <Divider sx={{ my: 3 }} />

            {/* CONTACT */}
            <SectionTitle>CONTACT US</SectionTitle>
            <Paragraph>
              If you have any questions, concerns, or requests regarding this Privacy Policy
              or your personal data, you may contact us using the details below:
            </Paragraph>
            <Box sx={{ mb: 2 }}>
              <Typography sx={{ fontSize: 14, color: "#444", lineHeight: 2 }}>
                <strong>Email:</strong> support@handworkexpert.com
              </Typography>
              <Typography sx={{ fontSize: 14, color: "#444", lineHeight: 2 }}>
                <strong>Company Name:</strong> Atod Tech
              </Typography>
              <Typography sx={{ fontSize: 14, color: "#444", lineHeight: 2 }}>
                <strong>Country:</strong> Nigeria
              </Typography>
            </Box>
            <Paragraph>
              We will respond to all legitimate requests in accordance with applicable data
              protection laws, including the{" "}
              <strong>Nigeria Data Protection Act (NDPA 2023)</strong>.
            </Paragraph>
          </Grid>
          <Grid item xs={12} sm={1} md={1} lg={2} />
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
}
