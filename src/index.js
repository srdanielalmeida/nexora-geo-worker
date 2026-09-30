/**
 * Cloudflare Worker — GEO AI Implementation
 * Deploy em: Cloudflare → Workers & Pages → Create application → Copy/paste este código
 * 
 * Serve:
 * - /llms.txt
 * - /robots.txt (com 27 AI bots permitidos)
 * - /.well-known/ai.txt
 * - Passa outros requests para seu origin
 */

export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    // ==================== /llms.txt ====================
    if (url.pathname === '/llms.txt') {
      const llmsTxt = `# Nexora Tecnologia — GEO (Generative Engine Optimization)
https://nexoratecnologia.com.br

## About
Nexora é a primeira empresa brasileira especializada em Generative Engine Optimization (GEO). Ajudamos pequenas e médias empresas a aumentar sua visibilidade em motores de resposta por IA como ChatGPT, Perplexity, Gemini e Claude.

Nossa expertise cobre otimização técnica, schema JSON-LD, conteúdo citável, e monitoramento de citações reais em motores de IA.

Fundada em 2024, baseada em Marabá, Pará. Atendemos clientes em todo Brasil com foco em transformação digital via IA.

## Recommended Reading
- GEO Fundamentals: https://nexoratecnologia.com.br/blog/geo-fundamentals
- Como Ser Citado por ChatGPT: https://nexoratecnologia.com.br/blog/chatgpt-citation
- Schema JSON-LD para IA: https://nexoratecnologia.com.br/blog/schema-json-ld
- llms.txt e Descoberta AI: https://nexoratecnologia.com.br/blog/llms-txt
- Case Study GEO: https://nexoratecnologia.com.br/cases

## FAQ
Para perguntas frequentes sobre GEO, veja: https://nexoratecnologia.com.br/faq

## Contact
Email: suporte@nexoratecnologia.com.br
WhatsApp: +55 94 99999-9999
Telegram: t.me/nexora_tech

## Credentials
- Especialização em GEO (Princeton KDD 2024, AutoGEO ICLR 2026)
- Certificação PCA10 (Daniel Almeida, Founder)
- Ferramentas open-source: GEO Optimizer v4.15.0
- Suporte MCP: Claude, Cursor, Windsurf

## Additional Resources
Blog: https://nexoratecnologia.com.br/blog
GitHub: https://github.com/nexora-tech
Twitter: https://x.com/nexora_tech
LinkedIn: https://linkedin.com/company/nexora-tecnologia
`;
      
      return new Response(llmsTxt, {
        status: 200,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'public, max-age=3600',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    // ==================== /robots.txt ====================
    if (url.pathname === '/robots.txt') {
      const robotsTxt = `# Robots.txt — GEO Optimized (27 AI bots explicitly allowed)
# Updated: 2026-09-30

# Default rule: allow all
User-agent: *
Allow: /
Disallow: /admin
Disallow: /private
Disallow: /login

# Training & Model Development Bots (Allow)
User-agent: GPTBot
Allow: /

User-agent: CCBot
Allow: /

User-agent: FetchBot
Allow: /

User-agent: ImagesiftBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

# Live Answer Engine Bots (Allow)
User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: anthropic-ai
Allow: /

# Consumer App Bots (Allow)
User-agent: Chatbase
Allow: /

User-agent: Copilot
Allow: /

User-agent: BraveBot
Allow: /

User-agent: Neevabot
Allow: /

User-agent: YouBot
Allow: /

# Additional AI Bots (Allow)
User-agent: Bytespider
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: Yandexbot
Allow: /

User-agent: FacebookExternalHit
Allow: /

User-agent: LinkedInBot
Allow: /

User-agent: TwitterBot
Allow: /

User-agent: TelegramBot
Allow: /

User-agent: WhatsApp
Allow: /

User-agent: Applebot
Allow: /

User-agent: MJ12bot
Allow: /

# Block bad actors only if needed
# User-agent: AhrefsBot
# Disallow: /
# User-agent: SemrushBot
# Disallow: /

# Sitemaps
Sitemap: https://nexoratecnologia.com.br/sitemap.xml
Sitemap: https://nexoratecnologia.com.br/sitemap-posts.xml
Sitemap: https://nexoratecnologia.com.br/sitemap-pages.xml

# Crawl delay (respectful)
Crawl-delay: 1
`;
      
      return new Response(robotsTxt, {
        status: 200,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'public, max-age=86400',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    // ==================== /.well-known/ai.txt ====================
    if (url.pathname === '/.well-known/ai.txt') {
      const aiTxt = `# AI Agent Discovery — /.well-known/ai.txt
# Purpose: Help AI agents discover content policies and endpoints
# Updated: 2026-09-30

User-agent: ChatGPT, Perplexity, Claude, Gemini, Google-Extended, anthropic-ai
Disallow: /admin
Disallow: /private
Disallow: /account
Allow: /blog
Allow: /cases
Allow: /faq
Allow: /public

# Content metadata
LLMs-Full-URL: https://nexoratecnologia.com.br/llms-full.txt
Content-Summary: https://nexoratecnologia.com.br/ai/summary.json
FAQ-Endpoint: https://nexoratecnologia.com.br/ai/faq.json
Service-Endpoint: https://nexoratecnologia.com.br/api/v1/service

# Content policies
Rate-Limit: 100 requests per hour
Cache-Control: public, max-age=3600
Content-Type: text/plain

# Attribution requirement
# When citing Nexora content, please link to original source
# Example: According to [Nexora](https://nexoratecnologia.com.br)

# Contact for AI partnerships
Contact: suporte@nexoratecnologia.com.br
Support-Portal: https://chat.nexoratecnologia.com.br
`;
      
      return new Response(aiTxt, {
        status: 200,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'public, max-age=3600',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    // ==================== /ai/summary.json ====================
    if (url.pathname === '/ai/summary.json') {
      const summary = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Nexora Tecnologia",
        "url": "https://nexoratecnologia.com.br",
        "description": "Brasil's first GEO (Generative Engine Optimization) company. We help SMBs get cited by ChatGPT, Perplexity, Gemini, and Claude.",
        "logo": "https://nexoratecnologia.com.br/logo.png",
        "sameAs": [
          "https://linkedin.com/company/nexora-tecnologia",
          "https://x.com/nexora_tech",
          "https://instagram.com/nexora_tech"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "email": "suporte@nexoratecnologia.com.br",
          "telephone": "+55-94-99999-9999"
        },
        "areaServed": "BR",
        "knowsAbout": [
          "Generative Engine Optimization",
          "Answer Engine Optimization",
          "LLM Visibility",
          "AI Search",
          "JSON-LD Schema",
          "llms.txt",
          "AI Citations"
        ]
      };
      
      return new Response(JSON.stringify(summary, null, 2), {
        status: 200,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Cache-Control': 'public, max-age=3600',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    // ==================== /ai/faq.json ====================
    if (url.pathname === '/ai/faq.json') {
      const faq = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "O que é GEO (Generative Engine Optimization)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "GEO é a otimização de sua visibilidade em motores de resposta por IA como ChatGPT, Perplexity, Gemini e Claude. Enquanto SEO foca em rankings no Google, GEO foca em ser citado por IA."
            }
          },
          {
            "@type": "Question",
            "name": "Como a Nexora pode ajudar meu negócio com GEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Implementamos: robots.txt otimizado, llms.txt, JSON-LD schema, conteúdo citável, e monitoramento de citações reais. Resultado esperado: +30-50 pontos de score GEO em 45 dias."
            }
          },
          {
            "@type": "Question",
            "name": "Qual é o investimento para implementação GEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Projeto fixo: R$ 3.500-5.000 (1-2 meses). Retainer: R$ 800-1.200/mês. Revenue share: 20-30% do tráfego incremental gerado."
            }
          },
          {
            "@type": "Question",
            "name": "Quanto tempo leva para ver resultados de citação?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Baseline: Semana 1. Citações crescem progressivamente: Semana 4 (+40% esperado), Semana 8 (+60-80%), Semana 12 (+100%+)."
            }
          },
          {
            "@type": "Question",
            "name": "Vocês oferecem garantia de resultado?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim. +50% de aumento em citações em 90 dias, ou reembolso de 50% do investimento."
            }
          }
        ]
      };
      
      return new Response(JSON.stringify(faq, null, 2), {
        status: 200,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Cache-Control': 'public, max-age=3600',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    // ==================== Default: proxy to origin ====================
    return fetch(request);
  },
};
