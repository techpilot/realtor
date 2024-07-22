const AgentCard = () => {
  return (
    <div className="bg-white shadow-md w-full md:w-[28rem] p-5 mt-3 lg:mt-0 rounded-md gap-1 flex flex-col">
      <p className="text-sm uppercase text-black">Listing Agent</p>
      <p className="text-lg font-semibold text-black">Tara Jones</p>
      <p className="text-xs text-gray-700 font-light">Opendoor Brokerage LLC</p>

      <p className="text-xl mt-[1rem] text-black">(720) 740-3402</p>
      <p className="p-3 rounded-md bg-gray-50 text-gray-700 font-light my-[0.5rem]">
        Hi Tara, I would like to know more about this listing.
      </p>
      <button className="bg-[#492433] text-sm p-3 w-full text-white rounded-md">
        <a
          href="https://wa.me/+2349160862314"
          target="_blank"
          className="underline-offset-0"
        >
          Send Message
        </a>
      </button>
    </div>
  );
};

export default AgentCard;
