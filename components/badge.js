export default function Badge({ text }) {
  return (
    <p className="w-fit whitespace-nowrap rounded-full bg-darkpurple px-2 text-sm  text-white">
      {text}
    </p>
  );
}
