import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
  data: BillboardType;
}

const Billboard = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div className="bg-[url('https://res.cloudinary.com/dv9uhlkaq/image/upload/v1690414507/j1ivxe1deiru25po3rwy.jpg')] rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            EVERYTHING 20% OFF
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
