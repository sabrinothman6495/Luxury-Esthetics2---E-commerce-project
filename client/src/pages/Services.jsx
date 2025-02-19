import { useEffect, useState } from 'react';
import axios from 'axios';

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/services');
        setServices(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-xl">Our Services</h2>
      <ul>
        {services.map((service) => (
          <li key={service._id} className="border p-4 my-2">
            <h3 className="text-lg font-bold">{service.name}</h3>
            <p>{service.description}</p>
            <span className="text-green-600">${service.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
