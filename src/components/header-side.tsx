interface HeaderSideProps {
  title: string;
  textContent: string[];
}

export function HeaderSide({ title, textContent }: HeaderSideProps) {
  return (
    <div className="w-full h-full flex justify-center mb-10 grow">
      <div className="flex flex-col justify-center gap-5 w-[100%] text-left items-start">
        <h1>{title}</h1>
        <div id="text-content" className=" flex flex-col gap-4 ">
          {textContent.map((paragraph, index) => (
            <h5 key={index}>{paragraph}</h5>
          ))}
        </div>
      </div>
    </div>
  );
}
