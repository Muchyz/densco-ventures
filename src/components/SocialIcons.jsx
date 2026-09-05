export function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" style={{ isolation: "isolate" }} {...props}>
      <path fill="#1877F2" d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.25h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z"/>
    </svg>
  );
}

export function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 32 32" width="22" height="22" {...props}>
      <path
        fill="#25D366"
        d="M16.004 0C7.164 0 0 7.163 0 16c0 2.82.738 5.566 2.14 7.984L0 32l8.2-2.15A15.9 15.9 0 0016.004 32C24.84 32 32 24.836 32 16S24.84 0 16.004 0z"
      />
      <path
        fill="#fff"
        d="M23.47 18.38c-.4-.2-2.35-1.16-2.71-1.29-.36-.13-.63-.2-.9.2-.26.4-1.02 1.29-1.25 1.55-.23.26-.46.29-.86.1-.4-.2-1.69-.62-3.22-1.99-1.19-1.06-1.99-2.37-2.22-2.77-.23-.4-.02-.62.17-.82.18-.18.4-.46.6-.7.2-.23.26-.4.4-.66.13-.26.06-.5-.03-.7-.1-.2-.9-2.17-1.23-2.97-.32-.77-.65-.66-.9-.68l-.77-.01c-.26 0-.7.1-1.06.5-.36.4-1.4 1.36-1.4 3.33 0 1.96 1.44 3.86 1.63 4.13.2.26 2.83 4.32 6.86 6.06.96.41 1.7.66 2.29.85.96.3 1.83.26 2.52.16.77-.11 2.35-.96 2.68-1.89.33-.93.33-1.72.23-1.89-.1-.16-.36-.26-.76-.46z"
      />
    </svg>
  );
}

export function TikTokIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" style={{ isolation: "isolate" }} {...props}>
      <path fill="#000000" d="M16.6 5.82a4.28 4.28 0 01-3.02-1.36V15.5a5.65 5.65 0 11-4.87-5.6v2.5a3.15 3.15 0 103.15 3.15V0h2.6a4.28 4.28 0 004.28 4.28v2.5a6.75 6.75 0 01-2.14-.96z"/>
      <path fill="#25F4EE" d="M15.5 4.46a4.28 4.28 0 003.28 1.36V3.32A4.28 4.28 0 0115.5 0h-.9v4.46z" opacity=".85"/>
      <path fill="#FE2C55" d="M8.24 21.94a5.65 5.65 0 004.34-9.28V2.5h-2.6v10.16a3.15 3.15 0 11-1.74-.44v-2.5a5.65 5.65 0 000 12.22z" opacity=".85"/>
    </svg>
  );
}

export function InstagramIcon(props) {
  const id = 'ig-grad';
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" style={{ isolation: "isolate" }} {...props}>
      <defs>
        <radialGradient id={id} cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5" fill={`url(#${id})`} />
      <rect x="6.2" y="6.2" width="11.6" height="11.6" rx="3.4" fill="none" stroke="#fff" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.1" fill="none" stroke="#fff" strokeWidth="1.6" />
      <circle cx="17" cy="7" r="1.1" fill="#fff" />
    </svg>
  );
}
