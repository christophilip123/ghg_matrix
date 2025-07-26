import React from 'react';

export const Compliance = () => {
  return (
    <section id="compliance" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Compliance & Certifications
          </h2>
        </div>

        {/* Key Certifications & Standards */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <img
                src="https://ghgprotocol.org/sites/default/files/ghgp/assets/GHG_Protocol_logo.jpg"
                alt="GHG Protocol"
                className="h-16 mx-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'block';
                }}
              />
              <div style={{ display: 'none' }} className="text-center text-gray-600 font-medium">
                GHG Protocol
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <img
                src="https://sciencebasedtargets.org/hubfs/SBTi-logo-download-jpg.jpg"
                alt="Science Based Targets"
                className="h-16 mx-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'block';
                }}
              />
              <div style={{ display: 'none' }} className="text-center text-gray-600 font-medium">
                Science Based Targets
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <img
                src="https://carbonaccountingfinancials.com/files/downloads/pcaf-logo-color.png"
                alt="PCAF"
                className="h-16 mx-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'block';
                }}
              />
              <div style={{ display: 'none' }} className="text-center text-gray-600 font-medium">
                PCAF
              </div>
            </div>
          </div>
        </div>

        {/* Supported Compliance Frameworks */}
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <img
                src="https://www.sebi.gov.in/sebi_data/commondocs/jan-2023/1674473474112.jpg"
                alt="BRSR"
                className="h-12 mx-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'block';
                }}
              />
              <div style={{ display: 'none' }} className="text-center text-xs text-gray-600 font-medium">
                BRSR
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <img
                src="https://www.globalreporting.org/media/jrbnu3yv/gri-logo_black.png"
                alt="GRI"
                className="h-12 mx-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'block';
                }}
              />
              <div style={{ display: 'none' }} className="text-center text-xs text-gray-600 font-medium">
                GRI
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg"
                alt="CSRD"
                className="h-12 mx-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'block';
                }}
              />
              <div style={{ display: 'none' }} className="text-center text-xs text-gray-600 font-medium">
                CSRD
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <img
                src="https://www.sasb.org/wp-content/uploads/2019/08/SASB-Logo_STANDARD-RGB-WEB.png"
                alt="SASB"
                className="h-12 mx-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'block';
                }}
              />
              <div style={{ display: 'none' }} className="text-center text-xs text-gray-600 font-medium">
                SASB
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <img
                src="https://cdn.cdp.net/cdp-production/cms/logos/CDP-logo-2019-red.png"
                alt="CDP"
                className="h-12 mx-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'block';
                }}
              />
              <div style={{ display: 'none' }} className="text-center text-xs text-gray-600 font-medium">
                CDP
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <img
                src="https://www.ifrs.org/content/dam/ifrs/around-the-world/logos/ifrs-logo.png"
                alt="IFRS"
                className="h-12 mx-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'block';
                }}
              />
              <div style={{ display: 'none' }} className="text-center text-xs text-gray-600 font-medium">
                IFRS
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <img
                src="https://www.fsb-tcfd.org/wp-content/uploads/2017/12/TCFD_Logo_RGB_Colour.png"
                alt="TCFD"
                className="h-12 mx-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'block';
                }}
              />
              <div style={{ display: 'none' }} className="text-center text-xs text-gray-600 font-medium">
                TCFD
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};