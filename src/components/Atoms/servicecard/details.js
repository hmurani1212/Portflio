import { MdOutlineDeveloperMode, MdOutlineSupportAgent } from "react-icons/md";
import { DiResponsive } from "react-icons/di";
import { BiCustomize, BiSignal5 } from "react-icons/bi";
import { FaShopify } from "react-icons/fa";
import { Details } from "@mui/icons-material";

const serviceDetails = [
  {
    title: "Web Design and Development",
    content: "Web Design and Development",
    icon: MdOutlineDeveloperMode,
  },
  {
    title: "Responsive Solutions",
    content:
      "Ensure your website looks and performs flawlessly across all devices, delivering an exceptional user experience.",
    icon: DiResponsive,
  },
  {
    title: "Performance Optimization",
    content:
      "Fine-tune your web applications for speed and efficiency, enhancing user satisfaction and search engine ranking.",
    icon: BiSignal5,
  },
  {
    title: "E-commerce Solutions",
    content:
      "Launch and optimize online stores, boosting sales and customer engagement with cutting-edge e-commerce technologies.",
    icon: FaShopify,
  },
  {
    title: "Custom Development",
    content:
      "Tailor-made solutions to meet your unique business needs, from dynamic web applications to interactive user interfaces.",
    icon: BiCustomize,
  },
  {
    title: "Maintenance and Support",
    content:
      "Keep your web assets up-to-date and secure with our ongoing maintenance and support services.",
    icon: MdOutlineSupportAgent,
  },
];

export default serviceDetails;
