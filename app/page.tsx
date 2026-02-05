import { SiteHeader } from "@/components/site-header"
import { GuideEntry } from "@/components/guide-entry"
import { NoticeBlock } from "@/components/notice-block"
import { SiteFooter } from "@/components/site-footer"

const entries = [
  {
    title: "VPN (Virtual Private Network)",
    description:
      "A VPN encrypts your internet traffic and routes it through a server in another country, making it appear as though you are browsing from that location. This is the most common and straightforward method to bypass restrictions.",
    details: [
      "Download a trusted VPN client (e.g. Mullvad, ProtonVPN, Windscribe)",
      "Some VPN websites may be blocked — use mirror links or download via Telegram",
      "Enable the kill-switch feature to prevent data leaks if the VPN disconnects",
      "Use obfuscation or stealth protocols (WireGuard, Shadowsocks) to avoid deep packet inspection",
    ],
    imageSrc: "/screenshots/vpn-setup.jpg",
    imageAlt: "VPN client interface showing server list and connection status",
  },
  {
    title: "DNS-over-HTTPS / DNS-over-TLS",
    description:
      "Changing your DNS settings can help bypass basic domain-level blocks. DNS-over-HTTPS (DoH) or DNS-over-TLS (DoT) encrypt your DNS queries, preventing ISPs from seeing which domains you are requesting.",
    details: [
      "Set your DNS to 1.1.1.1 (Cloudflare) or 8.8.8.8 (Google) in your network settings",
      "Enable DNS-over-HTTPS in your browser settings (Firefox: Settings > Privacy & Security)",
      "On Android, use Private DNS setting with dns.google or one.one.one.one",
      "This method only bypasses DNS-based blocks, not IP-based ones",
    ],
    imageSrc: "/screenshots/dns-config.jpg",
    imageAlt: "Network settings panel showing DNS server configuration",
  },
  {
    title: "Proxy & Browser Extensions",
    description:
      "Proxy servers act as intermediaries between you and the internet. Browser extensions make it easy to route your traffic through a proxy with a single click, without configuring your entire system.",
    details: [
      "Install a proxy extension for your browser (e.g. FoxyProxy, Browsec)",
      "SOCKS5 proxies provide better security than HTTP proxies",
      "Self-hosted proxies (Shadowsocks, V2Ray, XRay) are harder to detect and block",
      "Be cautious with free proxy services — they may log your traffic",
    ],
    imageSrc: "/screenshots/proxy-browser.jpg",
    imageAlt: "Browser extension popup showing proxy configuration options",
  },
  {
    title: "Tor Browser",
    description:
      "Tor routes your traffic through multiple relays around the world, making it extremely difficult to trace. It provides strong anonymity but at the cost of speed. Useful for accessing heavily restricted content.",
    details: [
      "Download Tor Browser from torproject.org (use a mirror if blocked)",
      "If Tor is blocked, use bridges — special entry points not listed publicly",
      "Request bridges via email: bridges@torproject.org or through Telegram bot @GetBridgesBot",
      "Do not use Tor for logging into personal accounts — it can compromise anonymity",
    ],
    imageSrc: "/screenshots/tor-browser.jpg",
    imageAlt: "Tor Browser welcome page with connection interface",
  },
]

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-3xl px-4">
      <SiteHeader />

      <main className="py-8">
        <NoticeBlock title="// IMPORTANT">
          All information provided here is for educational purposes only. Always
          be aware of local laws and regulations. Use these tools responsibly to
          protect your privacy and access information freely.
        </NoticeBlock>

        <section className="mt-8">
          <h2 className="mb-2 text-lg font-bold text-foreground">
            {"// METHODS"}
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Below is a collection of methods to bypass internet restrictions.
            Each entry includes a screenshot and step-by-step details.
          </p>

          <div>
            {entries.map((entry, i) => (
              <GuideEntry
                key={entry.title}
                title={entry.title}
                description={entry.description}
                details={entry.details}
                imageSrc={entry.imageSrc}
                imageAlt={entry.imageAlt}
                index={i + 1}
              />
            ))}
          </div>
        </section>

        <section className="mt-8 border-t border-border pt-8">
          <h2 className="mb-4 text-lg font-bold text-foreground">
            {"// ADDITIONAL NOTES"}
          </h2>
          <div className="flex flex-col gap-4">
            <NoticeBlock title="Adding New Entries">
              To add a new bypass method, place a screenshot in the{" "}
              <span className="text-primary">/screenshots/</span> folder and add
              a new entry object to the entries array in{" "}
              <span className="text-primary">app/page.tsx</span> following the
              existing format.
            </NoticeBlock>
            <NoticeBlock title="Security Reminder">
              Always verify the authenticity of any software you download.
              Prefer open-source tools with audited code. Never trust a tool
              that asks for unnecessary permissions or personal information.
            </NoticeBlock>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
