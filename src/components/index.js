// Import components
import Button from "./Button";
import Nav from "./Nav";
import ShoeCard from "./ShoeCard";
import PopularProductCard from "./PopularProductCard";
import ServiceCard from "./ServiceCard";
//import ReviewCard from "./ReviewCard";

// Import icons (ensure these paths are correct)
import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";

export const services = [
    {
        imgURL: truckFast,    // Using the truckFast icon
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,   // Using the shieldTick icon
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,      // Using the support icon
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

// Export components for use in other files
export {
    Button,
    Nav,
    ShoeCard,
    PopularProductCard,
    ServiceCard,
    //ReviewCard,
};
