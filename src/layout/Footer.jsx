export default function Footer() {
  return (
    <footer className="bg-gray-50 flex flex-col items-center py-10 mt-10">
      <div className="flex flex-col md:flex-row justify-between w-full max-w-7xl px-10 gap-8">
        {/* Footer içeriklerini Figma'dan buraya flex kolonları şeklinde ekleyebilirsin */}
        <div className="flex flex-col gap-4">
          <h5 className="font-bold">Company Info</h5>
          <a href="#" className="text-sm text-gray-500">About Us</a>
          <a href="#" className="text-sm text-gray-500">Carrier</a>
        </div>
      </div>
    </footer>
  );
}