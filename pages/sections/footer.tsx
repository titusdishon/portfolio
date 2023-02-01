export default function Footer() {
  const dateToday = new Date();
  return (
    <div className="flex w-full items-center space-x-4  bg-gray-100 h-16 pl-1 text-center bottom-0 container fixed">
      {`titusdishon@${dateToday.getFullYear()}`}
    </div>
  );
}
