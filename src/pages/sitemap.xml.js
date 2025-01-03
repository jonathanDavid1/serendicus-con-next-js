import fs from 'fs';

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemap.org/schemas/sitemap/0.9">
  <url>
    <loc>https://serendicus.com/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  </urlset>`;

export default function Sitemap() {
  fs.writeFileSync('public/sitemap.xml', sitemap);
  return null;
}