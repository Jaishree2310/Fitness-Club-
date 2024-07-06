import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img className="max-w-100" alt="Fit-Club" src={Logo} />
          <p className="my-5">
          FitClub is a sleek and visually captivating landing page designed specifically for gyms and fitness centers. It provides a clean and efficient online presence, aiming to attract potential clients and showcase the full range of amenities and services offered by the gym.
          </p>
          <p>@Jaishree_Singh© All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Nutrition plans </p>
          <p className="my-5">Workout plans</p>
          <p>Vitamins</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">205, Mumbai, Maharashtra (IN).</p>
          <p>+91 9876543210</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
