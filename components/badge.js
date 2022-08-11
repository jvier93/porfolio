export default function Badge({ text }) {
  return (
    <p className="w-fit whitespace-nowrap rounded-full bg-darkpurple pr-2 pl-2  text-xs text-white">
      {text}
    </p>
  );
}
