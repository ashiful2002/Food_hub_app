const Page = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-8">
      <h1 className="text-3xl font-bold text-center">
        About FoodHub
      </h1>

      <p className="text-lg text-gray-600 text-center">
        FoodHub is a full-stack meal ordering platform where customers can
        explore meals, place orders, and track deliveries, while providers
        and admins manage the system through dedicated dashboards.
      </p>

      {/* Project Overview */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Project Overview</h2>
        <p className="text-gray-600 leading-relaxed">
          This project is built as part of my portfolio to demonstrate
          real-world full-stack development skills. It includes a modern
          frontend application integrated with a robust backend API,
          following clean architecture and scalable design patterns.
        </p>
      </section>

      {/* Key Features */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Key Features</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Browse meals with filtering and detailed views</li>
          <li>JWT-based authentication with role-based access control</li>
          <li>Cart and checkout system</li>
          <li>Order tracking and history</li>
          <li>Provider dashboard for managing meals and orders</li>
          <li>Admin panel for managing users, orders, and categories</li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Tech Stack</h2>
        <div className="space-y-2 text-gray-600">
          <p>
            <strong>Frontend:</strong> React / Next.js, Tailwind CSS, Axios,
            Context API / Redux
          </p>
          <p>
            <strong>Backend:</strong> Node.js, Express.js, TypeScript
          </p>
          <p>
            <strong>Database:</strong> PostgreSQL with Prisma ORM
          </p>
        </div>
      </section>

      {/* Backend Architecture */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Backend Architecture</h2>
        <p className="text-gray-600 leading-relaxed">
          The backend is built using Express.js with TypeScript, ensuring
          type safety and maintainability. Prisma ORM is used for efficient
          database management with PostgreSQL. The system follows a modular
          architecture with separate layers for controllers, services, and
          database access.
        </p>
        <ul className="list-disc pl-6 text-gray-600 mt-3 space-y-2">
          <li>RESTful API design</li>
          <li>Centralized error handling</li>
          <li>Authentication using JWT</li>
          <li>Role-based authorization (Admin, Provider, Customer)</li>
          <li>Reusable service layer and clean code practices</li>
        </ul>
      </section>

      {/* Purpose */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Purpose</h2>
        <p className="text-gray-600 leading-relaxed">
          The goal of this project is to showcase my ability to design and
          build scalable full-stack applications, handle real-world business
          logic, and implement secure authentication and role-based systems.
        </p>
      </section>

      {/* Developer Note */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Developer Note</h2>
        <p className="text-gray-600 leading-relaxed">
          I built this project to strengthen my backend-focused development
          skills while maintaining a clean and responsive frontend. It reflects
          my understanding of API design, database modeling, and scalable
          architecture using modern technologies like TypeScript, Prisma, and
          PostgreSQL.
        </p>
      </section>
    </div>
  );
};

export default Page;