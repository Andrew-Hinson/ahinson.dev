export default function Footer() {
    return (
      <footer className="text-left w-full flex gap-4 flex-col mt-4 py-4 border-t-2 border-zinc-800 rounded-e-md">
        © {new Date().getFullYear()} Andrew Hinson
      </footer>
    );
  }
  