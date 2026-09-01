const today = new Date().toISOString().split("T")[0];
const courseParams = new URLSearchParams({
  filters: JSON.stringify([
    ["published", "=", 1],
  ]),
  fields: JSON.stringify([
    "name",
  ]),
});
const courseResponse = await fetch(
    `https://learn.techvision.edu.et/api/resource/LMS%20Course?${courseParams}`,
  {
    headers: {
      Authorization: `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
    },
    next: {
      revalidate: 60,
    },
  }
);
const batches = await courseResponse.json();