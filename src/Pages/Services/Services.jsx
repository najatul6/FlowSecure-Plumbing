import ServiceCardsGrid from "../../Components/Service/ServiceCardsGrid"
import ServicesCTA from "../../Components/Service/ServicesCTA"
import ServicesHeader from "../../Components/Service/ServicesHeader"
import WhyChooseUs from "../../Components/Service/WhyChooseUs"

const Services = () => {
  return (
    <div>
      <ServicesHeader />
      <ServiceCardsGrid />
      <ServicesCTA />
      <WhyChooseUs />
    </div>
  )
}

export default Services