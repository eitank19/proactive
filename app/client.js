import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "tyctpli3",
  dataset: "production",
  apiVersion: "2024-03-17",
  useCdn: true,
});
