import Image from "next/image";
import { getJsonData } from "@/app/utils/getJsonData";

export default function Home() {
  const diaryData = getJsonData('src/app/datas/1715262705.json');
  return (
      <div className="container mx-auto px-4 pt-10">
          <div className="text-lg sm:text-left">
              <div className="flex flex-row justify-start items-center">
                  <div className="pr-2">
                      <Image
                          className={"rounded-full aspect-square object-cover"}
                          src="/profile.jpg"
                          alt={"github profile"}
                          width={28}
                          height={28}
                          priority
                      ></Image>
                  </div>
              Stephano: Success depends on attitude.
              </div>
          </div>

          <div className={"flex flex-row justify-start items-center pt-10"}>

          </div>
          {/*
              Reference site : https://stackoverflow.com/questions/70317603/nextjs-ssr-getting-next-data-json-requst

              must apart from app folder
          */}

          <div className={"text-lg sm:text-left"}>
              {diaryData.title}
          </div>
      </div>
  );
}

