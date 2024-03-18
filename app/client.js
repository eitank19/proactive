import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "x8fc781k",
  dataset: "production",
  apiVersion: "2024-03-17",
  useCdn: true,
});
