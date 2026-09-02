export function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" style={{ isolation: "isolate" }} {...props}>
      <path fill="#1877F2" d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.25h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z"/>
    </svg>
  );
}

export function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" {...props}>
      <circle cx="12" cy="12" r="12" fill="#25D366" />
      <path
        fill="#ffffff"
        d="M17.47 14.38c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.65.15-.19.29-.74.93-.91 1.12-.17.19-.34.21-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.44.13-.59.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.9-2.15-.24-.57-.48-.49-.65-.5h-.55c-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.44 0 1.44 1.04 2.83 1.19 3.02.15.19 2.06 3.14 4.99 4.4.7.3 1.24.48 1.66.62.7.22 1.34.19 1.84.12.56-.08 1.7-.7 1.94-1.37.24-.67.24-1.24.17-1.37-.07-.12-.26-.19-.55-.34z"
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
