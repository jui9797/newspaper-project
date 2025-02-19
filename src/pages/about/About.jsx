

const About = () => {
  return (
    <div className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text min-h-screen py-12 px-6 md:px-12 lg:px-24 lora">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">About Trendify</h1>
        <p className="mt-4 text-gray-800 dark:text-dark-secondary max-w-2xl mx-auto">
          Trendify is your go-to newspaper aggregation platform, providing the latest news, insights, and articles in one place.
        </p>
      </header>

      {/* Section 1: About Trendify */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What is Trendify?</h2>
        <p className="text-lg text-gray-800 dark:text-dark-secondary leading-relaxed">
          Trendify is a full-stack newspaper aggregation platform that collects, organizes, and presents trending articles from various sources.
          Whether your looking to stay updated with the latest news or publish your own articles, Trendify offers a seamless experience.
        </p>
      </section>

      {/* Section 2: Our Mission */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-800 dark:text-dark-secondary leading-relaxed">
          Our mission is to create a centralized hub for news enthusiasts, journalists, and content creators. 
          We aim to provide verified, high-quality, and diverse news while ensuring a user-friendly experience with secure access for both readers and contributors.
        </p>
      </section>

      {/* Section 3: Why Choose Us */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Trendify?</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg text-gray-800 dark:text-dark-secondary">
          <li>🔹 Aggregates news from multiple verified sources.</li>
          <li>🔹 Allows users to publish and manage their own articles.</li>
          <li>🔹 Provides premium content for subscribed users.</li>
          <li>🔹 Ensures a seamless and responsive user experience.</li>
          <li>🔹 Offers admin controls for moderation and quality assurance.</li>
        </ul>
      </section>

     
      
    </div>
  );
};

export default About;