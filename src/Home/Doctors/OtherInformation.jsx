import React from 'react';

const OtherInformation = ({ doctor }) => {
  const {
    about,
    education,
    work_experience,
    services,
    awards,
    specialization,
  } = doctor;

  return (
    <div className="p-4 md:p-10">
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Overview"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-4 md:p-6"
        >
          <div className="flex flex-col gap-8 md:gap-16 md:px-8 md:flex-row justify-between">
            {/* Flex properties for responsiveness */}
            <div className="mb-6 md:mb-0 md:w-1/2">
              {/* Margin bottom for small devices and width for larger devices */}
              <h3 className="text-2xl font-semibold">About Me</h3>
              <p className="mb-4">{about}</p>
              <h3 className="text-2xl font-semibold">Education</h3>
              <p className="mb-4">{education}</p>
              <h3 className="text-2xl font-semibold">Work Experience</h3>
              <p className="mb-4">{work_experience}</p>
            </div>
            <div className="md:w-1/2">
              {/* Width for larger devices */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold">Services</h3>
                <ul className="list-disc list-inside">
                  {services.map((service, i) => (
                    <li key={i}>{service}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-semibold">Awards</h3>
                <ul className="list-disc list-inside mb-4">
                  {awards.map((award, i) => (
                    <li key={i}>{award}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Specializations</h3>
                <ul className="list-disc list-inside">
                  {specialization.map((spe, i) => (
                    <li key={i}>{spe}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Locations"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-4 md:p-6"
        >
          <h3 className="text-2xl font-semibold">Locations</h3>
          <p>Tab content for locations will go here.</p>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Reviews"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-4 md:p-6"
        >
          <h3 className="text-2xl font-semibold">Reviews</h3>
          <p>Tab content for reviews will go here.</p>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Business"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-4 md:p-6"
        >
          <h3 className="text-2xl font-semibold">Business Information</h3>
          <p>Tab content for business information will go here.</p>
        </div>
      </div>
    </div>
  );
};

export default OtherInformation;
