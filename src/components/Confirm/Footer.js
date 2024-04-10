import { SocialHandle, LinkSection, Copyright } from "./index.js";
import { linkSections } from "./index.js";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-10">
      <div className="container mx-auto py-14 px-6">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-8">
          <SocialHandle />
          {linkSections.map((section, index) => (
            <div className="col-span-7 lg:col-span-1">
              {section.groupedSections ? (
                section.groupedSections.map((groupedSection, index) => (
                  <LinkSection
                    key={index}
                    title={groupedSection.title}
                    items={groupedSection.items}
                  />
                ))
              ) : (
                <LinkSection
                  key={index}
                  title={section.title}
                  items={section.items}
                />
              )}
            </div>
          ))}
        </div>
        <div className="border border-b border-gray-300 mt-8"></div>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
