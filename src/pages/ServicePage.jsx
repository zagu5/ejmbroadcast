import { useParams } from "react-router-dom";
import ServiceDetail from "../components/ServiceDetail";
import { serviceData } from "../components/serviceData";

const ServicePage = () => {
    const { id } = useParams();
    const service = serviceData[id];
    return (
        <div>
            <ServiceDetail serviceData={service} />
        </div>
    );
  };

export default ServicePage;