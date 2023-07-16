export default function Menu() {
  const links = [
    { title: "Convert", url: "/convert" },
    { title: "About", url: "/about" },
  ];
  return (
    <div class="py-4 px-8 flex justify-between">
      <a href="/">
        <h3 class="uppercase font-bold">Bionic Reading</h3>
      </a>
      <div class="flex gap-4">
        {links.map((link) => (
          <a href={link.url} class="inline-block px-3 hover:underline">
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
}
