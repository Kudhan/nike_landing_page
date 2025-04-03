import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
          <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
            <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
              We Provide You
            </span>
            <br />
            <span className='text-coral-red '>Super</span> <span className='text-coral-red '>Quality</span> Shoe
          </h2>
          <p className='mt-4 lg:max-w-lg leading-7 infpo-text '>
          Our shoes combine premium materials and innovative technology for unmatched comfort, durability, and support. Designed for a perfect fit, they offer superior cushioning and reliable performance, making them ideal for both everyday wear and active use.
          </p>
          <p className="mt-6 lg:max-w-lg">
            Our Dedication to details and excellence ensures yiur satisfaction
          </p>
          <div className="mt-11">
          <Button label='View Details' iconURL={arrowRight} />
          </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img 
        src={shoe8}
        alt="shoe8" width={570} height={522} className="object-contain"/>

      </div>
    </section>
  )
}

export default SuperQuality
