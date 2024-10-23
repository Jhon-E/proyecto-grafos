export const Loader = ({ text }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <span className="loading loading-spinner text-neutral loading-lg"></span>
      <p>{text}</p>
    </div>
  );
};
