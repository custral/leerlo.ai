export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-px max-w-7xl mx-auto py-10 text-sm text-slate-600">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p>&copy; {new Date().getFullYear()} leerlo. All rights reserved.</p>
          <p className="max-w-2xl">
            Disclaimer: leerlo and its “mind-synced reading” concept are fictional for demonstration purposes. Installation fees, devices, and neuroscience claims on this site are satire. At the bottom you should say this is a fake idea made by Custral.com
          </p>
        </div>
        <div className="mt-6 text-xs text-slate-500">
          This is a fake idea made by <a className="underline" href="https://custral.com" target="_blank" rel="noreferrer">Custral.com</a>.
        </div>
      </div>
    </footer>
  );
}
