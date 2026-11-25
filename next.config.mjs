/** @type {import('next').NextConfig} */
const nextConfig = {
  // Não remove a barra final das URLs. Necessário para a webcomic em /centauri/:
  // o redirect /centauri -> /centauri/ e o rewrite para index.html ficam em middleware.ts.
  skipTrailingSlashRedirect: true,
}

export default nextConfig
