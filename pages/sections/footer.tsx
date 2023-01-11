export default function Footer() {
  const dateToday = new Date();
  return (
    <div className="w-full justify-center fixed bg-gray-100  bottom-0">
      <h3 className="mx-auto m-6 w-full text-center">
        {`titusdishon@${dateToday.getFullYear()}`}
      </h3>
    </div>
  );
}
