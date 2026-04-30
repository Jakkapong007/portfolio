export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-900 bg-black py-8 px-4">
      <div className="container-max flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
        <p className="font-mono">
          &copy; {year}{' '}
          <span className="gradient-text font-semibold">Jakkapong Karndee</span>
        </p>
        <p className="font-mono text-xs">
          Built with Next.js &middot; Deployed on GitHub Pages
        </p>
      </div>
    </footer>
  )
}
