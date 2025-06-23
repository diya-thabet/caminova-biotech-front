const PricingSection = () => {
  const teamMembers = [
    {
      name: "Dr. Amira Hassan",
      position: "Chief Executive Officer & Founder",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
      description:
        "Pioneer in desert biotechnology with 15+ years in sustainable innovation",
    },
    {
      name: "Prof. Omar Al-Rashid",
      position: "Chief Scientific Officer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description:
        "Leading researcher in protein extraction and green chemistry processes",
    },
    {
      name: "Dr. Layla Mahmoud",
      position: "Head of Research & Development",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      description:
        "Expert in biotechnology applications and sustainable manufacturing",
    },
    {
      name: "Khalid Al-Sahara",
      position: "Director of Operations",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description:
        "Operations specialist with deep knowledge of traditional desert practices",
    },
    {
      name: "Dr. Fatima Benali",
      position: "Quality Assurance Director",
      image:
        "https://images.unsplash.com/photo-1559155589-793e4833e5f0?w=400&h=400&fit=crop&crop=face",
      description:
        "Ensuring the highest standards in product quality and safety protocols",
    },
    {
      name: "Ahmed Al-Nouri",
      position: "Business Development Manager",
      image:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=400&h=400&fit=crop&crop=face",
      description:
        "Building partnerships across global markets and sustainable supply chains",
    },
    {
      name: "Dr. Sarah Al-Masri",
      position: "Environmental Sustainability Lead",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop&crop=face",
      description:
        "Ensuring eco-friendly processes in all biotechnology innovations",
    },
    {
      name: "Hassan Al-Qadri",
      position: "Product Innovation Specialist",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
      description:
        "Developing next-generation gelatin applications for global markets",
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 bg-yellow-600/10 border border-yellow-600 w-fit px-4 py-2 rounded-full mx-auto mb-6 transition-colors cursor-pointer group hover:bg-yellow-600/15">
            <span className="text-yellow-600 group-hover:scale-110 transition-transform">
              👥
            </span>
            <span className="text-sm font-medium text-gray-800">
              Desert Pioneers
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
            Meet Our{" "}
            <span className="text-yellow-600 relative inline-block">
              Visionary Team
            </span>
            <span className="inline-block ml-2 animate-pulse text-yellow-600">
              👥
            </span>
          </h2>

          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            United by a shared vision of sustainable innovation, our team
            combines scientific excellence with deep respect for Sahara heritage
            and camel skin biotechnology.
          </p>

          {/* Scroll Indicator */}
          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
            <span>Scroll to explore</span>
            <div className="animate-bounce">→</div>
          </div>
        </div>

        {/* Scrollable Team Cards Container */}
        <div className="relative">
          {/* Gradient Overlays for Scroll Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group flex-none w-80 animate-slideIn"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "both",
                }}
              >
                <div className="bg-white rounded-xl border border-yellow-600/20 hover:border-yellow-600/40 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-600/10 overflow-hidden hover:scale-[1.02] h-full">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-3 h-3 bg-yellow-600 rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-2 group-hover:text-yellow-600 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-yellow-600 font-medium mb-3 text-sm">
                      {member.position}
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-600/10 to-yellow-700/10 border border-yellow-600/30 rounded-xl p-8 hover:border-yellow-600/50 transition-all">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Join Our <span className="text-yellow-600">Mission</span>
            </h3>
            <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
              We&apos;re always looking for passionate individuals who share our
              vision of sustainable biotechnology innovation and camel skin
              gelatin production.
            </p>

            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-600 rounded-full animate-pulse"></div>
                <span className="text-gray-600 text-sm">
                  Innovation Culture
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-600 rounded-full animate-pulse"></div>
                <span className="text-gray-600 text-sm">Global Impact</span>
              </div>
            </div>

            <button className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white px-8 py-4 rounded-xl hover:from-yellow-500 hover:to-yellow-600 transition-all hover:shadow-lg hover:shadow-yellow-600/20 active:scale-95 font-semibold">
              View Open Positions →
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default PricingSection;
