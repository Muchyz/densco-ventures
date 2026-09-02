import Services from '../components/Services.jsx';

export default function OurServicesPage() {
  return (
    <main>
      {/* detailed=true renders the full write-up for each service */}
      <div className="our-services-page">
        <Services detailed={true} />
      </div>
    </main>
  );
}
