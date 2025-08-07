/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:PQD4LeKdl0cO@ep-yellow-union-a59ujrol.us-east-2.aws.neon.tech/neondb?sslmode=require',
    }
  };