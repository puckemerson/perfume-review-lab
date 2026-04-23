// Per-directory data for /src/listicles/*.md
export default {
  layout: "listicle.njk",
  permalink: "/listicles/{{ slug or page.fileSlug }}/",
  tags: ["listicle"],
};
